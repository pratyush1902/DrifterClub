export const dynamic = 'force-dynamic';

export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.drifter.buzz/sitemap.xml`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate',
    },
  });
}
