import Image from 'next/image';
import { generateProductSchema } from '@/lib/schema-helpers';

// Get site URL for schema generation
const getSiteUrl = () => {
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://vestaverandaliving.store';
};

export interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;
    affiliateLink: string;
    priceTier: '$' | '$$' | '$$$' | '$$$$' | '$$$$$';
    badge?: string;
    description: string;
    features: string[];
    ctaText?: string;
    lifestyleImage?: string;
}

interface ProductCardProps {
    product: Product;
    variant?: 'default' | 'compact' | 'featured';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
    const { name, brand, priceTier, badge, description, affiliateLink, lifestyleImage, ctaText } = product;

    // Render price tier indicators
    const renderPriceTier = () => {
        const tiers = ['$', '$$', '$$$', '$$$$', '$$$$$'];
        const activeIndex = tiers.indexOf(priceTier);

        return (
            <div className="price-tier flex gap-0.5">
                {tiers.map((tier, index) => (
                    <span
                        key={tier}
                        className={`text-sm font-bold ${index <= activeIndex ? 'text-green-600' : 'text-gray-300'}`}
                    >
                        $
                    </span>
                ))}
            </div>
        );
    };

    if (variant === 'compact') {
        return (
            <div className="card group">
                <div className="relative aspect-square overflow-hidden">
                    {lifestyleImage ? (
                        <Image
                            src={lifestyleImage}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="image-placeholder image-placeholder-square flex-col">
                            <span className="text-3xl mb-2">📷</span>
                            <span className="text-xs opacity-60">Product Image</span>
                        </div>
                    )}
                    {badge && (
                        <span className="absolute top-3 left-3 badge badge-terracotta">
                            {badge}
                        </span>
                    )}
                </div>
                <div className="p-4">
                    <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-1">{brand}</p>
                    <h3 className="font-heading text-base font-semibold mb-2 line-clamp-2">{name}</h3>
                    <div className="flex items-center justify-between">
                        {renderPriceTier()}
                        <a
                            href={affiliateLink}
                            target="_blank"
                            rel="nofollow sponsored"
                            className="text-terracotta text-sm font-semibold hover:underline"
                        >
                            {ctaText || 'Shop'} →
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'featured') {
        const siteUrl = getSiteUrl();
        const productSchema = generateProductSchema(product, siteUrl);

        return (
            <>
                {/* Product Schema for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
                <div className="card card-elevated group overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative aspect-square md:aspect-auto overflow-hidden">
                            {lifestyleImage ? (
                                <Image
                                    src={lifestyleImage}
                                    alt={name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="image-placeholder h-full flex-col">
                                    <span className="text-5xl mb-3">📷</span>
                                    <span className="text-sm opacity-60">Featured Product Image</span>
                                    <span className="text-xs opacity-40 mt-1">1200 × 800 recommended</span>
                                </div>
                            )}
                            {badge && (
                                <span className="absolute top-4 left-4 badge badge-terracotta text-sm px-4 py-1.5">
                                    {badge}
                                </span>
                            )}
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <p className="text-sm text-sage uppercase tracking-wider font-semibold mb-2">{brand}</p>
                            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{name}</h3>
                            <p className="text-charcoal/70 leading-relaxed mb-6">{description}</p>
                            <div className="flex items-center gap-4 mb-6">
                                {renderPriceTier()}
                            </div>
                            <a
                                href={affiliateLink}
                                target="_blank"
                                rel="nofollow sponsored"
                                className="btn btn-primary inline-flex items-center gap-2"
                            >
                                {ctaText || 'Get This for Your Patio'}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // Default variant
    const siteUrl = getSiteUrl();
    const productSchema = generateProductSchema(product, siteUrl);

    return (
        <>
            {/* Product Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <div className="card group">
                <div className="relative aspect-[4/3] overflow-hidden">
                    {lifestyleImage ? (
                        <Image
                            src={lifestyleImage}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="image-placeholder flex-col">
                            <span className="text-4xl mb-2">📷</span>
                            <span className="text-sm opacity-60">Lifestyle Image</span>
                            <span className="text-xs opacity-40 mt-1">800 × 600 recommended</span>
                        </div>
                    )}
                    {badge && (
                        <span className="absolute top-3 left-3 badge badge-terracotta">
                            {badge}
                        </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                        <p className="text-xs text-charcoal/50 uppercase tracking-wider">{brand}</p>
                        {renderPriceTier()}
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2 line-clamp-2 group-hover:text-terracotta transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm text-charcoal/60 line-clamp-2 mb-4">{description}</p>
                    <a
                        href={affiliateLink}
                        target="_blank"
                        rel="nofollow sponsored"
                        className="btn btn-primary w-full justify-center text-sm py-3"
                    >
                        {ctaText || 'Get This for Your Patio'}
                    </a>
                </div>
            </div>
        </>
    );
}
