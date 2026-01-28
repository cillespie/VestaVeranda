import { Metadata } from 'next';
import { Hero, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Ooni vs Gozney 2026: Which Pizza Oven Should You Buy? | Vesta Veranda',
    description: 'Ooni Karu 2 Pro or Gozney Roccbox? Detailed comparison of features, heat retention, fuel options, and pizza capacity to help you choose.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Ooni vs Gozney 2026: Which Pizza Oven Should You Buy?',
        description: 'Ooni Karu 2 Pro or Gozney Roccbox? Detailed comparison of features, heat retention, fuel options.',
        url: 'https://vestaverandaliving.store/guides/ooni-vs-gozney',
        images: [
            {
                url: '/images/ooni-vs-gozney-hero.png',
                width: 1200,
                height: 630,
                alt: 'Ooni vs Gozney Comparison Guide',
            },
        ],
    },
};

export default function OoniVsGozeneyGuide() {
    const ooni = sampleProducts.find(p => p.id === 'ooni-karu-2-pro');
    const gozney = sampleProducts.find(p => p.id === 'gozney-roccbox');
    const montAlpi = sampleProducts.find(p => p.id === 'mont-alpi-island-grill');
    const stringLights = sampleProducts.find(p => p.id === 'brightech-solar-lights');

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Ooni vs Gozney 2026: Which Pizza Oven Should You Buy?',
        image: 'https://vestaverandaliving.store/images/ooni-vs-gozney-hero.png',
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
        description: 'Ooni Karu 2 Pro or Gozney Roccbox? Detailed comparison of features, heat retention, fuel options, and pizza capacity to help you choose.'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <Hero
                title="Ooni vs Gozney: Which Pizza Oven Wins?"
                ctaText="Skip to the Verdict →"
                ctaHref="#verdict"
                backgroundImage="/images/ooni-vs-gozney-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Quick Verdict Box */}
                        <div className="bg-linear-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">🍕</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-orange-800 mb-3">
                                        The Quick Verdict
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Ooni Karu 2 Pro</strong> for maximum flexibility—burns wood, charcoal, OR gas,
                                        fits 16&quot; pizzas, and includes a digital thermometer for precise temperature control.
                                    </p>
                                    <p className="text-lg text-charcoal/80 leading-relaxed mt-3">
                                        <strong>Gozney Roccbox</strong> for pizza parties and families with children. Superior
                                        heat retention for back-to-back pizzas, and the silicone jacket stays cool to touch.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Editorial Content */}
                        <article className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal text-charcoal/80 mx-auto">

                            <h2>Two Premium Pizza Ovens, Different Philosophies</h2>
                            <p className="text-xl font-medium text-charcoal">
                                Both Ooni and Gozney produce excellent outdoor pizza ovens that reach 950°F and
                                cook Neapolitan-style pizzas in 60-90 seconds. The differences lie in design philosophy,
                                fuel flexibility, and user experience.
                            </p>
                            <p>
                                This comparison focuses on the <strong>Ooni Karu 2 Pro</strong> (multi-fuel, 16&quot; capacity)
                                and the <strong>Gozney Roccbox</strong> (gas or wood, 12&quot; capacity)—two of the most
                                popular models in their respective lineups.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Side by Side Product Cards */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Meet the Contenders
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-slate-700 text-white py-3 px-6 text-center">
                                    <span className="font-bold">🔥 Multi-Fuel Flexibility</span>
                                </div>
                                <div className="p-6">
                                    {ooni && <ProductCard product={ooni} />}
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-emerald-700 text-white py-3 px-6 text-center">
                                    <span className="font-bold">🌡️ Superior Heat Retention</span>
                                </div>
                                <div className="p-6">
                                    {gozney && <ProductCard product={gozney} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Real Differences */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            5 Key Differences That Matter
                        </h2>

                        {/* Difference 1 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-terracotta text-white font-bold text-xl flex items-center justify-center">
                                    1
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">
                                    Fuel Flexibility
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                                    <h4 className="font-bold text-charcoal mb-3">Ooni Karu 2 Pro</h4>
                                    <ul className="space-y-2 text-charcoal/70">
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Wood & charcoal (included)</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Gas adapter available</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> True multi-fuel out of box</li>
                                    </ul>
                                    <p className="mt-4 text-sm text-slate-600 font-medium">
                                        🏆 <strong>Winner for fuel options</strong>
                                    </p>
                                </div>
                                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                                    <h4 className="font-bold text-charcoal mb-3">Gozney Roccbox</h4>
                                    <ul className="space-y-2 text-charcoal/70">
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Gas (default model)</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Wood burner sold separately</li>
                                        <li className="flex items-center gap-2"><span className="text-red-500">✗</span> No charcoal option</li>
                                    </ul>
                                    <p className="mt-4 text-sm text-green-600 font-medium">
                                        Fuel choice made at purchase
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Difference 2 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-terracotta text-white font-bold text-xl flex items-center justify-center">
                                    2
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">
                                    Heat Retention (The Party Factor)
                                </h3>
                            </div>
                            <p className="text-charcoal/80 mb-6">
                                When making 6-8 pizzas for a gathering, the oven loses heat each time the door opens.
                                <strong> How quickly does it recover?</strong>
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                                    <h4 className="font-bold text-charcoal mb-3">Ooni</h4>
                                    <p className="text-charcoal/70">Thinner insulation. Recovery takes 2-3 minutes between pizzas. Requires more attention during high-volume sessions.</p>
                                </div>
                                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                                    <h4 className="font-bold text-charcoal mb-3">Roccbox</h4>
                                    <p className="text-charcoal/70">Thick silicone jacket provides superior insulation. Nearly instant recovery. Pizza #8 cooks as consistently as #1.</p>
                                    <p className="mt-4 text-sm text-green-600 font-medium">
                                        🏆 <strong>Winner for pizza parties</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Difference 3 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-terracotta text-white font-bold text-xl flex items-center justify-center">
                                    3
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">
                                    Pizza Size
                                </h3>
                            </div>
                            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                                <div className="grid md:grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-5xl font-bold text-charcoal">16&quot;</div>
                                        <div className="text-charcoal/70 mt-2">Ooni Karu 2 Pro</div>
                                        <div className="text-sm text-charcoal/50">Feeds 2-3 people per pizza</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-bold text-charcoal">12&quot;</div>
                                        <div className="text-charcoal/70 mt-2">Gozney Roccbox</div>
                                        <div className="text-sm text-charcoal/50">Personal/sharing size</div>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-amber-700 mt-6">
                                    <strong>Trade-off:</strong> Ooni makes fewer, larger pizzas. Roccbox makes more, personal-sized ones. Both feed similar crowds—different workflows.
                                </p>
                            </div>
                        </div>

                        {/* Difference 4 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-terracotta text-white font-bold text-xl flex items-center justify-center">
                                    4
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">
                                    Safety Features
                                </h3>
                            </div>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                                <p className="text-blue-900/80">
                                    The Roccbox&apos;s silicone jacket is cool to touch even during operation.
                                    The Ooni&apos;s stainless steel exterior reaches temperatures that can cause burns on contact.
                                </p>
                                <p className="text-blue-700 font-medium mt-3">
                                    🏆 <strong>For households with children or pets, Roccbox has a significant safety advantage.</strong>
                                </p>
                            </div>
                        </div>

                        {/* Difference 5 */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-terracotta text-white font-bold text-xl flex items-center justify-center">
                                    5
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal">
                                    Temperature Monitoring
                                </h3>
                            </div>
                            <p className="text-charcoal/80 mb-6">
                                The Ooni Karu 2 Pro includes a built-in digital thermometer displaying exact stone temperature.
                                The Roccbox has an analog gauge with less precision.
                            </p>
                            <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                                <p className="text-charcoal/80">
                                    <strong>For beginners:</strong> The Ooni&apos;s digital readout removes guesswork—the display
                                    shows exactly when the stone reaches optimal cooking temperature (typically 850-950°F).
                                </p>
                                <p className="text-slate-700 font-medium mt-3">
                                    🏆 <strong>Ooni wins for first-time pizza oven users.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA Banner */}
            <VisualCTA
                headline="Restaurant-Quality Pizza at Home"
                subheadline="Both ovens hit 950°F and cook pizza in 60 seconds. Either choice delivers exceptional results—pick the one that fits your style."
                imageSrc="/images/ooni-vs-gozney-hero.png"
                imageAlt="Outdoor pizza oven cooking Neapolitan pizza"
                ctaText="Compare Prices"
                ctaLink="https://amzn.to/4jTP2K2"
                badge="Pizzeria Results"
                variant="banner"
                theme="gradient"
            />

            {/* The Verdict */}
            <section id="verdict" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            The Final Verdict
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-800 p-8 rounded-2xl">
                                <h3 className="font-heading text-xl font-bold text-white mb-4">
                                    Choose Ooni Karu 2 Pro if...
                                </h3>
                                <ul className="space-y-3 text-white">
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-400">→</span>
                                        <span>Experimenting with wood, charcoal, and gas sounds appealing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-400">→</span>
                                        <span>Larger 16&quot; pizzas fit your entertaining style</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-400">→</span>
                                        <span>Digital temperature readout is valuable (especially for beginners)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-400">→</span>
                                        <span>Typical sessions involve 1-4 pizzas, not large parties</span>
                                    </li>
                                </ul>
                                <a
                                    href="https://amzn.to/4jTP2K2"
                                    target="_blank"
                                    rel="nofollow sponsored"
                                    className="mt-6 w-full bg-white text-charcoal font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                                >
                                    Shop Ooni Karu 2 Pro
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            <div className="bg-emerald-800 p-8 rounded-2xl">
                                <h3 className="font-heading text-xl font-bold text-white mb-4">
                                    Choose Gozney Roccbox if...
                                </h3>
                                <ul className="space-y-3 text-white">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-300">→</span>
                                        <span>Pizza parties with 5+ pizzas are common</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-300">→</span>
                                        <span>Children or pets will be near the cooking area</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-300">→</span>
                                        <span>Consistent heat retention matters more than flexibility</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-300">→</span>
                                        <span>A lower, more stable profile fits the space better</span>
                                    </li>
                                </ul>
                                <a
                                    href="https://amzn.to/49xXXgO"
                                    target="_blank"
                                    rel="nofollow sponsored"
                                    className="mt-6 w-full bg-white text-charcoal font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                                >
                                    Shop Gozney Roccbox
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
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
                            Complete the Pizza Night Setup
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            A pizza oven is just the beginning. Consider these additions for the ultimate outdoor pizza experience.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {montAlpi && <ProductCard product={montAlpi} />}
                            {stringLights && <ProductCard product={stringLights} />}
                        </div>
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
                                    question: "Can wood pellets be used in the Ooni?",
                                    answer: "Yes—pellets, chips, chunks, or charcoal all work. Many users prefer pellets for consistent heat and easier cleanup. A pellet hopper accessory improves the experience."
                                },
                                {
                                    question: "Which is better for beginners?",
                                    answer: "The Ooni's digital thermometer removes guesswork about stone temperature—helpful for first-time users. The Roccbox is very forgiving once hot, but requires more intuition about when it's ready."
                                },
                                {
                                    question: "Can foods besides pizza be cooked?",
                                    answer: "Absolutely. Steaks, fish, naan, flatbreads, roasted vegetables—anything that benefits from extreme heat works well. Both brands sell cast iron accessories for expanded cooking options."
                                },
                                {
                                    question: "How long do these ovens last?",
                                    answer: "With proper care, 10+ years is typical. Clean the stone after each use, cover when not in use, and store indoors during harsh winters. Both manufacturers have good customer service for replacement parts."
                                },
                                {
                                    question: "Is the price difference justified?",
                                    answer: "Both ovens are priced similarly in their respective categories. The value depends on which features matter most: fuel flexibility and size (Ooni) vs. heat retention and safety (Roccbox)."
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

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Ooni vs Gozney: The Ultimate Pizza Oven Showdown 2026"
                    url="/guides/ooni-vs-gozney"
                    image="/images/pizza-oven-hero.jpg"
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
