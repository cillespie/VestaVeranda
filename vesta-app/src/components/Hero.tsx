'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface HeroProps {
    title?: string;
    ctaText?: string;
    ctaHref?: string;
    backgroundImage?: string;
}

const slideImages = [
    '/images/spring_evenings.png',
    '/images/date_night.png',

    '/images/outdoor_cooking.png',
    '/images/small_patio.png',
    '/images/solo_stove_lifestyle.png',
    '/images/breeo_cooking.png',
    '/images/products/polywood-lakeside-dining.png',
    '/images/ooni_pizza_lifestyle.png',
    '/images/products/segway-navimow.png',
    '/images/solo_stove_yukon.png',
    '/images/products/mont_alpi_grill.png',
    '/images/products/breeo_x24.png',
    '/images/products/outvue_firepit.png',
    '/images/products/serenelife_firepit.png',
    '/images/products/propane_fire_table.png',
    '/images/products/safavieh_rug.png',
    '/images/products/brightech_lights.png'
];

export default function Hero({
    title = "Transform Your Outdoor Space",
    ctaText = "Explore Collections",
    ctaHref = "#collections",
    backgroundImage,
}: HeroProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (backgroundImage) return; // Don't cycle if a static image is provided

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [backgroundImage]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                {backgroundImage ? (
                    <Image
                        src={backgroundImage}
                        alt="Outdoor living space"
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <>
                        {slideImages.map((src, index) => (
                            <div
                                key={src}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-32 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-terracotta rounded-full animate-pulse" />
                        <span className="text-white text-sm font-medium">Curated for Outdoor Living Enthusiasts</span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className={i === title.split(' ').length - 1 ? 'text-terracotta' : 'text-white'}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
                        <Link href={ctaHref} className="btn btn-primary text-base px-8 py-4">
                            {ctaText}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </Link>
                        <Link href="/articles" className="btn btn-ghost text-base px-8 py-4">
                            Read Guides
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white text-sm animate-fade-in delay-300">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Independently Curated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Honest Price Tiers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Quality Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
