
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

if (admin.apps.length === 0) {
    admin.initializeApp({
        projectId: 'vesta-veranda-living'
    });
}

const db = admin.firestore();
const productsRef = db.collection('products');
const PROMPTS_FILE = 'scripts/image_prompts.json';
const IMG_DIR = 'public/images/products';

async function run() {
    if (!fs.existsSync(PROMPTS_FILE)) {
        console.error("Prompts file not found.");
        return;
    }

    const items = JSON.parse(fs.readFileSync(PROMPTS_FILE, 'utf8'));
    console.log(`Loaded ${items.length} items to check.`);

    let validImagesFound = 0;
    let updates = 0;

    for (const item of items) {
        const imgPath = path.join(IMG_DIR, item.filename);
        if (fs.existsSync(imgPath)) {
            // Image exists, update Firestore
            validImagesFound++;

            const snapshot = await productsRef.where('name', '==', item.name).get();
            if (snapshot.empty) {
                console.log(`[WARN] Product not found in DB: ${item.name}`);
                continue;
            }

            const dbUpdates = [];
            const publicPath = `/images/products/${item.filename}`;

            snapshot.forEach(doc => {
                if (doc.data().lifestyleImage !== publicPath) {
                    console.log(`Updating ${item.name} -> ${publicPath}`);
                    dbUpdates.push(doc.ref.update({ lifestyleImage: publicPath }));
                }
            });

            if (dbUpdates.length > 0) {
                await Promise.all(dbUpdates);
                updates += dbUpdates.length;
            }
        } else {
            // console.log(`[PENDING] Image not found for: ${item.name} (${item.filename})`);
        }
    }

    console.log(`\nSummary:`);
    console.log(`- Images found locally: ${validImagesFound}`);
    console.log(`- Firestore updates made: ${updates}`);
}

run().catch(console.error);
