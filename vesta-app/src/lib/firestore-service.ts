import { collection, getDocs, getDoc, doc, query, where, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { Product } from '@/components/ProductCard';

/**
 * Extended Product interface with Firestore metadata
 */
export interface FirestoreProduct extends Product {
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
    published?: boolean;
    sortOrder?: number;
}

/**
 * Get all published products from Firestore
 * Results are ordered by sortOrder (if set) or by creation date
 */
export async function getAllProducts(): Promise<Product[]> {
    try {
        const productsRef = collection(db, 'products');
        const q = query(
            productsRef,
            where('published', '==', true)
        );

        const snapshot = await getDocs(q);

        // Sort in memory to bypass index requirement
        const docs = snapshot.docs.sort((a, b) => {
            const dataA = a.data() as FirestoreProduct;
            const dataB = b.data() as FirestoreProduct;
            return (dataA.sortOrder ?? 999) - (dataB.sortOrder ?? 999);
        });

        return docs.map(docSnap => {
            const data = docSnap.data() as FirestoreProduct;
            return {
                id: docSnap.id,
                name: data.name,
                brand: data.brand,
                category: data.category,
                affiliateLink: data.affiliateLink,
                priceTier: data.priceTier,
                badge: data.badge,
                description: data.description,
                features: data.features,
                ctaText: data.ctaText,
                lifestyleImage: data.lifestyleImage,
            } as Product;
        });
    } catch (error) {
        console.error('Error fetching products from Firestore:', error);
        // Return empty array rather than crashing
        return [];
    }
}

/**
 * Get products by category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
    try {
        const productsRef = collection(db, 'products');
        const q = query(
            productsRef,
            where('published', '==', true),
            where('category', '==', category)
        );

        const snapshot = await getDocs(q);

        // Sort in memory
        const docs = snapshot.docs.sort((a, b) => {
            const dataA = a.data() as FirestoreProduct;
            const dataB = b.data() as FirestoreProduct;
            return (dataA.sortOrder ?? 999) - (dataB.sortOrder ?? 999);
        });

        return docs.map(docSnap => {
            const data = docSnap.data() as FirestoreProduct;
            return {
                id: docSnap.id,
                name: data.name,
                brand: data.brand,
                category: data.category,
                affiliateLink: data.affiliateLink,
                priceTier: data.priceTier,
                badge: data.badge,
                description: data.description,
                features: data.features,
                ctaText: data.ctaText,
                lifestyleImage: data.lifestyleImage,
            } as Product;
        });
    } catch (error) {
        console.error(`Error fetching ${category} products from Firestore:`, error);
        return [];
    }
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
    try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return null;
        }

        const data = docSnap.data() as FirestoreProduct;
        return {
            id: docSnap.id,
            name: data.name,
            brand: data.brand,
            category: data.category,
            affiliateLink: data.affiliateLink,
            priceTier: data.priceTier,
            badge: data.badge,
            description: data.description,
            features: data.features,
            ctaText: data.ctaText,
            lifestyleImage: data.lifestyleImage,
        } as Product;
    } catch (error) {
        console.error(`Error fetching product ${id} from Firestore:`, error);
        return null;
    }
}

/**
 * Get featured products (products with badges)
 */
export async function getFeaturedProducts(count: number = 6): Promise<Product[]> {
    const allProducts = await getAllProducts();
    return allProducts.filter(p => p.badge).slice(0, count);
}

/**
 * Get top pick product for a category (or overall)
 */
export async function getTopPickProduct(category?: string): Promise<Product | null> {
    const products = category
        ? await getProductsByCategory(category)
        : await getAllProducts();

    // First try to find a product with "Top Pick" badge
    const topPick = products.find(p => p.badge === 'Top Pick');
    if (topPick) return topPick;

    // Fallback to first product in list
    return products.length > 0 ? products[0] : null;
}
