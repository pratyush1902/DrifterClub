import { use } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getTripBySlug } from '@/data/trips';
import TripDetailView from '@/components/TripDetailView';

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
    description: `${trip.hook} Join Drifter's curated ${trip.duration} drop in ${trip.location}. Starting price: ${trip.startingPrice}.`,
    openGraph: {
      title: `${trip.title} | Drifter Expeditions`,
      description: `${trip.hook} ${trip.secondaryCopy}`,
      url: `https://www.drifter.buzz/expeditions/${trip.slug}`,
      images: [
        {
          url: trip.imageUrl,
          alt: trip.title,
        },
      ],
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

  return <TripDetailView trip={trip} />;
}
