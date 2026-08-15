'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './DrifterTripsSection.module.css';

export default function DrifterTripsSection() {
  const [upcomingModalTrip, setUpcomingModalTrip] = useState<string | null>(null);

  return (
    <section className={styles.sectionWrapper}>
      <div className="container">

        {/* ================================================== */}
        {/* SECTION 01 — LIVE EXPERIENCES (HAPPENING NOW) */}
        {/* ================================================== */}
        <div className={styles.sectionHeader}>
          <span className={styles.headlineLabel}>SECTION 01 — HAPPENING NOW</span>
          <h2 className={styles.mainHeadline}>HAPPENING NOW.</h2>
          <p className={styles.subHeadline}>
            “Some weekends are planned. Some become stories.”
          </p>
        </div>

        <div className={styles.liveGrid}>
          {/* HERO TRIP — POKHARA PARTY × SECRET TREK (1.5-2x visually larger) */}
          <Link 
            href="/expeditions/pokhara-party-secret-trek" 
            className={`${styles.tripCard} ${styles.heroCard}`}
          >
            <div className={styles.badgeGroup}>
              <span className={styles.statusBadge}>LIVE NOW</span>
            </div>
            <div className={styles.cardImageWrapper}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
              ></div>

            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                POKHARA PARTY<br />× SECRET TREK
              </h3>
              <p className={styles.primaryHook}>
                “Party before bed. Disappear into the mountains at sunrise.”
              </p>
              <p className={styles.secondaryCopy}>
                “Lakeshore club hopping, offbeat artisanal cafes, party before bed, then deep calm on an offbeat trek.”
              </p>
              <p className={styles.mysteriousLine}>
                “4 Days / 3 Nights of pure contrast: loud nights & quiet mountains.”
              </p>

              <div className={styles.cardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Batches</span>
                  <span className={styles.metaValue}>Sep 11-14 | Sep 18-21</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>4 Days / 3 Nights</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Starting Price</span>
                  <span className={styles.metaValue}>₹10,998</span>
                </div>
              </div>

              <span className={styles.ctaLink}>CHOOSE YOUR BATCH →</span>

            </div>
          </Link>

          {/* SECOND LIVE TRIP — NETARHAT CAMPING */}
          <Link 
            href="/expeditions/netarhat-camping" 
            className={`${styles.tripCard} ${styles.secondaryCard}`}
          >
            <div className={styles.badgeGroup}>
              <span className={styles.statusBadge}>LIVE NOW</span>
            </div>
            <div className={styles.cardImageWrapper}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1662702641221-aa0149a2806f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
              ></div>

            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                NETARHAT CAMPING
              </h3>
              <p className={styles.primaryHook}>
                “The ultimate 2D/1N weekend getaway into the pine forests.”
              </p>
              <p className={styles.secondaryCopy}>
                “Wilderness camping, pine forest air, campfire BBQ, and Magnolia Point sunrise.”
              </p>

              <div className={styles.cardMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Batches</span>
                  <span className={styles.metaValue}>Sep 12-13 | Sep 26-27</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>2 Days / 1 Night</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Starting Price</span>
                  <span className={styles.metaValue}>₹3,999</span>
                </div>
              </div>



              <span className={styles.ctaLink}>SEE THE WEEKEND →</span>
            </div>
          </Link>
        </div>


        {/* ================================================== */}
        {/* SECTION 02 — UPCOMING (YOUR NEXT BAD DECISION) */}
        {/* ================================================== */}
        <div className={styles.sectionHeader} style={{ marginTop: '4rem' }}>
          <span className={styles.headlineLabel}>SECTION 02 — UPCOMING EXPERIENCES</span>
          <h2 className={styles.mainHeadline}>YOUR NEXT BAD DECISION.</h2>
          <p className={styles.subHeadline}>
            “Pick a weekend. We'll give you a story.”
          </p>
        </div>

        <div className={styles.upcomingGrid}>
          {/* UPCOMING 01 — FEATURED ROHTASGARH FORT */}
          <div 
            onClick={() => setUpcomingModalTrip('ROHTASGARH FORT × CAMPING')} 
            className={`${styles.tripCard} ${styles.featuredUpcoming}`}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.badgeGroup}>
              <span className={`${styles.statusBadge} ${styles.upcomingBadge}`}>COMING SOON</span>
            </div>
            <div className={styles.cardImageWrapper} style={{ height: '260px' }}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1682517885754-04bb5fbaf2bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
              ></div>

            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ROHTASGARH FORT × CAMPING</h3>
              <p className={styles.primaryHook}>“An old fort. A bunch of strangers. One night under the stars.”</p>
              <p className={styles.secondaryCopy}>“Hike up ancient limestone cliffs, pitch your tent inside historic ruins, and watch the valley sunset over the Son river.”</p>
              <p className={styles.mysteriousLine}>“You probably haven't camped here before.”</p>

              <span className={styles.ctaLink}>COMING SOON 🔒</span>
            </div>
          </div>

          {/* UPCOMING 02 — KASOL PARTY × TREKKING */}
          <div 
            onClick={() => setUpcomingModalTrip('KASOL PARTY × TREKKING')} 
            className={styles.tripCard}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.badgeGroup}>
              <span className={`${styles.statusBadge} ${styles.upcomingBadge}`}>COMING SOON</span>
            </div>
            <div className={styles.cardImageWrapper} style={{ height: '220px' }}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1662944113366-123561a844e1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
              ></div>

            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>KASOL PARTY × TREKKING</h3>
              <p className={styles.primaryHook}>“Go for the party. Stay for the mountains.”</p>
              <p className={styles.mysteriousLine}>“Somewhere between the bass and the trail, things get interesting.”</p>

              <span className={styles.ctaLink}>COMING SOON 🔒</span>
            </div>
          </div>

          {/* UPCOMING 03 — SOJHA OFFBEAT × CAFÉ */}
          <div 
            onClick={() => setUpcomingModalTrip('SOJHA OFFBEAT × CAFÉ')} 
            className={styles.tripCard}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.badgeGroup}>
              <span className={`${styles.statusBadge} ${styles.upcomingBadge}`}>COMING SOON</span>
            </div>
            <div className={styles.cardImageWrapper} style={{ height: '220px' }}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1757234891950-543e358697ee?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
              ></div>

            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>SOJHA OFFBEAT × CAFÉ</h3>
              <p className={styles.primaryHook}>“Not another Himachal checklist.”</p>
              <p className={styles.mysteriousLine}>“A slower mountain, a tiny café and a place most people scroll past.”</p>

              <span className={styles.ctaLink}>COMING SOON 🔒</span>
            </div>
          </div>

          {/* UPCOMING 04 — SANDAKPHU TREK */}
          <div 
            onClick={() => setUpcomingModalTrip('SANDAKPHU TREK')} 
            className={styles.tripCard}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.badgeGroup}>
              <span className={`${styles.statusBadge} ${styles.upcomingBadge}`}>COMING SOON</span>
            </div>
            <div className={styles.cardImageWrapper} style={{ height: '220px' }}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584884789751-68dd2836ada1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
              ></div>

            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>SANDAKPHU TREK</h3>
              <p className={styles.primaryHook}>“Four days. One ridiculous view.”</p>
              <p className={styles.mysteriousLine}>“Wake up above the clouds. Then question every decision that got you there.”</p>

              <span className={styles.ctaLink}>COMING SOON 🔒</span>
            </div>
          </div>
        </div>


        {/* ================================================== */}
        {/* SECTION 03 — THE MYSTERY CARD */}
        {/* ================================================== */}
        <div className={styles.mysteryCard}>
          <span className={styles.mysteryTag}>THERE'S MORE COMING</span>
          <p className={styles.mysterySub}>“We're not telling you everything yet.”</p>
          <h2 className={styles.mysteryTitle}>YOU'LL HAVE TO STAY CLOSE.</h2>
          <br />
          <a 
            href="https://wa.me/917978578168?text=Hey!%20Add%20me%20to%20the%20Drifter%20VIP%20drop%20list!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.mysteryBtn}
          >
            JOIN THE TRIBE →
          </a>
        </div>


        {/* ================================================== */}
        {/* SECTION 04 — BRAND CTA */}
        {/* ================================================== */}
        <div className={styles.brandCtaBox}>
          <h2 className={styles.brandHeadline}>
            STOP PLANNING<br />BORING WEEKENDS.
          </h2>
          <p className={styles.brandSub}>
            “Your next story is probably already on the calendar.”
          </p>
          <a 
            href="https://wa.me/917978578168?text=Hey!%20I%20want%20to%20join%20the%20Drifter%20community!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.brandBtn}
          >
            JOIN DRIFTER →
          </a>
        </div>

      </div>

      {/* COMING SOON MODAL */}
      {upcomingModalTrip && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(11, 26, 20, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setUpcomingModalTrip(null)}
        >
          <div 
            style={{
              backgroundColor: 'var(--color-bg-primary)',
              border: '2px solid var(--color-amber)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              maxWidth: '500px',
              width: '100%',
              position: 'relative',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setUpcomingModalTrip(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1.2rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--color-forest)',
                lineHeight: 1
              }}
            >
              ✕
            </button>

            <span style={{
              display: 'inline-block',
              backgroundColor: '#FF4500',
              color: '#FFFFFF',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              padding: '0.2rem 0.6rem',
              borderRadius: '4px',
              marginBottom: '1rem',
              letterSpacing: '0.08em'
            }}>
              DROP ANNOUNCEMENT PENDING 🔒
            </span>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-forest)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
              {upcomingModalTrip}
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.5', marginBottom: '2rem' }}>
              We don't open registrations or release itineraries until the captain crew locks down the vibe, offbeat stay & trail routes. Join our WhatsApp waitlist to get early notification when this drop goes LIVE!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a 
                href={`https://wa.me/917978578168?text=${encodeURIComponent(`Hey! Notify me when ${upcomingModalTrip} drop goes LIVE!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                💬 JOIN WHATSAPP EARLY ACCESS
              </a>
              <a 
                href="tel:+917978578168"
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                📞 CALL SUPPORT (+91 79785 78168)
              </a>
              <a 
                href="https://www.instagram.com/thedrifter.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                📸 FOLLOW @thedrifter.club
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
