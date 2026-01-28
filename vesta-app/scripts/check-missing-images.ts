
/**
 * Check for missing product images in Firestore
 */
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

async function checkImages() {
    console.log('🔍 Checking for missing images...');
    const snapshot = await db.collection('products').where('published', '==', true).get();

    const missing: Record<string, string[]> = {};
    let totalMissing = 0;

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (!data.lifestyleImage) {
            const cat = data.category || 'Uncategorized';
            if (!missing[cat]) missing[cat] = [];
            missing[cat].push(data.id);
            totalMissing++;
        }
    });

    console.log(`\n❌ Found ${totalMissing} products missing images:\n`);

    for (const [cat, ids] of Object.entries(missing)) {
        console.log(`\n📂 ${cat} (${ids.length}):`);
        ids.forEach(id => console.log(`   - ${id}`));
    }
}

checkImages().then(() => process.exit(0));
