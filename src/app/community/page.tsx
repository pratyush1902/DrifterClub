import type { Metadata } from 'next';
import Link from 'next/link';
import InstagramSection from '@/components/InstagramSection';

export const metadata: Metadata = {
  title: 'Community Manifesto & Code | Drifter',
  description: 'Read the Drifter Manifesto. We are a private outdoor community in Bihar prioritizing safety, connection, true grit, and unscripted adventures.',
  openGraph: {
    title: 'Community Manifesto & Code | Drifter',
    description: 'Read the Drifter Manifesto. No generic package tours, no cliques—just authentic outdoor community forged outside Patna.',
    url: 'https://www.drifter.buzz/community',
  },
};


const DRIFTER_RULES = [
  {
    number: '01',
    title: 'Travelers & Adventure Lovers (No Passive Tourists)',
    description: 'Drifter is a community for real travelers, backpackers, and adventure addicts. We carry our own gear, take unpaved paths, and dive headfirst into the unknown.',
    tag: 'THE CODE'
  },
  {
    number: '02',
    title: 'Spontaneity > Fixed Itineraries',
    description: 'We don\'t believe in rigid, minute-by-minute itineraries. We believe in spontaneity—the best mountain stories happen during unplanned sunrise detours.',
    tag: 'UNFILTERED'
  },
  {
    number: '03',
    title: 'No Generic "X Days / Y Nights" Packages',
    description: 'We aren\'t a commercial travel agency selling cookie-cutter package tours. We curate high-vibe expeditions and real communal experiences.',
    tag: 'NOT A TOUR AGENCY'
  },
  {
    number: '04',
    title: 'Strangers at 6 AM, Homies by Sundown',
    description: 'No cliques or ego trips allowed. Everyone shares the bonfire, the roadside chai, the shared cabs, and the trail stories.',
    tag: 'HIGH VIBES'
  },
  {
    number: '05',
    title: 'Embrace the Chaos',
    description: 'Muddy boots, unexpected rain, or delayed transport? That\'s not a complaint—that\'s where the real story begins. Adapt and laugh through it.',
    tag: 'STORIES > COMFORT'
  },
  {
    number: '06',
    title: 'Leave No Trace & Honor the Trail',
    description: 'The wilderness gives us everything; we leave it cleaner than we found it. Zero plastic left behind. Always.',
    tag: 'EARTH FIRST'
  },
  {
    number: '07',
    title: 'Main Character Energy, Zero Ego',
    description: 'Hike hard, cheer loudest for your fellow drifters, and leave city pretense at the border.',
    tag: 'VIBE CHECK'
  },
  {
    number: '08',
    title: 'Campfire Confidentiality',
    description: 'What happens around the midnight campfire and 2 AM stargazing stays in the Drifter lore forever.',
    tag: 'DRIFTER LORE'
  }
];

export default function Community() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-forest animate-fade-up">The Community</h1>
        <p className="animate-fade-up" style={{ animationDelay: '0.1s', fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px' }}>
          Drifter isn't a travel agency. We are Bihar's largest adventure community built by & for restless wanderers.
        </p>

        {/* Roots & Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-lg" style={{ marginTop: 'var(--spacing-xl)' }}>
          <div style={{ background: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 className="text-amber" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Roots in Bihar</h2>
            <p style={{ lineHeight: '1.8' }}>
              Drifter started with a simple, frustrating reality: why do the youth of Bihar have to pack their bags for Delhi or Bangalore just to find an active weekend community or a trekking club?
            </p>
            <p style={{ lineHeight: '1.8', marginTop: '1rem' }}>
              The answer was, we don't. We just needed to build it ourselves. We are tapping into the raw, unspoken energy of Bihar. This isn't just about climbing mountains; it's about reclaiming our narrative.
            </p>
          </div>
          
          <div style={{ background: 'var(--color-forest)', color: 'var(--color-text-inverse)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ color: 'var(--color-amber)', fontSize: '2rem', marginBottom: '1rem' }}>Our Core Philosophy</h2>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li><strong>Safety First:</strong> We partner with certified mountain guides and maintain a 100% safety record.</li>
              <li><strong>Community Over Transactions:</strong> We don't sell itineraries; we host meetups, training sessions, and build lifelong bonds.</li>
              <li><strong>Raw & Real:</strong> Authenticity over luxury. We trade plush resorts for starry skies and real adventure.</li>
            </ul>
          </div>
        </div>

        {/* NEW SECTION: Rules of the Drift */}
        <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '2px dashed var(--color-bg-secondary)' }}>
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.4rem 1rem', 
              background: 'rgba(255, 69, 0, 0.1)', 
              color: 'var(--color-amber)', 
              borderRadius: 'var(--radius-pill)', 
              fontWeight: '700', 
              fontSize: '0.85rem', 
              letterSpacing: '0.1em',
              marginBottom: '0.5rem'
            }}>
              UNWRITTEN CODE OF THE TRAIL
            </span>
            <h2 className="text-forest" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>RULES OF THE DRIFT</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
              We don't have corporate fine print—we have trail rules. Read them carefully before you step into our circle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-md">
            {DRIFTER_RULES.map((rule) => (
              <div 
                key={rule.number}
                style={{
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem',
                  border: '1px solid rgba(11, 26, 20, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'

                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ 
                      fontFamily: 'var(--font-display)', 
                      fontSize: '2.5rem', 
                      color: 'var(--color-amber)', 
                      lineHeight: 1 
                    }}>
                      #{rule.number}
                    </span>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 800, 
                      letterSpacing: '0.12em', 
                      background: 'var(--color-forest)', 
                      color: 'var(--color-text-inverse)', 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: 'var(--radius-sm)' 
                    }}>
                      {rule.tag}
                    </span>
                  </div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.5rem', 
                    color: 'var(--color-forest)', 
                    marginBottom: '0.6rem',
                    letterSpacing: '0.03em'
                  }}>
                    {rule.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Trail Feed */}
        <div style={{ marginTop: 'var(--spacing-xl)' }}>
          <InstagramSection />
        </div>

        {/* Join CTA */}

        <div className="text-center" style={{ 
          marginTop: 'var(--spacing-xl)', 
          background: 'var(--color-forest)', 
          color: 'var(--color-text-inverse)',
          padding: '3.5rem 2rem',
          borderRadius: 'var(--radius-lg)'
        }}>
          <h2 style={{ color: 'var(--color-amber)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '0.5rem' }}>
            READY TO STEP OFF THE PAVEMENT?
          </h2>
          <p style={{ maxWidth: '550px', margin: '0 auto 2rem auto', opacity: 0.9, fontSize: '1.1rem' }}>
            Join 1,000+ wanderers, backpackers, and weekend adventurers across Bihar.
          </p>
          <a 
            href="https://wa.me/917978578168?text=Hi%20Drifter!%20I%20want%20to%20join%20the%20community." 
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.3rem', padding: '1.1rem 2.5rem' }}
          >
            Join the WhatsApp Group
          </a>
        </div>
      </div>
    </div>
  );
}

