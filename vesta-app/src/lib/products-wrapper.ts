// Product data wrapper layer
// This file provides a unified interface for fetching products
// Supports both Firestore (production) and local data (fallback/development)

import { Product } from '@/components/ProductCard';
import {
    getAllProducts as getFirestoreProducts,
    getProductsByCategory as getFirestoreCategoryProducts,
    getProductById as getFirestoreProductById,
    getFeaturedProducts as getFirestoreFeaturedProducts,
    getTopPickProduct as getFirestoreTopPickProduct
} from './firestore-service';

// Import the original sample products as fallback
import { sampleProducts as localProducts } from './products-local';

// Feature flag: Use Firestore or fallback to local data
const USE_FIRESTORE = true; // process.env.NEXT_PUBLIC_USE_FIRESTORE === 'true';

/**
 * Get all products
 * Uses Firestore if enabled, otherwise returns local data
 */
export async function getAllProducts(): Promise<Product[]> {
    if (USE_FIRESTORE) {
        const products = await getFirestoreProducts();
        // Fallback to local if Firestore returns empty
        return products.length > 0 ? products : localProducts;
    }
    return localProducts;
}

/**
 * Get products by category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
    if (USE_FIRESTORE) {
        const products = await getFirestoreCategoryProducts(category);
        // Fallback to local filtered data
        return products.length > 0 ? products : localProducts.filter(p => p.category === category);
    }
    return localProducts.filter(p => p.category === category);
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string): Promise<Product | undefined> {
    if (USE_FIRESTORE) {
        const product = await getFirestoreProductById(id);
        // Fallback to local
        return product ?? localProducts.find(p => p.id === id);
    }
    return localProducts.find(p => p.id === id);
}

/**
 * Get featured products (products with badges)
 */
export async function getFeaturedProducts(count: number = 6): Promise<Product[]> {
    if (USE_FIRESTORE) {
        const products = await getFirestoreFeaturedProducts(count);
        return products.length > 0 ? products : localProducts.filter(p => p.badge).slice(0, count);
    }
    return localProducts.filter(p => p.badge).slice(0, count);
}

/**
 * Get top pick product for a category (or overall)
 */
export async function getTopPickProduct(category?: string): Promise<Product> {
    if (USE_FIRESTORE) {
        const product = await getFirestoreTopPickProduct(category);
        if (product) return product;
    }

    // Fallback logic
    const products = category
        ? localProducts.filter(p => p.category === category)
        : localProducts;

    return products.find(p => p.badge === 'Top Pick') || products[0];
}

// Re-export sampleProducts for backwards compatibility during migration
// This allows existing code that imports sampleProducts directly to still work
export { localProducts as sampleProducts };
