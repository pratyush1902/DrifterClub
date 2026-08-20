import type { Metadata } from 'next';
import ActivityTypesSection from '@/components/ActivityTypesSection';
import DrifterTripsSection from '@/components/DrifterTripsSection';
import CategoryTripExplorer from '@/components/CategoryTripExplorer';
import InstagramSection from '@/components/InstagramSection';
import styles from './Home.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Drifter | Bihar\'s Premier Adventure & Travel Community',
  description: 'Join Bihar\'s largest outdoor adventure tribe based in Patna. We organize curated weekend trips, Nepal expeditions, pine forest camping, and backpacking drops.',
  openGraph: {
    title: 'Drifter | Bihar\'s Premier Adventure & Travel Community',
    description: 'Join Bihar\'s largest outdoor adventure tribe based in Patna. Curated weekend trips, Nepal expeditions, and pine forest camping.',
    url: 'https://thedrifter.club',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="animate-fade-up">Your Weekends Suck. <br/><span className="text-amber">We Fix That.</span></h1>
          <p className={`${styles.heroSubtitle} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
            We're not a travel agency. We're a private tribe of explorers. Stop watching other people live and join the next drop.
          </p>
          <div className={`${styles.heroActions} animate-fade-up`} style={{ animationDelay: '0.4s' }}>
            <a href="#" className="btn btn-primary" style={{ transform: 'scale(1.1)' }}>Join The Waitlist</a>
          </div>
        </div>
      </section>

      {/* Dynamic Banner */}
      <div className={styles.banner}>
        <div className="container text-center">
          <p>🔥 <strong>OUR VISION: RECLAIMING THE WILD IN BIHAR & BEYOND.</strong> JOIN THE TRIBE TODAY.</p>
        </div>
      </div>

      {/* What Drifter Is / Isn't */}
      <section className="section bg-secondary" style={{ borderTop: '2px solid var(--color-forest)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-lg items-center">
            <div>
              <h2 className="text-forest" style={{ marginBottom: '0.5rem' }}>We Don't Take <br/>Everyone.</h2>
              <p>
                Drifter isn't for tourists. It's for the fit, the active, and the hungry. We are a highly curated outdoor community in Bihar prioritizing safety, connection, and true grit.
              </p>
              <p>
                <strong>What we are:</strong> A private, community-first outdoor brand.
              </p>
              <p>
                <strong>What we are NOT:</strong> A travel agency selling generic tours to crowds.
              </p>
              <br/>
              <Link href="/community" className="btn btn-outline">Read Our Manifesto</Link>
            </div>
            <div className={styles.manifestoImage}></div>
          </div>
        </div>
      </section>

      {/* Born In Bihar Storytelling */}
      <section className="section bg-forest" style={{ color: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-forest-light)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-lg items-center">
            <div className={styles.biharImage}></div>
            <div>
              <h2 className="text-amber" style={{ marginBottom: '1rem' }}>Born In Bihar.<br/>Built For The Wild.</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                For too long, the narrative has been that to find adventure, to find a tribe of like-minded explorers, you have to leave Bihar. We're calling bullshit on that.
              </p>
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                Drifter was forged in Patna with a singular belief: the grit, the resilience, and the fire of Bihar are perfectly suited for the mountains. We are building the state's most formidable outdoor community, proving that our basecamp is right here at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Asymmetric Activity & Tour Types Section */}
      <ActivityTypesSection />

      {/* Redesigned Drifter Trips Section (Patagonia x Red Bull brand spec) */}
      <DrifterTripsSection />

      {/* Upcoming Local Drops */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-md)' }}>
            <h2 className="text-forest">Upcoming Local Drops</h2>
            <Link href="/events" className="btn btn-outline">All Events</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-md">
            <div className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.eventDay}>12</span>
                <span className={styles.eventMonth}>AUG</span>
              </div>
              <div className={styles.eventInfo}>
                <h3 style={{ margin: 0 }}>Sunday Sunrise Run</h3>
                <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Eco Park, Patna | 6:00 AM</p>
              </div>
              <span className={styles.eventTag}>Free</span>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.eventDay}>18</span>
                <span className={styles.eventMonth}>AUG</span>
              </div>
              <div className={styles.eventInfo}>
                <h3 style={{ margin: 0 }}>Trek Prep: Gear Workshop</h3>
                <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Drifter HQ | 4:00 PM</p>
              </div>
              <span className={styles.eventTag}>RSVP</span>
            </div>
          </div>
        </div>
      </section>

      {/* No Excuses (FAQ) */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-forest text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>No Excuses. Just Answers.</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Do I need to be an athlete?</h3>
              <p>No. Our experiences are built for anyone willing to step out. We prep you before the drop.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is it safe?</h3>
              <p>100% safety record. We partner exclusively with certified mountain guides and never cut corners.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>I don't know anyone.</h3>
              <p>Perfect. 80% of our tribe joins solo. By day 2, you'll be sharing life stories over a campfire.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What about gear?</h3>
              <p>We provide a comprehensive checklist and help you rent or buy gear through our local partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Trail Feed */}
      <InstagramSection />


      {/* Social Proof Strip */}
      <section className={styles.socialProof}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>300+</h3>
              <p>Tribe Members</p>
            </div>
            <div className={styles.statItem}>
              <h3>150+</h3>
              <p>On The Waitlist</p>
            </div>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>Safety Record</p>
            </div>
          </div>
          <blockquote className={styles.quote}>
            "You don't need experience. You need the right group. Drifter gave me that."
            <footer>— A recent Drifter</footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
