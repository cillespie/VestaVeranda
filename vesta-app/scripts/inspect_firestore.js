const fs = require('fs');
const path = require('path');

// Manually load env vars
try {
    const envFile = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf8');
    envFile.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim().replace(/^"(.*)"$/, '$1'); // Remove quotes
            process.env[key] = value;
        }
    });
} catch (e) {
    console.error("Could not read .env.local", e);
    console.error("Could not read .env.local", e);
}
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, doc, updateDoc } = require("firebase/firestore");
const { getAuth, signInAnonymously } = require("firebase/auth");

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function listProducts() {
    console.log('Signing in anonymously...');
    await signInAnonymously(auth);
    console.log('Signed in. Fetching products from Firestore...');
    try {
        const testRef = collection(db, "test_write");
        await require("firebase/firestore").addDoc(testRef, {
            test: "data",
            timestamp: new Date()
        });
        console.log("WRITE SUCCESS: Able to write to Firestore.");
    } catch (e) {
        console.error("WRITE FAILED: " + e.message);
    }
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log(`Found ${querySnapshot.size} products.`);

    const products = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        products.push({ id: doc.id, ...data });
        // Check for missing images
        if (!data.lifestyleImage) {
            console.log(`[MISSING IMAGE] ${data.name} (${doc.id})`);
        } else {
            console.log(`[OK] ${data.name} - ${data.category}`);
        }
    });

    // Save to a JSON file for analysis
    const fs = require('fs');
    fs.writeFileSync('firestore_products_dump.json', JSON.stringify(products, null, 2));
    console.log('Dumped to firestore_products_dump.json');
}

listProducts().catch(console.error);
