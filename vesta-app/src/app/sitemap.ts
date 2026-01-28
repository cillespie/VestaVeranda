import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vestaverandaliving.store';

    // Core pages
    const routes = [
        '',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }));

    // Guide articles
    const guides = [
        '/guides/valentines-day-outdoor-date',
        '/guides/fire-pit-composite-deck',
        '/guides/robot-mower-hills',
        '/guides/ooni-vs-gozney',
        '/guides/backyard-lighting-no-electricity',
        '/guides/lawn-games-weddings',
        '/guides/patio-furniture-guide',
        '/guides/gazebo-vs-pergola',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Comparison pages
    const comparisons = [
        '/compare/solo-stove-vs-breeo',
        '/compare/jackery-vs-bluetti',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Setup guides
    const setups = [
        '/setups/500-patio-makeover',
        '/setups/cozy-fire-pit-corner',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...guides, ...comparisons, ...setups];
}
