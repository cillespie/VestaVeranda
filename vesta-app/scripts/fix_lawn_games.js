
const admin = require('firebase-admin');

if (admin.apps.length === 0) {
    admin.initializeApp({
        projectId: 'vesta-veranda-living'
    });
}

const db = admin.firestore();

const fixMap = {
    "Giant 3-in-1 Checkers": "/images/products/giant_checkers_rug.png",
    "Spikeball Standard Set": "/images/products/spikeball_standard_set.png",
    "Kan Jam Travel": "/images/products/kan_jam_travel.png",
    "GoSports Ladder Toss": "/images/products/gosports_ladder_toss.png",
    "GoSports Giant Toppling Tower": "/images/products/gosports-giant-toppling-tower.png"
};

async function run() {
    console.log("Starting update...");
    const productsRef = db.collection('products');
    let totalUpdated = 0;

    for (const [name, img] of Object.entries(fixMap)) {
        const snapshot = await productsRef.where('name', '==', name).get();
        if (snapshot.empty) {
            console.log(`Checking name: ${name} - Not found`);
            continue;
        }

        const updates = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.lifestyleImage !== img) {
                console.log(`Updating ${name} (${doc.id}) -> ${img}`);
                updates.push(doc.ref.update({ lifestyleImage: img }));
            } else {
                console.log(`Skipping ${name} (already correct)`);
            }
        });

        if (updates.length > 0) {
            await Promise.all(updates);
            totalUpdated += updates.length;
        }
    }

    console.log(`Done. Updated ${totalUpdated} products.`);
}

run().catch(console.error);
