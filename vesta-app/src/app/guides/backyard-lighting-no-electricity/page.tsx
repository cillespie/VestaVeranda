import { Metadata } from 'next';
import { Hero, ComparisonTable, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'How to Light Your Backyard Without Electricity (Solar + Battery Ideas) | Vesta Veranda',
    description: 'No outdoor outlets? Solar string lights, pathway stakes, and battery lanterns transform patios without electricians. Complete guide with product recommendations.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'How to Light Your Backyard Without Electricity (Solar + Battery Ideas)',
        description: 'No outdoor outlets? Solar string lights, pathway stakes, and battery lanterns transform patios without electricians.',
        url: 'https://vestaverandaliving.store/guides/backyard-lighting-no-electricity',
        images: [
            {
                url: '/images/backyard-lighting-hero.png',
                width: 1200,
                height: 630,
                alt: 'Backyard Lighting Without Electricity Guide',
            },
        ],
    },
};

export default function BackyardLightingGuide() {
    const brightech = sampleProducts.find(p => p.id === 'brightech-solar-lights');
    const brightown = sampleProducts.find(p => p.id === 'brightown-string-lights');
    const umbrella = sampleProducts.find(p => p.id === 'purple-leaf-cantilever');

    // Inline products with unique images
    const fireflyLights = {
        id: 'vignuto-firefly-lights',
        name: 'Vignuto Firefly Solar Lights (4 Pack)',
        brand: 'Vignuto',
        category: 'glow' as const,
        affiliateLink: 'https://amzn.to/4jSLUhz',
        priceTier: '$' as const,
        badge: 'Magical',
        ctaText: 'Add Some Magic',
        lifestyleImage: '/images/products/vignuto-firefly-lights.png',
        description: 'Swaying "firefly" lights on flexible wires. Solar powered with 10-14 hour runtime. Creates enchanting garden atmosphere.',
        features: ['Solar Powered', 'Warm White', 'IP65 Waterproof', '4 Pack'],
    };

    const pathwayLights = {
        id: 'alepod-pathway-lights',
        name: 'ALEPOD Pathway Solar Lights (8 Pack)',
        brand: 'ALEPOD',
        category: 'glow' as const,
        affiliateLink: 'https://amzn.to/3LH1Vuk',
        priceTier: '$' as const,
        badge: 'Best Pathway',
        ctaText: 'Light The Way',
        lifestyleImage: '/images/products/alepod-pathway-lights.png',
        description: 'Tungsten filament style bulbs that mimic vintage Edison lights. 3 brightness modes. Perfect warm amber glow.',
        features: ['Solar Powered', 'Tungsten Style', 'IP65 Waterproof', '8 Pack'],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'How to Light Your Backyard Without Electricity (Solar + Battery Ideas)',
                        image: 'https://vestaverandaliving.store/images/backyard-lighting-hero.png',
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
                        datePublished: '2026-01-22',
                        dateModified: new Date().toISOString().split('T')[0],
                        description: 'No outdoor outlets? Solar string lights, pathway stakes, and battery lanterns transform patios without electricians. Complete guide with product recommendations.'
                    })
                }}
            />
            {/* Hero Section */}
            <Hero
                title="How to Light Your Backyard Without Electricity"
                ctaText="See Lighting Solutions →"
                ctaHref="#setup"
                backgroundImage="/images/backyard-lighting-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Quick Answer Box */}
                        <div className="bg-linear-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">💡</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-amber-800 mb-3">
                                        The Quick Answer
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Solar string lights</strong> are the foundation of wire-free patio lighting.
                                        Modern commercial-grade options with shatterproof bulbs provide 8-12 hours of light on
                                        a single day&apos;s charge. Add <strong>pathway stakes</strong> for walkways and
                                        <strong> firefly lights</strong> for garden beds. Budget $150-200 for a complete transformation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Editorial Content */}
                        <article className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal text-charcoal/80 mx-auto">

                            <h2>The Case for Solar Outdoor Lighting</h2>
                            <p className="text-xl font-medium text-charcoal">
                                Running electrical lines to outdoor areas typically costs $800-2,000+ depending on
                                distance and complexity. Solar lighting achieves similar ambiance for a fraction
                                of the cost, with zero ongoing electricity costs.
                            </p>
                            <p>
                                Modern solar LED technology has improved dramatically. Quality fixtures now provide
                                reliable illumination across multiple seasons without the maintenance headaches of
                                earlier generations.
                            </p>
                        </article>

                        {/* Solar Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-4 my-8">
                            {[
                                { icon: "☀️", stat: "6-8 hrs", label: "of sunlight = 8-12 hrs light" },
                                { icon: "🌙", stat: "Auto on/off", label: "dusk-to-dawn sensors standard" },
                                { icon: "💧", stat: "IP65+", label: "waterproof rating handles weather" },
                            ].map((item, index) => (
                                <div key={index} className="bg-limestone rounded-xl p-6 text-center">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="font-bold text-charcoal text-xl">{item.stat}</div>
                                    <div className="text-sm text-charcoal/60">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Three Layers */}
            <section id="setup" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                The Three-Layer Lighting Strategy
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                Professional lighting designers layer light at three heights. This approach
                                creates depth and visual interest in outdoor spaces.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Layer 1 */}
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-amber-500 text-white font-bold text-2xl flex items-center justify-center">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-white">Overhead: String Lights</h3>
                                        <p className="text-white/60">The foundation layer • Creates the primary ambiance</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-charcoal/50 rounded-xl p-4">
                                        {brightech && <ProductCard product={brightech} />}
                                    </div>
                                    <div className="bg-charcoal/50 rounded-xl p-4">
                                        {brightown && <ProductCard product={brightown} />}
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-amber-500/20 rounded-xl border border-amber-500/30">
                                    <p className="text-white/80 text-sm">
                                        <strong>Installation tip:</strong> Hang string lights 7-9 feet high to create a
                                        &quot;ceiling&quot; effect that makes the space feel like an outdoor room.
                                    </p>
                                </div>
                            </div>

                            {/* Layer 2 */}
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-amber-500 text-white font-bold text-2xl flex items-center justify-center">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-white">Ground Level: Pathway Stakes</h3>
                                        <p className="text-white/60">The functional layer • Guides movement + adds safety</p>
                                    </div>
                                </div>
                                <div className="bg-charcoal/50 rounded-xl p-6">
                                    <ProductCard product={pathwayLights} variant="featured" />
                                </div>
                                <div className="mt-6 p-4 bg-amber-500/20 rounded-xl border border-amber-500/30">
                                    <p className="text-white/80 text-sm">
                                        <strong>Installation tip:</strong> Space pathway lights 6-8 feet apart. Stagger
                                        placement left-right along paths for a natural, asymmetrical look.
                                    </p>
                                </div>
                            </div>

                            {/* Layer 3 */}
                            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-amber-500 text-white font-bold text-2xl flex items-center justify-center">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-white">Accent: Firefly/Garden Lights</h3>
                                        <p className="text-white/60">The magic layer • Creates visual interest in landscaping</p>
                                    </div>
                                </div>
                                <div className="bg-charcoal/50 rounded-xl p-6">
                                    <ProductCard product={fireflyLights} variant="featured" />
                                </div>
                                <div className="mt-6 p-4 bg-amber-500/20 rounded-xl border border-amber-500/30">
                                    <p className="text-white/80 text-sm">
                                        <strong>Installation tip:</strong> Tuck firefly lights into flower beds, around
                                        trees, or anywhere that benefits from subtle ambiance. The flexible wires sway
                                        in the breeze like actual fireflies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="Start With String Lights"
                    subheadline="String lights provide the single biggest visual impact for the investment. Everything else builds on this foundation."
                    imageSrc="/images/products/brightech_lights.png"
                    imageAlt="Solar string lights over patio at dusk"
                    ctaText="Shop Solar String Lights"
                    ctaLink="https://amzn.to/4b9c1yv"
                    badge="The Foundation"
                    variant="horizontal"
                    theme="warm"
                />
            </div>

            {/* Additional Products */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
                            Complete Your Outdoor Living Space
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            Lighting pairs well with shade solutions for daytime comfort.
                        </p>

                        {umbrella && (
                            <div className="max-w-md mx-auto">
                                <ProductCard product={umbrella} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Pro Tips Section */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Solar Lighting Best Practices
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "📍 Panel Placement",
                                    tip: "Face solar panels south (in the northern hemisphere). Look for models with remote panels that can be positioned in sunny spots even if the light fixture stays in shade."
                                },
                                {
                                    title: "🌡️ Color Temperature",
                                    tip: "Stick to 2700K-3000K (warm white) for outdoor ambiance. Cooler temperatures (4000K+) feel clinical rather than cozy in residential settings."
                                },
                                {
                                    title: "📏 Buy Generously",
                                    tip: "Outdoor spaces absorb light. Plan for 30% more than initial estimates. Additional strands or fixtures can always be added, but starting sparse looks incomplete."
                                },
                                {
                                    title: "❄️ Winter Expectations",
                                    tip: "Shorter days mean less charging time. Expect 4-6 hours of light in winter versus 8-12 in summer. Adjustable panel angles help maximize efficiency."
                                },
                            ].map((item, index) => (
                                <div key={index} className="bg-limestone rounded-xl p-6">
                                    <h4 className="font-heading text-lg font-bold text-charcoal mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-charcoal/70">{item.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Quick Comparison: Wire-Free Lighting Options
                        </h2>
                        <ComparisonTable
                            title="Match Light Type to Application"
                            rows={[
                                {
                                    productName: "Brightech Solar String Lights",
                                    keyFeature: "Commercial-grade, shatterproof",
                                    bestFor: "Main patio overhead lighting",
                                    priceTier: "$$",
                                    link: "https://amzn.to/4b9c1yv"
                                },
                                {
                                    productName: "Brightown String Lights (100ft)",
                                    keyFeature: "Dimmable, IP65, connectable",
                                    bestFor: "Large areas, deck perimeters",
                                    priceTier: "$",
                                    link: "https://amzn.to/4qyKVpj"
                                },
                                {
                                    productName: "ALEPOD Pathway Stakes (8pk)",
                                    keyFeature: "Tungsten filament style",
                                    bestFor: "Walkways & garden borders",
                                    priceTier: "$",
                                    link: "https://amzn.to/3LH1Vuk"
                                },
                                {
                                    productName: "Vignuto Firefly Lights (4pk)",
                                    keyFeature: "Swaying firefly effect",
                                    bestFor: "Flower beds & accent areas",
                                    priceTier: "$",
                                    link: "https://amzn.to/4jSLUhz"
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "Do solar lights work under covered patios?",
                                    answer: "Not effectively if fully covered. Look for models with remote solar panels that can be positioned in sunny spots while the lights remain in shaded areas. Alternatively, USB-rechargeable lights work well under covered structures."
                                },
                                {
                                    question: "How long do solar light batteries last?",
                                    answer: "Quality brands use replaceable NiMH batteries that typically last 2-3 years. Cheaper options may only last 6-12 months. Check that the battery compartment is accessible for future replacement."
                                },
                                {
                                    question: "Are solar lights bright enough for reading or cooking?",
                                    answer: "For ambiance, absolutely. For task lighting (reading, food preparation), additional focused light is usually needed. Solar provides the mood; supplement with targeted battery lanterns or LED spotlights for activities."
                                },
                                {
                                    question: "What about windy locations?",
                                    answer: "String lights require secure mounting points—hooks in posts, trees, or dedicated cable systems. Stake lights stay grounded. Firefly lights actually look better swaying in breeze; their flexible design handles wind well."
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
            <section className="section bg-linear-to-r from-amber-500 to-orange-500">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Transform Your Evening Outdoors
                        </h2>
                        <p className="text-white text-lg mb-8 max-w-xl mx-auto">
                            Skip the electrician. Start with solar. The investment pays for itself in ambiance
                            and avoided installation costs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://amzn.to/4b9c1yv"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Solar String Lights
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="https://amzn.to/3LH1Vuk"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-transparent border-2 border-white text-black font-bold px-8 py-4 rounded-full hover:bg-black/10 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Browse Pathway Stakes
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Backyard Lighting Without Electricity: 7 Brilliant Ideas"
                    url="/guides/backyard-lighting-no-electricity"
                    image="/images/lighting-hero.jpg"
                />
            </div>

            {/* Affiliate Disclaimer */}
            <section className="py-6 bg-charcoal/5 border-t border-warm-gray-200">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
                        <strong>Affiliate Disclosure:</strong> Vesta Veranda earns commissions from qualifying purchases through affiliate links at no extra cost to you.
                        Product recommendations are based on specifications, features, and customer reviews. Prices and availability subject to change. Thank you for supporting us!
                    </p>
                </div>
            </section >
        </>
    );
}
