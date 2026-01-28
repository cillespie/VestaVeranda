import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/products-wrapper';

export const metadata: Metadata = {
    title: 'Valentine\'s Day Gift Ideas for the Outdoor Lover | 2026 Guide',
    description: 'Perfect Valentine\'s gifts for the outdoor enthusiast. From fire pits to string lights, find thoughtful gifts that enhance backyard living.',
    openGraph: {
        title: 'Valentine\'s Day Gift Ideas for the Outdoor Lover',
        description: 'Thoughtful outdoor living gifts for Valentine\'s Day 2026',
        images: [{
            url: '/images/products/valentines-gift-hero.png',
            width: 1200,
            height: 630,
            alt: 'Valentine\'s Day outdoor gift ideas'
        }],
        url: 'https://vestaverandaliving.store/guides/valentines-gift-ideas',
    },
    alternates: {
        canonical: 'https://vestaverandaliving.store/guides/valentines-gift-ideas',
    },
};

export const dynamic = 'force-dynamic';

export default async function ValentinesGiftIdeasPage() {
    const allProducts = await getAllProducts();

    // Gift categories with product recommendations
    const firePitGifts = allProducts
        .filter(p => p.category === 'Fire Pits, Heaters & Grills')
        .slice(0, 3);

    const lightingGifts = allProducts
        .filter(p => p.category === 'Lighting')
        .slice(0, 2);

    const loungeGifts = allProducts
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
                        headline: 'Valentine\'s Day Gift Ideas for the Outdoor Lover',
                        image: 'https://vestaverandaliving.store/images/valentines-fire-pit.png',
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
                        datePublished: '2026-01-28',
                        dateModified: '2026-01-28',
                        description: 'The ultimate guide to Valentine\'s Day gifts for outdoor living enthusiasts.'
                    })
                }}
            />

            <Hero
                title="Gift Ideas for the Outdoor Lover"
                ctaText="See Top Picks →"
                ctaHref="#gifts"
                backgroundImage="/images/products/valentines-gift-hero.png"
            />

            {/* Intro */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-pink-50 to-red-50 border-l-4 border-terracotta p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">🎁</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                        Skip the Chocolate, Gift an Experience
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        This Valentine&apos;s Day, give something that creates lasting memories. Outdoor living gifts transform backyards into romantic retreats—perfect for couples who love spending time together under the stars.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
                                Whether your partner dreams of cozy fireside evenings, magical string-lit dinners, or lazy weekend afternoons on comfortable outdoor furniture, we&apos;ve curated the perfect gifts that show you truly understand what they love.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fire Pit Gifts */}
            <section id="gifts" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-terracotta rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                🔥 For the Fire Lover
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Fire Pits & Warmth
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                Nothing says romance like the warm glow of a fire. These gifts create the perfect ambiance for intimate conversations and cozy evenings together.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {firePitGifts.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                            <p className="text-white/90">
                                <strong className="text-white">💡 Gift Tip:</strong> Pair a fire pit with a cozy blanket and a bottle of wine for the ultimate romantic gesture. Consider adding a fire pit cover for a complete gift.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lighting Gifts */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-sage rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                ✨ For the Ambiance Seeker
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Magical Lighting
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Transform any outdoor space into a romantic wonderland with the right lighting. These gifts make every evening feel special.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {lightingGifts.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-2xl p-6 mt-8 border-l-4 border-amber-500">
                            <h3 className="font-heading text-lg font-bold text-charcoal mb-2">Why Lighting Makes a Perfect Gift</h3>
                            <ul className="text-charcoal/70 space-y-2">
                                <li>• Instant transformation of any outdoor space</li>
                                <li>• Solar options mean no installation hassle</li>
                                <li>• Creates romantic atmosphere for years to come</li>
                                <li>• Perfect for renters and homeowners alike</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lounge Gifts */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-charcoal rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                🛋️ For the Comfort Seeker
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Cozy Outdoor Furniture
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Give the gift of comfort. These pieces create the perfect spot for couples to relax, read together, or simply enjoy each other&apos;s company outdoors.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {loungeGifts.map(product => (
                                <div key={product.id} className="bg-limestone rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Guide */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Gifts for Every Budget
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    Under $50
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4">Thoughtful & Sweet</h3>
                                <ul className="space-y-2 text-charcoal/70 text-sm">
                                    <li>• String light sets</li>
                                    <li>• Solar pathway lights</li>
                                    <li>• Grill accessories</li>
                                    <li>• Outdoor pillows & throws</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    $50-200
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4">Meaningful & Memorable</h3>
                                <ul className="space-y-2 text-charcoal/70 text-sm">
                                    <li>• Tabletop fire pits</li>
                                    <li>• Bluetooth speakers</li>
                                    <li>• Bistro furniture sets</li>
                                    <li>• Premium solar lighting</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    $200+
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4">The Ultimate Gift</h3>
                                <ul className="space-y-2 text-charcoal/70 text-sm">
                                    <li>• Premium fire pits</li>
                                    <li>• Outdoor furniture sets</li>
                                    <li>• Pizza ovens</li>
                                    <li>• Portable power stations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-linear-to-r from-pink-600 to-red-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Give the Gift of Outdoor Living
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            The best gifts are the ones that create experiences. Help your loved one build their dream outdoor space—a gift that keeps giving all year long.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="bg-white text-charcoal font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Browse All Products
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
                    title="Valentine's Day Gift Ideas for the Outdoor Lover"
                    url="/guides/valentines-gift-ideas"
                    image="/images/products/valentines-gift-hero.png"
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
