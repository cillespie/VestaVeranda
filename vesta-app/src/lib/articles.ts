export interface ArticleSection {
    type: 'paragraph' | 'heading' | 'list' | 'image' | 'callout' | 'product-highlight';
    content?: string;
    items?: string[];
    src?: string;
    alt?: string;
    caption?: string;
    productId?: string;
    highlightText?: string;
}

export interface Article {
    slug: string;
    title: string;
    subtitle: string;
    heroImage?: string;
    publishedDate: string;
    category: 'hearth' | 'shelter' | 'glow' | 'collection';
    productIds: string[];
    occasionSlug?: string;
    seo: {
        primaryKeywords: string[];
        longTailKeywords: string[];
        metaDescription: string;
        pinterestDescription: string;
    };
    authorId: string;
    content: ArticleSection[];
}

const articles: Article[] = [
    {
        slug: 'spring-evenings-patio-guide',
        title: 'Transform Your Patio for Cozy Spring Evenings',
        subtitle: 'Everything you need to warm up those chilly nights',
        heroImage: 'https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?q=80&w=2000&auto=format&fit=crop',
        publishedDate: '2025-03-15',
        category: 'hearth',
        productIds: ['solo-stove-bonfire-2', 'east-oak-fire-pit-table'],
        seo: {
            primaryKeywords: ['patio heaters', 'fire pits', 'spring patio ideas'],
            longTailKeywords: ['best fire pit for small patio', 'how to warm up outdoor space'],
            metaDescription: 'Discover how to extend your outdoor living season with our guide to warming up your patio for spring evenings.',
            pinterestDescription: 'Get your patio ready for spring nights! 🔥 Discover the best fire pits and heaters to keep your outdoor space cozy and inviting. #SpringPatio #OutdoorLiving #FirePit'
        },
        authorId: 'default',
        content: [
            {
                type: 'paragraph',
                content: 'As the days get longer but the nights stay crisp, it\'s the perfect time to get your patio ready for spring entertaining.'
            }
        ]
    }
];

export function getAllArticles(): Article[] {
    return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(article => article.slug === slug);
}

export function getRelatedArticles(category: string, currentSlug: string): Article[] {
    return articles
        .filter(article => article.category === category && article.slug !== currentSlug)
        .slice(0, 3);
}
