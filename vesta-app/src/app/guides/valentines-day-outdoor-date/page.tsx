import { Metadata } from 'next';
import { Hero, ShareButtons } from '@/components';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/lib/products';

export const metadata: Metadata = {
    title: 'Valentine\'s Day Outdoor Date Ideas | Romantic Patio Setup Guide 2026',
    description: 'Create the perfect romantic outdoor space for Valentine\'s Day. From cozy fire pits to ambient lighting, discover products and ideas for an unforgettable date night at home.',
    openGraph: {
        title: 'Valentine\'s Day Outdoor Date Ideas | Romantic Patio Setup',
        description: 'Create the perfect romantic outdoor space for Valentine\'s Day with fire pits, lighting, and cozy furniture.',
        images: [{
            url: '/images/valentines-outdoor-hero.png',
            width: 1200,
            height: 630,
            alt: 'Romantic outdoor patio setup for Valentine\'s Day'
        }],
        url: 'https://vestaverandaliving.store/guides/valentines-day-outdoor-date',
    },
    alternates: {
        canonical: 'https://vestaverandaliving.store/guides/valentines-day-outdoor-date',
    },
};

export default function ValentinesDayOutdoorDatePage() {
    // Use REAL products from catalog, just override the lifestyle image for Valentine's theme
    const fireProducts = sampleProducts
        .filter(p => p.category === 'hearth' && (p.id.includes('solo-stove-yukon') || p.id.includes('breeo-x')))
        .slice(0, 2)
        .map((p, i) => ({
            ...p,
            lifestyleImage: i === 0 ? '/images/valentines-firepit-romantic.png' : '/images/valentines-firepit-cozy.png'
        }));

    const lightingProducts = sampleProducts
        .filter(p => p.id === 'brightown-string-lights' || p.id === 'brightech-solar-lights')
        .map((p, i) => ({
            ...p,
            lifestyleImage: i === 0 ? '/images/valentines-string-lights.png' : '/images/valentines-solar-path.png'
        }));

    const furnitureProducts = sampleProducts
        .filter(p => p.category === 'shelter' && (p.id.includes('devoko') || p.id.includes('modular-sectional')))
        .slice(0, 2)
        .map((p, i) => ({
            ...p,
            lifestyleImage: i === 0 ? '/images/valentines-wicker-seating.png' : '/images/valentines-sectional-cozy.png'
        }));

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: 'Valentine\'s Day Outdoor Date Ideas: Create a Romantic Patio Experience',
                        image: 'https://vestaverandaliving.store/images/valentines-outdoor-hero.png',
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
                        description: 'Complete guide to setting up the perfect romantic outdoor space for Valentine\'s Day, including product recommendations and setup tips.'
                    })
                }}
            />

            {/* Hero Section */}
            <Hero
                title="Valentine's Day at Home, Under the Stars"
                ctaText="See Romantic Setup Ideas →"
                ctaHref="#essentials"
                backgroundImage="/images/products/valentines-outdoor-hero.png"
            />

            {/* The Hook */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Quick Answer Box */}
                        <div className="bg-linear-to-r from-pink-50 to-red-50 border-l-4 border-terracotta p-8 rounded-r-2xl mb-12 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">💝</span>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                        The Perfect Valentine&apos;s Night Setup
                                    </h2>
                                    <p className="text-lg text-charcoal/80 leading-relaxed">
                                        <strong>Skip the crowded restaurants.</strong> Create an intimate outdoor date night that&apos;s uniquely yours with a crackling fire, warm ambiance, and cozy comfort. Perfect for February 14th or any night you want to celebrate love.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
                                This Valentine&apos;s Day, create something truly special without fighting for reservations or dealing with restaurant crowds. Your outdoor space offers the perfect canvas for an intimate, personalized date night.
                            </p>
                            <p className="text-charcoal/70">
                                Late January and early February evenings have a special charm—cool, crisp air makes fire features even more inviting and creates the perfect excuse to snuggle up together under the stars.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Essential Elements */}
            <section id="essentials" className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-terracotta rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Essential Elements
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                                The Heart of Romance: Fire Features
                            </h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                Nothing sets the mood quite like the warm glow and gentle crackle of a fire. A quality fire pit becomes the centerpiece of your romantic setup.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">💡</span>
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-white mb-2">Pro Tip: Timing is Everything</h3>
                                    <p className="text-white/80">
                                        Start your fire about 30 minutes before your date begins. This ensures a beautiful bed of glowing embers—perfect for ambiance without too much smoke.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {fireProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-6">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
                            <p className="text-white/90">
                                <strong className="text-white">Why smokeless fire pits work for romance:</strong> Keeps the air clear so you can actually enjoy conversation (and maybe a kiss) without smoke getting in your eyes. The 360° flame view means you both get the full experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lighting */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-sage rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Ambiance
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Set the Mood with Lighting
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Layer different light sources to create depth, warmth, and that magical romantic atmosphere.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-heading text-xl font-bold mb-4">The Lighting Formula</h3>
                                <ul className="space-y-3 text-charcoal/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta">✨</span>
                                        <span><strong>String lights</strong> overhead for a starlit canopy effect</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta">🕯️</span>
                                        <span><strong>LED candles</strong> on surfaces (no wind concerns!)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta">🏮</span>
                                        <span><strong>Solar path lights</strong> to define your romantic space</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta">💡</span>
                                        <span><strong>Lanterns</strong> for moveable accent lighting</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-amber-100 border-l-4 border-amber-600 p-4 rounded">
                                    <h3 className="font-heading text-lg font-bold text-amber-900 mb-2">
                                        Golden Hour Advantage
                                    </h3>
                                    <p className="text-amber-800 text-sm">
                                        Plan your date to start around sunset. You&apos;ll get beautiful natural light transitioning into your carefully arranged ambient lighting—absolutely magical for photos and mood.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {lightingProducts.map(product => (
                                <div key={product.id} className="bg-white rounded-2xl p-5">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comfort Setup */}
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-charcoal rounded-full text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Comfort
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                The Cozy Factor
                            </h2>
                            <p className="text-charcoal/70 max-w-2xl mx-auto">
                                Romance requires comfort. No one&apos;s feeling the love if they&apos;re freezing or sitting on uncomfortable furniture.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-limestone rounded-2xl p-8">
                                <h3 className="font-heading text-2xl font-bold mb-6">The Cozy Formula</h3>
                                <ol className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">1</span>
                                        <div>
                                            <strong className="text-charcoal">Quality seating</strong>
                                            <p className="text-charcoal/70 text-sm">Deep cushions, weather-resistant fabric</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">2</span>
                                        <div>
                                            <strong className="text-charcoal">Layered blankets</strong>
                                            <p className="text-charcoal/70 text-sm">Soft throws within arm&apos;s reach</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">3</span>
                                        <div>
                                            <strong className="text-charcoal">Outdoor pillows</strong>
                                            <p className="text-charcoal/70 text-sm">Support and aesthetic appeal</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">4</span>
                                        <div>
                                            <strong className="text-charcoal">Side tables</strong>
                                            <p className="text-charcoal/70 text-sm">For drinks and keeping hands free</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div className="space-y-6">
                                {furnitureProducts.map(product => (
                                    <div key={product.id} className="bg-limestone rounded-2xl p-5">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Checklist */}
            <section className="section bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
                            Your Valentine&apos;s Setup Timeline
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="bg-terracotta rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">3h</span>
                                    Three Hours Before
                                </h3>
                                <ul className="ml-16 space-y-2 text-white/80">
                                    <li>• Clean and arrange your outdoor space</li>
                                    <li>• Test all lighting and charge battery-powered items</li>
                                    <li>• Set up fire pit and have fuel ready</li>
                                    <li>• Arrange furniture in intimate seating arrangement</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="bg-terracotta rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">1h</span>
                                    One Hour Before
                                </h3>
                                <ul className="ml-16 space-y-2 text-white/80">
                                    <li>• Turn on ambient lighting</li>
                                    <li>• Add blankets and pillows to seating</li>
                                    <li>• Set up music (portable speaker with romantic playlist)</li>
                                    <li>• Chill beverages in outdoor cooler</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="bg-terracotta rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">30m</span>
                                    30 Minutes Before
                                </h3>
                                <ul className="ml-16 space-y-2 text-white/80">
                                    <li>• Start the fire</li>
                                    <li>• Place LED candles around the space</li>
                                    <li>• Do a final check of all elements</li>
                                    <li>• Take a deep breath and enjoy what you&apos;ve created!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Options */}
            <section className="section bg-limestone">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-12">
                            Romance on Any Budget
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    $50-100
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4">Budget-Friendly</h3>
                                <ul className="space-y-2 text-charcoal/70 text-sm">
                                    <li>• Battery-powered string lights</li>
                                    <li>• Existing blankets from inside</li>
                                    <li>• Portable fire pit or chiminea</li>
                                    <li>• Simple playlist on phone</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    $200-500
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4">Mid-Range</h3>
                                <ul className="space-y-2 text-charcoal/70 text-sm">
                                    <li>• Quality outdoor string lights</li>
                                    <li>• Weatherproof cushions & throws</li>
                                    <li>• Bluetooth speaker</li>
                                    <li>• Compact smokeless fire pit</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-6">
                                <div className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                                    $500+
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4">Premium Setup</h3>
                                <ul className="space-y-2 text-charcoal/70 text-sm">
                                    <li>• Premium smokeless fire pit</li>
                                    <li>• High-end outdoor furniture</li>
                                    <li>• Professional lighting system</li>
                                    <li>• Outdoor heater for comfort</li>
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
                            The Secret Ingredient
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            The outdoor products are tools, but the real magic comes from the intention behind creating this experience together. Your partner will notice the thoughtfulness, the effort, and the fact that you chose quality time over commercial experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#essentials"
                                className="bg-white text-charcoal font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                            >
                                Start Planning Your Setup
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Share */}
            <div className="container mx-auto px-6 max-w-4xl">
                <ShareButtons
                    title="Valentine's Day Outdoor Date Ideas - Romantic Patio Setup Guide"
                    url="/guides/valentines-day-outdoor-date"
                    image="/images/valentines-outdoor-hero.png"
                />
            </div>

            {/* Affiliate Disclaimer */}
            <section className="py-6 bg-charcoal/5 border-t border-warm-gray-200">
                <div className="container mx-auto px-6">
                    <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
                        <strong>Affiliate Disclosure:</strong> Vesta Veranda earns commissions from qualifying purchases through affiliate links. At no extra cost to you. Thank you for supporting us! Product recommendations are based on specifications and features.
                    </p>
                </div>
            </section>
        </>
    );
}
