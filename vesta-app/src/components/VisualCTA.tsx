'use client';

import Image from 'next/image';
import Link from 'next/link';

interface VisualCTAProps {
    headline: string;
    subheadline?: string;
    imageSrc: string;
    imageAlt: string;
    ctaText: string;
    ctaLink: string;
    badge?: string;
    variant?: 'horizontal' | 'vertical' | 'banner';
    theme?: 'warm' | 'cool' | 'dark' | 'gradient';
}

export default function VisualCTA({
    headline,
    subheadline,
    imageSrc,
    imageAlt,
    ctaText,
    ctaLink,
    badge,
    variant = 'horizontal',
    theme = 'warm',
}: VisualCTAProps) {
    const themeStyles = {
        warm: 'bg-linear-to-r from-amber-50 via-orange-50 to-terracotta/10 border-terracotta/20',
        cool: 'bg-linear-to-r from-blue-50 via-cyan-50 to-emerald-50 border-blue-200',
        dark: 'bg-linear-to-r from-charcoal via-charcoal/95 to-charcoal/90 border-charcoal text-white',
        gradient: 'bg-linear-to-r from-terracotta via-orange-500 to-amber-500 border-transparent text-white',
    };

    const buttonStyles = {
        warm: 'btn btn-primary',
        cool: 'bg-blue-600 hover:bg-blue-700 text-black px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2',
        dark: 'bg-terracotta hover:bg-terracotta/90 text-black px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2',
        gradient: 'bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2',
    };

    if (variant === 'banner') {
        return (
            <div className={`relative overflow-hidden rounded-2xl border-2 ${themeStyles[theme]} my-12`}>
                <div className="absolute inset-0">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-charcoal/80 to-charcoal/40" />
                </div>
                <div className="relative z-10 p-8 md:p-12 text-center text-white">
                    {badge && (
                        <span className="inline-block px-3 py-1 bg-terracotta rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            {badge}
                        </span>
                    )}
                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                        {headline}
                    </h3>
                    {subheadline && (
                        <p className="text-white mb-6 max-w-xl mx-auto">
                            {subheadline}
                        </p>
                    )}
                    <Link
                        href={ctaLink}
                        target="_blank"
                        rel="nofollow sponsored"
                        className={buttonStyles[theme]}
                    >
                        {ctaText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>
        );
    }

    if (variant === 'vertical') {
        return (
            <div className={`rounded-2xl border-2 overflow-hidden ${themeStyles[theme]} my-8`}>
                <div className="relative aspect-video">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                    />
                    {badge && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-terracotta text-white rounded-full text-xs font-bold uppercase tracking-wider">
                            {badge}
                        </span>
                    )}
                </div>
                <div className="p-6 text-center">
                    <h3 className={`font-heading text-xl font-bold mb-2 ${theme === 'dark' || theme === 'gradient' ? 'text-white' : 'text-charcoal'}`}>
                        {headline}
                    </h3>
                    {subheadline && (
                        <p className={`mb-4 ${theme === 'dark' || theme === 'gradient' ? 'text-white' : 'text-charcoal/70'}`}>
                            {subheadline}
                        </p>
                    )}
                    <Link
                        href={ctaLink}
                        target="_blank"
                        rel="nofollow sponsored"
                        className={buttonStyles[theme]}
                    >
                        {ctaText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>
        );
    }

    // Horizontal (default)
    return (
        <div className={`rounded-2xl border-2 overflow-hidden ${themeStyles[theme]} my-8`}>
            <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square md:aspect-auto min-h-[200px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                    />
                    {badge && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-terracotta text-white rounded-full text-xs font-bold uppercase tracking-wider">
                            {badge}
                        </span>
                    )}
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className={`font-heading text-xl md:text-2xl font-bold mb-3 ${theme === 'dark' || theme === 'gradient' ? 'text-white' : 'text-charcoal'}`}>
                        {headline}
                    </h3>
                    {subheadline && (
                        <p className={`mb-6 ${theme === 'dark' || theme === 'gradient' ? 'text-white' : 'text-charcoal/70'}`}>
                            {subheadline}
                        </p>
                    )}
                    <Link
                        href={ctaLink}
                        target="_blank"
                        rel="nofollow sponsored"
                        className={`${buttonStyles[theme]} self-start`}
                    >
                        {ctaText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
