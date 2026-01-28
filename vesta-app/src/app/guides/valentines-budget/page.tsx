import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/products-wrapper';

export const metadata: Metadata = {
    title: 'Valentine\'s Day on a Budget: Backyard Edition | 2026',
    description: 'Create a romantic Valentine\'s Day experience without breaking the bank. Budget-friendly outdoor products, DIY tips, and affordable date ideas.',
    openGraph: {
        title: 'Valentine\'s Day on a Budget: Backyard Edition',
        description: 'Romantic outdoor setups that won\'t break the bank',
        images: [{
            url: '/images/products/valentines-budget-hero.png',
            width: 1200,
            height: 630,
            alt: 'Budget-friendly Valentine\'s backyard setup'
        }],
        url: 'https://vestaverandaliving.store/guides/valentines-budget',
    },
    alternates: {
        canonical: 'https://vestaverandaliving.store/guides/valentines-budget',
    },
};

export const dynamic = 'force-dynamic';

export default async function ValentinesBudgetPage() {
    const allProducts = await getAllProducts();

    // Filter for budget-friendly products ($ and $$ price tiers)
    const budgetProducts = allProducts.filter(p =>
        p.priceTier === '$' || p.priceTier === '$$'
    );

    const budgetLighting = budgetProducts
        .filter(p => p.category === 'Lighting')
        .slice(0, 2);

    const budgetFurniture = budgetProducts
        .filter(p => p.category === 'Furniture - Lounge & Seating' || p.category === 'Furniture - Dining Sets')
        .slice(0, 3);

    const budgetFirePits = budgetProducts
        .filter(p => p.category === 'Fire Pits, Heaters & Grills')
        .slice(0, 2);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'Valentine\'s Day on a Budget: Backyard Edition',
                        image: 'https://vestaverandaliving.store/images/valentines-budget-hero.png',
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
                title="Valentine's Day on a Budget"
                ctaText="See Budget Picks →"
                ctaHref="#picks"
                backgroundImage="/images/valentines-budget-hero.png"
            />

            {/* Intro */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">💰</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                        Romance Doesn&apos;t Require a Big Budget
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Average restaurant Valentine&apos;s dinner: $150+.</strong> With a few smart purchases and some creativity, you can create something far more memorable in your own backyard for a fraction of the cost.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
                                The truth? The most romantic Valentine&apos;s experiences aren&apos;t about spending money—they&apos;re about thoughtfulness and effort. Your backyard, some affordable lighting, and a little creativity can create magic that no restaurant can match.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Breakdown */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            The Budget-Smart Approach
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 text-center">
                                <div className="bg-green-100 text-green-700 text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    $25
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-2">String Lights</h3>
                                <p className="text-charcoal/70 text-sm">
                                    100ft of fairy lights instantly transforms any space into something magical
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 text-center">
                                <div className="bg-green-100 text-green-700 text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    $75
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-2">Seating</h3>
                                <p className="text-charcoal/70 text-sm">
                                    A cozy bistro set or wicker chairs create an intimate dining nook
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 text-center">
                                <div className="bg-green-100 text-green-700 text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    $50
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-2">Food & Drinks</h3>
                                <p className="text-charcoal/70 text-sm">
                                    Home-cooked dinner with nice wine costs a fraction of restaurant prices
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-600 text-white rounded-2xl p-6 mt-8 text-center">
                            <p className="text-lg font-bold mb-2">Total: ~$150 for an unforgettable experience</p>
                            <p className="text-white/80">Plus you keep the furniture and lights for future date nights!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Lighting */}
            <section id="picks" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-green-500 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Best Bang for Your Buck
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Affordable Lighting Magic
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                Good lighting is the #1 way to create romance on a budget. These options deliver maximum ambiance for minimal cost.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {budgetLighting.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                            <h3 className="font-heading text-lg font-bold text-white mb-2">💡 Free Lighting Ideas</h3>
                            <ul className="text-white/80 space-y-1">
                                <li>• Use LED candles from the dollar store</li>
                                <li>• Repurpose Christmas lights you already own</li>
                                <li>• Mason jars with tea lights = instant charm</li>
                                <li>• Smartphone flashlight propped under a translucent container</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Furniture */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-terracotta rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Invest Smartly
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Affordable Outdoor Furniture
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                These pieces punch above their price point. Get restaurant-quality comfort without the restaurant markup.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {budgetFurniture.map(product => (
                                <div key={product.id} className="bg-limestone rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8 rounded-r-2xl">
                            <h3 className="font-heading text-lg font-bold text-charcoal mb-2">🪑 Already Have Furniture?</h3>
                            <p className="text-charcoal/70">
                                No need to buy new! Dress up existing chairs with throw pillows and blankets. Move your kitchen chairs outside for the evening. An old quilt on the grass makes a romantic picnic spot.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Fire Options */}
            {budgetFirePits.length > 0 && (
                <section className="section bg-limestone">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-2 bg-charcoal rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                    Worth the Splurge
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                    Budget-Friendly Fire Features
                                </h2>
                                <p className="text-charcoal/70 max-w-2xl mx-auto">
                                    A little warmth and dancing flames go a long way. These options won&apos;t break the bank but deliver serious romance.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                {budgetFirePits.map(product => (
                                    <div key={product.id} className="bg-white rounded-2xl p-5">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* DIY Tips */}
            <section className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
                            $0 Budget Upgrades
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">🌹 Set the Scene</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>• Scatter flower petals from grocery store roses</li>
                                    <li>• Use a nice sheet as a tablecloth</li>
                                    <li>• Move indoor plants outside temporarily</li>
                                    <li>• Clean your space—tidiness is romantic!</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">🎵 Free Ambiance</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>• Spotify/YouTube romantic playlists (free tier works!)</li>
                                    <li>• Use existing Bluetooth speakers</li>
                                    <li>• Tablet propped up plays a virtual fireplace</li>
                                    <li>• Star-gazing apps identify constellations</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">🍝 Budget Menu Ideas</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>• Pasta is always romantic (and cheap!)</li>
                                    <li>• Cheese board with crackers and fruit</li>
                                    <li>• Build-your-own tacos or flatbreads</li>
                                    <li>• Fondue with whatever you have</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4">🎁 Thoughtful Touches</h3>
                                <ul className="text-white/80 space-y-2">
                                    <li>• Write a handwritten card/letter</li>
                                    <li>• Print photos of your favorite memories</li>
                                    <li>• Create a &quot;reasons I love you&quot; jar</li>
                                    <li>• Plan a future date together over dessert</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete Budget Setup */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            The Complete Budget Setup
                        </h2>

                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Shopping List</h3>
                                    <ul className="space-y-3 text-charcoal/80">
                                        <li className="flex justify-between">
                                            <span>String Lights (100ft)</span>
                                            <span className="font-bold">~$25</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>LED Candles (6-pack)</span>
                                            <span className="font-bold">~$15</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Outdoor Cushions</span>
                                            <span className="font-bold">~$30</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Dinner Ingredients</span>
                                            <span className="font-bold">~$40</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Wine/Champagne</span>
                                            <span className="font-bold">~$20</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Flowers</span>
                                            <span className="font-bold">~$15</span>
                                        </li>
                                        <li className="border-t pt-3 flex justify-between font-bold text-lg">
                                            <span>Total</span>
                                            <span className="text-green-600">~$145</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-charcoal mb-4">What You&apos;re Getting</h3>
                                    <ul className="space-y-3 text-charcoal/70">
                                        <li>✓ Reusable lights for future date nights</li>
                                        <li>✓ Candles that last for months</li>
                                        <li>✓ Cushions that upgrade your existing furniture</li>
                                        <li>✓ A home-cooked meal made with love</li>
                                        <li>✓ Quality time without interruptions</li>
                                        <li>✓ Memories that cost nothing extra</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-linear-to-r from-green-500 to-emerald-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Love Doesn&apos;t Need a Receipt
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            The best Valentine&apos;s gifts aren&apos;t expensive—they&apos;re thoughtful. Your effort to create something special in your own backyard means more than any fancy restaurant ever could.
                        </p>
                        <Link
                            href="/"
                            className="bg-white text-charcoal font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                        >
                            Find Budget-Friendly Picks
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
                    title="Valentine's Day on a Budget: Backyard Edition"
                    url="/guides/valentines-budget"
                    image="/images/valentines-budget-hero.png"
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
