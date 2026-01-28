import { Metadata } from 'next';
import { Hero, ComparisonTable, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Best Giant Lawn Games for Weddings 2026 | Vesta Veranda',
    description: 'Planning lawn games for your wedding? Giant Jenga, cornhole, and Connect 4 keep guests entertained during cocktail hour. Complete guide with setup tips and product picks.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'Best Giant Lawn Games for Weddings 2026',
        description: 'Planning lawn games for your wedding? Giant Jenga, cornhole, and Connect 4 keep guests entertained.',
        url: 'https://vestaverandaliving.store/guides/lawn-games-weddings',
        images: [
            {
                url: '/images/lawn-games-wedding-hero.png',
                width: 1200,
                height: 630,
                alt: 'Lawn Games for Weddings Guide',
            },
        ],
    },
};

export default function LawnGamesWeddingGuide() {
    const topplingTower = sampleProducts.find(p => p.id === 'gosports-giant-toppling-tower');
    const stringLights = sampleProducts.find(p => p.id === 'brightech-solar-lights');

    // Inline products with unique images
    const cornhole = {
        id: 'eastpoint-cornhole',
        name: 'EastPoint Light-Up Cornhole Set',
        brand: 'EastPoint',
        category: 'glow' as const,
        affiliateLink: 'https://amzn.to/45nh8Y2',
        priceTier: '$$' as const,
        badge: 'Night Play',
        ctaText: 'Light Up Your Reception',
        lifestyleImage: '/images/products/eastpoint-cornhole.png',
        description: 'LED-lit targets and bean bags for night play. Keeps competition going after sunset.',
        features: ['LED Lights', 'Folding Boards', 'Night Play', 'Bean Bag Return'],
    };

    const giant4InRow = {
        id: 'pointyard-giant-4',
        name: 'Pointyard Giant 4-In-A-Row',
        brand: 'Pointyard',
        category: 'glow' as const,
        affiliateLink: 'https://amzn.to/49xfHZE',
        priceTier: '$$' as const,
        badge: 'All Ages',
        ctaText: 'Challenge Your Guests',
        lifestyleImage: '/images/products/pointyard-giant-connect4.png',
        description: '2.8ft tall wooden frame. Easy to understand, impossible to resist. Perfect for all ages.',
        features: ['Pine Wood', '42 Chips', 'Carrying Bag', 'All Ages'],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'Best Giant Lawn Games for Weddings 2026',
                        image: 'https://vestaverandaliving.store/images/lawn-games-wedding-hero.png',
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
                        datePublished: '2026-01-23',
                        dateModified: new Date().toISOString().split('T')[0],
                        description: 'Planning lawn games for your wedding? Giant Jenga, cornhole, and Connect 4 keep guests entertained during cocktail hour. Complete guide with setup tips and product picks.'
                    })
                }}
            />
            {/* Hero Section */}
            <Hero
                title="Best Giant Lawn Games for Your Wedding"
                ctaText="See Top Picks →"
                ctaHref="#picks"
                backgroundImage="/images/lawn-games-wedding-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Quick Answer Box */}
                        <div className="bg-linear-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">💒</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-pink-800 mb-3">
                                        The Quick Recommendation
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Giant Jenga is the essential wedding game.</strong> It photographs
                                        beautifully, engages all ages, and creates organic conversation moments.
                                        Add <strong>cornhole</strong> for competitive guests and <strong>Giant
                                            Connect 4</strong> for families with children. Plan on 3-4 games for 100+ guests.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Editorial Content */}
                        <article className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal text-charcoal/80 mx-auto">

                            <h2>Why Lawn Games Work at Weddings</h2>
                            <p className="text-xl font-medium text-charcoal">
                                The games that get used at weddings share three characteristics: simple rules,
                                visual appeal, and short play sessions. Guests are dressed nicely, holding drinks,
                                and want to participate—not compete in marathons.
                            </p>
                            <p>
                                Games that require explanation, athletic ability, or extended time commitments
                                tend to sit unused. The sweet spot: 10-15 minute games that photograph well.
                            </p>
                        </article>

                        {/* Why Lawn Games Work */}
                        <div className="bg-limestone rounded-2xl p-8 my-8">
                            <h3 className="font-heading text-xl font-bold text-charcoal mb-6 text-center">
                                What Lawn Games Add to Your Reception
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { icon: "📸", title: "Photography Gold", detail: "Candid moments with the Jenga tower create memorable photos" },
                                    { icon: "🤝", title: "Ice Breakers", detail: "Perfect for strangers mingling during cocktail hour" },
                                    { icon: "⏱️", title: "Fills Dead Time", detail: "Keeps guests entertained during photo sessions" },
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl mb-2">{item.icon}</div>
                                        <div className="font-bold text-charcoal">{item.title}</div>
                                        <div className="text-sm text-charcoal/60">{item.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Picks */}
            <section id="picks" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-2 bg-pink-500 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                The Must-Have
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                Giant Jenga: The Centerpiece Game
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto text-lg">
                                This is the game everyone gravitates toward. The one that creates group photos
                                worth framing. The suspense when the tower wobbles draws crowds naturally.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 md:p-8">
                            {topplingTower && (
                                <ProductCard product={topplingTower} variant="featured" />
                            )}
                        </div>
                        <div className="mt-8 p-6 bg-amber-500/20 backdrop-blur rounded-xl border border-amber-500/30">
                            <p className="text-white font-medium flex items-start gap-3">
                                <span className="text-2xl">💡</span>
                                <span><strong>Wedding tip:</strong> Provide dry-erase markers for guests to sign blocks.
                                    Display the tower at home after the wedding as a keepsake—more meaningful than a traditional guest book.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="The Tower Everyone Will Remember"
                    subheadline="There's something magical about a 5-foot Jenga tower about to crash. Photographers know it. Guests know it. Memories are made in that moment."
                    imageSrc="/images/occasions/family-gatherings-hero.png"
                    imageAlt="Giant Jenga at wedding reception"
                    ctaText="Shop Giant Jenga"
                    ctaLink="https://amzn.to/3NxAnbi"
                    badge="#1 Wedding Game"
                    variant="horizontal"
                    theme="warm"
                />
            </div>

            {/* Secondary Picks */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
                            Supporting Games for Your Game Zone
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            Giant Jenga is the hero. These additions round out the experience.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Cornhole */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-blue-600 text-white py-3 px-6">
                                    <span className="font-bold">🌙 For Evening Receptions</span>
                                </div>
                                <div className="p-6">
                                    <ProductCard product={cornhole} />
                                    <p className="mt-4 text-sm text-charcoal/60">
                                        LED-lit boards and bags keep the competition going after sunset.
                                        Custom boards with your wedding date add a personal touch.
                                    </p>
                                </div>
                            </div>

                            {/* Giant Connect 4 */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="bg-green-600 text-white py-3 px-6">
                                    <span className="font-bold">👨‍👩‍👧‍👦 For Families With Kids</span>
                                </div>
                                <div className="p-6">
                                    <ProductCard product={giant4InRow} />
                                    <p className="mt-4 text-sm text-charcoal/60">
                                        Children understand the rules instantly. Adults find it equally compelling.
                                        Compact footprint, big entertainment value.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete the Atmosphere */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-4">
                            Complete the Outdoor Atmosphere
                        </h2>
                        <p className="text-center text-charcoal/60 mb-12 max-w-2xl mx-auto">
                            String lights over the game zone create ambiance as evening arrives.
                        </p>

                        {stringLights && (
                            <div className="max-w-md mx-auto">
                                <ProductCard product={stringLights} />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Setup Tips */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-8">
                            Wedding Game Zone Setup Tips
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "📍 Location",
                                    tips: [
                                        "Away from bar lines (prevent bumping)",
                                        "Visible from seating (draws people naturally)",
                                        "Level ground for Jenga (critical for stability)"
                                    ]
                                },
                                {
                                    title: "📊 Guest Count Math",
                                    tips: [
                                        "50 guests → 2 games minimum",
                                        "100 guests → 3-4 games",
                                        "150+ guests → 5-6 games"
                                    ]
                                },
                                {
                                    title: "⏰ Timing",
                                    tips: [
                                        "Deploy during cocktail hour",
                                        "Keep available through dinner",
                                        "Pack up before first dances"
                                    ]
                                },
                                {
                                    title: "📸 Photography",
                                    tips: [
                                        "Position facing good backdrops",
                                        "Alert photographer when tower is tall",
                                        "Add custom rules sign with event hashtag"
                                    ]
                                }
                            ].map((section, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2 text-charcoal/70 text-sm">
                                        {section.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-center gap-2">
                                                <span className="text-terracotta">•</span>
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
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
                            title="Match Games to Your Guest Mix"
                            rows={[
                                {
                                    productName: "GoSports Giant Toppling Tower",
                                    keyFeature: "Grows from 2.5ft to 5ft+",
                                    bestFor: "Must-have centerpiece, all ages",
                                    priceTier: "$$",
                                    link: "https://amzn.to/3NxAnbi"
                                },
                                {
                                    productName: "EastPoint Light-Up Cornhole",
                                    keyFeature: "LED lights for night play",
                                    bestFor: "Competitive guests, evening events",
                                    priceTier: "$$",
                                    link: "https://amzn.to/45nh8Y2"
                                },
                                {
                                    productName: "Pointyard Giant 4-In-A-Row",
                                    keyFeature: "2.8ft pine wood frame",
                                    bestFor: "Families with children",
                                    priceTier: "$$",
                                    link: "https://amzn.to/49xfHZE"
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
                                    question: "Buy or rent lawn games for a wedding?",
                                    answer: "For one-time events, rental ($30-50/day per game) makes sense. For future use at backyard parties, holidays, and gatherings, purchasing typically pays off after 2-3 events. Giant Jenga costs $60-100 to buy—comparable to 2 rentals."
                                },
                                {
                                    question: "What if it rains?",
                                    answer: "Games work under tents or covered pavilions. Treated wood (like the GoSports Jenga) handles moisture well. Move cornhole under cover and reduce throwing distances if playing in partially covered spaces."
                                },
                                {
                                    question: "Are lawn games too casual for formal weddings?",
                                    answer: "Quality wooden games look elegant in any setting. They're increasingly popular at upscale venues. Avoid neon colors or overly playful designs for formal events; natural wood finishes photograph better."
                                },
                                {
                                    question: "Who monitors the games during the reception?",
                                    answer: "Assign a point person—a groomsman, venue coordinator, or family member. Initial rule explanations help, as does a printed rules sign. Reset games periodically between rounds."
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
            <section className="section bg-linear-to-r from-pink-500 to-rose-500">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Add Fun to Your Big Day?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                            Start with Giant Jenga—it&apos;s the game that makes every wedding better.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://amzn.to/3NxAnbi"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Shop Giant Jenga
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="https://amzn.to/45nh8Y2"
                                target="_blank"
                                rel="nofollow sponsored"
                                className="bg-transparent border-2 border-white text-black font-bold px-8 py-4 rounded-full hover:bg-black/10 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Browse Cornhole Sets
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Best Luxury Lawn Games for Outdoor Weddings & Events"
                    url="/guides/lawn-games-weddings"
                    image="/images/lawn-games-hero.jpg"
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
            </section >
        </>
    );
}
