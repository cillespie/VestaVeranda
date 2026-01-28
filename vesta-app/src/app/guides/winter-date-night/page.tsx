import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/products-wrapper';

export const metadata: Metadata = {
    title: 'Cozy Winter Date Night Ideas for Your Backyard | 2026',
    description: 'Transform your backyard into a romantic winter wonderland. Fire pit setups, warm lighting, and cozy furniture ideas for the perfect cold-weather date night.',
    openGraph: {
        title: 'Cozy Winter Date Night Ideas for Your Backyard',
        description: 'Create unforgettable winter date nights in your own backyard',
        images: [{
            url: '/images/products/valentines-winter-date-hero.png',
            width: 1200,
            height: 630,
            alt: 'Cozy winter backyard date night setup'
        }],
        url: 'https://vestaverandaliving.store/guides/winter-date-night',
    },
    alternates: {
        canonical: 'https://vestaverandaliving.store/guides/winter-date-night',
    },
};

export const dynamic = 'force-dynamic';

export default async function WinterDateNightPage() {
    const allProducts = await getAllProducts();

    // Filter products for winter date night theme
    const firePits = allProducts
        .filter(p => p.category === 'Fire Pits, Heaters & Grills')
        .slice(0, 4);

    const heaters = allProducts
        .filter(p => p.category === 'Fire Pits, Heaters & Grills' &&
            (p.name.toLowerCase().includes('heater') || p.name.toLowerCase().includes('pyramid')))
        .slice(0, 2);

    const lighting = allProducts
        .filter(p => p.category === 'Lighting')
        .slice(0, 2);

    const furniture = allProducts
        .filter(p => p.category === 'Furniture - Lounge & Seating')
        .slice(0, 2);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'Cozy Winter Date Night Ideas for Your Backyard',
                        image: 'https://vestaverandaliving.store/images/valentines-winter-date-hero.png',
                        author: { '@type': 'Organization', name: 'Vesta Veranda Living' },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Vesta Veranda Living',
                            logo: { '@type': 'ImageObject', url: 'https://vestaverandaliving.store/logo.jpg' }
                        },
                        datePublished: '2026-01-28',
                        dateModified: '2026-01-28',
                    })
                }}
            />

            <Hero
                title="Cozy Winter Date Nights Under the Stars"
                ctaText="Get Warm & Cozy →"
                ctaHref="#warmth"
                backgroundImage="/images/products/valentines-winter-date-hero.png"
            />

            {/* Intro */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-l-4 border-terracotta p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">❄️</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                        Cold Weather, Warm Hearts
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Don&apos;t let winter chase you indoors.</strong> The crisp evening air, stars overhead, and warm flames create the most romantic atmosphere. Here&apos;s how to make your backyard the ultimate winter date destination.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
                                There&apos;s something magical about bundling up and stepping outside on a cold winter evening. The quiet stillness, your breath visible in the air, and the anticipation of warmth from a crackling fire—it&apos;s the perfect setting for romance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warmth Section */}
            <section id="warmth" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-terracotta rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                🔥 The Foundation
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Fire Features That Set the Mood
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                A quality fire pit isn&apos;t just about warmth—it&apos;s the centerpiece of your winter date night. The dancing flames create hypnotic ambiance while keeping you toasty.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {firePits.slice(0, 2).map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                            <h3 className="font-heading text-xl font-bold text-white mb-3">💡 Pro Tip: The 30-Minute Rule</h3>
                            <p className="text-white/90">
                                Start your fire 30 minutes before your date arrives. This creates a perfect bed of glowing embers that radiates steady warmth without too much smoke—ideal for intimate conversations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Backup Heat */}
            {heaters.length > 0 && (
                <section className="section bg-limestone">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-2 bg-amber-600 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                    🌡️ Extra Warmth
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                    Patio Heaters for Extra Comfort
                                </h2>
                                <p className="text-charcoal/70 max-w-2xl mx-auto">
                                    When the temperature really drops, supplement your fire with a patio heater. These provide consistent, adjustable warmth that keeps the cold at bay.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {heaters.map(product => (
                                    <div key={product.id} className="bg-white rounded-2xl p-5">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Lighting */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-sage rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                ✨ Romantic Glow
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Magical Winter Lighting
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Winter evenings get dark early—use that to your advantage. Layer warm string lights and lanterns to create an enchanting atmosphere.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {lighting.map(product => (
                                <div key={product.id} className="bg-limestone rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8 rounded-r-2xl">
                            <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Winter Lighting Tips</h3>
                            <ul className="text-charcoal/70 space-y-2">
                                <li>• Use warm white bulbs (2700K-3000K) for cozy ambiance</li>
                                <li>• LED candles won&apos;t blow out in winter wind</li>
                                <li>• Solar lights need full sun during short winter days—charge them early</li>
                                <li>• Layer lighting at different heights for depth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cozy Seating */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-charcoal rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                🛋️ Comfort Zone
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Snuggle-Worthy Seating
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Choose seating that encourages closeness. Deep cushions, room for two, and weather-resistant materials that can handle winter conditions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {furniture.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Setup Checklist */}
            <section className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
                            Your Winter Date Night Checklist
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">🔥 Warmth Essentials</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>☐ Fire pit with fuel ready</li>
                                    <li>☐ Backup heater (for really cold nights)</li>
                                    <li>☐ Stack of cozy blankets</li>
                                    <li>☐ Hot drink setup (cocoa, mulled wine)</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">✨ Ambiance Must-Haves</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>☐ String lights tested and charged</li>
                                    <li>☐ LED candles positioned</li>
                                    <li>☐ Music playlist ready</li>
                                    <li>☐ Pillows on seating</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">🍿 Comfort Extras</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>☐ S&apos;mores ingredients</li>
                                    <li>☐ Hand warmers in pockets</li>
                                    <li>☐ Warm hats and gloves nearby</li>
                                    <li>☐ Indoor retreat if needed</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">📱 Finishing Touches</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>☐ Phone charged for photos</li>
                                    <li>☐ Bluetooth speaker connected</li>
                                    <li>☐ Star-gazing app downloaded</li>
                                    <li>☐ Clear path from house to setup</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-linear-to-r from-indigo-600 to-purple-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Make Winter Your Favorite Season
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            With the right setup, cold nights become the most memorable ones. Start building your winter outdoor retreat and discover why couples everywhere are falling in love with backyard date nights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="bg-white text-charcoal font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Explore All Products
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Cozy Winter Date Night Ideas for Your Backyard"
                    url="/guides/winter-date-night"
                    image="/images/products/valentines-winter-date-hero.png"
                />
            </div>

            {/* Affiliate Disclaimer */}
            <section className="py-6 bg-charcoal/5 border-t border-warm-gray-200">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
                        <strong>Affiliate Disclosure:</strong> Vesta Veranda earns commissions from qualifying purchases through affiliate links at no extra cost to you. Thank you for supporting us!
                    </p>
                </div>
            </section>
        </>
    );
}
