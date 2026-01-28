/**
 * Update Firestore products collection with affiliate links from ProductCatalog.md
 * Uses Firebase Admin SDK
 * 
 * Usage: npx tsx scripts/update-affiliate-links-admin.ts
 */

import * as admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Initialize Firebase Admin
admin.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
});

const db = admin.firestore();

// Parse ProductCatalog.md to extract affiliate links
function parseProductCatalog(): Map<string, string> {
    const catalogPath = path.join(__dirname, '../../ProductCatalog.md');
    const content = fs.readFileSync(catalogPath, 'utf-8');

    const affiliateLinks = new Map<string, string>();

    // Match table rows with product name and link
    // Format: | **Product Name** | Description | Price | Link |
    const lines = content.split('\n');

    for (const line of lines) {
        const match = line.match(/\|\s*\*\*([^*]+)\*\*\s*\|[^|]+\|[^|]+\|\s*(https:\/\/[^\s|]+)/);
        if (match) {
            const productName = match[1].trim();
            const link = match[2].trim();
            affiliateLinks.set(productName, link);
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

    // Try partial matches - check if product name contains catalog name or vice versa
    for (const [catalogName, link] of catalogLinks.entries()) {
        const productLower = productName.toLowerCase();
        const catalogLower = catalogName.toLowerCase();

        // Remove common suffixes/prefixes for better matching
        const cleanProduct = productLower.replace(/\s+(set|table|chair|kit|system|pack)$/i, '');
        const cleanCatalog = catalogLower.replace(/\s+(set|table|chair|kit|system|pack)$/i, '');

        if (cleanProduct === cleanCatalog ||
            productLower.includes(catalogLower) ||
            catalogLower.includes(productLower)) {
            return link;
        }
    }

    return null;
}

async function updateAffiliateLinks() {
    console.log('🔗 Starting affiliate link update with Admin SDK...\n');

    // Parse the catalog
    const catalogLinks = parseProductCatalog();
    console.log(`📚 Found ${catalogLinks.size} products in ProductCatalog.md`);

    // Display all found links
    console.log('\nProducts found in catalog:');
    for (const [name, link] of catalogLinks.entries()) {
        console.log(`  - ${name}`);
    }
    console.log('');

    // Get all products from Firestore
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();

    console.log(`📦 Found ${snapshot.size} products in Firestore\n`);

    let updatedCount = 0;
    let skippedCount = 0;
    let notFoundCount = 0;
    const notFoundProducts: string[] = [];

    for (const doc of snapshot.docs) {
        const product = doc.data();
        const productId = doc.id;
        const productName = product.name;

        console.log(`\n🔍 Processing: ${productName}`);

        // Find matching affiliate link
        const affiliateLink = findMatchingLink(productName, catalogLinks);

        if (affiliateLink) {
            if (product.affiliateLink !== affiliateLink) {
                // Update the product
                await doc.ref.update({
                    affiliateLink: affiliateLink,
                    updatedAt: admin.firestore.FieldValue.serverTimestamp()
                });
                console.log(`   ✅ UPDATED with link: ${affiliateLink}`);
                updatedCount++;
            } else {
                console.log(`   ⏭️  Already has correct link: ${affiliateLink}`);
                skippedCount++;
            }
        } else {
            console.log(`   ❌ NO MATCH FOUND in catalog`);
            notFoundProducts.push(productName);
            notFoundCount++;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Update Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Updated: ${updatedCount} products`);
    console.log(`⏭️  Skipped (already correct): ${skippedCount} products`);
    console.log(`❌ Not found in catalog: ${notFoundCount} products`);

    if (notFoundProducts.length > 0) {
        console.log('\n⚠️  Products not found in ProductCatalog.md:');
        notFoundProducts.forEach(name => console.log(`  - ${name}`));
    }

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
