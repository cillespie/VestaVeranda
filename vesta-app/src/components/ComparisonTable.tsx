'use client';

import Link from 'next/link';
import { Product } from './ProductCard';

interface ComparisonRow {
    productName: string;
    keyFeature: string;
    bestFor: string;
    priceTier: string;
    link: string;
}

interface ComparisonTableProps {
    title?: string;
    rows?: ComparisonRow[];
    products?: Product[];
}

export default function ComparisonTable({ title = "Quick Comparison", rows, products }: ComparisonTableProps) {
    // If products are provided, convert them to rows
    const displayRows: ComparisonRow[] = rows || (products?.map(p => ({
        productName: p.name,
        keyFeature: p.features?.[0] || extractKeyFeature(p.description),
        bestFor: p.badge || 'Great Choice',
        priceTier: p.priceTier,
        link: p.affiliateLink
    })) || []);

    if (displayRows.length === 0) return null;

    return (
        <div className="overflow-x-auto rounded-xl border border-warm-gray-200 bg-white shadow-sm">
            <div className="p-4 bg-limestone border-b border-warm-gray-200">
                <h3 className="font-heading text-lg font-bold text-charcoal">{title}</h3>
            </div>
            <table className="w-full text-left text-sm text-charcoal/80">
                <thead className="bg-white text-xs uppercase text-charcoal/50">
                    <tr>
                        <th className="px-6 py-4 font-medium">Product</th>
                        <th className="px-6 py-4 font-medium">Key Feature (The &quot;Why&quot;)</th>
                        <th className="px-6 py-4 font-medium">Best For...</th>
                        <th className="px-6 py-4 font-medium">Price</th>
                        <th className="px-6 py-4 font-medium"><span className="sr-only">Link</span></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-warm-gray-100">
                    {displayRows.map((row, index) => (
                        <tr key={index} className="hover:bg-warm-gray-50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-charcoal">{row.productName}</td>
                            <td className="px-6 py-4">{row.keyFeature}</td>
                            <td className="px-6 py-4">{row.bestFor}</td>
                            <td className="px-6 py-4 font-mono text-terracotta">{row.priceTier}</td>
                            <td className="px-6 py-4 text-right">
                                <Link
                                    href={row.link}
                                    target="_blank"
                                    rel="nofollow sponsored"
                                    className="inline-flex items-center gap-1 text-terracotta hover:underline font-medium"
                                >
                                    Shop
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function extractKeyFeature(description: string): string {
    return description.split('.')[0];
}
