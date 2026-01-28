
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

async function checkDuplicates() {
    console.log('🔍 Checking for potential duplicates...');
    const snapshot = await db.collection('products').get();

    const nameMap: Record<string, any[]> = {};

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        const name = data.name.trim().toLowerCase();
        if (!nameMap[name]) nameMap[name] = [];
        nameMap[name].push({ id: doc.id, image: data.lifestyleImage, cta: data.ctaText });
    });

    let dupCount = 0;
    for (const [name, items] of Object.entries(nameMap)) {
        if (items.length > 1) {
            console.log(`\n⚠️ Duplicate Name: "${name}"`);
            items.forEach(item => {
                console.log(`   - ID: ${item.id} | Img: ${item.image ? '✅' : '❌'} | CTA: ${item.cta}`);
            });
            dupCount++;
        }
    }

    if (dupCount === 0) console.log("No exact name duplicates found.");
}

checkDuplicates().then(() => process.exit(0));
