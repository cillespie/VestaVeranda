
/**
 * Update product content (Images & CTAs) in Firestore
 * Usage: npx tsx scripts/update-product-content.ts
 */

import * as admin from 'firebase-admin';

// Initialize Firebase Admin if not already
if (!admin.apps.length) {
    admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
    });
}

const db = admin.firestore();

interface ProductUpdate {
    id: string;
    image: string;
    cta: string;
}

const updates: ProductUpdate[] = [
    // 🔥 Fire Pits
    { id: 'solo-stove-yukon-2', image: '/images/products/solo-stove-yukon-2.png', cta: 'Upgrade Your Gatherings' },
    { id: 'solo-stove-bonfire-2', image: '/images/products/solo-stove-bonfire-2.png', cta: 'Get The Backyard Essential' },
    { id: 'solo-stove-mesa-xl', image: '/images/products/solo-stove-mesa-xl.png', cta: 'Spark Intimacy Tonight' },
    { id: 'breeo-x-series-24', image: '/images/products/breeo_x24.png', cta: 'Master Live-Fire Cooking' },
    { id: 'breeo-y-series', image: '/images/products/breeo_y_series.png', cta: 'Pack The Heat' },
    { id: 'outvue-47-fire-pit', image: '/images/products/outvue_firepit.png', cta: 'Grill & Chill' },
    { id: 'serenelife-propane-fire-pit', image: '/images/products/serenelife_firepit.png', cta: 'Instant Ambiance' },
    { id: 'round-propane-fire-table', image: '/images/products/propane_fire_table.png', cta: 'Go Modern Minimalist' },
    { id: 'ubesize-grill-mat', image: '/images/products/grill_mat.png', cta: 'Protect Your Deck' },

    // 🍕 Pizza Ovens & Kitchens
    { id: 'mont-alpi-island-grill', image: '/images/products/mont_alpi_grill.png', cta: 'Build Your Dream Kitchen' },
    { id: 'ooni-karu-2-pro', image: '/images/products/ooni-karu-2-pro.png', cta: 'Become A Pizza Pro' },
    { id: 'gozney-roccbox', image: '/images/products/gozney-roccbox.png', cta: 'Restaurant Quality at Home' },

    // 🪑 Furniture
    { id: 'polywood-lakeside-dining', image: '/images/products/polywood-lakeside-dining.png', cta: 'Invest in Forever' },
    { id: 'walker-edison-delray', image: '/images/products/walker-edison-delray.png', cta: 'Dine in Style' },
    { id: 'grand-patio-bistro', image: '/images/products/grand-patio-bistro.png', cta: 'Transform Your Balcony' },
    { id: 'devoko-wicker-set', image: '/images/products/devoko-wicker-set.png', cta: 'Create Your Nook' },
    { id: 'keter-corfu-loveseat', image: '/images/products/keter-corfu-loveseat.png', cta: 'Relax in Comfort' },
    { id: 'wisteria-lane-7-piece', image: '/images/products/wisteria-lane-7-piece.png', cta: 'Seat The Whole Family' },
    { id: 'christopher-knight-egg-chair', image: '/images/products/christopher-knight-egg-chair.png', cta: 'Float in Style' },
    { id: 'generic-modular-sectional', image: '/images/products/generic-modular-sectional.png', cta: 'Customize Your Layout' },
    { id: 'best-choice-zero-gravity', image: '/images/products/best-choice-zero-gravity.png', cta: 'Experience Zero Gravity' },
    { id: 'castaway-living-13-ft-hammock', image: '/images/products/castaway-living-13-ft-hammock.png', cta: 'Nap in Luxury' }, // Need to check if exists, assuming generated previously or use general

    // ⛩️ Shade
    { id: 'purple-leaf-cantilever', image: '/images/products/purple-leaf-cantilever.png', cta: 'Cool Down Your Patio' },
    { id: 'kozyard-alexander-gazebo', image: '/images/products/kozyard-alexander-gazebo.png', cta: 'Build Your Outdoor Room' },
    { id: 'purple-leaf-pergola', image: '/images/products/purple-leaf-pergola.png', cta: 'Define Your Space' },
    { id: 'yoleny-hardtop-gazebo', image: '/images/products/yoleny-gazebo.png', cta: 'All-Weather Protection' },

    // 💡 Lighting
    { id: 'brightech-solar-lights', image: '/images/products/brightech_lights.png', cta: 'Add Warmth & Glow' },
    { id: 'brightown-string-lights', image: '/images/products/brightown_string_lights.png', cta: 'Set The Mood' },
    { id: 'vignuto-firefly-lights-4-pack', image: '/images/products/vignuto-firefly-lights.png', cta: 'Add Magical Sparkle' },
    { id: 'alepod-pathway-lights-8-pack', image: '/images/products/alepod-pathway-lights.png', cta: 'Light Your Path' },

    // ⚡ Power & Tech
    { id: 'jackery-explorer-1000', image: '/images/products/jackery_explorer_1000.png', cta: 'Power Anywhere' },
    { id: 'bluetti-ac200l', image: '/images/products/bluetti_ac200l.png', cta: 'Off-Grid Freedom' },
    { id: 'jackery-solar-saga-100w', image: '/images/products/jackery_solar_panel.png', cta: 'Harness The Sun' },
    { id: 'segway-navimow', image: '/images/products/segway-navimow.png', cta: 'Automate Lawn Care' },
    { id: 'mammotion-luba', image: '/images/products/mammotion-luba.png', cta: 'Mow Steep Slopes' },
    { id: 'rachio-smart-sprinkler', image: '/images/products/rachio-smart-sprinkler.png', cta: 'Save Water Smartly' },
    { id: 'orbit-b-hyve', image: '/images/products/orbit-b-hyve.png', cta: 'Control From Anywhere' },

    // 🧶 Decor & Games
    { id: 'safavieh-courtyard-rug', image: '/images/products/safavieh_rug.png', cta: 'Anchor Your Style' },
    { id: 'keter-westwood-deck-box', image: '/images/products/keter-westwood-deck-box.png', cta: 'Declutter With Style' },
    { id: 'veradek-privacy-screen', image: '/images/products/veradek-privacy-screen.png', cta: 'Create Privacy Instantly' },
    { id: 'gibson-melamine-dinnerware', image: '/images/products/gibson-melamine-dinnerware.png', cta: 'Dine Without Worry' },
    { id: 'gosports-giant-toppling-tower', image: '/images/products/pointyard-giant-connect4.png', cta: 'Start The Party' }, // Swapped image as placeholder or similar
    { id: 'pointyard-giant-4-in-a-row', image: '/images/products/pointyard-giant-connect4.png', cta: 'Challenge Your Friends' },
    { id: 'eastpoint-light-up-cornhole', image: '/images/products/eastpoint-cornhole.png', cta: 'Play All Night' },
];

async function updateContent() {
    console.log(`🔄 Updating ${updates.length} products with images and unique CTAs...`);
    const productsRef = db.collection('products');

    let updatedCount = 0;

    for (const update of updates) {
        try {
            await productsRef.doc(update.id).update({
                lifestyleImage: update.image,
                ctaText: update.cta,
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });
            console.log(`✅ Updated ${update.id}`);
            updatedCount++;
        } catch (error) {
            console.error(`❌ Failed to update ${update.id}:`, error);
        }
    }

    console.log(`\n🎉 Finished! Updated ${updatedCount} products.`);
}

updateContent().then(() => process.exit(0)).catch(err => {
    console.error(err);
    process.exit(1);
});
