import { Metadata } from 'next';
import Link from 'next/link';
import { Hero, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/products-wrapper';

export const metadata: Metadata = {
    title: 'Best Fire Pits for Romantic Evenings | Valentine\'s 2026',
    description: 'Find the perfect fire pit for date nights and romantic evenings. Compare smokeless fire pits, propane tables, and tabletop options for couples.',
    openGraph: {
        title: 'Best Fire Pits for Romantic Evenings',
        description: 'The ultimate guide to choosing a fire pit for date nights',
        images: [{
            url: '/images/products/valentines-romantic-firepit-hero.png',
            width: 1200,
            height: 630,
            alt: 'Romantic fire pit setup for couples'
        }],
        url: 'https://vestaverandaliving.store/guides/romantic-fire-pits',
    },
    alternates: {
        canonical: 'https://vestaverandaliving.store/guides/romantic-fire-pits',
    },
};

export const dynamic = 'force-dynamic';

export default async function RomanticFirePitsPage() {
    const allProducts = await getAllProducts();

    // Get all fire pit products
    const allFirePits = allProducts
        .filter(p => p.category === 'Fire Pits, Heaters & Grills' &&
            !p.name.toLowerCase().includes('heater') &&
            !p.name.toLowerCase().includes('brush') &&
            !p.name.toLowerCase().includes('mat'));

    // Categorize by type
    const smokelessPits = allFirePits.filter(p =>
        p.name.toLowerCase().includes('solo stove') ||
        p.name.toLowerCase().includes('breeo')
    ).slice(0, 3);

    const propanePits = allFirePits.filter(p =>
        p.name.toLowerCase().includes('propane') ||
        p.name.toLowerCase().includes('serenelife')
    ).slice(0, 2);

    const tabletopPits = allFirePits.filter(p =>
        p.name.toLowerCase().includes('mesa') ||
        p.name.toLowerCase().includes('tabletop')
    ).slice(0, 2);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'Best Fire Pits for Romantic Evenings',
                        image: 'https://vestaverandaliving.store/images/valentines-romantic-firepit-hero.png',
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
                title="Fire Pits Built for Romance"
                ctaText="Find Your Perfect Flame →"
                ctaHref="#comparison"
                backgroundImage="/images/products/valentines-romantic-firepit-hero.png"
            />

            {/* Quick Answer Box */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-orange-50 to-red-50 border-l-4 border-terracotta p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">🔥</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                        Quick Answer: Our Top Pick
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        For romantic evenings, we recommend <strong>smokeless fire pits</strong> like the Solo Stove or Breeo. They eliminate smoke (no more playing musical chairs to avoid it), create mesmerizing flames, and let you focus on each other instead of the fire.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
                                Why Fire Pits Are the Ultimate Romance Upgrade
                            </h2>
                            <p className="text-charcoal/80 leading-relaxed mb-6">
                                There&apos;s a reason humans have gathered around fire for millennia. The warm glow, the gentle crackle, the dancing flames—it all creates an almost hypnotic atmosphere that naturally draws people closer together.
                            </p>
                            <p className="text-charcoal/70">
                                For date nights, the right fire pit transforms your backyard into an intimate retreat. But not all fire pits are created equal. Here&apos;s what to look for when choosing one for romantic evenings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes a Fire Pit Romantic */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            What Makes a Fire Pit &quot;Romantic&quot;?
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 text-center">
                                <span className="text-4xl mb-4 block">💨</span>
                                <h3 className="font-heading text-xl font-bold mb-3">Smokeless Design</h3>
                                <p className="text-charcoal/70 text-sm">
                                    Nothing kills romance faster than smoke in your eyes. Smokeless fire pits use secondary combustion to burn off smoke before it reaches you.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 text-center">
                                <span className="text-4xl mb-4 block">✨</span>
                                <h3 className="font-heading text-xl font-bold mb-3">Beautiful Flames</h3>
                                <p className="text-charcoal/70 text-sm">
                                    The flame pattern matters. Look for designs that create tall, dancing flames visible from all angles—perfect for conversation across the fire.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 text-center">
                                <span className="text-4xl mb-4 block">🎨</span>
                                <h3 className="font-heading text-xl font-bold mb-3">Aesthetic Appeal</h3>
                                <p className="text-charcoal/70 text-sm">
                                    Your fire pit should enhance your outdoor space. Sleek stainless steel, weathered corten, or elegant propane tables all have their charm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smokeless Fire Pits */}
            <section id="comparison" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-terracotta rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Top Choice for Couples
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Smokeless Fire Pits
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                The gold standard for romantic outdoor fires. Clean-burning, easy to start, and visually stunning.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {smokelessPits.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                            <h3 className="font-heading text-xl font-bold text-white mb-3">💕 Romance Rating: ★★★★★</h3>
                            <p className="text-white/90">
                                <strong>Why couples love them:</strong> No smoke means you can sit side-by-side without constantly shifting. The clean, intense flames create a mesmerizing focal point for conversation. Plus, no smoke smell on your clothes afterwards!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Propane Fire Pits */}
            {propanePits.length > 0 && (
                <section className="section bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-2 bg-sage rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                    Elegant & Effortless
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                    Propane Fire Tables
                                </h2>
                                <p className="text-charcoal/70 max-w-2xl mx-auto">
                                    Instant flames at the flip of a switch. Perfect for spontaneous date nights when you don&apos;t want to fuss with wood.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {propanePits.map(product => (
                                    <div key={product.id} className="bg-limestone rounded-2xl p-5">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8 rounded-r-2xl">
                                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">💕 Romance Rating: ★★★★☆</h3>
                                <p className="text-charcoal/70">
                                    <strong>Perfect for:</strong> Couples who value convenience. One button and you have instant ambiance. Many double as coffee tables—functional AND romantic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Tabletop Fire Pits */}
            {tabletopPits.length > 0 && (
                <section className="section bg-limestone">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-2 bg-charcoal rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                    Intimate & Portable
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                    Tabletop Fire Pits
                                </h2>
                                <p className="text-charcoal/70 max-w-2xl mx-auto">
                                    Perfect for small spaces, balconies, or as a dining table centerpiece. Creates an intimate glow right where you&apos;re sitting.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                {tabletopPits.map(product => (
                                    <div key={product.id} className="bg-white rounded-2xl p-5">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white border-l-4 border-terracotta p-6 mt-8 rounded-r-2xl max-w-3xl mx-auto">
                                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">💕 Romance Rating: ★★★★★</h3>
                                <p className="text-charcoal/70">
                                    <strong>Ultimate intimate setup:</strong> Place between you and your partner for a face-to-face dining experience illuminated by dancing flames. Perfect for Valentine&apos;s Day dinner on the patio.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* The Setup Guide */}
            <section className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
                            Setting the Scene for Romance
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="bg-terracotta rounded-full w-10 h-10 flex items-center justify-center">1</span>
                                    Position for Intimacy
                                </h3>
                                <p className="text-white/80 ml-14">
                                    Place seating at 90° angles rather than across from each other. This allows you to easily turn toward the fire or toward your partner while keeping the warmth accessible to both.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="bg-terracotta rounded-full w-10 h-10 flex items-center justify-center">2</span>
                                    Layer Your Lighting
                                </h3>
                                <p className="text-white/80 ml-14">
                                    The fire pit provides the main glow, but add soft string lights overhead and LED candles on side tables for depth. This creates that magical Instagram-worthy atmosphere.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="bg-terracotta rounded-full w-10 h-10 flex items-center justify-center">3</span>
                                    Keep Comfort Close
                                </h3>
                                <p className="text-white/80 ml-14">
                                    Have blankets within arm&apos;s reach, drinks on a nearby table, and a music speaker set to low. The goal is zero interruptions once you&apos;re settled in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-linear-to-r from-orange-500 to-red-600">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ignite Your Romance
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            A quality fire pit is an investment in countless memorable evenings together. Whether it&apos;s Valentine&apos;s Day or just a random Tuesday, you&apos;ll have the perfect excuse to cozy up outside.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="bg-white text-charcoal font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Browse Fire Pits
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
                    title="Best Fire Pits for Romantic Evenings"
                    url="/guides/romantic-fire-pits"
                    image="/images/valentines-romantic-firepit-hero.png"
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
