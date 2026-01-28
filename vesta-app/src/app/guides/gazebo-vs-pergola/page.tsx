import { Metadata } from 'next';
import { Hero, ComparisonTable, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Gazebo vs Pergola 2026: Which Shade Structure Is Right? | Vesta Veranda',
    description: 'Gazebos offer complete rain protection. Pergolas provide flexible shade. Compare costs, installation, and which works better for your backyard setup.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Gazebo vs Pergola 2026: Which Shade Structure Is Right?',
        description: 'Gazebos offer complete rain protection. Pergolas provide flexible shade. Compare costs, installation, and which works better.',
        url: 'https://vestaverandaliving.store/guides/gazebo-vs-pergola',
        images: [
            {
                url: '/images/gazebo-pergola-hero.png',
                width: 1200,
                height: 630,
                alt: 'Gazebo vs Pergola Guide',
            },
        ],
    },
};

export default function GazeboVsPergolaGuide() {
    // Gazebos
    const kozyard = sampleProducts.find(p => p.id === 'kozyard-alexander-gazebo');
    const yoleny = sampleProducts.find(p => p.id === 'yoleny-gazebo');

    // Pergolas
    const purpleLeafPergola = sampleProducts.find(p => p.id === 'purple-leaf-pergola');
    const umbrella = sampleProducts.find(p => p.id === 'purple-leaf-cantilever');

    // Complementary products
    const stringLights = sampleProducts.find(p => p.id === 'brightech-solar-lights');
    const rug = sampleProducts.find(p => p.id === 'safavieh-courtyard-rug');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'Gazebo vs Pergola 2026: Which Shade Structure Is Right?',
                        image: 'https://vestaverandaliving.store/images/gazebo-pergola-hero.png',
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
                        datePublished: '2026-01-25',
                        dateModified: new Date().toISOString().split('T')[0],
                        description: 'Gazebos offer complete rain protection. Pergolas provide flexible shade. Compare costs, installation, and which works better for your backyard setup.'
                    })
                }}
            />
            {/* Hero Section */}
            <Hero
                title="Gazebo vs Pergola: Which Is Right for You?"
                ctaText="Compare Options →"
                ctaHref="#comparison"
                backgroundImage="/images/gazebo-pergola-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Quick Answer Box */}
                        <div className="bg-linear-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">⛺</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-blue-800 mb-3">
                                        The Quick Answer
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Choose a gazebo</strong> for complete weather protection—solid roof keeps
                                        rain and full sun out. Ideal for outdoor kitchens, hot tubs, or year-round use.<br /><br />
                                        <strong>Choose a pergola</strong> for flexible shade and open-air feel. Retractable
                                        canopies let you control sunlight. Better for entertainment spaces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Differences Grid */}
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Key Differences at a Glance
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Gazebo Column */}
                            <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200">
                                <h3 className="font-heading text-2xl font-bold text-charcoal mb-4 text-center">
                                    🏛️ Gazebo
                                </h3>
                                <ul className="space-y-3 text-charcoal/80">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        <span><strong>Solid roof</strong> — Complete rain/sun protection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        <span><strong>Enclosed option</strong> — Curtains/screens available</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        <span><strong>Year-round use</strong> — Snow load rated</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-500 mt-1">⚠️</span>
                                        <span>More enclosed feeling</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-500 mt-1">⚠️</span>
                                        <span>Higher cost typically</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Pergola Column */}
                            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                                <h3 className="font-heading text-2xl font-bold text-charcoal mb-4 text-center">
                                    🌿 Pergola
                                </h3>
                                <ul className="space-y-3 text-charcoal/80">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        <span><strong>Open-air feel</strong> — Airy, connected to outdoors</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        <span><strong>Flexible shade</strong> — Retractable canopies available</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        <span><strong>Modern aesthetic</strong> — Contemporary design</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-500 mt-1">⚠️</span>
                                        <span>Limited rain protection</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-500 mt-1">⚠️</span>
                                        <span>Not for heavy snow loads</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gazebo Section */}
            <section id="comparison" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-slate-500 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Complete Protection
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Hardtop Gazebos
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                Galvanized steel roofs and aluminum frames create permanent outdoor rooms.
                                Perfect for hot tubs, outdoor kitchens, or spaces used in all weather.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    Premium Pick
                                </div>
                                {kozyard && <ProductCard product={kozyard} />}
                                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-900/80">
                                        <strong>Best for:</strong> Large patios, complete outdoor rooms, year-round use in snow regions
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-emerald-100 text-emerald-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    Solid Value
                                </div>
                                {yoleny && <ProductCard product={yoleny} />}
                                <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                                    <p className="text-sm text-emerald-900/80">
                                        <strong>Best for:</strong> Mid-size spaces, enclosed outdoor living, weather protection
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA - Gazebo */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="The Outdoor Room That Handles Everything"
                    subheadline="Hardtop gazebos with double roofs and gutter systems handle rain, snow, and full sun. Add curtains and netting for a fully enclosed sanctuary."
                    imageSrc="/images/products/kozyard-alexander-gazebo.png"
                    imageAlt="Kozyard Alexander Hardtop Gazebo"
                    ctaText="Shop Hardtop Gazebos"
                    ctaLink="https://amzn.to/4b5DDED"
                    badge="Year-Round Protection"
                    variant="horizontal"
                    theme="dark"
                />
            </div>

            {/* Pergola Section */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-purple-600 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Modern Flexibility
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Retractable Pergolas
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Aluminum frames with sliding fabric roofs. Open for stargazing, close for
                                shade or light rain. Built-in LED lighting adds evening ambiance.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                {purpleLeafPergola && <ProductCard product={purpleLeafPergola} variant="featured" />}
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    <div className="p-3 bg-purple-50 rounded-lg">
                                        <div className="text-2xl mb-1">🌧️</div>
                                        <div className="text-xs text-purple-900">Rainproof fabric</div>
                                    </div>
                                    <div className="p-3 bg-purple-50 rounded-lg">
                                        <div className="text-2xl mb-1">💡</div>
                                        <div className="text-xs text-purple-900">Built-in LEDs</div>
                                    </div>
                                    <div className="p-3 bg-purple-50 rounded-lg">
                                        <div className="text-2xl mb-1">↔️</div>
                                        <div className="text-xs text-purple-900">Retractable roof</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative: Cantilever Umbrella */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
                                Not Ready for a Permanent Structure?
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Cantilever umbrellas provide shade without the commitment or installation.
                                Rotate 360° to follow the sun, close when not needed.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {umbrella && (
                                <div className="bg-limestone rounded-2xl p-6">
                                    <ProductCard product={umbrella} />
                                </div>
                            )}
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">💰</span>
                                    <div>
                                        <div className="font-bold text-charcoal">Fraction of the cost</div>
                                        <div className="text-sm text-charcoal/60">Try shade before committing to construction</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">🔄</span>
                                    <div>
                                        <div className="font-bold text-charcoal">360° rotation</div>
                                        <div className="text-sm text-charcoal/60">Track the sun throughout the day</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">📦</span>
                                    <div>
                                        <div className="font-bold text-charcoal">No permanent installation</div>
                                        <div className="text-sm text-charcoal/60">Take it with you if you move</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete the Setup */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
                            Complete Your Outdoor Room
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            String lights and outdoor rugs transform any shade structure into a true living space.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {stringLights && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={stringLights} />
                                </div>
                            )}
                            {rug && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm">
                                    <ProductCard product={rug} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Quick Comparison
                        </h2>
                        <ComparisonTable
                            title="Match Structure to Use Case"
                            rows={[
                                {
                                    productName: "Kozyard Alexander Gazebo",
                                    keyFeature: "12x16' aluminum, double roof",
                                    bestFor: "All-weather outdoor room",
                                    priceTier: "$$$$$",
                                    link: "https://amzn.to/4b5DDED"
                                },
                                {
                                    productName: "YOLENY Hardtop Gazebo",
                                    keyFeature: "12x16' galvanized steel",
                                    bestFor: "Weather protection, value",
                                    priceTier: "$$$$",
                                    link: "https://amzn.to/4bFrN4b"
                                },
                                {
                                    productName: "Purple Leaf Retractable Pergola",
                                    keyFeature: "12x14' aluminum, LED lights",
                                    bestFor: "Flexible shade, entertaining",
                                    priceTier: "$$$$$",
                                    link: "https://amzn.to/3LKI2T8"
                                },
                                {
                                    productName: "Purple Leaf Cantilever Umbrella",
                                    keyFeature: "360° rotation, offset design",
                                    bestFor: "No commitment, portable shade",
                                    priceTier: "$$",
                                    link: "https://amzn.to/45RdF4a"
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "Do gazebos and pergolas require permits?",
                                    answer: "Requirements vary by location. Structures over 100-120 sq ft typically require permits in most jurisdictions. Check local building codes before purchasing. Some freestanding structures under certain heights may be exempt."
                                },
                                {
                                    question: "Can one person assemble these structures?",
                                    answer: "Not recommended. Both gazebos and pergolas require 2-4 people minimum for safe assembly. Roof panels and frame sections are heavy and awkward. Budget a full weekend for installation."
                                },
                                {
                                    question: "How do they handle high winds?",
                                    answer: "Quality structures are rated for 35-50 mph winds when properly anchored. Anchor kits (concrete or deck mount) are essential—never leave freestanding. Retractable pergola canopies should be closed in strong winds."
                                },
                                {
                                    question: "Which lasts longer?",
                                    answer: "Aluminum-framed structures last 20+ years with minimal maintenance. Steel frames can rust if powder coating chips—touch up immediately. Fabric canopies need replacement every 5-10 years depending on UV exposure."
                                },
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
            <section className="section bg-linear-to-r from-slate-700 to-purple-700">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Create Your Outdoor Oasis?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                            Whether you choose complete protection or flexible shade, these structures
                            transform backyard space into year-round living area.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://amzn.to/4b5DDED"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Gazebos
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="https://amzn.to/3LKI2T8"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-transparent border-2 border-white text-black font-bold px-8 py-4 rounded-full hover:bg-black/10 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Pergolas
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Gazebo vs Pergola vs Pavilion: Which is Right for You?"
                    url="/guides/gazebo-vs-pergola"
                    image="/images/gazebo-hero.jpg"
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
            </section>
        </>
    );
}
