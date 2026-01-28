import fs from 'fs';
import path from 'path';

const QUEUE_FILE_PATH = path.join(process.cwd(), 'src/data/pinterest-post-queue.json');

export interface ScheduledPinterestPost {
    id: string;
    type: 'article' | 'product';
    contentId: string;
    scheduledAt: string; // ISO timestamp
    status: 'pending' | 'posted' | 'failed';
    errorMessage?: string;
    postedAt?: string;
    pinId?: string;
}

interface QueueData {
    queue: ScheduledPinterestPost[];
}

function getQueueData(): QueueData {
    try {
        if (!fs.existsSync(QUEUE_FILE_PATH)) {
            return { queue: [] };
        }
        const fileContent = fs.readFileSync(QUEUE_FILE_PATH, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading Pinterest post queue:', error);
        return { queue: [] };
    }
}

function saveQueueData(data: QueueData) {
    try {
        fs.writeFileSync(QUEUE_FILE_PATH, JSON.stringify(data, null, 4));
    } catch (error) {
        console.error('Error saving Pinterest post queue:', error);
    }
}

function generateId(): string {
    return `pin-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export function schedulePinterestPost(
    type: 'article' | 'product',
    contentId: string,
    scheduledAt: Date | string
): ScheduledPinterestPost {
    const data = getQueueData();

    const newPost: ScheduledPinterestPost = {
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

export function getScheduledPinterestPosts(status?: 'pending' | 'posted' | 'failed'): ScheduledPinterestPost[] {
    const data = getQueueData();
    if (status) {
        return data.queue.filter(p => p.status === status);
    }
    return data.queue;
}

export function getDuePinterestPosts(): ScheduledPinterestPost[] {
    const data = getQueueData();
    const now = new Date();

    return data.queue.filter(post =>
        post.status === 'pending' &&
        new Date(post.scheduledAt) <= now
    );
}

export function markPinterestPostAsPosted(id: string, pinId?: string) {
    const data = getQueueData();
    const post = data.queue.find(p => p.id === id);

    if (post) {
        post.status = 'posted';
        post.postedAt = new Date().toISOString();
        if (pinId) post.pinId = pinId;
        saveQueueData(data);
    }
}

export function markPinterestPostAsFailed(id: string, errorMessage?: string) {
    const data = getQueueData();
    const post = data.queue.find(p => p.id === id);

    if (post) {
        post.status = 'failed';
        post.errorMessage = errorMessage;
        saveQueueData(data);
    }
}

export function cancelScheduledPinterestPost(id: string): boolean {
    const data = getQueueData();
    const index = data.queue.findIndex(p => p.id === id && p.status === 'pending');

    if (index !== -1) {
        data.queue.splice(index, 1);
        saveQueueData(data);
        return true;
    }
    return false;
}
