/**
 * Reorganize Firestore products collection to match ProductCatalog.md
 * This script updates each product with:
 * - category: the category name from ProductCatalog.md
 * - sortOrder: numeric position for ordering within the collection
 * 
 * Usage: npx tsx scripts/reorganize-firestore.ts
 */

import * as admin from 'firebase-admin';

// Initialize Firebase Admin
admin.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'vesta-veranda-living',
});

const db = admin.firestore();

// Category mapping based on ProductCatalog.md organization
const categoryMapping = {
    // 🔥 Fire Pits, Heaters & Grills
    'solo-stove-yukon-2': { category: 'Fire Pits, Heaters & Grills', sortOrder: 1 },
    'solo-stove-yukon-2-0': { category: 'Fire Pits, Heaters & Grills', sortOrder: 1 },
    'solo-stove-bonfire-2': { category: 'Fire Pits, Heaters & Grills', sortOrder: 2 },
    'solo-stove-bonfire-2-0': { category: 'Fire Pits, Heaters & Grills', sortOrder: 2 },
    'solo-stove-mesa-xl': { category: 'Fire Pits, Heaters & Grills', sortOrder: 3 },
    'breeo-x-series-24': { category: 'Fire Pits, Heaters & Grills', sortOrder: 4 },
    'breeo-y-series': { category: 'Fire Pits, Heaters & Grills', sortOrder: 5 },
    'outvue-47-fire-pit': { category: 'Fire Pits, Heaters & Grills', sortOrder: 6 },
    'serenelife-propane-fire-pit': { category: 'Fire Pits, Heaters & Grills', sortOrder: 7 },
    'serenelife-propane-fire-pit-table': { category: 'Fire Pits, Heaters & Grills', sortOrder: 7 },
    'round-propane-fire-table': { category: 'Fire Pits, Heaters & Grills', sortOrder: 8 },
    'patio-propane-fire-table': { category: 'Fire Pits, Heaters & Grills', sortOrder: 8 },
    'generic-round-propane-table': { category: 'Fire Pits, Heaters & Grills', sortOrder: 8 },
    'ubesize-grill-mat': { category: 'Fire Pits, Heaters & Grills', sortOrder: 9 },
    'ubeesize-grill-mat': { category: 'Fire Pits, Heaters & Grills', sortOrder: 9 },
    'hanging-heater': { category: 'Fire Pits, Heaters & Grills', sortOrder: 10 },
    'east-oak-pyramid-heater': { category: 'Fire Pits, Heaters & Grills', sortOrder: 11 },
    'ceiling-electric-heater': { category: 'Fire Pits, Heaters & Grills', sortOrder: 12 },
    'patio-heater-1500w': { category: 'Fire Pits, Heaters & Grills', sortOrder: 13 },
    'outdoor-electric-tower': { category: 'Fire Pits, Heaters & Grills', sortOrder: 14 },
    '39-fire-pit-with-storage': { category: 'Fire Pits, Heaters & Grills', sortOrder: 15 },
    'avenlur-pyramid-heater': { category: 'Fire Pits, Heaters & Grills', sortOrder: 16 },

    // 🍕 Outdoor Kitchens & Pizza Ovens
    'mont-alpi-island-grill': { category: 'Outdoor Kitchens & Pizza Ovens', sortOrder: 30 },
    'mont-alpi-mai805-island-grill': { category: 'Outdoor Kitchens & Pizza Ovens', sortOrder: 30 },
    'ooni-karu-2-pro': { category: 'Outdoor Kitchens & Pizza Ovens', sortOrder: 31 },
    'gozney-roccbox': { category: 'Outdoor Kitchens & Pizza Ovens', sortOrder: 32 },

    // ⚡ Generators & Power
    'jackery-solar-generator-1000-v2': { category: 'Generators & Power', sortOrder: 40 },
    'jackery-explorer-1000': { category: 'Generators & Power', sortOrder: 40 },
    'bluetti-ac200l': { category: 'Generators & Power', sortOrder: 41 },
    'anker-solix-c1000': { category: 'Generators & Power', sortOrder: 42 },
    'anker-solix-c1000-gen-2': { category: 'Generators & Power', sortOrder: 42 },
    'generac-tri-fuel': { category: 'Generators & Power', sortOrder: 43 },
    'generac-12-500-watt-tri-fuel': { category: 'Generators & Power', sortOrder: 43 },
    'jackery-explorer-300': { category: 'Generators & Power', sortOrder: 44 },
    'jackery-solar-saga-100w': { category: 'Generators & Power', sortOrder: 45 },

    // 🪑 Furniture - Dining Sets
    'polywood-lakeside': { category: 'Furniture - Dining Sets', sortOrder: 52 },
    'polywood-lakeside-dining': { category: 'Furniture - Dining Sets', sortOrder: 52 },
    'polywood-lakeside-dining-set': { category: 'Furniture - Dining Sets', sortOrder: 52 },
    'walker-edison-delray': { category: 'Furniture - Dining Sets', sortOrder: 53 },
    'walker-edison-delray-set': { category: 'Furniture - Dining Sets', sortOrder: 53 },
    'grand-patio-bistro': { category: 'Furniture - Dining Sets', sortOrder: 54 },
    'grand-patio-folding-bistro-set': { category: 'Furniture - Dining Sets', sortOrder: 54 },
    'sophia-william-acacia-set': { category: 'Furniture - Dining Sets', sortOrder: 55 },
    'green4ever-7-piece-set': { category: 'Furniture - Dining Sets', sortOrder: 56 },
    'maison-backyards-6-seat': { category: 'Furniture - Dining Sets', sortOrder: 57 },

    // 🛋️ Furniture - Lounge & Seating
    'devoko-wicker-set': { category: 'Furniture - Lounge & Seating', sortOrder: 63 },
    'devoko-3-piece-wicker-set': { category: 'Furniture - Lounge & Seating', sortOrder: 63 },
    'keter-corfu-loveseat': { category: 'Furniture - Lounge & Seating', sortOrder: 64 },
    'wisteria-lane-7-piece': { category: 'Furniture - Lounge & Seating', sortOrder: 65 },
    'wisteria-lane-7-piece-set': { category: 'Furniture - Lounge & Seating', sortOrder: 65 },
    'christopher-knight-egg-chair': { category: 'Furniture - Lounge & Seating', sortOrder: 66 },
    'modular-sectional-7-piece': { category: 'Furniture - Lounge & Seating', sortOrder: 67 },
    '7-piece-modular-sectional': { category: 'Furniture - Lounge & Seating', sortOrder: 67 },
    'generic-modular-sectional': { category: 'Furniture - Lounge & Seating', sortOrder: 67 },
    'mixpatio-6-piece-sectional': { category: 'Furniture - Lounge & Seating', sortOrder: 68 },
    'zero-gravity-chairs': { category: 'Furniture - Lounge & Seating', sortOrder: 69 },
    'zero-gravity-chairs-set-of-2': { category: 'Furniture - Lounge & Seating', sortOrder: 69 },
    'best-choice-zero-gravity': { category: 'Furniture - Lounge & Seating', sortOrder: 69 },
    'castaway-living-13-ft-hammock': { category: 'Furniture - Lounge & Seating', sortOrder: 70 },
    'suncreat-double-portable-hammock': { category: 'Furniture - Lounge & Seating', sortOrder: 71 },

    // 🧖 Saunas & Spas
    '2-person-sauna-box': { category: 'Saunas & Spas', sortOrder: 81 },
    'infrared-steam-sauna': { category: 'Saunas & Spas', sortOrder: 82 },
    'far-infrared-sauna': { category: 'Saunas & Spas', sortOrder: 83 },
    '2-3-person-corner-sauna': { category: 'Saunas & Spas', sortOrder: 84 },
    '78-in-vertical-barrel-sauna': { category: 'Saunas & Spas', sortOrder: 85 },

    // ⛩️ Shade Structures & Gazebos
    'purple-leaf-cantilever': { category: 'Shade Structures & Gazebos', sortOrder: 93 },
    'purple-leaf-cantilever-umbrella': { category: 'Shade Structures & Gazebos', sortOrder: 93 },
    'best-choice-10ft-solar-offset': { category: 'Shade Structures & Gazebos', sortOrder: 94 },
    'blissun-9-market-umbrella': { category: 'Shade Structures & Gazebos', sortOrder: 95 },
    'sophia-william-13ft-umbrella': { category: 'Shade Structures & Gazebos', sortOrder: 96 },
    'mfstudio-15ft-double-sided-umbrella': { category: 'Shade Structures & Gazebos', sortOrder: 97 },
    'kozyard-alexander': { category: 'Shade Structures & Gazebos', sortOrder: 98 },
    'kozyard-alexander-gazebo': { category: 'Shade Structures & Gazebos', sortOrder: 98 },
    'kozyard-alexander-hardtop-gazebo': { category: 'Shade Structures & Gazebos', sortOrder: 98 },
    'purple-leaf-pergola': { category: 'Shade Structures & Gazebos', sortOrder: 99 },
    'purple-leaf-retractable-pergola': { category: 'Shade Structures & Gazebos', sortOrder: 99 },
    'purple-leaf-10x13-double-top': { category: 'Shade Structures & Gazebos', sortOrder: 100 },
    'yoleny-hardtop-gazebo': { category: 'Shade Structures & Gazebos', sortOrder: 101 },
    'yoleny-gazebo': { category: 'Shade Structures & Gazebos', sortOrder: 101 },
    'modern-shade-hardtop-10x10': { category: 'Shade Structures & Gazebos', sortOrder: 102 },
    '14-x-22-hardtop-pavilion': { category: 'Shade Structures & Gazebos', sortOrder: 103 },
    'aecojoy-wall-gazebo-12x10': { category: 'Shade Structures & Gazebos', sortOrder: 104 },

    // 🌿 Lawn, Garden & Irrigation
    'segway-navimow': { category: 'Lawn, Garden & Irrigation', sortOrder: 112 },
    'segway-navimow-i105n': { category: 'Lawn, Garden & Irrigation', sortOrder: 112 },
    'mammotion-luba': { category: 'Lawn, Garden & Irrigation', sortOrder: 113 },
    'mammotion-luba-mini-awd-1500': { category: 'Lawn, Garden & Irrigation', sortOrder: 113 },
    'rachio-smart-sprinkler': { category: 'Lawn, Garden & Irrigation', sortOrder: 114 },
    'orbit-b-hyve': { category: 'Lawn, Garden & Irrigation', sortOrder: 115 },
    'orbit-b-hyve-controller': { category: 'Lawn, Garden & Irrigation', sortOrder: 115 },
    'anphsin-plant-covers': { category: 'Lawn, Garden & Irrigation', sortOrder: 116 },

    // ❄️ Winter Maintenance
    'senix-corded-snow-blower': { category: 'Winter Maintenance', sortOrder: 125 },
    '40v-cordless-snow-shovel': { category: 'Winter Maintenance', sortOrder: 126 },
    'best-choice-snow-pusher': { category: 'Winter Maintenance', sortOrder: 127 },
    'manplow-revolutionx': { category: 'Winter Maintenance', sortOrder: 128 },
    'powersmart-24-inch-blower': { category: 'Winter Maintenance', sortOrder: 129 },
    'astroai-ice-scraper-kit': { category: 'Winter Maintenance', sortOrder: 130 },
    'ego-power-21-blower': { category: 'Winter Maintenance', sortOrder: 131 },
    'safe-paw-ice-melt': { category: 'Winter Maintenance', sortOrder: 132 },

    // 🧶 Outdoor Rugs & Décor
    'safavieh-courtyard': { category: 'Outdoor Rugs & Décor', sortOrder: 139 },
    'safavieh-courtyard-rug': { category: 'Outdoor Rugs & Décor', sortOrder: 139 },
    'artificial-grass-rug': { category: 'Outdoor Rugs & Décor', sortOrder: 140 },
    'lita-artificial-grass': { category: 'Outdoor Rugs & Décor', sortOrder: 141 },

    // 💡 Lighting
    'brightech-solar': { category: 'Lighting', sortOrder: 149 },
    'brightech-solar-lights': { category: 'Lighting', sortOrder: 149 },
    'brightown-string': { category: 'Lighting', sortOrder: 150 },
    'brightown-string-lights': { category: 'Lighting', sortOrder: 150 },
    'string-light-poles': { category: 'Lighting', sortOrder: 151 },
    'string-light-poles-4-pack': { category: 'Lighting', sortOrder: 151 },
    'suddus-firework-lights-2-pack': { category: 'Lighting', sortOrder: 152 },
    'vignuto-firefly-lights-4-pack': { category: 'Lighting', sortOrder: 153 },
    'patiopia-cracked-glass-ball': { category: 'Lighting', sortOrder: 154 },
    'alepod-pathway-lights-8-pack': { category: 'Lighting', sortOrder: 155 },
    'tonulax-butterfly-lights-2-pack': { category: 'Lighting', sortOrder: 156 },
    'denicmic-stake-lights-10-pack': { category: 'Lighting', sortOrder: 157 },

    // 🔊 Outdoor Audio
    'soundcore-boom-2': { category: 'Outdoor Audio', sortOrder: 165 },
    'pohopa-solar-speakers-3-pack': { category: 'Outdoor Audio', sortOrder: 166 },
    'nicebuy-solar-rock-speakers': { category: 'Outdoor Audio', sortOrder: 167 },
    'herdio-5-25-wall-mount': { category: 'Outdoor Audio', sortOrder: 168 },
    'flame-atmosphere-speakers': { category: 'Outdoor Audio', sortOrder: 169 },
    'studiofinix-6-5-speakers': { category: 'Outdoor Audio', sortOrder: 170 },
    'monster-rockin-roller-270': { category: 'Outdoor Audio', sortOrder: 171 },
    'ion-block-rocker': { category: 'Outdoor Audio', sortOrder: 172 },

    // 🗑️ Storage & Organization
    'keter-westwood': { category: 'Storage & Organization', sortOrder: 180 },
    'keter-westwood-deck-box': { category: 'Storage & Organization', sortOrder: 180 },
    'suncast-33-gallon-trashcan': { category: 'Storage & Organization', sortOrder: 181 },
    'cambridge-casual-deck-box': { category: 'Storage & Organization', sortOrder: 182 },
    'baleine-patio-furniture-covers': { category: 'Storage & Organization', sortOrder: 183 },
    'clear-tarp-12x12ft': { category: 'Storage & Organization', sortOrder: 184 },

    // 🍽️ Outdoor Dinnerware
    'gibson-melamine': { category: 'Outdoor Dinnerware', sortOrder: 192 },
    'gibson-home-melamine': { category: 'Outdoor Dinnerware', sortOrder: 192 },
    'gibson-melamine-dinnerware': { category: 'Outdoor Dinnerware', sortOrder: 192 },

    // 🎯 Lawn Games
    'gosports-toppling-tower': { category: 'Lawn Games', sortOrder: 200 },
    'gosports-giant-toppling-tower': { category: 'Lawn Games', sortOrder: 200 },
    'giant-checkers': { category: 'Lawn Games', sortOrder: 201 },
    'giant-3-in-1-checkers': { category: 'Lawn Games', sortOrder: 201 },
    'spikeball': { category: 'Lawn Games', sortOrder: 202 },
    'spikeball-standard-set': { category: 'Lawn Games', sortOrder: 202 },
    'kan-jam-travel': { category: 'Lawn Games', sortOrder: 203 },
    'gosports-ladder-toss': { category: 'Lawn Games', sortOrder: 204 },
    'joyin-lawn-darts': { category: 'Lawn Games', sortOrder: 205 },
    'pointyard-giant-4-in-a-row': { category: 'Lawn Games', sortOrder: 206 },
    'eastpoint-light-up-cornhole': { category: 'Lawn Games', sortOrder: 207 },

    // 🌿 Privacy Screens
    'veradek-privacy-screen': { category: 'Privacy Screens', sortOrder: 215 },
};

async function reorganizeFirestore() {
    console.log('🔄 Starting Firestore reorganization to match ProductCatalog.md...\n');

    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();

    let updated = 0;
    let notFound = 0;
    let errors = 0;

    for (const doc of snapshot.docs) {
        const productId = doc.id;
        const mapping = categoryMapping[productId as keyof typeof categoryMapping];

        if (mapping) {
            try {
                await doc.ref.update({
                    category: mapping.category,
                    sortOrder: mapping.sortOrder,
                    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                });
                console.log(`✅ Updated: ${productId} → ${mapping.category} (order: ${mapping.sortOrder})`);
                updated++;
            } catch (error) {
                console.error(`❌ Error updating ${productId}:`, error);
                errors++;
            }
        } else {
            console.log(`⚠️  No mapping found for: ${productId}`);
            notFound++;
        }
    }

    console.log('\n' + '='.repeat(80));
    console.log('📊 Reorganization Summary:');
    console.log('='.repeat(80));
    console.log(`✅ Updated: ${updated} products`);
    console.log(`⚠️  Not mapped: ${notFound} products`);
    console.log(`❌ Errors: ${errors} products`);
    console.log(`📦 Total in Firestore: ${snapshot.size} products`);

    if (notFound > 0) {
        console.log('\n💡 Tip: Add missing products to categoryMapping to organize them.');
    }
}

reorganizeFirestore()
    .then(() => {
        console.log('\n✅ Reorganization complete!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ Fatal error:', error);
        process.exit(1);
    });
