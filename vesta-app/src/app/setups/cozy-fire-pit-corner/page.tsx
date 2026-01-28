import { Metadata } from 'next';
import Image from 'next/image';
import { Hero, VisualCTA, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'The Cozy Fire Pit Corner: Ultimate Backyard Setup | Vesta Veranda',
    description: 'Transform a corner of your yard into an intimate gathering spot. We combine the Solo Stove, zero gravity chairs, and the perfect accessories for a cozy retreat.',
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: 'The Cozy Fire Pit Corner: Ultimate Backyard Setup',
        description: 'Transform a corner of your yard into an intimate gathering spot with a Solo Stove and zero gravity chairs.',
        url: 'https://vestaverandaliving.store/setups/cozy-fire-pit-corner',
        images: [
            {
                url: '/images/cozy_fire_pit_corner_hero.png',
                width: 1200,
                height: 630,
                alt: 'Cozy Fire Pit Corner Setup',
            },
        ],
    },
};

export default function CozyFirePitGuide() {
    const soloStove = sampleProducts.find(p => p.id === 'solo-stove-bonfire-2');
    const chairs = sampleProducts.find(p => p.id === 'best-choice-zero-gravity');
    const lights = sampleProducts.find(p => p.id === 'brightown-string-lights');
    const mat = sampleProducts.find(p => p.id === 'ubeesize-grill-mat'); // Essential safety item

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'The Cozy Fire Pit Corner: Ultimate Backyard Setup',
                        image: 'https://vestaverandaliving.store/images/cozy_fire_pit_corner_hero.png',
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
                        datePublished: '2026-01-21',
                        dateModified: new Date().toISOString().split('T')[0],
                        description: 'Transform a corner of your yard into an intimate gathering spot. We combine the Solo Stove, zero gravity chairs, and the perfect accessories for a cozy retreat.'
                    })
                }}
            />
            {/* Hero Section */}
            <Hero
                title="The Cozy Fire Pit Corner"
                ctaText="Build This Setup →"
                ctaHref="#build-it"
                backgroundImage="/images/cozy_fire_pit_corner_hero.png"
            />

            {/* The Vision */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                                Vibe: Intimate & Warm
                            </span>
                            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
                                Reclaim Your Evenings
                            </h2>
                            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                                You don&apos;t need a sprawling estate to enjoy a campfire. In fact, a smaller, dedicated corner often feels cozier and more inviting. This setup focuses on warmth, comfort, and conversation.
                            </p>
                        </div>

                        {/* Visual Breakdown */}
                        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                            <div>
                                <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">Why This Works</h3>
                                <ul className="space-y-4 text-charcoal/80">
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">1</span>
                                        <div>
                                            <strong>Smokeless Fire:</strong> The key to a small space is enjoying the heat without constant smoke in your face.
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">2</span>
                                        <div>
                                            <strong>Reclined Comfort:</strong> Fire pits are best enjoyed leaning back. Zero gravity chairs mimic that &quot;looking up at the stars&quot; position.
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">3</span>
                                        <div>
                                            <strong>Defined Boundary:</strong> Using string lights or a rug creates a psychological &quot;room&quot; outdoors.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-96">
                                <Image
                                    src="/images/generated/solo_stove_bonfire_action.png"
                                    alt="Solo Stove Bonfire in action at night"
                                    className="object-cover"
                                    fill
                                />
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-lg text-sm font-bold text-charcoal">
                                    Smokeless Flame
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Build Steps */}
            <section id="build-it" className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Build This Setup
                        </h2>

                        {/* Step 1: The Fire Pit */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 border-b border-charcoal/10 pb-4">
                                Step 1: The Heart of the Corner
                            </h3>
                            <p className="text-charcoal/80 mb-6">
                                The <strong>Solo Stove Bonfire 2.0</strong> is the gold standard for a reason. It&apos;s safe for 4-6 people, virtually maintenance-free, and guaranteed to start a conversation.
                            </p>
                            {soloStove && <ProductCard product={soloStove} variant="featured" />}
                        </div>

                        {/* Step 2: The Seating */}
                        <div className="mb-12">
                            <h3 className="font-heading text-2xl font-bold text-charcoal mb-6 border-b border-charcoal/10 pb-4">
                                Step 2: The Best Seat in the House
                            </h3>
                            <p className="text-charcoal/80 mb-6">
                                Standard folding chairs don&apos;t cut it for a 2-hour fire session. <strong>Zero Gravity Chairs</strong> are surprisingly affordable and offer unbeatable comfort.
                            </p>
                            {chairs && <ProductCard product={chairs} />}
                        </div>

                        {/* Step 3: Safety & Accessories */}
                        <div className="mb-12">
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                                <h4 className="font-bold text-amber-900 mb-2">Safety First</h4>
                                <p className="text-amber-800/80">
                                    If you are building this on a deck or grass, you MUST utilize a heat shield or mat.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {mat && <ProductCard product={mat} />}
                                {lights && <ProductCard product={lights} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual CTA */}
            <div className="max-w-4xl mx-auto px-6">
                <VisualCTA
                    headline="Warmth All Year Round"
                    subheadline="Don't let the seasons stop you. With the right fire pit setup, your patio becomes a 4-season destination."
                    imageSrc="/images/cozy_fire_pit_corner_hero.png"
                    imageAlt="Cozy chair setup with blankets"
                    ctaText="Shop Solo Stove"
                    ctaLink={soloStove?.affiliateLink || '#'}
                    badge="Essential"
                    variant="horizontal"
                    theme="warm"
                />
            </div>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl mt-12">
                <ShareButtons
                    title="The Cozy Fire Pit Corner Setup Guide"
                    url="/setups/cozy-fire-pit-corner"
                    image="/images/cozy_fire_pit_corner_hero.png"
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
