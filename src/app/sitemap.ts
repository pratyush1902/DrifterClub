import type { MetadataRoute } from 'next';
import { ALL_TRIPS } from '@/data/trips';

const baseUrl = 'https://www.drifter.buzz';

const storySlugs = [
    '10-best-weekend-trips-from-patna',
    'adventure-trips-from-patna',
    'nepal-trip-from-patna',
    'trekking-club-in-patna',
    'patna-to-kasol',
    'patna-to-jibhi',
    'patna-to-meghalaya',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/`, lastModified, changeFrequency: 'daily', priority: 1 },
        { url: `${baseUrl}/expeditions`, lastModified, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/community`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/events`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/stories`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    ];

    const tripRoutes: MetadataRoute.Sitemap = ALL_TRIPS.map((trip) => ({
        url: `${baseUrl}/expeditions/${trip.slug}`,
        lastModified,
        changeFrequency: trip.status === 'LIVE DROP' ? 'daily' : 'weekly',
        priority: trip.status === 'LIVE DROP' ? 0.9 : 0.7,
    }));

    const storyRoutes: MetadataRoute.Sitemap = storySlugs.map((slug) => ({
        url: `${baseUrl}/stories/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    return [...staticRoutes, ...tripRoutes, ...storyRoutes];
}