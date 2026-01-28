import { NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/articles';
import { sampleProducts } from '@/lib/products';
import { markArticleAsPosted, markProductAsPosted, getPostedContent } from '@/lib/posting-tracker';
import { postToX } from '@/lib/x-service';

// Configure your site's base URL for article links
const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vesta-veranda.vercel.app';

export async function GET() {
    // 1. Get what's already posted
    const postedContent = getPostedContent();
    const postedArticles = postedContent.articles;
    const postedProducts = postedContent.products;

    const results = [];
    const maxPostsPerRun = 5; // To avoid rate limits, only post up to 5 items per run
    let postsCount = 0;

    // 2. Check for new articles
    const allArticles = getAllArticles();
    for (const article of allArticles) {
        if (postsCount >= maxPostsPerRun) break;
        if (postedArticles.includes(article.slug)) continue;

        // Construct tweet
        const articleUrl = `${SITE_BASE_URL}/articles/${article.slug}`;
        const tags = article.seo.primaryKeywords.map(k => '#' + k.replace(/\s+/g, '')).slice(0, 3).join(' ');

        const tweetText = `🌿 New Guide: ${article.title}\n\n${article.subtitle}\n\nRead more 👇\n${articleUrl}\n\n${tags}`;

        // Post to X
        console.log(`Posting article to X: ${article.title}`);
        const result = await postToX({
            text: tweetText,
            imagePath: article.heroImage
        });

        results.push({ type: 'article', id: article.slug, result });

        if (result.success) {
            markArticleAsPosted(article.slug);
            postsCount++;
        }
    }

    // 3. Check for new products (only if we haven't hit the limit)
    if (postsCount < maxPostsPerRun) {
        for (const product of sampleProducts) {
            if (postsCount >= maxPostsPerRun) break;
            if (postedProducts.includes(product.id)) continue;

            // Construct tweet
            const tags = `#${product.category} #OutdoorLiving`;
            const tweetText = `✨ Featured: ${product.name} by ${product.brand}\n\n${product.description}\n\nCheck it out here 👇\n${product.affiliateLink}\n\n${tags}`;

            // Post to X
            console.log(`Posting product to X: ${product.name}`);
            const result = await postToX({
                text: tweetText,
                imagePath: product.lifestyleImage
            });

            results.push({ type: 'product', id: product.id, result });

            if (result.success) {
                markProductAsPosted(product.id);
                postsCount++;
            }
        }
    }

    return NextResponse.json({
        message: 'Sync complete',
        processed: results.length,
        results
    });
}
