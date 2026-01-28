import { Metadata } from 'next';
import { Hero, ComparisonTable, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Best Robot Lawn Mower for Hills 2026: Slope-Ready Picks | Vesta Veranda',
    description: 'Most robot mowers can\'t handle slopes. These can. Compare the Mammotion LUBA (80% grade) vs Segway Navimow (45% grade) for hilly yards.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Best Robot Lawn Mower for Hills 2026: Slope-Ready Picks',
        description: 'Most robot mowers can\'t handle slopes. These can. Compare the Mammotion LUBA (80% grade) vs Segway Navimow (45% grade).',
        url: 'https://vestaverandaliving.store/guides/robot-mower-hills',
        images: [
            {
                url: '/images/robot-mower-hills-hero.png',
                width: 1200,
                height: 630,
                alt: 'Robot Mower for Hills Guide',
            },
        ],
    },
};

export default function RobotMowerHillsGuide() {
    const mammotion = sampleProducts.find(p => p.id === 'mammotion-luba');
    const segway = sampleProducts.find(p => p.id === 'segway-navimow');
    const rachio = sampleProducts.find(p => p.id === 'rachio-smart-sprinkler');
    const orbit = sampleProducts.find(p => p.id === 'orbit-b-hyve');

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Best Robot Lawn Mower for Hills 2026: Slope-Ready Picks',
        image: 'https://vestaverandaliving.store/images/robot-mower-hills-hero.png',
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
        datePublished: '2026-01-12',
        dateModified: new Date().toISOString().split('T')[0],
        description: 'Most robot mowers can\'t handle slopes. These can. Compare the Mammotion LUBA (80% grade) vs Segway Navimow (45% grade) for hilly yards.'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <Hero
                title="Best Robot Lawn Mower for Hills 2026"
                ctaText="Skip to Recommendations →"
                ctaHref="#picks"
                backgroundImage="/images/robot-mower-hills-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Quick Answer Box */}
                        <div className="bg-linear-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">🏆</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-blue-800 mb-3">
                                        The Quick Answer
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>For serious hills (25°+):</strong> The <strong>Mammotion LUBA mini AWD</strong>
                                        is the only residential robot mower that handles 80% slopes (38°). Its all-wheel-drive
                                        system provides genuine traction on steep terrain.
                                    </p>
                                    <p className="text-lg text-charcoal/80 leading-relaxed mt-3">
                                        <strong>For moderate slopes:</strong> The <strong>Segway Navimow i105N</strong> handles
                                        45% grades (24°) at roughly half the price. No buried wires required.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Editorial Content */}
                        <article className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal text-charcoal/80 mx-auto">

                            <h2>The Problem: Most Robot Mowers Fail on Hills</h2>
                            <p className="text-xl font-medium text-charcoal">
                                Standard robot mowers typically max out at 20-30% slope capability. That sounds
                                reasonable until realizing that many suburban backyards have sections that
                                exceed this—especially near property edges, drainage areas, or tiered landscaping.
                            </p>
                            <p>
                                Budget robot mowers on steep slopes often slide backward, lose traction, or
                                constantly trigger safety shutoffs. The result is an expensive machine that
                                only mows part of the yard.
                            </p>
                        </article>

                        {/* Visual Problem Statement */}
                        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 my-8">
                            <h4 className="font-heading text-xl font-bold text-charcoal mb-4">📐 Slope Rating Explained</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-white rounded-xl">
                                    <div className="text-3xl font-bold text-emerald-600">20%</div>
                                    <div className="text-sm text-charcoal/60 mt-1">Basic robot mowers</div>
                                    <div className="text-xs text-charcoal/40 mt-1">(Mostly flat terrain)</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl">
                                    <div className="text-3xl font-bold text-amber-600">35-45%</div>
                                    <div className="text-sm text-charcoal/60 mt-1">Typical hilly backyard</div>
                                    <div className="text-xs text-charcoal/40 mt-1">(Where budget mowers fail)</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-xl">
                                    <div className="text-3xl font-bold text-red-600">60%+</div>
                                    <div className="text-sm text-charcoal/60 mt-1">Serious terrain</div>
                                    <div className="text-xs text-charcoal/40 mt-1">(LUBA AWD territory)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product #1 - LUBA */}
            <section id="picks" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-blue-500 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Best for Serious Hills
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Mammotion LUBA mini AWD
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto text-lg">
                                80% slope rating. All-wheel drive. No buried boundary wires. Designed specifically
                                for challenging terrain that defeats other robot mowers.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 md:p-8">
                            {mammotion && (
                                <ProductCard product={mammotion} variant="featured" />
                            )}
                        </div>
                        <div className="mt-8 grid md:grid-cols-3 gap-4">
                            {[
                                { icon: "⛰️", label: "80% Slope Rating", detail: "Industry-leading capability" },
                                { icon: "🚗", label: "All-Wheel Drive", detail: "Traction on all 4 wheels" },
                                { icon: "📡", label: "RTK Positioning", detail: "2cm accuracy, no buried wires" },
                            ].map((feature, index) => (
                                <div key={index} className="bg-charcoal/50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">{feature.icon}</div>
                                    <div className="font-bold text-white">{feature.label}</div>
                                    <div className="text-white/60 text-sm">{feature.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA - LUBA */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="Let a Robot Handle Your Hills"
                    subheadline="The LUBA's all-wheel-drive system tackles slopes that would defeat conventional robot mowers. Set it and forget it."
                    imageSrc="/images/products/mammotion-luba.png"
                    imageAlt="Mammotion LUBA AWD robot mower climbing a hill"
                    ctaText="Check Current LUBA Pricing"
                    ctaLink="https://amzn.to/3NWfYg4"
                    badge="For Steep Terrain"
                    variant="horizontal"
                    theme="cool"
                />
            </div>

            {/* Product #2 - Navimow */}
            <section className="section bg-emerald-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-emerald-600 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Best Value for Most Yards
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Segway Navimow i105N
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">
                                45% slope handling at roughly half the LUBA&apos;s price. VisionFence camera
                                navigation eliminates buried boundary wires entirely.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                            {segway && (
                                <ProductCard product={segway} variant="featured" />
                            )}
                        </div>
                        <div className="mt-6 p-4 bg-emerald-100 rounded-xl border border-emerald-200">
                            <p className="text-sm text-emerald-800 font-medium flex items-start gap-2">
                                <span className="text-xl">💡</span>
                                <span><strong>Key insight:</strong> Most yards have gentler slopes than they appear. Measure actual grade before assuming the most expensive option is necessary.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA - Navimow */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="Wire-Free Mowing Has Arrived"
                    subheadline="No more burying boundary wires. No more digging up the yard. The Navimow uses GPS and cameras for navigation."
                    imageSrc="/images/products/segway-navimow.png"
                    imageAlt="Segway Navimow robot mower"
                    ctaText="See Navimow Options"
                    ctaLink="https://amzn.to/4r2gbN9"
                    badge="No Wires Required"
                    variant="horizontal"
                    theme="warm"
                />
            </div>

            {/* Complete the Smart Lawn */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
                            Complete the Smart Lawn Setup
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            Pair a robot mower with smart irrigation for a fully automated lawn care system.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {rachio && <ProductCard product={rachio} />}
                            {orbit && <ProductCard product={orbit} />}
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Measure Your Slope */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            📐 How to Measure Yard Slope
                        </h2>
                        <p className="text-center text-charcoal/70 mb-8 max-w-2xl mx-auto">
                            Accurate slope measurement prevents overspending on capability that isn&apos;t needed—or
                            underbuying a mower that can&apos;t handle the terrain.
                        </p>

                        <div className="bg-limestone rounded-2xl p-8">
                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { step: "1", action: "Get a 4-foot level", detail: "Place one end on the ground at the steepest slope" },
                                    { step: "2", action: "Measure the gap", detail: "From ground to the raised end of the level" },
                                    { step: "3", action: "Calculate percentage", detail: "Gap (inches) ÷ 48 × 100 = slope %" },
                                    { step: "4", action: "Example", detail: "12\" gap = 25% slope (Navimow range)" },
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-terracotta text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                                            {item.step}
                                        </div>
                                        <div className="font-bold text-charcoal mb-1">{item.action}</div>
                                        <div className="text-sm text-charcoal/60">{item.detail}</div>
                                    </div>
                                ))}
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
                            Head-to-Head: LUBA vs Navimow
                        </h2>
                        <ComparisonTable
                            title="Match the Mower to Your Terrain"
                            rows={[
                                {
                                    productName: "Mammotion LUBA mini AWD",
                                    keyFeature: "80% slope, AWD, RTK navigation",
                                    bestFor: "Serious hills, large complex yards",
                                    priceTier: "$$$$",
                                    link: "https://amzn.to/3NWfYg4"
                                },
                                {
                                    productName: "Segway Navimow i105N",
                                    keyFeature: "45% slope, VisionFence, GPS",
                                    bestFor: "Moderate slopes, best value",
                                    priceTier: "$$$",
                                    link: "https://amzn.to/4r2gbN9"
                                },
                            ]}
                        />
                        <p className="text-center text-sm text-charcoal/50 mt-6">
                            🎯 <strong>Decision guide:</strong> Under 45% slope → Navimow saves money. Over 45% → LUBA is the only viable option.
                        </p>
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
                                    question: "How do they handle wet grass on hills?",
                                    answer: "Both models include rain sensors and automatically return to their docking stations when rain is detected. Wet grass on slopes creates traction problems, so the mowers wait for dry conditions to resume."
                                },
                                {
                                    question: "What about trees and obstacles on slopes?",
                                    answer: "The LUBA uses vision AI to navigate around obstacles, performing well on complex terrain. The Navimow combines GPS with camera detection. Both handle trees, garden beds, and typical yard features."
                                },
                                {
                                    question: "Is the LUBA worth the price premium?",
                                    answer: "Only for yards that actually require it. For slopes exceeding 45%, the LUBA is the only option. For gentler terrain, the capability goes unused. Measuring slopes before purchasing is essential."
                                },
                                {
                                    question: "Are buried boundary wires still needed?",
                                    answer: "Neither model requires buried wires. Both use GPS/RTK virtual boundaries configured through smartphone apps. This is actually advantageous for hilly terrain where buried wires can shift with soil movement."
                                },
                                {
                                    question: "How precise is the edge cutting on slopes?",
                                    answer: "The LUBA's RTK system is accurate to 2cm. The Navimow uses GPS combined with vision to maintain boundaries. Both mow close to edges even on slopes where precision matters most."
                                }
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
            <section className="section bg-linear-to-r from-blue-600 to-cyan-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Automate Lawn Care?
                        </h2>
                        <p className="text-white text-lg mb-8 max-w-xl mx-auto">
                            Match the mower to the terrain. Measure slopes, choose accordingly, and reclaim weekends.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://amzn.to/3NWfYg4"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Mammotion LUBA
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="https://amzn.to/4r2gbN9"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-transparent border-2 border-white text-black font-bold px-8 py-4 rounded-full hover:bg-black/10 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Segway Navimow
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Best Robot Mowers for Steep Hills (Tested for 2026)"
                    url="/guides/robot-mower-hills"
                    image="/images/mower-hero.jpg"
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
            </section>
        </>
    );
}
