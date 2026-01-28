/**
 * Parse ProductCatalog.md and migrate ALL products to Firestore
 * This script parses the markdown table format and preserves all product descriptions
 */

import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

// Initialize Firebase Admin
admin.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
});

const db = admin.firestore();

// Category mapping based on sections in ProductCatalog.md
const categoryMap: Record<string, string> = {
    'Fire Pits, Heaters & Grills': 'hearth',
    'Outdoor Kitchens & Pizza Ovens': 'hearth',
    'Generators & Power': 'glow',
    'Furniture - Dining Sets': 'shelter',
    'Furniture - Lounge & Seating': 'shelter',
    'Saunas & Spas': 'shelter',
    'Shade Structures & Gazebos': 'shelter',
    'Lighting': 'glow',
    'Storage & Organization': 'shelter',
    'Rugs & Decor': 'shelter',
    'Lawn Mowers & Equipment': 'glow',
    'Smart Irrigation': 'glow',
    'Lawn Games': 'shelter',
    'Privacy Screens': 'shelter',
};

interface Product {
    id: string;
    name: string;
    description: string;
    priceTier: string;
    affiliateLink: string;
    category: string;
    brand?: string;
    features?: string[];
}

function generateProductId(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function extractBrand(name: string): string {
    // Extract brand from product name (first word or two typically)
    const brandMatches = name.match(/^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
    return brandMatches ? brandMatches[1] : 'Generic';
}

function parseMarkdownTable(catalogContent: string): Product[] {
    const products: Product[] = [];
    const lines = catalogContent.split('\n');

    let currentCategory = '';
    let inTable = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Detect category headers (## emoji Category Name)
        if (line.match(/^##\s+[🔥🍕⚡🪑🛋️🧖⛩️💡🏠🤖🌱�🎯🌿]/)) {
            const categoryName = line.replace(/^##\s+[^\s]+\s+/, '').trim();
            currentCategory = categoryMap[categoryName] || 'shelter';
            inTable = false;
        }

        // Detect table rows (starts with |, but not header or separator)
        if (line.startsWith('|') && !line.includes('Product |') && !line.includes('---|')) {
            const columns = line.split('|').map(c => c.trim()).filter(c => c);

            if (columns.length >= 4) {
                const [name, description, priceTier, link] = columns;

                // Skip if it's a header row or empty
                if (!name || name === 'Product' || !link.includes('http')) continue;

                // Clean up name (remove bold markers)
                const cleanName = name.replace(/\*\*/g, '').trim();
                if (!cleanName) continue;

                // Clean up description (remove HTML and extra whitespace)
                const cleanDescription = description
                    .replace(/<br\s*\/?>/g, ' ')
                    .replace(/\s+/g, ' ')
                    .trim();

                // Extract features from description (bullet points or numbered lists)
                const features: string[] = [];
                const featureMatches = cleanDescription.match(/【[^】]+】/g);
                if (featureMatches) {
                    features.push(...featureMatches.map(f => f.replace(/【|】/g, '')));
                }

                products.push({
                    id: generateProductId(cleanName),
                    name: cleanName,
                    description: cleanDescription,
                    priceTier: priceTier.trim(),
                    affiliateLink: link.trim(),
                    category: currentCategory || 'shelter',
                    brand: extractBrand(cleanName),
                    features: features.length > 0 ? features : undefined,
                });
            }
        }
    }

    return products;
}

async function migrateAllProducts() {
    console.log('🚀 Starting FULL migration from ProductCatalog.md...\n');

    // Read ProductCatalog.md
    const catalogPath = path.join(process.cwd(), '..', 'ProductCatalog.md');
    const catalogContent = fs.readFileSync(catalogPath, 'utf-8');

    // Parse all products
    const products = parseMarkdownTable(catalogContent);

    console.log(`Found ${products.length} products in ProductCatalog.md\n`);

    let successCount = 0;
    let errorCount = 0;
    const errors: Array<{ id: string; error: any }> = [];

    // Use batch writes
    const batchSize = 500;
    let batch = db.batch();
    let operationCount = 0;

    for (const product of products) {
        try {
            const productRef = db.collection('products').doc(product.id);

            const productData: any = {
                id: product.id,
                name: product.name,
                brand: product.brand || 'Generic',
                category: product.category,
                affiliateLink: product.affiliateLink,
                priceTier: product.priceTier,
                description: product.description,
                published: true,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                sortOrder: successCount,
            };

            // Add features if available
            if (product.features && product.features.length > 0) {
                productData.features = product.features;
            }

            batch.set(productRef, productData);
            operationCount++;

            if (operationCount >= batchSize) {
                await batch.commit();
                console.log(`✅ Committed batch of ${operationCount} products`);
                batch = db.batch();
                operationCount = 0;
            }

            successCount++;
            console.log(`✅ Queued: ${product.name} (${product.id})`);
        } catch (error: any) {
            errorCount++;
            errors.push({ id: product.id, error });
            console.error(`❌ Error with ${product.id}:`, error.message || error);
        }
    }

    // Commit remaining
    if (operationCount > 0) {
        await batch.commit();
        console.log(`✅ Committed final batch of ${operationCount} products`);
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Migration Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully migrated: ${successCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log(`📈 Success rate: ${((successCount / products.length) * 100).toFixed(1)}%`);

    console.log('\n✨ Migration complete!');
    console.log('All product descriptions and details preserved from ProductCatalog.md');
}

migrateAllProducts()
    .then(() => {
        console.log('\n🎉 All done!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n💥 Migration failed:', error);
        process.exit(1);
    });
