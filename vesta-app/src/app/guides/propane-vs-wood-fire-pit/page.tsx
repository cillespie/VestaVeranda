
import { Metadata } from 'next';
import { Hero } from '@/components';
import { sampleProducts } from '@/lib/products';
import { ComparisonTable } from '@/components';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
    title: 'Propane vs Wood Fire Pits | Vesta Veranda Living',
    description: 'The great debate: Instant ambience vs the ritual of fire. We break down the pros, cons, and hidden benefits of propane vs wood fire pits.',
    openGraph: {
        images: [
            {
                url: '/images/homepage_hero_luxury.png',
                width: 1200,
                height: 630,
                alt: 'Vesta Veranda Luxury Outdoor Living',
            },
        ],
    },
};

export default function PropaneVsWoodPage() {
    const propaneProduct = sampleProducts.find(p => p.id === 'serenelife-propane-fire-pit');
    const woodProduct = sampleProducts.find(p => p.id === 'solo-stove-bonfire-2');

    return (
        <>
            {/* Hero Section */}
            <Hero
                title="The Great Debate: Instant Ambience vs. The Ritual of Fire"
                ctaText="View Our Top Picks"
                ctaHref="#featured"
                backgroundImage="/images/homepage_hero_luxury.png"
            />

            {/* Main Content */}
            <section id="featured" className="section bg-white">
                <div className="container mx-auto px-6">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto space-y-16">
                        <header className="text-center space-y-6">
                            <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta rounded-full text-xs tracking-wider uppercase font-semibold">
                                Patio Living Guide
                            </span>
                            <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-charcoal">
                                Which Fire Pit is Right For You?
                            </h2>
                            <p className="text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
                                There&apos;s a reason landscape designers are quietly steering clients toward propane fire tables. We break down the convenience, cleaner air, and hidden benefits that are changing backyard culture.
                            </p>
                        </header>

                        <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal text-charcoal/80 mx-auto">
                            <p>
                                For generations, the &quot;fire pit&quot; was synonymous with gathering logs, nursing a flame, and dodging smoke. It was a ritual—sometimes a beloved one, sometimes a chore. But in the design world, a shift has happened. The modern patio is becoming an extension of the living room, and with that comes a demand for &quot;living room&quot; convenience.
                            </p>
                            <p>
                                The question isn&apos;t just about fuel; it&apos;s about how you actually <em>live</em> in your outdoor space. Are you camping, or are you lounging?
                            </p>
                        </div>

                        {/* Section 1: Propane Advantage */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="font-heading text-3xl font-bold text-charcoal">1. The &quot;Tuesday Night&quot; Test</h3>
                                <div className="prose text-charcoal/70">
                                    <p>
                                        The biggest advantage of propane isn&apos;t just that it&apos;s clean—it&apos;s that it&apos;s <strong>instant</strong>. With a wood fire, you need at least 2-3 hours to make it &quot;worth it.&quot; You have to build the fire, enjoy it, and then wait for it to die down safely.
                                    </p>
                                    <p>
                                        Propane passes the &quot;Tuesday Night Test.&quot; You come home tired, pour a glass of wine, and with one click, you have 30 minutes of ambience. When you&apos;re ready to go inside, you turn it off. No dousing water, no waiting. This accessibility means you&apos;ll use your patio 3x more often.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-limestone p-6 rounded-2xl shadow-sm border border-warm-gray-200">
                                <div className="mb-4 text-center">
                                    <span className="text-sm font-bold text-terracotta tracking-wide uppercase">The Convenience King</span>
                                </div>
                                {propaneProduct ? (
                                    <div className="max-w-sm mx-auto">
                                        <ProductCard product={propaneProduct} />
                                    </div>
                                ) : (
                                    <div className="text-red-500">Product not found</div>
                                )}
                                <p className="mt-4 text-sm text-center text-charcoal/50 italic">
                                    Hides the tank completely for a clean look.
                                </p>
                            </div>
                        </div>

                        {/* Section 2: Wood Cleanliness */}
                        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="md:order-2 space-y-6">
                                <h3 className="font-heading text-3xl font-bold text-charcoal">2. Smoke &amp; The &quot;Shower Tax&quot;</h3>
                                <div className="prose text-charcoal/70">
                                    <p>
                                        We all know the &quot;campfire smell.&quot; It&apos;s nostalgic in the woods, but less charming when it gets into your expensive patio furniture cushions or your hair before a dinner party. We call this the &quot;Shower Tax&quot;—if you light a wood fire, you&apos;re committed to showering before bed.
                                    </p>
                                    <p>
                                        While modern smokeless pits like the Solo Stove have massively reduced this issue (using secondary combustion airflow), they still require dry, quality wood to work perfectly. Propane is zero-smoke, 100% of the time, regardless of the wind direction.
                                    </p>
                                </div>
                            </div>
                            {/* Contrast Product */}
                            <div className="md:order-1 bg-limestone p-6 rounded-2xl shadow-sm border border-warm-gray-200">
                                <div className="mb-4 text-center">
                                    <span className="text-sm font-bold text-orange-600 tracking-wide uppercase">The Tradition Keeper</span>
                                </div>
                                {woodProduct ? (
                                    <div className="max-w-sm mx-auto">
                                        <ProductCard product={woodProduct} />
                                    </div>
                                ) : (
                                    <div className="text-red-500">Product not found</div>
                                )}
                                <p className="mt-4 text-sm text-center text-charcoal/50 italic">
                                    Great for high heat, but requires work.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Heat Output */}
                        <div className="bg-terracotta/5 rounded-3xl p-8 sm:p-12 text-center space-y-8">
                            <h3 className="font-heading text-3xl font-bold text-terracotta">But What About Warmth?</h3>
                            <div className="prose prose-lg mx-auto text-charcoal/80">
                                <p>
                                    This is where wood still wins. A roaring wood fire radiates intense heat that can warm a large circle of people on a freezing night. Propane tables are primarily for <strong>ambience and mild warmth</strong>. They take the chill off a 55°F evening, but they won&apos;t keep you toasty in 30°F weather like a Solo Stove can.
                                </p>
                                <p className="font-semibold text-terracotta">
                                    Verdict: If you want to roast marshmallows in December, go Wood. If you want a cocktail lounge vibe in May, go Propane.
                                </p>
                            </div>
                        </div>

                        {/* Section 4: The Cooking Bonus */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="font-heading text-3xl font-bold text-charcoal">3. The Cooking Bonus</h3>
                                <div className="prose text-charcoal/70">
                                    <p>
                                        If you see yourself as a backyard chef, there is a third contender. While Solo Stove is optimized for pure heat, <strong>Breeo</strong> invented the smokeless category with cooking in mind.
                                    </p>
                                    <p>
                                        With its thick cooking rim and durable Corten steel construction, the Breeo X Series allows you to sear steaks or grill burgers right over the wood fire. It&apos;s less portable than the Solo Stove, but it functions as a legitimate wood-fired grill.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-limestone p-6 rounded-2xl shadow-sm border border-warm-gray-200">
                                <div className="mb-4 text-center">
                                    <span className="text-sm font-bold text-terracotta tracking-wide uppercase">The Backyard Chef</span>
                                </div>
                                {sampleProducts.find(p => p.id === 'breeo-x-series-24') ? (
                                    <div className="max-w-sm mx-auto">
                                        <ProductCard product={sampleProducts.find(p => p.id === 'breeo-x-series-24')!} />
                                    </div>
                                ) : (
                                    <div className="text-red-500">Product not found</div>
                                )}
                                <p className="mt-4 text-sm text-center text-charcoal/50 italic">
                                    Built like a tank for live-fire cooking.
                                </p>
                            </div>
                        </div>

                        {/* Section 5: Safety First */}
                        <div className="space-y-8 border-t border-warm-gray-200 pt-16">
                            <header className="text-center space-y-4">
                                <h3 className="font-heading text-3xl font-bold text-charcoal">Safety First: Decks &amp; Overhangs</h3>
                                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                                    One of the most common questions we get: <em>&quot;Can I put this on my composite deck?&quot;</em>
                                </p>
                            </header>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-warm-gray-200">
                                    <h4 className="font-bold text-xl text-emerald-800 mb-3">✅ Propane is Safest</h4>
                                    <p className="text-charcoal/70 mb-4">
                                        Gas fire tables are generally safe for almost all decks (wood or composite) and covered patios, as long as you have proper overhead clearance. There are no sparks to embrace.
                                    </p>
                                    <p className="text-sm font-semibold text-terracotta">
                                        Best Pick: SereneLife Propane Table
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-warm-gray-200">
                                    <h4 className="font-bold text-xl text-orange-800 mb-3">⚠️ Wood Requires Caution</h4>
                                    <p className="text-charcoal/70 mb-4">
                                        Never place a wood fire pit directly on a deck without a heat shield or stand. The bottom gets extremely hot and can warp composite or char wood. You also need to be mindful of flying sparks.
                                    </p>
                                    <p className="text-sm font-semibold text-charcoal/60">
                                        Required: Solo Stove Stand (Sold Separately)
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="section bg-white border-t border-warm-gray-200">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <ComparisonTable
                            title="Fire Pit Showdown: Find Your Match"
                            rows={[
                                {
                                    productName: "Solo Stove Yukon 2.0",
                                    keyFeature: "Huge 27\" size + 360° airflow",
                                    bestFor: "Large families & big parties",
                                    priceTier: "$$$",
                                    link: "https://amzn.to/49ImWN8"
                                },
                                {
                                    productName: "Solo Stove Bonfire 2.0",
                                    keyFeature: "Perfect balance of size & portability",
                                    bestFor: "The everyday backyard user",
                                    priceTier: "$$",
                                    link: "https://amzn.to/4b92HL4"
                                },
                                {
                                    productName: "Breeo X Series 24",
                                    keyFeature: "Built-in cooking rim & Corten steel",
                                    bestFor: "Live-fire cooking enthusiasts",
                                    priceTier: "$$$",
                                    link: "https://amzn.to/4pPmcfd"
                                },
                                {
                                    productName: "SereneLife Propane Table",
                                    keyFeature: "Instant-on gas fire (No smoke/ash)",
                                    bestFor: "Hassle-free relaxation",
                                    priceTier: "$$$$",
                                    link: "https://amzn.to/4b6nO0t"
                                }
                            ]}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
