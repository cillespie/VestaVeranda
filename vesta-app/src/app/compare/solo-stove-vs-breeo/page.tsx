import { Metadata } from 'next';
import { Hero, ShareButtons, ComparisonTable } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Solo Stove vs Breeo: Which Smokeless Fire Pit is Best? (2026) | Vesta Veranda',
    description: 'The ultimate showdown: Solo Stove Bonfire vs Breeo X Series. We compare portability, cooking capability, durability, and price to help you choose.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Solo Stove vs Breeo: Which Smokeless Fire Pit is Best? (2026)',
        description: 'The ultimate showdown: Solo Stove Bonfire vs Breeo X Series. We compare portability, cooking capability, durability, and price.',
        url: 'https://vestaverandaliving.store/compare/solo-stove-vs-breeo',
        images: [
            {
                url: '/images/solo_vs_breeo_hero.png',
                width: 1200,
                height: 630,
                alt: 'Solo Stove vs Breeo Comparison',
            },
        ],
    },
};

export default function SoloVsBreeoGuide() {
    const solo = sampleProducts.find(p => p.id === 'solo-stove-bonfire-2');
    const breeo = sampleProducts.find(p => p.id === 'breeo-x-series-24');

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Solo Stove vs Breeo: Which Smokeless Fire Pit is Best? (2026)',
        image: 'https://vestaverandaliving.store/images/solo_vs_breeo_hero.png',
        author: {
            '@type': 'Organization',
            name: 'Vesta Veranda Living'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Vesta Veranda Living',
            logo: {
                '@type': 'ImageObject',
                url: 'https://vestaverandaliving.store/logo.jpg'
            }
        },
        datePublished: '2026-01-15',
        dateModified: new Date().toISOString().split('T')[0],
        description: 'The ultimate showdown: Solo Stove Bonfire vs Breeo X Series. We compare portability, cooking capability, durability, and price to help you choose.'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <Hero
                title="Solo Stove vs Breeo: The Smokeless Showdown"
                ctaText="Jump to Verdict →"
                ctaHref="#verdict"
                backgroundImage="/images/solo_vs_breeo_hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <h2 className="font-heading text-2xl font-bold text-orange-800 mb-3">
                                The Bottom Line Up Front
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                                <strong>Buy the Solo Stove Bonfire 2.0 if:</strong> You value portability, aesthetics, and ease of use. It&apos;s lighter, easier to empty, and creates a mesmerizing &quot;floating&quot; flame.
                            </p>
                            <p className="text-lg text-charcoal/80 leading-relaxed">
                                <strong>Buy the Breeo X Series if:</strong> You want a permanent backyard fixture and love live-fire cooking. It&apos;s built like a tank (literally heavy) and has a superior grilling rim.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Side by Side Product Cards */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-slate-700 text-white py-3 px-6 text-center">
                                    <span className="font-bold">Team Portable</span>
                                </div>
                                <div className="p-6">
                                    {solo && <ProductCard product={solo} />}
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-orange-700 text-white py-3 px-6 text-center">
                                    <span className="font-bold">Team Cooking</span>
                                </div>
                                <div className="p-6">
                                    {breeo && <ProductCard product={breeo} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Points */}
            <section id="compare" className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Deep Dive Breakdown
                        </h2>

                        {/* Point 1: Cooking */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">1. Cooking Capabilities</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-limestone p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">Breeo (Winner 🏆)</h4>
                                    <p className="text-sm text-charcoal/80">Designed for cooking first. The wide rim allows searing, and the optional Outpost grill attachment is rock solid. It&apos;s a wood-fired grill that happens to be a fire pit.</p>
                                </div>
                                <div className="bg-white border border-charcoal/10 p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">Solo Stove</h4>
                                    <p className="text-sm text-charcoal/80">Cooking is possible but requires extra accessories (hub + cast iron). It feels more like an add-on than a core feature.</p>
                                </div>
                            </div>
                        </div>

                        {/* Point 2: Portability */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">2. Portability</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border border-charcoal/10 p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">Breeo</h4>
                                    <p className="text-sm text-charcoal/80">The X24 weighs 62 lbs. Once you place it, you won&apos;t want to move it. It&apos;s a permanent furniture piece.</p>
                                </div>
                                <div className="bg-limestone p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">Solo Stove (Winner 🏆)</h4>
                                    <p className="text-sm text-charcoal/80">The Bonfire weighs just 23 lbs. It comes with a carrying case. You can easily take it from patio to campsite to beach.</p>
                                </div>
                            </div>
                        </div>

                        {/* Point 3: Durability */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">3. Durability</h3>
                            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                                <p className="text-charcoal/80">
                                    <strong>It&apos;s a tie, but different styles.</strong> Solo Stove uses 304 Stainless Steel (shiny, modern). Breeo uses Corten Steel (develops a rustic patina rust layer). Both will last a lifetime, but Breeo feels more &quot;indestructible&quot; due to the thickness of the steel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Specs Head-to-Head
                        </h2>
                        <ComparisonTable
                            title="Solo Stove vs Breeo Specs"
                            rows={[
                                {
                                    productName: "Solo Stove Bonfire 2.0",
                                    keyFeature: "Lightweight & Portable",
                                    bestFor: "Camping & Flexible Patios",
                                    priceTier: "$$",
                                    link: solo?.affiliateLink || '#'
                                },
                                {
                                    productName: "Breeo X Series 24",
                                    keyFeature: "Heavy Duty Cooking",
                                    bestFor: "Permanent Backyard Setup",
                                    priceTier: "$$$",
                                    link: breeo?.affiliateLink || '#'
                                },
                                {
                                    productName: "Breeo Y Series",
                                    keyFeature: "Portable Option",
                                    bestFor: "Breeo fans who camp",
                                    priceTier: "$$",
                                    link: "https://amzn.to/3LVByAT"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Verdict Section */}
            <section id="verdict" className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
                            Which One Belongs in Your Yard?
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <a
                                href={solo?.affiliateLink}
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-slate-800 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-700 transition-all"
                            >
                                Shop Solo Stove Bonfire
                            </a>
                            <a
                                href={breeo?.affiliateLink}
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-orange-700 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-all"
                            >
                                Shop Breeo X Series
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl mt-12">
                <ShareButtons
                    title="Solo Stove vs Breeo Review 2026"
                    url="/compare/solo-stove-vs-breeo"
                    image="/images/solo_vs_breeo_hero.png"
                />
            </div>

            {/* Affiliate Disclaimer */}
            <section className="py-6 bg-charcoal/5 border-t border-warm-gray-200 mt-12">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
                        <strong>Affiliate Disclosure:</strong> Vesta Veranda earns commissions from qualifying purchases through affiliate links at no extra cost to you.
                        Product recommendations are based on specifications, features, and customer reviews. Prices and availability subject to change. Thank you for supporting us!
                    </p>
                </div>
            </section>
        </>
    );
}
