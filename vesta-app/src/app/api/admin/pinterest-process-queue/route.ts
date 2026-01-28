import { NextResponse } from 'next/server';
import { getDuePinterestPosts, markPinterestPostAsPosted, markPinterestPostAsFailed } from '@/lib/pinterest-scheduler';
import { getArticleBySlug } from '@/lib/articles';
import { getProductById } from '@/lib/products';
import { createPin } from '@/lib/pinterest-service';
import { markArticleAsPostedToPinterest, markProductAsPostedToPinterest } from '@/lib/posting-tracker';

const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vesta-veranda.vercel.app';

/**
 * GET /api/admin/pinterest-process-queue
 * Process all due scheduled Pinterest posts
 */
export async function GET() {
    const duePosts = getDuePinterestPosts();

    if (duePosts.length === 0) {
        return NextResponse.json({
            message: 'No Pinterest posts due for publishing',
            processed: 0,
        });
    }

    const articleBoardId = process.env.PINTEREST_BOARD_ID_ARTICLES;
    const productBoardId = process.env.PINTEREST_BOARD_ID_PRODUCTS;

    const results: Array<{ id: string; contentId: string; success: boolean; error?: string }> = [];

    for (const scheduledPost of duePosts) {
        try {
            if (scheduledPost.type === 'article') {
                const article = getArticleBySlug(scheduledPost.contentId);
                if (!article) {
                    markPinterestPostAsFailed(scheduledPost.id, 'Article not found');
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: 'Article not found' });
                    continue;
                }

                if (!articleBoardId) {
                    markPinterestPostAsFailed(scheduledPost.id, 'No article board ID configured');
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: 'No board ID' });
                    continue;
                }

                const result = await createPin({
                    boardId: articleBoardId,
                    title: article.title,
                    description: article.seo.pinterestDescription,
                    link: `${SITE_BASE_URL}/articles/${article.slug}`,
                    imageUrl: article.heroImage || '',
                    altText: article.subtitle,
                });

                if (result.success) {
                    markPinterestPostAsPosted(scheduledPost.id, result.pinId);
                    markArticleAsPostedToPinterest(scheduledPost.contentId);
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: true });
                } else {
                    markPinterestPostAsFailed(scheduledPost.id, result.error || result.reason);
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: result.error || result.reason });
                }

            } else if (scheduledPost.type === 'product') {
                const product = await getProductById(scheduledPost.contentId);
                if (!product) {
                    markPinterestPostAsFailed(scheduledPost.id, 'Product not found');
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: 'Product not found' });
                    continue;
                }

                if (!productBoardId) {
                    markPinterestPostAsFailed(scheduledPost.id, 'No product board ID configured');
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: 'No board ID' });
                    continue;
                }

                const description = `${product.description}\n\n#${product.category} #OutdoorLiving #PatioDecor`;

                const result = await createPin({
                    boardId: productBoardId,
                    title: `${product.name} by ${product.brand}`,
                    description: description,
                    link: product.affiliateLink,
                    imageUrl: product.lifestyleImage || '',
                    altText: product.name,
                });

                if (result.success) {
                    markPinterestPostAsPosted(scheduledPost.id, result.pinId);
                    markProductAsPostedToPinterest(scheduledPost.contentId);
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: true });
                } else {
                    markPinterestPostAsFailed(scheduledPost.id, result.error || result.reason);
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: result.error || result.reason });
                }
            }

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            markPinterestPostAsFailed(scheduledPost.id, errorMessage);
            results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: errorMessage });
        }
    }

    return NextResponse.json({
        message: 'Pinterest queue processing complete',
        processed: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
        details: results,
    });
}
