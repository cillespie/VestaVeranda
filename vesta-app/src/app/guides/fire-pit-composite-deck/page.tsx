import { Metadata } from 'next';
import { Hero, ComparisonTable, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Can You Put a Fire Pit on a Composite Deck? Safe Options for 2026 | Vesta Veranda',
    description: 'Yes—with the right protection. Learn which fire pits work safely on Trex, TimberTech, and other composite decks. Includes heat mat recommendations and propane alternatives.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Can You Put a Fire Pit on a Composite Deck? Safe Options for 2026',
        description: 'Yes—with the right protection. Learn which fire pits work safely on Trex, TimberTech, and other composite decks.',
        url: 'https://vestaverandaliving.store/guides/fire-pit-composite-deck',
        images: [
            {
                url: '/images/fire-pit-deck-hero.png',
                width: 1200,
                height: 630,
                alt: 'Fire Pit on Composite Deck Guide',
            },
        ],
    },
};

export default function FirePitCompositeDeckGuide() {
    // Products from catalog
    const soloStoveBonfire = sampleProducts.find(p => p.id === 'solo-stove-bonfire-2');
    const soloStoveYukon = sampleProducts.find(p => p.id === 'solo-stove-yukon-2');
    const soloStoveMesa = sampleProducts.find(p => p.id === 'solo-stove-mesa-xl');
    const propaneTable = sampleProducts.find(p => p.id === 'serenelife-propane-fire-pit');
    const roundPropane = sampleProducts.find(p => p.id === 'generic-round-propane-table');
    const breeoX = sampleProducts.find(p => p.id === 'breeo-x-series-24');
    const breeoY = sampleProducts.find(p => p.id === 'breeo-y-series');
    const outvue = sampleProducts.find(p => p.id === 'outvue-47-fire-pit');

    // Inline product for heat shield (not in main catalog)
    const grillMat = {
        id: 'ubeesize-grill-mat',
        name: 'UBeesize Grill Mat',
        brand: 'UBeesize',
        category: 'hearth' as const,
        affiliateLink: 'https://amzn.to/3ZnLCpg',
        priceTier: '$' as const,
        badge: 'Deck Saver',
        ctaText: 'Protect Your Investment',
        lifestyleImage: '/images/fire-pit-deck-hero.png',
        description: '48×65 inch double-sided fireproof grill pad. Rated to 2000°F—far exceeding any fire pit\'s base temperature. Waterproof and oil-proof.',
        features: ['2000°F Heat Resistant', 'Waterproof', 'Double-Sided', 'Oil-Proof'],
    };

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Can You Put a Fire Pit on a Composite Deck? Safe Options for 2026',
        image: 'https://vestaverandaliving.store/images/fire-pit-deck-hero.png',
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
        datePublished: '2026-01-10',
        dateModified: new Date().toISOString().split('T')[0],
        description: 'Yes—with the right protection. Learn which fire pits work safely on Trex, TimberTech, and other composite decks. Includes heat mat recommendations and propane alternatives.'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <Hero
                title="Can You Put a Fire Pit on a Composite Deck?"
                ctaText="Skip to Safe Options →"
                ctaHref="#safe-options"
                backgroundImage="/images/fire-pit-deck-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Quick Answer Box - Featured Snippet Target */}
                        <div className="bg-linear-to-r from-emerald-50 to-sage/10 border-l-4 border-emerald-600 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">✅</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-emerald-800 mb-3">
                                        The Short Answer: YES, But Protection Is Essential
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        Fire pits CAN be used safely on composite decking—<strong>but without proper protection, deck damage is almost guaranteed.</strong> Wood-burning fire pits reach 800-1000°F at the base, while composite materials start softening at just 176°F.
                                    </p>
                                    <p className="text-lg text-charcoal/80 leading-relaxed mt-3">
                                        <strong>The solution:</strong> Use a heat-resistant mat ($30-50) under any wood-burning fire pit, or choose a propane fire table designed for deck use.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Editorial Content */}
                        <article className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal text-charcoal/80 mx-auto">

                            <h2>Why Composite Decks Need Special Consideration</h2>
                            <p className="text-xl font-medium text-charcoal">
                                Composite decking (Trex, TimberTech, Fiberon, and similar brands) is made from
                                wood fibers mixed with plastic polymers. This composition makes it excellent for
                                resisting rot, insects, and weathering—but vulnerable to heat damage.
                            </p>
                            <p>
                                The problem isn&apos;t flames reaching the deck surface. It&apos;s <strong>radiant
                                    heat from the fire pit&apos;s base</strong> transferring directly downward over time.
                                Even 20-30 minutes of use can cause permanent warping or discoloration without protection.
                            </p>

                        </article>

                        {/* Visual Warning Box */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl not-prose my-8">
                            <h4 className="font-bold text-red-800 mb-3 text-lg">🌡️ The Temperature Problem</h4>
                            <ul className="space-y-2 text-red-900/80">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-2xl leading-none">800°F+</span>
                                    <span>Temperature at the bottom of a wood-burning fire pit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-2xl leading-none">176°F</span>
                                    <span>Temperature where composite starts softening</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-2xl leading-none">$15K+</span>
                                    <span>Average cost to replace a heat-damaged deck</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA Banner */}
            <VisualCTA
                headline="The Essential Accessory for Deck Protection"
                subheadline="Heat-resistant mats rated to 2000°F create a barrier between your fire pit and composite decking. A small investment that prevents expensive damage."
                imageSrc="/images/fire-pit-deck-hero.png"
                imageAlt="Fire pit on composite deck with heat mat protection"
                ctaText="Shop Heat Protection Mats"
                ctaLink="https://amzn.to/3ZnLCpg"
                badge="Essential Accessory"
                variant="banner"
                theme="dark"
            />

            {/* The Three Approaches */}
            <section id="safe-options" className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">
                            Three Safe Approaches for Deck Fire Pits
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            Each option offers different trade-offs between convenience, ambiance, and protection level.
                        </p>

                        {/* Option 1 - Propane */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                            <div className="bg-emerald-600 text-white py-3 px-6">
                                <span className="font-bold">Option 1: Propane Fire Table</span>
                                <span className="ml-2 text-emerald-200">• Lowest Risk</span>
                            </div>
                            <div className="p-6 md:p-8">
                                <p className="text-charcoal/80 mb-6">
                                    <strong>Why it&apos;s the safest choice:</strong> Propane fire tables produce no sparks,
                                    no embers, and no ash. The base stays significantly cooler than wood-burning alternatives,
                                    and flames are controlled and predictable. Most models can be placed directly on composite
                                    without additional protection.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    {propaneTable && <ProductCard product={propaneTable} />}
                                    {roundPropane && <ProductCard product={roundPropane} />}
                                </div>
                            </div>
                        </div>

                        {/* Option 2 - Smokeless + Mat */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                            <div className="bg-amber-600 text-white py-3 px-6">
                                <span className="font-bold">Option 2: Smokeless Fire Pit + Heat Mat</span>
                                <span className="ml-2 text-amber-200">• Best Experience</span>
                            </div>
                            <div className="p-6 md:p-8">
                                <p className="text-charcoal/80 mb-6">
                                    <strong>For the authentic wood-burning experience:</strong> Smokeless fire pits
                                    provide real crackle, real flames, and that campfire ambiance—without smoke
                                    blowing in faces. <em>Always use with a heat mat underneath.</em>
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    {soloStoveBonfire && <ProductCard product={soloStoveBonfire} />}
                                    {breeoY && <ProductCard product={breeoY} />}
                                </div>
                                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                                    <p className="text-sm text-amber-800 font-medium flex items-start gap-2">
                                        <span className="text-xl">⚠️</span>
                                        <span><strong>Critical:</strong> A heat mat is mandatory for wood-burning fire pits on composite. The base temperature far exceeds what any composite can handle.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Option 3 - Tabletop */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-blue-600 text-white py-3 px-6">
                                <span className="font-bold">Option 3: Tabletop Fire Pit</span>
                                <span className="ml-2 text-blue-200">• Minimal Footprint</span>
                            </div>
                            <div className="p-6 md:p-8">
                                <p className="text-charcoal/80 mb-6">
                                    <strong>For small decks and balconies:</strong> Tabletop fire pits produce minimal
                                    heat output and sit on tables rather than directly on deck surfaces. Perfect for
                                    intimate gatherings or spaces where a full-size fire pit isn&apos;t practical.
                                </p>
                                {soloStoveMesa && (
                                    <div className="max-w-md">
                                        <ProductCard product={soloStoveMesa} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Smokeless Options */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
                            More Smokeless Fire Pit Options
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            All of these require heat mats when used on composite decking.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {soloStoveYukon && <ProductCard product={soloStoveYukon} />}
                            {breeoX && <ProductCard product={breeoX} />}
                            {outvue && <ProductCard product={outvue} />}
                            <ProductCard product={grillMat} />
                        </div>
                    </div>
                </div>
            </section>

            {/* What NOT To Do */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            🚫 Common Mistakes to Avoid
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    mistake: "Placing fire pit directly on composite",
                                    why: "Even short sessions cause warping and discoloration. Damage is often irreversible.",
                                    icon: "🔥"
                                },
                                {
                                    mistake: "Using pavers alone as protection",
                                    why: "Pavers absorb and retain heat, then transfer it to the deck below. Use with a mat underneath.",
                                    icon: "🧱"
                                },
                                {
                                    mistake: "Ignoring manufacturer clearances",
                                    why: "Maintain 10ft from railings, walls, and overhangs. This is basic fire safety.",
                                    icon: "📏"
                                },
                                {
                                    mistake: "Assuming 'outdoor-safe' means 'deck-safe'",
                                    why: "A fire pit can be perfectly safe on grass or concrete but still damage composite decking.",
                                    icon: "⚠️"
                                },
                            ].map((item, index) => (
                                <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-red-800 mb-1">{item.mistake}</h4>
                                            <p className="text-red-700/80 text-sm">{item.why}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA - Horizontal */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="Cozy Evenings Without the Worry"
                    subheadline="Tabletop fire pits add ambiance to any deck or balcony with minimal heat output and zero ground contact."
                    imageSrc="/images/products/solo-stove-mesa-xl.png"
                    imageAlt="Solo Stove Mesa XL tabletop fire pit"
                    ctaText="Shop Tabletop Fire Pits"
                    ctaLink="https://amzn.to/3YM9O4D"
                    badge="Perfect for Small Spaces"
                    variant="horizontal"
                    theme="warm"
                />
            </div>

            {/* Comparison Table */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Quick Comparison: Deck-Safe Fire Pit Options
                        </h2>
                        <ComparisonTable
                            title="Find the Right Fire Pit for Your Deck"
                            rows={[
                                {
                                    productName: "SereneLife Propane Table",
                                    keyFeature: "50K BTU, zero sparks, instant on/off",
                                    bestFor: "Maximum safety on composite",
                                    priceTier: "$$$$",
                                    link: "https://amzn.to/4b6nO0t"
                                },
                                {
                                    productName: "Solo Stove Bonfire 2.0",
                                    keyFeature: "Smokeless, portable, mesmerizing flames",
                                    bestFor: "Wood-fire experience (with mat)",
                                    priceTier: "$$",
                                    link: "https://amzn.to/4b92HL4"
                                },
                                {
                                    productName: "Breeo Y Series",
                                    keyFeature: "Portable, adjustable legs",
                                    bestFor: "Multi-location use (with mat)",
                                    priceTier: "$$",
                                    link: "https://amzn.to/3LVByAT"
                                },
                                {
                                    productName: "Solo Stove Mesa XL",
                                    keyFeature: "Tabletop size, minimal footprint",
                                    bestFor: "Small decks and balconies",
                                    priceTier: "$$",
                                    link: "https://amzn.to/3YM9O4D"
                                },
                                {
                                    productName: "UBeesize Heat Mat",
                                    keyFeature: "2000°F protection, rolls up",
                                    bestFor: "Essential for any wood-burning pit",
                                    priceTier: "$",
                                    link: "https://amzn.to/3ZnLCpg"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "Will a fire pit void my Trex warranty?",
                                    answer: "Most likely, yes. Trex and most composite manufacturers explicitly exclude heat and fire damage from warranty coverage. This makes proper protection especially important—there's no manufacturer backup if something goes wrong."
                                },
                                {
                                    question: "How far should the fire pit be from deck railings?",
                                    answer: "Maintain a minimum of 10 feet from railings, overhead structures, and anything flammable. This applies to all fire pits, regardless of fuel type. Check local fire codes for additional requirements."
                                },
                                {
                                    question: "Can pavers under the fire pit protect composite?",
                                    answer: "Pavers alone are not sufficient. They absorb and retain heat, then transfer it to the deck below. If using pavers for aesthetics, place a heat-resistant mat underneath them."
                                },
                                {
                                    question: "Are electric fire pits safe for composite decks?",
                                    answer: "Yes, electric fire pits are completely deck-safe since they produce no real heat. They're also suitable for apartments and covered patios where open flames aren't permitted."
                                },
                                {
                                    question: "Do propane fire pits need heat mats too?",
                                    answer: "Most propane fire tables are designed with bases that stay relatively cool, making mats unnecessary. However, checking the specific model's specifications is recommended. When in doubt, additional protection never hurts."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
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
            <section className="section bg-linear-to-r from-terracotta to-orange-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Add Fire to Your Deck Life?
                        </h2>
                        <p className="text-white text-lg mb-8 max-w-xl mx-auto">
                            Choose the right fire pit for your space, add protection if needed, and enjoy
                            cozy evenings without worrying about your investment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://amzn.to/4b6nO0t"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Propane Fire Tables
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="https://amzn.to/3ZnLCpg"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-transparent border-2 border-black text-black font-bold px-8 py-4 rounded-full hover:bg-black/10 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Heat Protection Mats
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Can You Put a Fire Pit on a Composite Deck?"
                    url="/guides/fire-pit-composite-deck"
                    image="/images/fire-pit-deck-hero.png"
                />
            </div>

            {/* Affiliate Disclaimer */}
            <section className="py-6 bg-charcoal/5 border-t border-warm-gray-200">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
                        <strong>Affiliate Disclosure:</strong> Vesta Veranda earns commissions from qualifying purchases through affiliate links at no extra cost to you.
                        Product recommendations are based on research, specifications, and customer reviews. Prices and availability subject to change. Thank you for supporting us!
                    </p>
                </div>
            </section>
        </>
    );
}
