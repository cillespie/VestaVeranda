/**
 * Test script to identify problematic Firestore fields
 */

import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import { sampleProducts } from '../src/lib/products';

async function testSingleProduct() {
    const testProduct = sampleProducts[0];

    console.log('Testing product:', testProduct.name);
    console.log('Product data:', JSON.stringify(testProduct, null, 2));

    try {
        const productRef = doc(collection(db, 'Products'), 'test-product-id');

        // Try with minimal data first
        await setDoc(productRef, {
            id: testProduct.id,
            name: testProduct.name,
            brand: testProduct.brand,
            category: testProduct.category,
            createdAt: Timestamp.now(),
        });

        console.log('✅ Minimal product data worked!');

        // Now try adding fields one by one
        const fieldsToTest = [
            'affiliateLink',
            'priceTier',
            'badge',
            'description',
            'features',
            'ctaText',
            'lifestyleImage',
        ];

        for (const field of fieldsToTest) {
            const value = (testProduct as any)[field];
            if (value !== undefined) {
                try {
                    await setDoc(productRef, {
                        [field]: value,
                    }, { merge: true });
                    console.log(`✅ Field "${field}" works: ${typeof value}`);
                } catch (error: any) {
                    console.log(`❌ Field "${field}" FAILED:`, error.message);
                    console.log(`   Value:`, value);
                }
            }
        }

    } catch (error) {
        console.error('❌ Error:', error);
    }

    process.exit(0);
}

testSingleProduct();
