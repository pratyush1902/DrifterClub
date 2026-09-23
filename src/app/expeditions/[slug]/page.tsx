import { use } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getTripBySlug } from '@/data/trips';
import TripDetailView from '@/components/TripDetailView';
import JsonLd from '@/components/JsonLd';
import { PATNA_BIHAR_KEYWORDS, buildBreadcrumbJsonLd, buildFaqJsonLd, buildTripJsonLd } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const trip = getTripBySlug(resolvedParams.slug);

  if (!trip) {
    return {
      title: 'Trip Not Found | Drifter',
      description: 'The requested adventure trail does not exist.',
    };
  }

  return {
    title: `${trip.title} | Drifter Expeditions`,
    description: `${trip.hook} Join Drifter's curated ${trip.duration} group trip from Patna Basecamp to ${trip.location}. Built for backpackers and adventure travellers from Bihar.`,
    alternates: {
      canonical: `/expeditions/${trip.slug}`,
    },
    keywords: [
      ...PATNA_BIHAR_KEYWORDS,
      `${trip.title} from Patna`,
      `${trip.category} trip from Bihar`,
      `${trip.location} group trip`,
      `${trip.duration} adventure trip from Patna`,
    ],
    openGraph: {
      title: `${trip.title} | Drifter Expeditions`,
      description: `${trip.hook} ${trip.secondaryCopy} Starts from Patna Basecamp for Bihar travellers.`,
      url: `https://www.drifter.buzz/expeditions/${trip.slug}`,
      images: [
        {
          url: trip.imageUrl,
          alt: trip.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${trip.title} | Drifter Expeditions`,
      description: `${trip.hook} Group adventure drop from Patna Basecamp for Bihar travellers.`,
      images: [trip.imageUrl],
    },
  };
}

export default function TripDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const trip = getTripBySlug(resolvedParams.slug);

  if (!trip) {
    return (
      <div className="section text-center" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h1 className="text-forest">Trip Not Found</h1>
          <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-text-muted)' }}>
            The requested adventure trail does not exist or has been moved.
          </p>
          <Link href="/expeditions" className="btn btn-primary">
            Back To All Trips
          </Link>
        </div>
      </div>
    );
  }

  if (trip.status === 'UPCOMING') {
    return (
      <div className="section text-center" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-primary)', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <JsonLd data={buildTripJsonLd(trip)} />
        <div className="container" style={{ maxWidth: '640px' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#FF4500',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-display)',
            padding: '0.3rem 0.8rem',
            borderRadius: '4px',
            marginBottom: '1.2rem',
            letterSpacing: '0.1em'
          }}>
            UPCOMING DROP 🔒
          </span>
          <h1 className="text-forest" style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{trip.title}</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
            We don't open registrations until the captain crew locks down the vibe, dates & offbeat stay. Join our WhatsApp waitlist to get early notification when this drop goes LIVE!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/917978578168?text=${encodeURIComponent(`Hey! I want early access waitlist for ${trip.title} drop!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: '#FFF' }}
            >
              💬 JOIN WHATSAPP EARLY ACCESS
            </a>
            <Link href="/expeditions" className="btn btn-outline">
              ← VIEW LIVE EXPEDITIONS
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <JsonLd
        data={[
          buildTripJsonLd(trip),
          buildFaqJsonLd(trip.faqs),
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Expeditions', path: '/expeditions' },
            { name: trip.title, path: `/expeditions/${trip.slug}` },
          ]),
        ]}
      />
      <TripDetailView trip={trip} />
    </>
  );
}
