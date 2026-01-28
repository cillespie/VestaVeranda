import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/products-wrapper';

export const metadata: Metadata = {
    title: 'How to Create a Romantic Outdoor Dinner Setup | Valentine\'s 2026',
    description: 'Step-by-step guide to creating the perfect outdoor dinner for two. Dining furniture, lighting, ambiance tips and product recommendations.',
    openGraph: {
        title: 'Create a Romantic Outdoor Dinner Setup',
        description: 'Your complete guide to al fresco Valentine\'s dining',
        images: [{
            url: '/images/products/valentines-dinner-setup-hero.png',
            width: 1200,
            height: 630,
            alt: 'Romantic outdoor dinner setup for Valentine\'s Day'
        }],
        url: 'https://vestaverandaliving.store/guides/romantic-dinner-setup',
    },
    alternates: {
        canonical: 'https://vestaverandaliving.store/guides/romantic-dinner-setup',
    },
};

export const dynamic = 'force-dynamic';

export default async function RomanticDinnerSetupPage() {
    const allProducts = await getAllProducts();

    // Get products for dinner setup
    const diningFurniture = allProducts
        .filter(p => p.category === 'Furniture - Dining Sets')
        .slice(0, 3);

    const lighting = allProducts
        .filter(p => p.category === 'Lighting')
        .slice(0, 2);

    const tabletopFire = allProducts
        .filter(p => p.name.toLowerCase().includes('mesa'))
        .slice(0, 1);

    const audio = allProducts
        .filter(p => p.category === 'Outdoor Audio')
        .slice(0, 2);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'HowTo',
                        name: 'How to Create a Romantic Outdoor Dinner Setup',
                        description: 'Step-by-step guide to creating the perfect outdoor dinner for two.',
                        step: [
                            { '@type': 'HowToStep', name: 'Choose Your Dining Spot', text: 'Select a location in your outdoor space.' },
                            { '@type': 'HowToStep', name: 'Set the Table', text: 'Use quality outdoor dinnerware and linens.' },
                            { '@type': 'HowToStep', name: 'Layer the Lighting', text: 'Use string lights, candles, and tabletop fire.' },
                            { '@type': 'HowToStep', name: 'Add Music', text: 'Set up a Bluetooth speaker with romantic playlist.' },
                        ]
                    })
                }}
            />

            <Hero
                title="Create the Perfect Outdoor Dinner for Two"
                ctaText="Start Planning →"
                ctaHref="#step1"
                backgroundImage="/images/valentines-dinner-setup-hero.png"
            />

            {/* Intro */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-rose-50 to-pink-50 border-l-4 border-terracotta p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">🍷</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                        Skip the Reservations
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        This Valentine&apos;s Day, why fight crowds at overpriced restaurants when you can create something far more personal? An outdoor dinner at home lets you control every detail—from the menu to the music to the moment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
                            Whether you have a sprawling patio or a tiny balcony, we&apos;ll show you how to transform your outdoor space into a restaurant-worthy dining experience. Follow our step-by-step guide and product recommendations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 1: The Foundation */}
            <section id="step1" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-terracotta text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center">1</span>
                            <h2 className="font-heading text-3xl font-bold text-white">
                                The Foundation: Dining Furniture
                            </h2>
                        </div>

                        <p className="text-white/70 mb-8 max-w-3xl">
                            You need a solid table and comfortable seating. For romance, we recommend bistro sets (intimate) or smaller dining sets that bring you close together rather than sprawling apart.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {diningFurniture.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                            <h3 className="font-heading text-lg font-bold text-white mb-2">💡 Pro Tip: Table Size Matters</h3>
                            <p className="text-white/80">
                                For intimate dining, choose a table just big enough for two place settings plus a centerpiece. A 30-36&quot; round or square table keeps you close enough for conversation without shouting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2: Lighting */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-terracotta text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center">2</span>
                            <h2 className="font-heading text-3xl font-bold text-charcoal">
                                Layer Your Lighting
                            </h2>
                        </div>

                        <p className="text-charcoal/70 mb-8 max-w-3xl">
                            Lighting makes or breaks romantic ambiance. The secret? Layer multiple light sources at different heights for that magical, restaurant-quality glow.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {lighting.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-2xl p-6">
                            <h3 className="font-heading text-xl font-bold text-charcoal mb-4">The 3-Layer Lighting Formula</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-limestone rounded-xl">
                                    <span className="text-3xl mb-2 block">☁️</span>
                                    <h4 className="font-bold mb-1">Overhead</h4>
                                    <p className="text-sm text-charcoal/70">String lights draped above</p>
                                </div>
                                <div className="text-center p-4 bg-limestone rounded-xl">
                                    <span className="text-3xl mb-2 block">🕯️</span>
                                    <h4 className="font-bold mb-1">Table Level</h4>
                                    <p className="text-sm text-charcoal/70">Candles or tabletop fire</p>
                                </div>
                                <div className="text-center p-4 bg-limestone rounded-xl">
                                    <span className="text-3xl mb-2 block">🌱</span>
                                    <h4 className="font-bold mb-1">Ground Level</h4>
                                    <p className="text-sm text-charcoal/70">Pathway or stake lights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3: Centerpiece */}
            {tabletopFire.length > 0 && (
                <section className="section bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-terracotta text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center">3</span>
                                <h2 className="font-heading text-3xl font-bold text-charcoal">
                                    The Centerpiece: Tabletop Fire
                                </h2>
                            </div>

                            <p className="text-charcoal/70 mb-8 max-w-3xl">
                                Forget flower arrangements—a small tabletop fire pit creates an unforgettable focal point. The dancing flames illuminate your faces and add warmth without overwhelming the table.
                            </p>

                            <div className="max-w-md mx-auto">
                                {tabletopFire.map(product => (
                                    <div key={product.id} className="bg-limestone rounded-2xl p-5">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8 rounded-r-2xl max-w-2xl mx-auto">
                                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">⚠️ Safety First</h3>
                                <p className="text-charcoal/70">
                                    Keep tabletop fire pits away from paper napkins and tablecloths. Use real plates and metal flatware. Always have a way to extinguish the flame before it runs dry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Step 4: Music */}
            <section className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-terracotta text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center">4</span>
                            <h2 className="font-heading text-3xl font-bold text-white">
                                Set the Soundtrack
                            </h2>
                        </div>

                        <p className="text-white/70 mb-8 max-w-3xl">
                            Background music fills silences and creates atmosphere. Keep it low enough for easy conversation—think jazz, bossa nova, or acoustic covers.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {audio.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                            <h3 className="font-heading text-lg font-bold text-white mb-2">🎵 Pro Tip: Prepare Your Playlist</h3>
                            <p className="text-white/80">
                                Create a 3-hour playlist ahead of time. Nothing kills the mood like pausing dinner to skip songs or deal with ads. Spotify&apos;s &quot;Romantic Dinner&quot; playlists work great.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Checklist */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Your Romantic Dinner Checklist
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-heading text-xl font-bold mb-4">📋 Setup (Day Before)</h3>
                                <ul className="text-charcoal/70 space-y-2">
                                    <li>☐ Clean and arrange outdoor furniture</li>
                                    <li>☐ Test all lights and speakers</li>
                                    <li>☐ Plan and prep your menu</li>
                                    <li>☐ Create your music playlist</li>
                                    <li>☐ Check weather forecast (backup plan?)</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-heading text-xl font-bold mb-4">🕕 2 Hours Before</h3>
                                <ul className="text-charcoal/70 space-y-2">
                                    <li>☐ Set the table with linens and dinnerware</li>
                                    <li>☐ Position candles and fire pit</li>
                                    <li>☐ Chill beverages</li>
                                    <li>☐ Hang/arrange string lights</li>
                                    <li>☐ Prepare appetizers</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-heading text-xl font-bold mb-4">⏰ 30 Minutes Before</h3>
                                <ul className="text-charcoal/70 space-y-2">
                                    <li>☐ Turn on all lighting</li>
                                    <li>☐ Start music (low volume)</li>
                                    <li>☐ Light tabletop fire/candles</li>
                                    <li>☐ Final food prep</li>
                                    <li>☐ Take a photo for the memories!</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-heading text-xl font-bold mb-4">💕 During Dinner</h3>
                                <ul className="text-charcoal/70 space-y-2">
                                    <li>☐ Put phones on silent</li>
                                    <li>☐ Enjoy the moment</li>
                                    <li>☐ Refill drinks before they&apos;re empty</li>
                                    <li>☐ Have blankets ready if it gets cold</li>
                                    <li>☐ Dessert course under the stars</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-linear-to-r from-rose-500 to-pink-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Your Table Awaits
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            With the right setup, your backyard becomes the most exclusive restaurant in town—party of two, no reservations needed.
                        </p>
                        <Link
                            href="/"
                            className="bg-white text-charcoal font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                        >
                            Shop Dining Essentials
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="How to Create a Romantic Outdoor Dinner Setup"
                    url="/guides/romantic-dinner-setup"
                    image="/images/valentines-dinner-setup-hero.png"
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
