import { TwitterApi } from 'twitter-api-v2';
import path from 'path';
import fs from 'fs';

// Lazy initialization
// Lazy initialization
let client: TwitterApi | null = null;

function getClient() {
    if (client) return client;

    // Only initialize if keys are present
    if (process.env.X_API_KEY && process.env.X_API_SECRET) {
        client = new TwitterApi({
            appKey: process.env.X_API_KEY,
            appSecret: process.env.X_API_SECRET,
            accessToken: process.env.X_ACCESS_TOKEN,
            accessSecret: process.env.X_ACCESS_SECRET,
        });
        return client;
    }

    return null;
}

interface PostOptions {
    text: string;
    imagePath?: string; // Relative to public folder or absolute URL
}

export async function postToX({ text, imagePath }: PostOptions) {
    const api = getClient();

    if (!api) {
        console.warn('X API credentials not found. Skipping post.');
        return { skipped: true, reason: 'No API credentials' };
    }

    try {
        let mediaId: string | undefined;

        if (imagePath) {
            // Handle local images (starting with /)
            if (imagePath.startsWith('/')) {
                const fullPath = path.join(process.cwd(), 'public', imagePath);
                if (fs.existsSync(fullPath)) {
                    mediaId = await api.readWrite.v1.uploadMedia(fullPath);
                } else {
                    console.warn(`Image not found at ${fullPath}`);
                }
            } else if (imagePath.startsWith('http')) {
                // For remote URLs, we'd need to fetch the buffer first. 
                // Skipping for this V1 implementation to keep it simple, 
                // or we could implement fetch + upload.
                // For now, let's just warn.
                console.warn('Remote image upload not yet implemented.');
            }
        }

        if (mediaId) {
            const tweet = await api.v2.tweet({
                text: text,
                media: { media_ids: [mediaId] }
            });
            return { success: true, tweetId: tweet.data.id };
        } else {
            const tweet = await api.v2.tweet({
                text: text
            });
            return { success: true, tweetId: tweet.data.id };
        }

    } catch (error) {
        console.error('Error posting to X:', error);
        return { success: false, error };
    }
}
