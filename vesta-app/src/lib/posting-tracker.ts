import fs from 'fs';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src/data/posted-content.json');

interface PostedContent {
    articles: string[]; // slugs (X/Twitter)
    products: string[]; // ids (X/Twitter)
    pinterest: {
        articles: string[];
        products: string[];
    };
}

const DEFAULT_STATE: PostedContent = {
    articles: [],
    products: [],
    pinterest: { articles: [], products: [] }
};

export function getPostedContent(): PostedContent {
    try {
        if (!fs.existsSync(DATA_FILE_PATH)) {
            return DEFAULT_STATE;
        }
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
        const data = JSON.parse(fileContent);
        // Ensure pinterest property exists for backwards compatibility
        if (!data.pinterest) {
            data.pinterest = { articles: [], products: [] };
        }
        return data;
    } catch (error) {
        console.error('Error reading posted content tracker:', error);
        return DEFAULT_STATE;
    }
}

// === X (Twitter) Functions ===

export function markArticleAsPosted(slug: string) {
    const data = getPostedContent();
    if (!data.articles.includes(slug)) {
        data.articles.push(slug);
        savePostedContent(data);
    }
}

export function markProductAsPosted(id: string) {
    const data = getPostedContent();
    if (!data.products.includes(id)) {
        data.products.push(id);
        savePostedContent(data);
    }
}

// === Pinterest Functions ===

export function markArticleAsPostedToPinterest(slug: string) {
    const data = getPostedContent();
    if (!data.pinterest.articles.includes(slug)) {
        data.pinterest.articles.push(slug);
        savePostedContent(data);
    }
}

export function markProductAsPostedToPinterest(id: string) {
    const data = getPostedContent();
    if (!data.pinterest.products.includes(id)) {
        data.pinterest.products.push(id);
        savePostedContent(data);
    }
}

export function getPinterestPostedArticles(): string[] {
    return getPostedContent().pinterest.articles;
}

export function getPinterestPostedProducts(): string[] {
    return getPostedContent().pinterest.products;
}

// === Helper ===

function savePostedContent(data: PostedContent) {
    try {
        fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 4));
    } catch (error) {
        console.error('Error saving posted content tracker:', error);
    }
}
