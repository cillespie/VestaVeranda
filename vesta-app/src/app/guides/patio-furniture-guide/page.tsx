import { Metadata } from 'next';
import { Hero, ComparisonTable, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Best Outdoor Patio Furniture 2026: Complete Buyer\'s Guide | Vesta Veranda',
    description: 'From budget wicker sets to buy-it-for-life HDPE dining tables. Compare materials, durability, and value across all price points. Find furniture that lasts.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Best Outdoor Patio Furniture 2026: Complete Buyer\'s Guide',
        description: 'From budget wicker sets to buy-it-for-life HDPE dining tables. Compare materials, durability, and value.',
        url: 'https://vestaverandaliving.store/guides/patio-furniture-guide',
        images: [
            {
                url: '/images/patio-furniture-hero.png',
                width: 1200,
                height: 630,
                alt: 'Patio Furniture Buyer\'s Guide',
            },
        ],
    },
};

export default function PatioFurnitureGuide() {
    // Dining Sets
    const polywood = sampleProducts.find(p => p.id === 'polywood-lakeside-dining');
    const walkerEdison = sampleProducts.find(p => p.id === 'walker-edison-delray');
    const grandPatio = sampleProducts.find(p => p.id === 'grand-patio-bistro');

    // Lounge Furniture
    const devoko = sampleProducts.find(p => p.id === 'devoko-wicker-set');
    const keterCorfu = sampleProducts.find(p => p.id === 'keter-corfu-loveseat');
    const wisteriaLane = sampleProducts.find(p => p.id === 'wisteria-lane-7-piece');
    const eggChair = sampleProducts.find(p => p.id === 'christopher-knight-egg-chair');
    const modularSectional = sampleProducts.find(p => p.id === 'generic-modular-sectional');
    const zeroGravity = sampleProducts.find(p => p.id === 'best-choice-zero-gravity');

    // Decor & Accessories
    const rug = sampleProducts.find(p => p.id === 'safavieh-courtyard-rug');
    const deckBox = sampleProducts.find(p => p.id === 'keter-westwood-deck-box');
    const privacyScreen = sampleProducts.find(p => p.id === 'veradek-privacy-screen');
    const dinnerware = sampleProducts.find(p => p.id === 'gibson-melamine-dinnerware');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'Best Outdoor Patio Furniture 2026: Complete Buyer\'s Guide',
                        image: 'https://vestaverandaliving.store/images/patio-furniture-hero.png',
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
                        datePublished: '2026-01-24',
                        dateModified: new Date().toISOString().split('T')[0],
                        description: 'From budget wicker sets to buy-it-for-life HDPE dining tables. Compare materials, durability, and value across all price points. Find furniture that lasts.'
                    })
                }}
            />
            {/* Hero Section */}
            <Hero
                title="The Complete Outdoor Furniture Guide"
                ctaText="Find Your Style →"
                ctaHref="#dining"
                backgroundImage="/images/patio-furniture-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Quick Answer Box */}
                        <div className="bg-linear-to-r from-sage/20 to-emerald-50 border-l-4 border-sage p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">🪑</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                        Quick Material Guide
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Best for longevity:</strong> HDPE (Polywood) — virtually indestructible, 20-year warranties<br />
                                        <strong>Best value:</strong> Resin wicker on steel frames — weather-resistant, under $500 for full sets<br />
                                        <strong>Best aesthetics:</strong> Acacia wood — natural beauty, requires annual maintenance
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Material Comparison Grid */}
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Outdoor Furniture Materials Compared
                        </h2>
                        <div className="grid md:grid-cols-4 gap-4 mb-12">
                            {[
                                { material: "HDPE", durability: "★★★★★", maintenance: "None", cost: "$$$", best: "Coastal/harsh weather" },
                                { material: "Aluminum", durability: "★★★★☆", maintenance: "Low", cost: "$$-$$$", best: "Modern style" },
                                { material: "Resin Wicker", durability: "★★★★☆", maintenance: "Low", cost: "$-$$", best: "Budget-conscious" },
                                { material: "Teak/Acacia", durability: "★★★☆☆", maintenance: "Annual", cost: "$$-$$$$", best: "Natural aesthetic" },
                            ].map((item, index) => (
                                <div key={index} className="bg-limestone rounded-xl p-4 text-center">
                                    <div className="font-bold text-charcoal text-lg mb-2">{item.material}</div>
                                    <div className="text-sm text-charcoal/70 space-y-1">
                                        <div>Durability: {item.durability}</div>
                                        <div>Maintenance: {item.maintenance}</div>
                                        <div>Cost: {item.cost}</div>
                                    </div>
                                    <div className="mt-2 text-xs text-terracotta font-medium">{item.best}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Dining Sets */}
            <section id="dining" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-sage rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Outdoor Dining
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Dining Sets for Every Budget
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                From intimate bistro tables to full family dining sets. Choose based on space,
                                style, and how much maintenance you want to do.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-emerald-100 text-emerald-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    Buy It For Life
                                </div>
                                {polywood && <ProductCard product={polywood} />}
                            </div>
                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    Natural Wood
                                </div>
                                {walkerEdison && <ProductCard product={walkerEdison} />}
                            </div>
                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    Small Spaces
                                </div>
                                {grandPatio && <ProductCard product={grandPatio} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="The 20-Year Dining Set"
                    subheadline="HDPE lumber outlasts wood, wicker, and aluminum. No sanding, staining, or worrying about rain damage. Made in the USA."
                    imageSrc="/images/products/polywood-lakeside-dining.png"
                    imageAlt="Polywood outdoor dining set"
                    ctaText="Shop Polywood Sets"
                    ctaLink="https://amzn.to/3NtpRBU"
                    badge="Best Long-Term Value"
                    variant="horizontal"
                    theme="cool"
                />
            </div>

            {/* Lounge Furniture */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-terracotta rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Lounge & Conversation
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Seating for Relaxation
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Conversation sets, loveseats, and statement pieces that transform patios into outdoor living rooms.
                            </p>
                        </div>

                        {/* Budget Row */}
                        <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                            💰 Budget-Friendly (Under $200)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {devoko && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={devoko} />
                                </div>
                            )}
                            {zeroGravity && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={zeroGravity} />
                                </div>
                            )}
                        </div>

                        {/* Mid-Range Row */}
                        <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                            ⭐ Mid-Range ($200-$600)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {keterCorfu && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={keterCorfu} />
                                </div>
                            )}
                            {modularSectional && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={modularSectional} />
                                </div>
                            )}
                        </div>

                        {/* Premium Row */}
                        <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                            👑 Premium Pieces
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {wisteriaLane && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={wisteriaLane} />
                                </div>
                            )}
                            {eggChair && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={eggChair} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Accessories Section */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-charcoal rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Finishing Touches
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Accessories That Complete the Space
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Rugs, storage, privacy, and dining essentials that elevate outdoor living.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {rug && (
                                <div className="bg-limestone rounded-2xl p-5">
                                    <ProductCard product={rug} />
                                </div>
                            )}
                            {deckBox && (
                                <div className="bg-limestone rounded-2xl p-5">
                                    <ProductCard product={deckBox} />
                                </div>
                            )}
                            {privacyScreen && (
                                <div className="bg-limestone rounded-2xl p-5">
                                    <ProductCard product={privacyScreen} />
                                </div>
                            )}
                            {dinnerware && (
                                <div className="bg-limestone rounded-2xl p-5">
                                    <ProductCard product={dinnerware} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Quick Comparison: Lounge Sets
                        </h2>
                        <ComparisonTable
                            title="Find Your Perfect Fit"
                            rows={[
                                {
                                    productName: "Devoko 3-Piece Wicker",
                                    keyFeature: "Under $100, steel frame",
                                    bestFor: "Starting out, tight budgets",
                                    priceTier: "$",
                                    link: "https://amzn.to/3Lq3EUR"
                                },
                                {
                                    productName: "Best Choice Zero Gravity (2)",
                                    keyFeature: "Recline, cup holders, foldable",
                                    bestFor: "Poolside, sunbathing",
                                    priceTier: "$$",
                                    link: "https://amzn.to/4qxS8WI"
                                },
                                {
                                    productName: "Keter Corfu Loveseat",
                                    keyFeature: "Resin, UV protected",
                                    bestFor: "Low maintenance, couples",
                                    priceTier: "$$",
                                    link: "https://amzn.to/4t8pQ6X"
                                },
                                {
                                    productName: "7-Piece Modular Sectional",
                                    keyFeature: "Reconfigurable layout",
                                    bestFor: "Large patios, flexibility",
                                    priceTier: "$$$",
                                    link: "https://amzn.to/4a5AweL"
                                },
                                {
                                    productName: "Christopher Knight Egg Chair",
                                    keyFeature: "Hanging swing, statement piece",
                                    bestFor: "Style-focused, reading nook",
                                    priceTier: "$$$$",
                                    link: "https://amzn.to/45odayq"
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "Should outdoor furniture be covered or stored in winter?",
                                    answer: "HDPE and resin furniture can stay out year-round in any climate. Wicker on steel frames should be covered or stored in freezing climates. Wood furniture benefits from covers. Cushions should always be stored indoors during off-seasons."
                                },
                                {
                                    question: "How do you clean outdoor furniture?",
                                    answer: "Most outdoor furniture cleans with mild soap and water plus a soft brush. For stubborn stains, diluted bleach (1:10) works on most materials except aluminum. Power washing is safe for HDPE and resin but can damage wicker weaves."
                                },
                                {
                                    question: "Is expensive outdoor furniture worth it?",
                                    answer: "Generally yes for long-term cost. A $500 HDPE set lasting 20 years costs $25/year. A $150 budget set lasting 3 years costs $50/year. Quality materials also look better and feel more comfortable throughout their lifespan."
                                },
                                {
                                    question: "What size patio furniture for a 10x10 space?",
                                    answer: "A 10x10 space fits either a bistro set (2 chairs + small table) OR a compact loveseat with side table. Avoid full dining sets or sectionals—they'll overwhelm the space. Leave 3 feet of walkway around furniture."
                                },
                            ].map((faq, index) => (
                                <div key={index} className="bg-limestone rounded-xl p-6">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-charcoal/70">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-linear-to-r from-sage to-emerald-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Upgrade Your Outdoor Space?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                            Start with one anchor piece—a statement sectional, a quality dining table, or
                            that egg chair you&apos;ve been eyeing. Build from there.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://amzn.to/3NtpRBU"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Dining Sets
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="https://amzn.to/3Lq3EUR"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-transparent border-2 border-white text-black font-bold px-8 py-4 rounded-full hover:bg-black/10 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Browse Lounge Furniture
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="High-End Patio Furniture Buying Guide 2026"
                    url="/guides/patio-furniture-guide"
                    image="/images/furniture-hero.jpg"
                />
            </div>

            {/* Affiliate Disclaimer */}
            <section className="py-6 bg-charcoal/5 border-t border-warm-gray-200">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
                        <strong>Affiliate Disclosure:</strong> Vesta Veranda earns commissions from qualifying purchases through affiliate links.
                        Product recommendations are based on specifications, features, and customer reviews. Prices and availability subject to change.
                    </p>
                </div>
            </section >
        </>
    );
}
