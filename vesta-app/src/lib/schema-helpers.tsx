import { Product } from '@/components/ProductCard';

/**
 * Generate Schema.org Product markup for a product
 * @see https://schema.org/Product
 */
export function generateProductSchema(product: Product, siteUrl: string) {
    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': product.name,
        'brand': {
            '@type': 'Brand',
            'name': product.brand,
        },
        'description': product.description,
    };

    // Add image if available (must be absolute URL)
    if (product.lifestyleImage) {
        schema.image = `${siteUrl}${product.lifestyleImage}`;
    }

    // Add category mapping
    const categoryMap = {
        'hearth': 'Fire Pits & Heaters',
        'shelter': 'Outdoor Furniture & Gazebos',
        'glow': 'Outdoor Lighting & Decor',
    };
    schema.category = categoryMap[product.category as keyof typeof categoryMap] || 'Outdoor Products';

    return schema;
}

/**
 * Generate Schema.org FAQPage markup
 * @see https://schema.org/FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer,
            },
        })),
    };
}

/**
 * Generate Schema.org BreadcrumbList markup
 * @see https://schema.org/BreadcrumbList
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': crumb.name,
            'item': crumb.url,
        })),
    };
}

/**
 * Render a JSON-LD script tag with schema data
 * Use this in your component's JSX
 */
export function renderSchema(schema: Record<string, unknown>) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
