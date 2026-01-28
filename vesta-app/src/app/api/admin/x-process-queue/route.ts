import { NextResponse } from 'next/server';
import { getDuePosts, markAsPosted, markAsFailed } from '@/lib/x-scheduler';
import { getArticleBySlug } from '@/lib/articles';
import { getProductById } from '@/lib/products';
import { postToX } from '@/lib/x-service';
import { markArticleAsPosted, markProductAsPosted } from '@/lib/posting-tracker';

// Configure your site's base URL for article links
const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vesta-veranda.vercel.app';

/**
 * GET /api/admin/x-process-queue
 * Process all due scheduled posts and publish them
 * This endpoint should be called by a cron job
 */
export async function GET() {
    const duePosts = getDuePosts();

    if (duePosts.length === 0) {
        return NextResponse.json({
            message: 'No posts due for publishing',
            processed: 0,
        });
    }

    const results: Array<{ id: string; contentId: string; success: boolean; error?: string }> = [];

    for (const scheduledPost of duePosts) {
        try {
            let tweetText = '';
            let imagePath: string | undefined;

            if (scheduledPost.type === 'article') {
                const article = getArticleBySlug(scheduledPost.contentId);
                if (!article) {
                    markAsFailed(scheduledPost.id, 'Article not found');
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: 'Article not found' });
                    continue;
                }

                const articleUrl = `${SITE_BASE_URL}/articles/${article.slug}`;
                const tags = article.seo.primaryKeywords.map(k => '#' + k.replace(/\s+/g, '')).slice(0, 3).join(' ');

                tweetText = `🌿 New Guide: ${article.title}\n\n${article.subtitle}\n\nRead more 👇\n${articleUrl}\n\n${tags}`;
                imagePath = article.heroImage;

            } else if (scheduledPost.type === 'product') {
                const product = await getProductById(scheduledPost.contentId);
                if (!product) {
                    markAsFailed(scheduledPost.id, 'Product not found');
                    results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: false, error: 'Product not found' });
                    continue;
                }

                const tags = `#${product.category} #OutdoorLiving`;
                tweetText = `✨ Featured: ${product.name} by ${product.brand}\n\n${product.description}\n\nCheck it out here 👇\n${product.affiliateLink}\n\n${tags}`;
                imagePath = product.lifestyleImage;
            }

            // Post to X
            console.log(`Processing scheduled post: ${scheduledPost.id} (${scheduledPost.type}: ${scheduledPost.contentId})`);
            const result = await postToX({ text: tweetText, imagePath });

            if (result.success) {
                markAsPosted(scheduledPost.id);

                // Also mark in the main tracker to prevent duplicate auto-posts
                if (scheduledPost.type === 'article') {
                    markArticleAsPosted(scheduledPost.contentId);
                } else {
                    markProductAsPosted(scheduledPost.contentId);
                }

                results.push({ id: scheduledPost.id, contentId: scheduledPost.contentId, success: true });
            } else if ((result as { skipped?: boolean }).skipped) {
                // Skipped due to missing credentials - don't mark as failed, leave pending
                results.push({
                    id: scheduledPost.id,
                    contentId: scheduledPost.contentId,
                    success: false,
                    error: 'Skipped - no X API credentials'
                });
            } else {
                markAsFailed(scheduledPost.id, (result as { error?: { message?: string } }).error?.message || 'Unknown error');
                results.push({
                    id: scheduledPost.id,
                    contentId: scheduledPost.contentId,
                    success: false,
                    error: (result as { error?: { message?: string } }).error?.message || 'Unknown error'
                });
            }

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            markAsFailed(scheduledPost.id, errorMessage);
            results.push({
                id: scheduledPost.id,
                contentId: scheduledPost.contentId,
                success: false,
                error: errorMessage
            });
        }
    }

    return NextResponse.json({
        message: 'Queue processing complete',
        processed: results.length,
        successful: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
        details: results,
    });
}
