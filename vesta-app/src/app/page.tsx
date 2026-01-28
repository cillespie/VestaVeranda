
import { Metadata } from 'next';
import { Hero, ProductCarousel } from '@/components';
import { Product } from '@/components/ProductCard';
import { getAllProducts } from '@/lib/products-wrapper';

export const metadata: Metadata = {
  title: 'Vesta Veranda Living | Curated Outdoor Luxury',
  description: 'Design your ultimate outdoor living space. Curated fire pits, furniture, kitchens, and decor for the modern backyard oasis.',
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

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const allProducts = await getAllProducts();
  if (allProducts.length > 0) {
    console.log(`[HomePage] Example category: ${allProducts[0].category}`);
  }

  // Group products by category
  // Using the sorted order from Firestore means they are already in correct display order within categories
  // We just need to define the section order
  const categories = [
    'Fire Pits, Heaters & Grills',
    'Outdoor Kitchens & Pizza Ovens',
    'Furniture - Lounge & Seating',
    'Furniture - Dining Sets',
    'Shade Structures & Gazebos',
    'Generators & Power',
    'Lighting',
    'Outdoor Audio',
    'Lawn, Garden & Irrigation',
    'Saunas & Spas',
    'Winter Maintenance',
    'Outdoor Rugs & Décor',
    'Storage & Organization',
    'Lawn Games'
  ];

  // Helper to get products for a category
  const getCategoryProducts = (cat: string) => {
    return allProducts.filter(p => p.category === cat);
  };

  return (
    <>
      <Hero
        title="Curated Luxury for Your Outdoor Sanctuary"
        ctaText="Shop All Categories"
        ctaHref="#categories"
        backgroundImage="/images/homepage_hero_luxury.png"
      />

      <div id="categories" className="bg-limestone min-h-screen pb-20">
        {/* Category Sections */}
        {categories.map((category) => {
          const products = getCategoryProducts(category);

          if (products.length === 0) return null;

          return (
            <section key={category} className="section border-b border-warm-gray-200 last:border-0">
              <div className="container mx-auto px-6">
                <header className="mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                  <h2 className="font-heading text-3xl font-bold text-charcoal">
                    {category}
                  </h2>
                  <span className="text-sm font-medium text-terracotta bg-terracotta/5 px-3 py-1 rounded-full uppercase tracking-wider">
                    {products.length} Products
                  </span>
                </header>

                <ProductCarousel products={products} />
              </div>
            </section>
          );
        })}

        {/* Categories specific to fewer items or less priority can be grouped or shown last */}
      </div>

      {/* Newsletter */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Join the Vesta Community
            </h2>
            <p className="text-charcoal/60 mb-6">
              Get design inspiration, exclusive deals, and expert reviews delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full border border-warm-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclaimer */}
      <section className="py-6 bg-limestone-dark border-t border-warm-gray-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
            <strong>Affiliate Disclosure:</strong> Vesta Veranda Living earns commissions from qualifying purchases at no extra cost to you.
            Prices and availability subject to change.
          </p>
        </div>
      </section>
    </>
  );
}
