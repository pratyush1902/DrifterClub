import type { Metadata } from 'next';
import DrifterTripsSection from '@/components/DrifterTripsSection';

export const metadata: Metadata = {
  title: 'Curated Expeditions & Travel Drops | Drifter',
  description: 'Explore live and upcoming expedition drops starting from Patna Basecamp. From Pokhara Nepal secret treks to Netarhat pine forest camping.',
  openGraph: {
    title: 'Curated Expeditions & Travel Drops | Drifter',
    description: 'Explore live and upcoming expedition drops starting from Patna Basecamp. Pokhara, Netarhat, Kasol, Jibhi, and Meghalaya.',
    url: 'https://thedrifter.club/expeditions',
  },
};

export default function ExpeditionsPage() {
  return (
    <div>
      <DrifterTripsSection />
    </div>
  );
}
