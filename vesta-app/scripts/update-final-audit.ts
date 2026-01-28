
/**
 * Update final audit products
 */
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

const updates = [
    { id: 'gibson-home-melamine', image: '/images/products/gibson_melamine_hero.png', cta: 'Host A Feast' },
    { id: 'denicmic-stake-lights-10-pack', image: '/images/products/denicmic_lights_hero.png', cta: 'Light The Way' }
];

async function updateFinal() {
    console.log('🔄 Updating final missing specific images...');

    for (const item of updates) {
        try {
            await db.collection('products').doc(item.id).update({
                lifestyleImage: item.image,
                ctaText: item.cta,
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });
            console.log(`✅ Updated ${item.id}`);
        } catch (e) {
            console.error(`❌ Error updating ${item.id}:`, e);
        }
    }
}

updateFinal().then(() => process.exit(0));
