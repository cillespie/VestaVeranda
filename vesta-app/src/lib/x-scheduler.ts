import fs from 'fs';
import path from 'path';

const QUEUE_FILE_PATH = path.join(process.cwd(), 'src/data/x-post-queue.json');

export interface ScheduledPost {
    id: string;
    type: 'article' | 'product';
    contentId: string;
    scheduledAt: string; // ISO timestamp
    status: 'pending' | 'posted' | 'failed';
    errorMessage?: string;
    postedAt?: string;
}

interface QueueData {
    queue: ScheduledPost[];
}

function getQueueData(): QueueData {
    try {
        if (!fs.existsSync(QUEUE_FILE_PATH)) {
            return { queue: [] };
        }
        const fileContent = fs.readFileSync(QUEUE_FILE_PATH, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading X post queue:', error);
        return { queue: [] };
    }
}

function saveQueueData(data: QueueData) {
    try {
        fs.writeFileSync(QUEUE_FILE_PATH, JSON.stringify(data, null, 4));
    } catch (error) {
        console.error('Error saving X post queue:', error);
    }
}

// Generate a simple ID without uuid dependency
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Schedule a new post for future publication
 */
export function schedulePost(
    type: 'article' | 'product',
    contentId: string,
    scheduledAt: Date | string
): ScheduledPost {
    const data = getQueueData();

    const newPost: ScheduledPost = {
        id: generateId(),
        type,
        contentId,
        scheduledAt: typeof scheduledAt === 'string' ? scheduledAt : scheduledAt.toISOString(),
        status: 'pending',
    };

    data.queue.push(newPost);
    saveQueueData(data);

    return newPost;
}

/**
 * Get all scheduled posts (optionally filter by status)
 */
export function getScheduledPosts(status?: 'pending' | 'posted' | 'failed'): ScheduledPost[] {
    const data = getQueueData();
    if (status) {
        return data.queue.filter(p => p.status === status);
    }
    return data.queue;
}

/**
 * Get posts that are due (scheduledAt <= now) and still pending
 */
export function getDuePosts(): ScheduledPost[] {
    const data = getQueueData();
    const now = new Date();

    return data.queue.filter(post =>
        post.status === 'pending' &&
        new Date(post.scheduledAt) <= now
    );
}

/**
 * Mark a post as successfully posted
 */
export function markAsPosted(id: string) {
    const data = getQueueData();
    const post = data.queue.find(p => p.id === id);

    if (post) {
        post.status = 'posted';
        post.postedAt = new Date().toISOString();
        saveQueueData(data);
    }
}

/**
 * Mark a post as failed
 */
export function markAsFailed(id: string, errorMessage?: string) {
    const data = getQueueData();
    const post = data.queue.find(p => p.id === id);

    if (post) {
        post.status = 'failed';
        post.errorMessage = errorMessage;
        saveQueueData(data);
    }
}

/**
 * Remove a scheduled post (only if pending)
 */
export function cancelScheduledPost(id: string): boolean {
    const data = getQueueData();
    const index = data.queue.findIndex(p => p.id === id && p.status === 'pending');

    if (index !== -1) {
        data.queue.splice(index, 1);
        saveQueueData(data);
        return true;
    }
    return false;
}

/**
 * Clear old posts (posted/failed older than X days)
 */
export function cleanupOldPosts(daysOld: number = 30) {
    const data = getQueueData();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - daysOld);

    data.queue = data.queue.filter(post => {
        if (post.status === 'pending') return true;
        const postDate = new Date(post.postedAt || post.scheduledAt);
        return postDate > cutoff;
    });

    saveQueueData(data);
}
