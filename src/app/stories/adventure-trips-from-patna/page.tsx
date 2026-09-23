import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PATNA_BIHAR_KEYWORDS, buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo';

const title = 'Adventure Trips from Patna: Best Group Trips for Bihar Travellers';
const description = 'A practical 2026 guide to adventure trips from Patna, including Nepal, Netarhat, Rajgir, Rohtasgarh, Kasol, Jibhi, Meghalaya, and Himalayan group trips for Bihar travellers.';

const faqs = [
    {
        question: 'What are the best adventure trips from Patna?',
        answer: 'The best adventure trips from Patna include Netarhat pine camping, Rajgir hill hikes, Rohtasgarh fort camping, Nepal overland backpacking, Kasol, Jibhi, Sandakphu, and Meghalaya backpacking routes.',
    },
    {
        question: 'Are group trips from Patna good for solo travellers?',
        answer: 'Yes. Group trips from Patna are useful for solo travellers because shared transport, trip captains, room pairing, and group safety make long routes like Nepal, Himachal, and Meghalaya easier to manage.',
    },
    {
        question: 'How do I join an adventure trip from Bihar with Drifter?',
        answer: 'You can join Drifter trips through live expedition pages or WhatsApp the Patna Basecamp helpline at +91 7978578168 for current batches, waitlists, and trip fit guidance.',
    },
];

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: '/stories/adventure-trips-from-patna',
    },
    keywords: [
        ...PATNA_BIHAR_KEYWORDS,
        'adventure travel agency in Patna',
        'group adventure trips from Bihar',
        'best adventure trips near Patna',
        'Patna to Himalayas group trip',
    ],
    openGraph: {
        title,
        description,
        url: 'https://www.drifter.buzz/stories/adventure-trips-from-patna',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
    },
};

const tripIdeas = [
    ['Netarhat pine camping', '2D/1N', 'Pine forest camping, stargazing, Magnolia Point sunrise'],
    ['Rajgir and Gridhakuta', '1D or 2D/1N', 'Beginner hill hikes, ropeway, hot springs, quick reset'],
    ['Rohtasgarh and Kaimur', '2D/1N', 'Fort ruins, cliffside camping, rough-trail adventure'],
    ['Pokhara, Nepal', '4D/3N', 'Raxaul border route, lakeside nightlife, mountain views'],
    ['Kasol and Parvati Valley', '5D/4N', 'Backpacking, cafes, Tosh, alpine village trails'],
    ['Jibhi and Tirthan Valley', '5D/4N', 'Pine chalets, Jalori Pass, Serolsar Lake, slow mountain stays'],
    ['Sandakphu and Manebhanjan', '5D/4N', 'Land Rover ride, Singalila Ridge, Kanchenjunga and Everest views'],
    ['Meghalaya', '5D/4N', 'Root bridges, waterfalls, Dawki river, Northeast backpacking'],
];

export default function AdventureTripsFromPatnaPage() {
    return (
        <article className="section" style={{ backgroundColor: 'var(--color-bg-primary)', padding: '4rem 0' }}>
            <JsonLd
                data={[
                    buildArticleJsonLd({ title, description, path: '/stories/adventure-trips-from-patna' }),
                    buildFaqJsonLd(faqs),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Stories', path: '/stories' },
                        { name: 'Adventure Trips from Patna', path: '/stories/adventure-trips-from-patna' },
                    ]),
                ]}
            />
            <div className="container" style={{ maxWidth: '920px' }}>
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ display: 'inline-block', background: 'var(--color-amber)', color: '#fff', padding: '0.35rem 0.8rem', borderRadius: '4px', fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>
                        PATNA ADVENTURE GUIDE 2026
                    </span>
                    <h1 className="text-forest" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', margin: '1rem 0' }}>
                        Adventure Trips from Patna: Best Group Trips for Bihar Travellers
                    </h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '760px', margin: '0 auto' }}>
                        If you are searching for adventure trips from Patna or Bihar, start with routes that match your weekend window, fitness level, travel budget, and comfort with overnight journeys.
                    </p>
                </header>

                <section style={{ background: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--color-amber)', marginBottom: '2.5rem' }}>
                    <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)' }}>Quick Answer</h2>
                    <p style={{ fontSize: '1.08rem', lineHeight: 1.8 }}>
                        The strongest adventure trips from Patna are <strong>Netarhat</strong> for pine camping, <strong>Rajgir</strong> for beginner hikes, <strong>Rohtasgarh</strong> for raw fort camping, <strong>Nepal</strong> for affordable international backpacking, and <strong>Himachal or Meghalaya</strong> for longer mountain and waterfall routes. Drifter curates these as community-first group trips from Patna Basecamp.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)' }}>Best Adventure Trip Ideas from Patna</h2>
                    <div style={{ overflowX: 'auto', border: '1px solid rgba(11,26,20,0.12)', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-secondary)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: 'var(--color-forest)', color: '#fff' }}>
                                <tr>
                                    <th style={{ padding: '0.9rem' }}>Trip</th>
                                    <th style={{ padding: '0.9rem' }}>Ideal Duration</th>
                                    <th style={{ padding: '0.9rem' }}>Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tripIdeas.map(([trip, duration, bestFor], index) => (
                                    <tr key={trip} style={{ borderBottom: '1px solid rgba(11,26,20,0.08)', background: index % 2 ? 'rgba(11,26,20,0.03)' : 'transparent' }}>
                                        <td style={{ padding: '0.9rem', fontWeight: 700, color: 'var(--color-forest)' }}>{trip}</td>
                                        <td style={{ padding: '0.9rem' }}>{duration}</td>
                                        <td style={{ padding: '0.9rem' }}>{bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)' }}>How To Choose the Right Trip</h2>
                    <div className="grid md:grid-cols-2 gap-md">
                        <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                            <h3>For a short weekend</h3>
                            <p>Pick Rajgir, Bodh Gaya, Rohtasgarh, Netarhat, or Varanasi. These routes are practical when you cannot take leave from work or college.</p>
                        </div>
                        <div style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                            <h3>For a mountain reset</h3>
                            <p>Pick Nepal, Jibhi, Kasol, Sandakphu, or Secret Himalaya drops. These work better for long weekends and groups comfortable with overnight travel.</p>
                        </div>
                    </div>
                </section>

                <section style={{ background: 'var(--color-forest)', color: 'var(--color-text-inverse)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                    <h2 style={{ color: 'var(--color-amber)', fontFamily: 'var(--font-display)' }}>Join an Upcoming Patna Basecamp Drop</h2>
                    <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
                        Drifter is built for people in Patna and Bihar who want safer, better-curated group adventures without planning transport, stays, route research, and solo logistics from scratch.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
                        <Link href="/expeditions" className="btn btn-primary">View Live Expeditions</Link>
                        <a href="https://wa.me/917978578168?text=Hi%20Drifter!%20I%20want%20to%20join%20an%20adventure%20trip%20from%20Patna." target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Ask on WhatsApp</a>
                    </div>
                </section>
            </div>
        </article>
    );
}