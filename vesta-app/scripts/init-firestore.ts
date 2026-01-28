import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration from your .env.local
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test product to create the collection
const testProduct = {
    id: 'solo-stove-bonfire-2',
    name: 'Solo Stove Bonfire 2.0',
    brand: 'Solo Stove',
    category: 'hearth',
    affiliateLink: 'https://amzn.to/4b92HL4',
    priceTier: '$$',
    badge: 'Best Seller',
    description: 'Perfect mid-size smokeless fire pit. Portable enough for camping, powerful for backyards.',
    features: [
        'Smokeless Technology',
        '19.5" Diameter',
        'Portable Design',
        '304 Stainless Steel'
    ],
    ctaText: 'Get It For Your Patio',
    lifestyleImage: '/images/products/solo_stove_bonfire.png',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
};

async function initializeCollection() {
    try {
        console.log('🔥 Creating Firestore collection "products"...');

        // Add the test product to create the collection
        const docRef = await addDoc(collection(db, 'products'), testProduct);

        console.log('✅ Collection created successfully!');
        console.log(`📄 Test product added with ID: ${docRef.id}`);
        console.log('\nNow you can run the full migration: npx tsx scripts/migrate-to-firestore.ts');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating collection:', error);
        process.exit(1);
    }
}

initializeCollection();
