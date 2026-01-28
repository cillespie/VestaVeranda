import { NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/articles';
import { sampleProducts } from '@/lib/products';
import {
    getPinterestPostedArticles,
    getPinterestPostedProducts,
    markArticleAsPostedToPinterest,
    markProductAsPostedToPinterest
} from '@/lib/posting-tracker';
import { createPin } from '@/lib/pinterest-service';

// Configure your site's base URL for article links
const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vesta-veranda.vercel.app';

export async function GET() {
    const results: Array<{ type: string; id: string; result: unknown }> = [];

    const postedArticles = getPinterestPostedArticles();
    const postedProducts = getPinterestPostedProducts();

    const articleBoardId = process.env.PINTEREST_BOARD_ID_ARTICLES;
    const productBoardId = process.env.PINTEREST_BOARD_ID_PRODUCTS;

    // === Post Articles ===
    if (articleBoardId) {
        const allArticles = getAllArticles();

        for (const article of allArticles) {
            if (postedArticles.includes(article.slug)) continue;

            // Skip if no hero image or it's not a public URL
            if (!article.heroImage || !article.heroImage.startsWith('http')) {
                results.push({
                    type: 'article',
                    id: article.slug,
                    result: { skipped: true, reason: 'No public hero image URL' }
                });
                continue;
            }

            console.log(`Attempting to post article to Pinterest: ${article.slug}`);

            const result = await createPin({
                boardId: articleBoardId,
                title: article.title,
                description: article.seo.pinterestDescription,
                link: `${SITE_BASE_URL}/articles/${article.slug}`,
                imageUrl: article.heroImage,
                altText: article.subtitle,
            });

            results.push({ type: 'article', id: article.slug, result });

            if (result.success) {
                markArticleAsPostedToPinterest(article.slug);
            }
        }
    } else {
        console.warn('PINTEREST_BOARD_ID_ARTICLES not set. Skipping articles.');
    }

    // === Post Products ===
    if (productBoardId) {
        for (const product of sampleProducts) {
            if (postedProducts.includes(product.id)) continue;

            // Skip if no lifestyle image or it's not a public URL
            if (!product.lifestyleImage || !product.lifestyleImage.startsWith('http')) {
                results.push({
                    type: 'product',
                    id: product.id,
                    result: { skipped: true, reason: 'No public lifestyle image URL' }
                });
                continue;
            }

            console.log(`Attempting to post product to Pinterest: ${product.id}`);

            // Add affiliate disclosure to description
            const description = `${product.description}\n\n#${product.category} #OutdoorLiving #PatioDecor\n\n(As an Amazon Associate, we earn from qualifying purchases.)`;

            const result = await createPin({
                boardId: productBoardId,
                title: `${product.name} by ${product.brand}`,
                description: description,
                link: product.affiliateLink,
                imageUrl: product.lifestyleImage,
                altText: product.name,
            });

            results.push({ type: 'product', id: product.id, result });

            if (result.success) {
                markProductAsPostedToPinterest(product.id);
            }
        }
    } else {
        console.warn('PINTEREST_BOARD_ID_PRODUCTS not set. Skipping products.');
    }

    return NextResponse.json({
        message: 'Pinterest sync complete',
        processed: results.length,
        successful: results.filter(r => (r.result as { success?: boolean }).success).length,
        skipped: results.filter(r => (r.result as { skipped?: boolean }).skipped).length,
        details: results,
    });
}
