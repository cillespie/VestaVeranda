'use client';

import { useRef } from 'react';
import ProductCard, { Product } from './ProductCard';

interface ProductCarouselProps {
    products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Approx card width + gap
            const newScrollLeft =
                direction === 'left'
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    if (!products || products.length === 0) return null;

    return (
        <div className="relative group/carousel">
            {/* Scroll Controls - Only visible if content overflows (handled by CSS/hover mostly) */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-warm-gray-200 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity aria-disabled:opacity-0 -ml-4 md:-ml-5 hover:bg-white hover:scale-105 active:scale-95"
                aria-label="Scroll left"
            >
                <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-warm-gray-200 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity -mr-4 md:-mr-5 hover:bg-white hover:scale-105 active:scale-95"
                aria-label="Scroll right"
            >
                <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex-none w-[280px] md:w-[320px] snap-start"
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
