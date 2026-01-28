/**
 * Migration Script: ProductCatalog.md → Firebase Firestore
 * 
 * This script reads the existing products from products.ts and uploads them to Firestore.
 * 
 * Usage:
 *   npx tsx scripts/migrate-to-firestore.ts
 * 
 * Prerequisites:
 *   1. Firestore must be enabled in Firebase Console
 *   2. .env.local must have Firebase credentials
 *   3. Install tsx: npm install -D tsx
 *   4. Temporarily set write rules to allow migration (or use Admin SDK)
 */

import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import { sampleProducts } from '../src/lib/products';

// Clean product data to remove undefined fields
function cleanProductData(product: any) {
    const cleanedData: any = {};

    for (const [key, value] of Object.entries(product)) {
        // Only include defined values
        if (value !== undefined && value !== null) {
            cleanedData[key] = value;
        }
    }

    return cleanedData;
}

async function migrateProducts() {
    console.log('🚀 Starting migration to Firestore...\n');
    console.log(`Found ${sampleProducts.length} products to migrate\n`);

    let successCount = 0;
    let errorCount = 0;
    const errors: Array<{ id: string; error: any }> = [];

    for (const product of sampleProducts) {
        try {
            // IMPORTANT: Using lowercase 'products' to match Firestore rules
            const productRef = doc(collection(db, 'products'), product.id);

            // Clean the product data to remove undefined fields
            const cleanedProduct = cleanProductData(product);

            await setDoc(productRef, {
                ...cleanedProduct,
                published: true,  // All existing products are published by default
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now(),
                sortOrder: successCount, // Set sortOrder based on current array order
            });

            successCount++;
            console.log(`✅ Migrated: ${product.name} (${product.id})`);
        } catch (error: any) {
            errorCount++;
            errors.push({ id: product.id, error });
            console.error(`❌ Error migrating ${product.id}:`, error.message || error);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Migration Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully migrated: ${successCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log(`📈 Success rate: ${((successCount / sampleProducts.length) * 100).toFixed(1)}%`);

    if (errors.length > 0) {
        console.log('\n❌ Errors:');
        errors.forEach(({ id, error }) => {
            console.log(`  - ${id}: ${error.message || error}`);
        });
    }

    console.log('\n✨ Migration complete!');
    console.log('Next steps:');
    console.log('  1. Verify products in Firebase Console → Firestore');
    console.log('  2. Set NEXT_PUBLIC_USE_FIRESTORE=true in .env.local');
    console.log('  3. Test the application');
}

// Run migration
migrateProducts()
    .then(() => {
        console.log('\n🎉 All done!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n💥 Migration failed:', error);
        process.exit(1);
    });
