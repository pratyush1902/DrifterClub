import { MetadataRoute } from 'next';
import { ALL_TRIPS } from '@/data/trips';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.drifter.buzz';
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/expeditions`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partnerships`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic expedition routes generated from ALL_TRIPS dataset
  const expeditionRoutes: MetadataRoute.Sitemap = ALL_TRIPS.map((trip) => ({
    url: `${baseUrl}/expeditions/${trip.slug}`,
    lastModified: currentDate,
    changeFrequency: trip.status === 'LIVE DROP' ? 'daily' : 'weekly',
    priority: trip.status === 'LIVE DROP' ? 0.9 : 0.7,
  }));

  // Travel guides and editorial stories
  const storySlugs = [
    '10-best-weekend-trips-from-patna',
    'nepal-trip-from-patna',
    'patna-to-kasol',
    'patna-to-jibhi',
    'patna-to-meghalaya',
  ];

  const storyRoutes: MetadataRoute.Sitemap = storySlugs.map((slug) => ({
    url: `${baseUrl}/stories/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...expeditionRoutes, ...storyRoutes];
}
