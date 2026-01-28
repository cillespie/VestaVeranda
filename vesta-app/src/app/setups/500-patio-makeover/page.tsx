import { Metadata } from 'next';
import Image from 'next/image';
import { Hero, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'The $500 Patio Makeover: transform Your Space on a Budget | Vesta Veranda',
    description: 'You don\'t need thousands to create an outdoor oasis. See how to combine affordable wicker seating, string lights, and a rug for a complete transformation under $500.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'The $500 Patio Makeover: Transform Your Space',
        description: 'See how to combine affordable wicker seating, string lights, and a rug for a complete transformation under $500.',
        url: 'https://vestaverandaliving.store/setups/500-patio-makeover',
        images: [
            {
                url: '/images/patio_makeover_500_hero.png',
                width: 1200,
                height: 630,
                alt: '$500 Patio Makeover',
            },
        ],
    },
};

export default function PatioMakeoverGuide() {
    const devoko = sampleProducts.find(p => p.id === 'devoko-wicker-set');
    const lights = sampleProducts.find(p => p.id === 'brightown-string-lights');
    const rug = sampleProducts.find(p => p.id === 'safavieh-courtyard-rug');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'The $500 Patio Makeover: Transform Your Space on a Budget',
                        image: 'https://vestaverandaliving.store/images/patio_makeover_500_hero.png',
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
                        datePublished: '2026-01-20',
                        dateModified: new Date().toISOString().split('T')[0],
                        description: 'You don\'t need thousands to create an outdoor oasis. See how to combine affordable wicker seating, string lights, and a rug for a complete transformation under $500.'
                    })
                }}
            />
            {/* Hero Section */}
            <Hero
                title="The $500 Patio Makeover Challenge"
                ctaText="Get the Look →"
                ctaHref="#get-the-look"
                backgroundImage="/images/patio_makeover_500_hero.png"
            />

            {/* The Vision */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                                Total Budget: $498.00
                            </span>
                            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
                                From &quot;Concrete Slab&quot; to &quot;Cozy Oasis&quot;
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                                We&apos;ve all seen the $50,000 backyard renovations with custom pergolas and outdoor kitchens.
                                But what if you just want a nice place to drink your morning coffee? This guide proves you
                                can completely transform a small patio or balcony for less than the cost of a weekend getaway.
                            </p>
                        </div>

                        {/* Visual Breakdown */}
                        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-96">
                                <Image
                                    src="/images/generated/devoko_wicker_set_detail.png"
                                    alt="Detail of wicker furniture texture"
                                    className="object-cover"
                                    fill
                                />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-lg text-sm font-bold text-charcoal">
                                    The Focal Point
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">The Strategy</h3>
                                <ul className="space-y-4 text-charcoal/80">
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">1</span>
                                        <div>
                                            <strong>Anchor the Space:</strong> Start with a rug to cover ugly concrete and define the &quot;room.&quot;
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">2</span>
                                        <div>
                                            <strong>Scale Appropriate Furniture:</strong> Use a bistro set or small chat set that doesn&apos;t overwhelm the area.
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">3</span>
                                        <div>
                                            <strong>Vertical Ambiance:</strong> String lights draw the eye up and create a ceiling of light.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Setup Steps */}
            <section id="get-the-look" className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Get The Look
                        </h2>

                        {/* Step 1: The Furniture */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 border-b border-charcoal/10 pb-4">
                                Step 1: The foundation (~$100-300)
                            </h3>
                            <p className="text-charcoal/80 mb-6">
                                The <strong>Devoko 3-Piece Set</strong> is the MVP of budget patios. It looks significantly more expensive thanks to the PE wicker texture, yet fits comfortably in tight corners.
                            </p>
                            {devoko && <ProductCard product={devoko} variant="featured" />}
                        </div>

                        {/* Step 2: The Lighting */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 border-b border-charcoal/10 pb-4">
                                Step 2: The Glow (~$20-40)
                            </h3>
                            <p className="text-charcoal/80 mb-6">
                                Nothing changes a vibe faster than lighting. These shatterproof LED bulbs from <strong>Brightown</strong> are commercial grade but affordable.
                            </p>
                            {lights && <ProductCard product={lights} />}
                        </div>

                        {/* Step 3: The Rug */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 border-b border-charcoal/10 pb-4">
                                Step 3: The Anchor (~$50-100)
                            </h3>
                            <p className="text-charcoal/80 mb-6">
                                Define the zone with a durable outdoor rug. The <strong>Safavieh Courtyard</strong> series is easy to clean with a hose and withstands heavy foot traffic.
                            </p>
                            {rug && <ProductCard product={rug} />}
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Breakdown Table */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-charcoal text-white rounded-2xl overflow-hidden p-8 shadow-xl">
                            <h3 className="font-heading text-2xl font-bold text-center mb-8">The Receipt</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                                    <span>Devoko 3-Piece Set</span>
                                    <span className="font-bold">~$139.99</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                                    <span>Safavieh 5x8 Rug</span>
                                    <span className="font-bold">~$54.00</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                                    <span>Brightown 25ft Lights</span>
                                    <span className="font-bold">~$18.99</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                                    <span>Plants/Pillows (Est.)</span>
                                    <span className="font-bold">~$50.00</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 text-xl">
                                    <span className="font-bold text-terracotta">TOTAL ESTIMATE</span>
                                    <span className="font-bold text-terracotta">~$263.00</span>
                                </div>
                            </div>
                            <p className="text-center text-sm text-white/50 mt-8">
                                *Prices fluctuate daily. Estimates based on typical Amazon pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="Start Your Transformation Today"
                    subheadline="You are one Amazon delivery away from a whole new outdoor living room."
                    imageSrc="/images/patio_makeover_500_hero.png"
                    imageAlt="Cozy patio at dusk"
                    ctaText="Shop The Complete List"
                    ctaLink={devoko?.affiliateLink || '#'}
                    badge="Weekend Project"
                    variant="horizontal"
                    theme="warm"
                />
            </div>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl mt-12">
                <ShareButtons
                    title="The $500 Patio Makeover Guide"
                    url="/setups/500-patio-makeover"
                    image="/images/patio_makeover_500_hero.png"
                />
            </div>

            {/* Affiliate Disclaimer */}
            <section className="py-6 bg-charcoal/5 border-t border-warm-gray-200 mt-12">
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
