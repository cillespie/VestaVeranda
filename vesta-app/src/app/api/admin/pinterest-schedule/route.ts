import { NextRequest, NextResponse } from 'next/server';
import { schedulePinterestPost, getScheduledPinterestPosts, cancelScheduledPinterestPost } from '@/lib/pinterest-scheduler';
import { getArticleBySlug } from '@/lib/articles';
import { getProductById } from '@/lib/products';

/**
 * GET /api/admin/pinterest-schedule
 * List all scheduled Pinterest posts
 */
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') as 'pending' | 'posted' | 'failed' | null;

    const posts = getScheduledPinterestPosts(status || undefined);

    return NextResponse.json({
        count: posts.length,
        posts,
    });
}

/**
 * POST /api/admin/pinterest-schedule
 * Schedule a new Pinterest post
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { type, contentId, scheduledAt } = body;

        if (!type || !contentId || !scheduledAt) {
            return NextResponse.json(
                { error: 'Missing required fields: type, contentId, scheduledAt' },
                { status: 400 }
            );
        }

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
                return NextResponse.json({ error: `Article not found: ${contentId}` }, { status: 404 });
            }
        } else {
            const product = getProductById(contentId);
            if (!product) {
                return NextResponse.json({ error: `Product not found: ${contentId}` }, { status: 404 });
            }
        }

        const scheduledDate = new Date(scheduledAt);
        if (isNaN(scheduledDate.getTime())) {
            return NextResponse.json({ error: 'scheduledAt must be a valid ISO date' }, { status: 400 });
        }

        if (scheduledDate <= new Date()) {
            return NextResponse.json({ error: 'scheduledAt must be in the future' }, { status: 400 });
        }

        const scheduled = schedulePinterestPost(type, contentId, scheduledAt);

        return NextResponse.json({
            message: 'Pinterest post scheduled successfully',
            post: scheduled,
        });

    } catch (error) {
        console.error('Error scheduling Pinterest post:', error);
        return NextResponse.json({ error: 'Failed to schedule post' }, { status: 500 });
    }
}

/**
 * DELETE /api/admin/pinterest-schedule?id=xxx
 */
export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing required parameter: id' }, { status: 400 });
    }

    const cancelled = cancelScheduledPinterestPost(id);

    if (cancelled) {
        return NextResponse.json({ message: 'Post cancelled successfully' });
    } else {
        return NextResponse.json({ error: 'Post not found or already processed' }, { status: 404 });
    }
}
