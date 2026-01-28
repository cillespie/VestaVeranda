import { Metadata } from 'next';
import { Hero, ShareButtons, ComparisonTable } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Jackery vs BLUETTI: Best Solar Generator for Patio Power (2026) | Vesta Veranda',
    description: 'Power your outdoor office, movie nights, and string lights. We compare the Jackery Explorer 1000 v2 against the BLUETTI AC200L to see which wins for backyard use.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Jackery vs BLUETTI: Best Solar Generator for Patio Power (2026)',
        description: 'Power your outdoor office, movie nights, and string lights. We compare the Jackery Explorer 1000 v2 against the BLUETTI AC200L.',
        url: 'https://vestaverandaliving.store/compare/jackery-vs-bluetti',
        images: [
            {
                url: '/images/jackery_vs_bluetti_hero.png',
                width: 1200,
                height: 630,
                alt: 'Jackery vs BLUETTI Comparison',
            },
        ],
    },
};

export default function JackeryVsBluettiGuide() {
    const jackery = sampleProducts.find(p => p.id === 'jackery-explorer-1000');
    const bluetti = sampleProducts.find(p => p.id === 'bluetti-ac200l');
    const panels = sampleProducts.find(p => p.id === 'jackery-solar-saga-100w');

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Jackery vs BLUETTI: Best Solar Generator for Patio Power (2026)',
        image: 'https://vestaverandaliving.store/images/jackery_vs_bluetti_hero.png',
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
        datePublished: '2026-01-18',
        dateModified: new Date().toISOString().split('T')[0],
        description: 'Power your outdoor office, movie nights, and string lights. We compare the Jackery Explorer 1000 v2 against the BLUETTI AC200L to see which wins for backyard use.'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <Hero
                title="Jackery vs BLUETTI: Power Your Patio"
                ctaText="See the Winner →"
                ctaHref="#verdict"
                backgroundImage="/images/jackery_vs_bluetti_hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-linear-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <h2 className="font-heading text-2xl font-bold text-blue-800 mb-3">
                                Why You Need Silent Power
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed">
                                The modern patio isn&apos;t just for sitting; it&apos;s for working, watching movies, and entertaining.
                                Running extension cords across the lawn is a trip hazard and looks terrible.
                                a portable power station (solar generator) gives you instant, silent outlets anywhere in your yard.
                            </p>
                        </div>

                        <article className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal text-charcoal/80 mx-auto">
                            <h2>The Contenders</h2>
                            <p>
                                We are comparing the two heavyweights of the industry:
                                <strong> Jackery</strong> (the pioneer of portable solar) and
                                <strong> BLUETTI</strong> (the leader in battery tech and longevity).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Side by Side Product Cards */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-orange-600 text-white py-3 px-6 text-center">
                                    <span className="font-bold">Team Portability</span>
                                </div>
                                <div className="p-6">
                                    {jackery && <ProductCard product={jackery} />}
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-blue-600 text-white py-3 px-6 text-center">
                                    <span className="font-bold">Team Power</span>
                                </div>
                                <div className="p-6">
                                    {bluetti && <ProductCard product={bluetti} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Points */}
            <section id="compare" className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Key Differences
                        </h2>

                        {/* Point 1: Battery Chemistry */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-terracotta text-white font-bold flex items-center justify-center">1</div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">Battery Lifespan</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-limestone p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">BLUETTI (Winner 🏆)</h4>
                                    <p className="text-sm text-charcoal/80">Uses LiFePO4 chemistry. Rated for 3,000+ cycles (10 years of daily use) before hitting 80% capacity.</p>
                                </div>
                                <div className="bg-white border border-charcoal/10 p-6 rounded-xl">
                                    <h4 className="font-bold mb-2">Jackery (Old Models)</h4>
                                    <p className="text-sm text-charcoal/80">Older Jackerys used Lithium-ion (500 cycles). <strong>Note:</strong> The new 1000 v2 (linked here) has upgraded to LiFePO4, catching up to BLUETTI.</p>
                                </div>
                            </div>
                        </div>

                        {/* Point 2: Portability */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-terracotta text-white font-bold flex items-center justify-center">2</div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">Weight & Handle</h3>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                                <p className="text-charcoal/80">
                                    <strong>Jackery Wins on Portability.</strong> The Explorer 1000 v2 is lighter and has a fixed handle that is incredibly ergonomic. BLUETTI units act more like heavy bricks. If you plan to move it from the garage to the patio often, get the Jackery.
                                </p>
                            </div>
                        </div>

                        {/* Point 3: Solar Charging */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-terracotta text-white font-bold flex items-center justify-center">3</div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">Solar Ecosystem</h3>
                            </div>
                            <p className="text-charcoal/80 mb-6">
                                Both brands make excellent folding panels. However, Jackery&apos;s &quot;SolarSaga&quot; panels are slightly more durable and easier to set up with magnetic closures.
                            </p>
                            {panels && <ProductCard product={panels} />}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Specs Comparison
                        </h2>
                        <ComparisonTable
                            title="Portable Power Stations"
                            rows={[
                                {
                                    productName: "Jackery Explorer 1000 v2",
                                    keyFeature: "Lightweight (22 lbs)",
                                    bestFor: "Mobile use, camping, moving around yard",
                                    priceTier: "$$",
                                    link: jackery?.affiliateLink || '#'
                                },
                                {
                                    productName: "BLUETTI AC200L",
                                    keyFeature: "High Output (2400W)",
                                    bestFor: "Running heavy tools or appliances",
                                    priceTier: "$$$",
                                    link: bluetti?.affiliateLink || '#'
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Verdict Section */}
            <section id="verdict" className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
                            The Final Verdict for Patio Use
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h3 className="font-bold text-orange-900 text-xl mb-4">Choose Jackery if...</h3>
                                <ul className="space-y-2 text-charcoal/80">
                                    <li>✓ You want to easily carry it with one hand</li>
                                    <li>✓ You prioritize simple, plug-and-play usage</li>
                                    <li>✓ You love the orange/rugged aesthetic</li>
                                </ul>
                                <a href={jackery?.affiliateLink || 'https://amzn.to/4b7sx1S'} target="_blank" rel="nofollow sponsored" className="mt-6 block text-center bg-orange-600 text-white font-bold py-3 rounded-full hover:bg-orange-700">Shop Jackery</a>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                                <h3 className="font-bold text-blue-900 text-xl mb-4">Choose BLUETTI if...</h3>
                                <ul className="space-y-2 text-charcoal/80">
                                    <li>✓ You need to power a space heater or grill (high watts)</li>
                                    <li>✓ You want 10+ year battery longevity</li>
                                    <li>✓ It will mostly stay in one spot</li>
                                </ul>
                                <a href={bluetti?.affiliateLink || 'https://amzn.to/3LWgKJy'} target="_blank" rel="nofollow sponsored" className="mt-6 block text-center bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700">Shop BLUETTI</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl mt-12">
                <ShareButtons
                    title="Jackery vs BLUETTI for Outdoor Living"
                    url="/compare/jackery-vs-bluetti"
                    image="/images/jackery_vs_bluetti_hero.png"
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
