
/**
 * Update specific products with unique lifestyle images
 */
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

const updates = [
    { id: 'anker-solix-c1000-gen-2', image: '/images/products/anker_solix_hero.png', cta: 'Power Your Adventure' },
    { id: 'generac-12-500-watt-tri-fuel', image: '/images/products/generac_trifuel_hero.png', cta: 'Secure Your Home' },
    { id: 'jackery-explorer-300', image: '/images/products/jackery_300_hero.png', cta: 'Power On The Go' },
    { id: 'jackery-solar-generator-1000-v2', image: '/images/products/jackery_1000_hero.png', cta: 'Live Off-Grid' },
    { id: 'mammotion-luba-mini-awd-1500', image: '/images/products/mammotion_luba_hero.png', cta: 'Automate Your Lawn' },
    { id: 'sophia-william-acacia-set', image: '/images/products/sophia_william_dining_hero.png', cta: 'Dine in Comfort' },
];

async function updateSpecifics() {
    console.log('🔄 Updating specific product images...');

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

updateSpecifics().then(() => process.exit(0));
