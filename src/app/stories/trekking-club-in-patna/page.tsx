import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { PATNA_BIHAR_KEYWORDS, buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo';

const title = 'Trekking Club in Patna: Join Bihar Adventure Community';
const description = 'Looking for a trekking club in Patna? Learn how Drifter helps Bihar travellers join beginner-friendly treks, weekend hikes, Nepal trips, and Himalayan backpacking groups.';

const faqs = [
    {
        question: 'Is there a trekking club in Patna for beginners?',
        answer: 'Yes. Drifter is a Patna-based outdoor community that helps beginners join curated hikes, weekend trips, Nepal backpacking routes, and Himalayan treks with group support.',
    },
    {
        question: 'Do I need trekking experience to join Drifter?',
        answer: 'No. Many Drifter members join as first-time trekkers. The team recommends suitable routes, shares packing guidance, and uses trip captains and verified local partners for safer execution.',
    },
    {
        question: 'What kind of treks can people from Patna join?',
        answer: 'Patna travellers can start with Rajgir hikes, Netarhat forest camping, Rohtasgarh fort routes, Nepal ridge treks, Jibhi trails, Kasol village hikes, and Sandakphu-style Himalayan routes.',
    },
];

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: '/stories/trekking-club-in-patna',
    },
    keywords: [
        ...PATNA_BIHAR_KEYWORDS,
        'trekking group in Patna',
        'hiking club in Patna',
        'adventure club in Bihar',
        'Patna trekking community',
    ],
    openGraph: {
        title,
        description,
        url: 'https://www.drifter.buzz/stories/trekking-club-in-patna',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
    },
};

export default function TrekkingClubInPatnaPage() {
    return (
        <article className="section" style={{ backgroundColor: 'var(--color-bg-primary)', padding: '4rem 0' }}>
            <JsonLd
                data={[
                    buildArticleJsonLd({ title, description, path: '/stories/trekking-club-in-patna' }),
                    buildFaqJsonLd(faqs),
                    buildBreadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: 'Stories', path: '/stories' },
                        { name: 'Trekking Club in Patna', path: '/stories/trekking-club-in-patna' },
                    ]),
                ]}
            />
            <div className="container" style={{ maxWidth: '900px' }}>
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ display: 'inline-block', background: 'var(--color-forest)', color: '#fff', padding: '0.35rem 0.8rem', borderRadius: '4px', fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>
                        PATNA TREKKING COMMUNITY
                    </span>
                    <h1 className="text-forest" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', margin: '1rem 0' }}>
                        Trekking Club in Patna: Join Bihar&apos;s Adventure Community
                    </h1>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '740px', margin: '0 auto' }}>
                        A good trekking club in Patna should do more than post trip posters. It should help you pick the right route, prepare your body and gear, travel safely, and meet people who actually want the trail.
                    </p>
                </header>

                <section style={{ background: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--color-amber)', marginBottom: '2.5rem' }}>
                    <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)' }}>Quick Answer</h2>
                    <p style={{ fontSize: '1.08rem', lineHeight: 1.8 }}>
                        Drifter is a Patna-based adventure and trekking community for Bihar travellers who want weekend hikes, beginner-friendly outdoor preparation, Nepal backpacking, and Himalayan group trips with a curated crew.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)' }}>What a Strong Trekking Club Should Offer</h2>
                    <div className="grid md:grid-cols-2 gap-md">
                        {[
                            ['Beginner route matching', 'Not every new trekker should start with a hard Himalayan route. Drifter helps match people to realistic weekend and mountain trips.'],
                            ['Community before sales', 'The goal is to build a crew, not fill a bus. Solo travellers from Bihar should feel included before the first departure.'],
                            ['Safety and logistics', 'Shared transport, trip captains, local partners, checklists, and route planning matter more than vague itinerary claims.'],
                            ['Local practice culture', 'Runs, gear workshops, short hikes, and Patna meetups help people prepare before longer expeditions.'],
                        ].map(([heading, copy]) => (
                            <div key={heading} style={{ background: 'var(--color-bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                <h3>{heading}</h3>
                                <p>{copy}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)' }}>Beginner-Friendly Routes from Patna</h2>
                    <p style={{ lineHeight: 1.8 }}>
                        If you are new to trekking, start with Rajgir hikes, Netarhat forest camping, Rohtasgarh fort trails, or a guided Nepal ridge walk before attempting longer Himachal, Sandakphu, or Meghalaya backpacking routes.
                    </p>
                    <p style={{ lineHeight: 1.8 }}>
                        For detailed destination planning, read the <Link href="/stories/10-best-weekend-trips-from-patna" className="text-amber">weekend trips from Patna guide</Link> and the <Link href="/stories/nepal-trip-from-patna" className="text-amber">Nepal trip from Patna guide</Link>.
                    </p>
                </section>

                <section style={{ background: 'var(--color-forest)', color: 'var(--color-text-inverse)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                    <h2 style={{ color: 'var(--color-amber)', fontFamily: 'var(--font-display)' }}>Join the Drifter Community</h2>
                    <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
                        Start with a local meetup, a short weekend escape, or a beginner-friendly group trip. The right crew makes the first trek easier and the next one inevitable.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
                        <Link href="/community" className="btn btn-primary">Read the Community Code</Link>
                        <a href="https://wa.me/917978578168?text=Hi%20Drifter!%20I%20want%20to%20join%20the%20Patna%20trekking%20community." target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Join on WhatsApp</a>
                    </div>
                </section>
            </div>
        </article>
    );
}