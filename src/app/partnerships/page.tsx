import type { Metadata } from 'next';
import PartnershipForm from '@/components/PartnershipForm';

export const metadata: Metadata = {
  title: 'Corporate & Community Partnerships | Drifter',
  description: 'Partner with Drifter. We collaborate with fitness centers, college outdoor clubs, gym owners, and corporate teams in Patna for custom experiences.',
  openGraph: {
    title: 'Corporate & Community Partnerships | Drifter',
    description: 'Collaborate with Drifter on custom corporate retreats, college adventure clubs, and fitness workshops in Patna.',
    url: 'https://thedrifter.club/partnerships',
  },
};

export default function Partnerships() {
  return (
    <div className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-lg items-center">
          <div>
            <h1 className="text-forest animate-fade-up">Partner With Us</h1>
            <p className="animate-fade-up" style={{ animationDelay: '0.1s', marginBottom: 'var(--spacing-md)' }}>
              Are you a gym owner, a college society head, or a corporate HR looking for team-building? 
              Drifter partners with local organizations to bring the outdoors closer to your people.
            </p>
            
            <h3 className="text-amber">What partnership looks like:</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-main)' }}>
              <li>Cross-promotion and exclusive discounts for your members</li>
              <li>Co-hosted fitness sessions or gear workshops</li>
              <li>Custom corporate outdoor experiences</li>
              <li>College adventure club incubation</li>
            </ul>

            <h3 className="text-forest" style={{ marginTop: 'var(--spacing-lg)' }}>Get in Touch</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-forest)', margin: '0.3rem 0 1rem 0' }}>
              📞 <strong>Direct Phone Line:</strong> <a href="tel:+917978578168" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>+91 79785 78168</a>
            </p>
            
            <PartnershipForm />
          </div>
          <div style={{ 
            height: '100%', 
            minHeight: '400px', 
            backgroundImage: "url('/images/bihar.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 69, 0, 0.2)'
          }}></div>
        </div>
      </div>
    </div>
  );
}
