/**
 * Migration Script using Firebase Admin SDK
 * 
 * This uses the Firebase Admin SDK which bypasses security rules
 * and uses your Firebase CLI credentials.
 * 
 * Usage:
 *   npx tsx scripts/migrate-admin.ts
 */

import * as admin from 'firebase-admin';
import { sampleProducts } from '../src/lib/products-local';

// Initialize Firebase Admin with application default credentials
// This uses your Firebase CLI login credentials
admin.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
});

const db = admin.firestore();

async function migrateProducts() {
    console.log('🚀 Starting migration to Firestore using Admin SDK...\n');
    console.log(`Found ${sampleProducts.length} products to migrate\n`);

    let successCount = 0;
    let errorCount = 0;
    const errors: Array<{ id: string; error: any }> = [];

    // Use batch writes for better performance
    const batchSize = 500; // Firestore batch limit
    let batch = db.batch();
    let operationCount = 0;

    for (const product of sampleProducts) {
        try {
            const productRef = db.collection('products').doc(product.id);

            // Clean the product data
            const productData: any = {
                id: product.id,
                name: product.name,
                brand: product.brand,
                category: product.category,
                affiliateLink: product.affiliateLink,
                priceTier: product.priceTier,
                description: product.description,
                features: product.features,
                published: true,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                sortOrder: successCount,
            };

            // Add optional fields only if they exist
            if (product.badge) productData.badge = product.badge;
            if (product.ctaText) productData.ctaText = product.ctaText;
            if (product.lifestyleImage) productData.lifestyleImage = product.lifestyleImage;

            batch.set(productRef, productData);
            operationCount++;

            // Commit batch if we hit the limit
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

    // Commit any remaining operations
    if (operationCount > 0) {
        await batch.commit();
        console.log(`✅ Committed final batch of ${operationCount} products`);
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
    console.log('  3. Update firestore.rules to disable public writes');
    console.log('  4. Test the application');
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
