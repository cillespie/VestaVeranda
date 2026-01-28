/**
 * Update Firestore products collection with affiliate links from ProductCatalog.md
 * 
 * Usage: npx tsx scripts/update-affiliate-links.ts
 */

import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import fs from 'fs';
import path from 'path';

// Parse ProductCatalog.md to extract affiliate links
function parseProductCatalog(): Map<string, string> {
    const catalogPath = path.join(__dirname, '../../ProductCatalog.md');
    const content = fs.readFileSync(catalogPath, 'utf-8');

    const affiliateLinks = new Map<string, string>();

    // Match table rows with product name and link
    // Format: | **Product Name** | Description | Price | Link |
    const lines = content.split('\n');

    for (const line of lines) {
        const match = line.match(/\|\s*\*\*([^*]+)\*\*\s*\|[^|]+\|[^|]+\|\s*(https:\/\/amzn\.to\/[^\s|]+)/);
        if (match) {
            const productName = match[1].trim();
            const link = match[2].trim();
            affiliateLinks.set(productName, link);
            console.log(`Found: ${productName} -> ${link}`);
        }
    }

    return affiliateLinks;
}

// Match product name to catalog name (fuzzy matching)
function findMatchingLink(productName: string, catalogLinks: Map<string, string>): string | null {
    // Try exact match first
    if (catalogLinks.has(productName)) {
        return catalogLinks.get(productName)!;
    }

    // Try partial matches
    for (const [catalogName, link] of catalogLinks.entries()) {
        if (productName.toLowerCase().includes(catalogName.toLowerCase()) ||
            catalogName.toLowerCase().includes(productName.toLowerCase())) {
            return link;
        }
    }

    return null;
}

async function updateAffiliateLinks() {
    console.log('🔗 Starting affiliate link update...\n');

    // Parse the catalog
    const catalogLinks = parseProductCatalog();
    console.log(`\n📚 Found ${catalogLinks.size} products in catalog\n`);

    // Get all products from Firestore
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);

    console.log(`📦 Found ${snapshot.size} products in Firestore\n`);

    let updatedCount = 0;
    let skippedCount = 0;
    let notFoundCount = 0;

    for (const docSnapshot of snapshot.docs) {
        const product = docSnapshot.data();
        const productId = docSnapshot.id;
        const productName = product.name;

        // Find matching affiliate link
        const affiliateLink = findMatchingLink(productName, catalogLinks);

        if (affiliateLink) {
            if (product.affiliateLink !== affiliateLink) {
                // Update the product
                await updateDoc(doc(db, 'products', productId), {
                    affiliateLink: affiliateLink,
                    updatedAt: new Date().toISOString()
                });
                console.log(`✅ Updated: ${productName}`);
                console.log(`   Link: ${affiliateLink}\n`);
                updatedCount++;
            } else {
                console.log(`⏭️  Skipped (already correct): ${productName}\n`);
                skippedCount++;
            }
        } else {
            console.log(`❌ No match found for: ${productName}\n`);
            notFoundCount++;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Update Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Updated: ${updatedCount} products`);
    console.log(`⏭️  Skipped (already correct): ${skippedCount} products`);
    console.log(`❌ Not found in catalog: ${notFoundCount} products`);
    console.log('\n✨ Update complete!');
}

// Run the update
updateAffiliateLinks()
    .then(() => {
        console.log('\n🎉 All done!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n💥 Update failed:', error);
        process.exit(1);
    });
