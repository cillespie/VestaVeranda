import { NextRequest, NextResponse } from 'next/server';
import { schedulePost, getScheduledPosts, cancelScheduledPost } from '@/lib/x-scheduler';
import { getArticleBySlug } from '@/lib/articles';
import { getProductById } from '@/lib/products';

/**
 * GET /api/admin/x-schedule
 * List all scheduled posts (optionally filter by status)
 */
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') as 'pending' | 'posted' | 'failed' | null;

    const posts = getScheduledPosts(status || undefined);

    return NextResponse.json({
        count: posts.length,
        posts,
    });
}

/**
 * POST /api/admin/x-schedule
 * Schedule a new post
 * Body: { type: 'article' | 'product', contentId: string, scheduledAt: string (ISO) }
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { type, contentId, scheduledAt } = body;

        // Validate required fields
        if (!type || !contentId || !scheduledAt) {
            return NextResponse.json(
                { error: 'Missing required fields: type, contentId, scheduledAt' },
                { status: 400 }
            );
        }

        // Validate type
        if (type !== 'article' && type !== 'product') {
            return NextResponse.json(
                { error: 'type must be "article" or "product"' },
                { status: 400 }
            );
        }

        // Validate content exists
        if (type === 'article') {
            const article = getArticleBySlug(contentId);
            if (!article) {
                return NextResponse.json(
                    { error: `Article not found: ${contentId}` },
                    { status: 404 }
                );
            }
        } else {
            const product = getProductById(contentId);
            if (!product) {
                return NextResponse.json(
                    { error: `Product not found: ${contentId}` },
                    { status: 404 }
                );
            }
        }

        // Validate scheduledAt is a valid date in the future
        const scheduledDate = new Date(scheduledAt);
        if (isNaN(scheduledDate.getTime())) {
            return NextResponse.json(
                { error: 'scheduledAt must be a valid ISO date string' },
                { status: 400 }
            );
        }

        if (scheduledDate <= new Date()) {
            return NextResponse.json(
                { error: 'scheduledAt must be in the future' },
                { status: 400 }
            );
        }

        // Schedule the post
        const scheduled = schedulePost(type, contentId, scheduledAt);

        return NextResponse.json({
            message: 'Post scheduled successfully',
            post: scheduled,
        });

    } catch (error) {
        console.error('Error scheduling post:', error);
        return NextResponse.json(
            { error: 'Failed to schedule post' },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/admin/x-schedule?id=xxx
 * Cancel a scheduled post
 */
export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json(
            { error: 'Missing required parameter: id' },
            { status: 400 }
        );
    }

    const cancelled = cancelScheduledPost(id);

    if (cancelled) {
        return NextResponse.json({ message: 'Post cancelled successfully' });
    } else {
        return NextResponse.json(
            { error: 'Post not found or already processed' },
            { status: 404 }
        );
    }
}
