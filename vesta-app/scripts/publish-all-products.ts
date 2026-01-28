
/**
 * Publish all products in Firestore
 * Sets published: true for all documents in 'products' collection
 */

import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

async function publishAll() {
    console.log('🔄 Publishing all products...');
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();

    let count = 0;
    const batchSize = 500;
    let batch = db.batch();
    let batchCount = 0;

    for (const doc of snapshot.docs) {
        batch.update(doc.ref, { published: true });
        count++;
        batchCount++;

        if (batchCount >= batchSize) {
            await batch.commit();
            console.log(`✅ Committed batch of ${batchCount} updates`);
            batch = db.batch();
            batchCount = 0;
        }
    }

    if (batchCount > 0) {
        await batch.commit();
    }

    console.log(`🎉 Successfully published ${count} products!`);
}

publishAll()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
