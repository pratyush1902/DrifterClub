import type { Metadata } from 'next';
import DrifterTripsSection from '@/components/DrifterTripsSection';

export const metadata: Metadata = {
  title: 'Curated Expeditions & Travel Drops | Drifter',
  description: 'Explore live and upcoming expedition drops starting from Patna Basecamp. From Pokhara Nepal secret treks to Secret Himalayan Spot getaways and Manebhanjan Sandakphu.',
  openGraph: {
    title: 'Curated Expeditions & Travel Drops | Drifter',
    description: 'Explore live and upcoming expedition drops starting from Patna Basecamp. Pokhara, Secret Himalaya Spot, Kasol, Jibhi, and Manebhanjan with Sandakphu.',
    url: 'https://www.drifter.buzz/expeditions',
  },
};

export default function ExpeditionsPage() {
  return (
    <div>
      <DrifterTripsSection />
    </div>
  );
}
