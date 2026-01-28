
/**
 * Remove duplicate products
 */
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

// List of IDs to DELETE (The duplicates we don't want)
const toDelete = [
    '7-piece-modular-sectional', // Keep generic-modular-sectional
    'zero-gravity-chairs-set-of-2', // Keep best-choice-zero-gravity
    'devoko-wicker-set', // Keep devoko-3-piece-wicker-set
    'grand-patio-folding-bistro-set', // Keep grand-patio-bistro (Short ID has image)
    'kozyard-alexander-gazebo', // Keep kozyard-alexander-hardtop-gazebo (Long ID has fix)
    'mont-alpi-island-grill', // Keep mont-alpi-mai805-island-grill
    'polywood-lakeside-dining', // Keep polywood-lakeside-dining-set
    'purple-leaf-cantilever', // Keep purple-leaf-cantilever-umbrella
    'purple-leaf-pergola', // Keep purple-leaf-retractable-pergola
    'segway-navimow-i105n', // Keep segway-navimow
    'serenelife-propane-fire-pit-table', // Keep serenelife-propane-fire-pit
    'solo-stove-bonfire-2-0', // Keep solo-stove-bonfire-2
    'solo-stove-yukon-2-0', // Keep solo-stove-yukon-2
    'walker-edison-delray', // Keep walker-edison-delray-set
    'wisteria-lane-7-piece', // Keep wisteria-lane-7-piece-set
    'yoleny-gazebo' // Keep yoleny-hardtop-gazebo
];

async function removeDuplicates() {
    console.log(`🗑️ Removing ${toDelete.length} duplicates...`);
    const batch = db.batch();

    toDelete.forEach(id => {
        const ref = db.collection('products').doc(id);
        batch.delete(ref);
    });

    await batch.commit();
    console.log('✅ Duplicates removed.');
}

removeDuplicates().then(() => process.exit(0));
