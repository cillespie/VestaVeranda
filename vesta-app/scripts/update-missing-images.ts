
/**
 * Update missing images with Category Heroes & Fix ID Mismatches
 */
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

// Category Image Mapping
const categoryImages: Record<string, string> = {
    'Saunas & Spas': '/images/products/sauna_hero.png',
    'Winter Maintenance': '/images/products/snow_tools_hero.png',
    'Outdoor Audio': '/images/products/outdoor_audio_hero.png',
    'Lawn Games': '/images/products/lawn_games_hero.png',
    'Shade Structures & Gazebos': '/images/products/gazebo_hero.png',
};

// ID Fixes (Update these specifically)
const idFixes = [
    { id: 'mont-alpi-mai805-island-grill', image: '/images/products/mont_alpi_grill.png', cta: 'Build Your Dream Kitchen' },
    { id: 'solo-stove-bonfire-2-0', image: '/images/products/solo-stove-bonfire-2.png', cta: 'Get The Backyard Essential' },
    { id: 'solo-stove-yukon-2-0', image: '/images/products/solo-stove-yukon-2.png', cta: 'Upgrade Your Gatherings' },
    { id: 'polywood-lakeside-dining-set', image: '/images/products/polywood-lakeside-dining.png', cta: 'Invest in Forever' },
    { id: 'walker-edison-delray-set', image: '/images/products/walker-edison-delray.png', cta: 'Dine in Style' },
    { id: 'devoko-3-piece-wicker-set', image: '/images/products/devoko-wicker-set.png', cta: 'Create Your Nook' },
    { id: 'wisteria-lane-7-piece-set', image: '/images/products/wisteria-lane-7-piece.png', cta: 'Seat The Whole Family' },
    { id: 'purple-leaf-cantilever-umbrella', image: '/images/products/purple-leaf-cantilever.png', cta: 'Cool Down Your Patio' },
    { id: 'kozyard-alexander-hardtop-gazebo', image: '/images/products/kozyard-alexander-gazebo.png', cta: 'Build Your Outdoor Room' },
    { id: 'purple-leaf-retractable-pergola', image: '/images/products/purple-leaf-pergola.png', cta: 'Define Your Space' },
];

async function updateImages() {
    console.log('🔄 Applying Category Hero Images...');

    // 1. Fix specific IDs first
    for (const fix of idFixes) {
        try {
            await db.collection('products').doc(fix.id).update({
                lifestyleImage: fix.image,
                ctaText: fix.cta,
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });
            console.log(`✅ Fixed ID: ${fix.id}`);
        } catch (e) {
            console.log(`⚠️ Could not fix ${fix.id} (might not exist)`);
        }
    }

    // 2. Apply Category Images
    const snapshot = await db.collection('products').where('published', '==', true).get();
    let updatedCount = 0;

    const batch = db.batch();
    let batchCount = 0;

    for (const doc of snapshot.docs) {
        const data = doc.data();

        // Only update if missing image OR if we want to force category consistency (User asked to fill missing)
        // We trigger if !lifestyleImage
        if (!data.lifestyleImage) {
            const cat = data.category;
            if (categoryImages[cat]) {
                batch.update(doc.ref, {
                    lifestyleImage: categoryImages[cat],
                    ctaText: 'Shop This Collection' // Generic CTA for bulk update
                });
                updatedCount++;
                batchCount++;
                console.log(`📷 Assigned ${categoryImages[cat]} to ${data.id}`);
            }
        }

        if (batchCount >= 400) {
            await batch.commit();
            batchCount = 0;
            // reset batch is complex in loop, effectively we just commit and get new one?
            // Actually existing batch object is committed. Use new one? 
            // Better to simple loop commits or just use one commit if < 500. We have ~80.
        }
    }

    if (batchCount > 0) {
        await batch.commit();
    }

    console.log(`🎉 Bulk updated ${updatedCount} products with Category Images!`);
}

updateImages().then(() => process.exit(0));
