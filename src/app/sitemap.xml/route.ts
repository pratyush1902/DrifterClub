import { ALL_TRIPS } from '@/data/trips';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.drifter.buzz';
  const lastMod = new Date().toISOString().split('T')[0];

  const staticUrls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${baseUrl}/expeditions`, priority: '0.9', changefreq: 'daily' },
    { loc: `${baseUrl}/community`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/events`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/partnerships`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${baseUrl}/contact`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${baseUrl}/stories`, priority: '0.9', changefreq: 'daily' },
    { loc: `${baseUrl}/llms.txt`, priority: '0.8', changefreq: 'weekly' },
  ];

  const tripUrls = ALL_TRIPS.map((trip) => ({
    loc: `${baseUrl}/expeditions/${trip.slug}`,
    priority: trip.status === 'LIVE DROP' ? '0.9' : '0.7',
    changefreq: trip.status === 'LIVE DROP' ? 'daily' : 'weekly',
  }));

  const storySlugs = [
    '10-best-weekend-trips-from-patna',
    'nepal-trip-from-patna',
    'patna-to-kasol',
    'patna-to-jibhi',
    'patna-to-meghalaya',
  ];

  const storyUrls = storySlugs.map((slug) => ({
    loc: `${baseUrl}/stories/${slug}`,
    priority: '0.9',
    changefreq: 'monthly',
  }));

  const allUrls = [...staticUrls, ...tripUrls, ...storyUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate',
    },
  });
}
