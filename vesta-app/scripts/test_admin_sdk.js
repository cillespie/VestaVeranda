const admin = require('firebase-admin');

if (admin.apps.length === 0) {
    admin.initializeApp({
        projectId: 'vesta-veranda-living'
    });
}

const db = admin.firestore();

async function audit() {
    console.log("Starting full product audit...");
    const snapshot = await db.collection('products').get();

    const imgMap = {};
    const missing = [];

    snapshot.forEach(doc => {
        const data = doc.data();
        const img = data.lifestyleImage;
        const name = data.name;
        const category = data.category;

        if (!img) {
            missing.push({ name, category, id: doc.id });
        } else {
            if (!imgMap[img]) imgMap[img] = [];
            imgMap[img].push({ name, category });
        }
    });

    console.log(`\nTotal Products Scanned: ${snapshot.size}`);

    const fs = require('fs');
    const report = {
        scanTime: new Date().toISOString(),
        total: snapshot.size,
        missing: missing,
        duplicates: []
    };

    Object.entries(imgMap).forEach(([img, products]) => {
        if (products.length > 1) {
            report.duplicates.push({ image: img, products });
        }
    });

    fs.writeFileSync('audit_report.json', JSON.stringify(report, null, 2));
    console.log("Audit saved to audit_report.json");
}

audit().catch(console.error);
