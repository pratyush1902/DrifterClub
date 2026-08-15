'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DetailedTrip } from '@/data/trips';
import styles from './TripDetailView.module.css';

interface TripDetailViewProps {
  trip: DetailedTrip;
}

export default function TripDetailView({ trip }: TripDetailViewProps) {
  // State for itinerary expand/collapse
  const [openDay, setOpenDay] = useState<number | null>(0); // First day open by default

  // State for selected batch
  const [selectedBatch, setSelectedBatch] = useState<string>(trip.availableBatches ? trip.availableBatches[0] : '');

  // State for FAQ expand/collapse
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  // State for registration modal/form
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDay = (idx: number) => {
    setOpenDay(openDay === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setFormSubmitted(true);

    const messageText = `Hi Drifter! I want to join the drop:\n🔥 *Trip:* ${trip.title}${selectedBatch ? `\n📅 *Batch:* ${selectedBatch}` : ''}\n👤 *Name:* ${name}\n📱 *Phone:* ${phone}${email ? `\n✉️ *Email:* ${email}` : ''}\n\nPlease reserve my spot!`;
    const waUrl = `https://wa.me/917978578168?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
  };

  const scrollToRegistration = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.pageContainer}>
      {/* ================================================== */}
      {/* 1. HERO SECTION */}
      {/* ================================================== */}
      <section className={styles.hero} style={{ backgroundImage: `url(${trip.imageUrl})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>DRIFTER EXPERIENCE</span>
          <h1 className={styles.heroTitle}>{trip.title}</h1>
          <p className={styles.heroHook}>“{trip.hook}”</p>

          <div className={styles.metaStrip}>
            <span>📍 <strong>Destination:</strong> {trip.location}</span>
            {trip.availableBatches ? (
              <span>🗓 <strong>Open Batches:</strong> {trip.availableBatches.join(' • ')}</span>
            ) : (
              <span>📅 <strong>Date:</strong> {trip.date}</span>
            )}
            <span>⏱ <strong>Duration:</strong> {trip.duration}</span>
            <span>👥 <strong>Group:</strong> {trip.groupSize}</span>
            <span>💰 <strong>Starting Price:</strong> {trip.startingPrice}</span>
            <span>📞 <strong>Helpline:</strong> <a href="tel:+917978578168" style={{ color: 'var(--color-amber)', textDecoration: 'none', fontWeight: 'bold' }}>+91 79785 78168</a></span>
          </div>


          <div className={styles.heroActions}>
            <button onClick={scrollToRegistration} className={styles.primaryCta}>
              JOIN THIS ADVENTURE →
            </button>
            <a href="tel:+917978578168" className={styles.secondaryCta}>
              📞 CALL +91 79785 78168
            </a>
            <a href="#experience" className={styles.secondaryCta}>
              I'M CURIOUS →
            </a>
          </div>

          <p className={styles.soloNote}>
            “Going solo? Don't worry. Most people join us without knowing everyone.”
          </p>
        </div>
      </section>


      {/* ================================================== */}
      {/* 2. EXPERIENCE INTRO */}
      {/* ================================================== */}
      <section id="experience" className={styles.editorialSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>THIS ISN'T JUST A TRIP.</h2>
          <p className={styles.introCopy}>
            “You're not signing up for a bus ride and an itinerary. You're signing up for a weekend filled with new people, unexpected plans, ridiculous conversations, tired legs, inside jokes and stories you'll still be talking about months later.”
          </p>

          <div className={styles.editorialStatement}>
            COME FOR THE DESTINATION.<br />
            STAY FOR THE PEOPLE.
          </div>
        </div>
      </section>


      {/* ================================================== */}
      {/* 3. WHAT'S INCLUDED */}
      {/* ================================================== */}
      <section className="section bg-secondary" style={{ borderTop: '1px solid rgba(27, 59, 54, 0.1)' }}>
        <div className="container">
          <h2 className={styles.sectionHeading} style={{ textAlign: 'center' }}>WHAT YOU'RE GETTING</h2>

          <div className={styles.inclusionsGrid}>
            <div className={styles.inclusionCard}>
              <span className={styles.inclusionIcon}>🚍</span>
              <h3 className={styles.inclusionTitle}>PATNA → PATNA TRANSPORT</h3>
              <p className={styles.inclusionDesc}>
                Round-trip transportation from Patna to Patna. No complicated transport planning. We handle the journey.
              </p>
            </div>

            <div className={styles.inclusionCard}>
              <span className={styles.inclusionIcon}>🏕</span>
              <h3 className={styles.inclusionTitle}>TRIPLE-SHARING STAY</h3>
              <p className={styles.inclusionDesc}>
                Comfortable accommodation on a triple-sharing basis in verified mountain lodges or wilderness campsites.
              </p>
            </div>

            <div className={styles.inclusionCard}>
              <span className={styles.inclusionIcon}>🍳</span>
              <h3 className={styles.inclusionTitle}>BREAKFAST</h3>
              <p className={styles.inclusionDesc}>
                Fresh, hot breakfast included during the trip as mentioned in the planned itinerary.
              </p>
            </div>

            <div className={styles.inclusionCard}>
              <span className={styles.inclusionIcon}>🍽</span>
              <h3 className={styles.inclusionTitle}>DINNER</h3>
              <p className={styles.inclusionDesc}>
                Hearty trail dinners and campfire meals included as mentioned in the itinerary.
              </p>
            </div>

            <div className={styles.inclusionCard}>
              <span className={styles.inclusionIcon}>🧭</span>
              <h3 className={styles.inclusionTitle}>EXPERIENCED TRIP CAPTAIN</h3>
              <p className={styles.inclusionDesc}>
                An experienced Drifter Trip Captain will be with the group throughout the journey to keep the vibe high and handle logisitics.
              </p>
            </div>

            <div className={styles.inclusionCard}>
              <span className={styles.inclusionIcon}>📸</span>
              <h3 className={styles.inclusionTitle}>MEMORIES</h3>
              <p className={styles.inclusionDesc}>
                The trip isn't complete when you return home. Expect photos, unscripted moments, inside jokes and stories you'll keep.
              </p>
            </div>
          </div>

          <div className={styles.surpriseBox}>
            <h3 className={styles.surpriseTitle}>🎁 A LITTLE SOMETHING FROM US</h3>
            <p className={styles.surpriseText}>
              “It's small. It's useful. And it's our way of saying welcome to the tribe.”
            </p>
          </div>
        </div>
      </section>


      {/* ================================================== */}
      {/* 4. WHAT'S NOT INCLUDED */}
      {/* ================================================== */}
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 className={styles.sectionHeading} style={{ textAlign: 'center' }}>WHAT'S NOT INCLUDED</h2>
          <div className={styles.exclusionsBox}>
            <p className={styles.exclusionStatement}>
              “Anything not specifically mentioned in the inclusions above is not included in the trip price.”
            </p>

            <ul className={styles.exclusionList}>
              {trip.exclusions && trip.exclusions.length > 0 ? (
                trip.exclusions.map((ex, idx) => (
                  <li key={idx} className={styles.exclusionItem}>
                    <span className={styles.exclusionCross}>✕</span>
                    <span>{ex}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className={styles.exclusionItem}><span className={styles.exclusionCross}>✕</span> Personal expenses & shopping</li>
                  <li className={styles.exclusionItem}><span className={styles.exclusionCross}>✕</span> Lunches & personal trail snacks</li>
                  <li className={styles.exclusionItem}><span className={styles.exclusionCross}>✕</span> Additional individual activities</li>
                  <li className={styles.exclusionItem}><span className={styles.exclusionCross}>✕</span> Expenses caused by personal changes or travel delays</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>


      {/* ================================================== */}
      {/* 5. THE DRIFTER DIFFERENCE */}
      {/* ================================================== */}
      <section className={styles.differenceSection}>
        <div className="container">
          <h2 className={styles.sectionHeading} style={{ color: '#FFFFFF' }}>YOU'RE NOT JOINING A TOUR.</h2>
          <p className={styles.introCopy} style={{ color: 'rgba(244,240,230,0.85)' }}>
            “You're joining a group of people who probably didn't know each other a week ago.”
          </p>

          <div className={styles.diffStatements}>
            <div className={styles.diffPill}>STRANGERS → CREW</div>
            <div className={styles.diffPill}>WEEKEND → STORY</div>
            <div className={styles.diffPill}>TRIP → COMMUNITY</div>
          </div>

          <p className={styles.introCopy} style={{ color: 'rgba(244,240,230,0.75)', fontSize: '1.05rem' }}>
            “Some people come for the trek. Some come for the party. Some come because they were tired of doing weekends alone. Most leave with new people in their lives.”
          </p>
        </div>
      </section>


      {/* ================================================== */}
      {/* 6. EXPERIENCE FLOW OR ITINERARY */}
      {/* ================================================== */}
      {trip.experienceFlow && trip.experienceFlow.length > 0 ? (
        <section className="section">
          <div className="container" style={{ maxWidth: '960px' }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
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
                NO BORING MINUTE-BY-MINUTE SCHEDULES
              </span>
              <h2 className={styles.sectionHeading} style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
                THE {trip.duration.split('/')[0].trim().toUpperCase()} VIBE FLOW
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
                We don't do rigid itineraries. Here is what your {trip.duration} journey actually feels like.
              </p>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {trip.experienceFlow.map((vibe, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--color-bg-secondary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    border: '1px solid rgba(11, 26, 20, 0.08)',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: '1.5rem',
                    alignItems: 'start'
                  }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    background: 'var(--color-forest)',
                    color: '#FFF',
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {vibe.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-amber)', letterSpacing: '0.1em', display: 'block', marginBottom: '0.3rem' }}>
                      {vibe.vibeTag}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--color-forest)', margin: '0 0 0.3rem 0' }}>
                      {vibe.title}
                    </h3>
                    <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)', marginBottom: '0.6rem' }}>
                      {vibe.tagline}
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
                      {vibe.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : trip.itinerary && trip.itinerary.length > 0 ? (
        <section className="section">
          <div className="container" style={{ maxWidth: '860px' }}>
            <h2 className={styles.sectionHeading} style={{ textAlign: 'center' }}>HOW THE ADVENTURE UNFOLDS</h2>

            <div className={styles.timeline}>
              {trip.itinerary.map((day, idx) => {
                const isOpen = openDay === idx;
                return (
                  <div key={idx} className={styles.timelineCard}>
                    <div className={styles.timelineHeader} onClick={() => toggleDay(idx)}>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-amber)', fontWeight: 'bold', letterSpacing: '0.1em' }}>
                          {day.day} • {day.time}
                        </span>
                        <h3 className={styles.timelineDayTitle}>{day.title}</h3>
                      </div>
                      <span className={styles.timelineToggleIcon}>{isOpen ? '−' : '+'}</span>
                    </div>

                    {isOpen && (
                      <div className={styles.timelineBody}>
                        <p className={styles.timelineActivity}>{day.activity}</p>
                        <div className={styles.timelineMeta}>
                          <span>🍽 <strong>Meals:</strong> {day.meals}</span>
                          <span>🏨 <strong>Stay:</strong> {day.stay}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}



      {/* ================================================== */}
      {/* 7. TRIP DETAILS (SPECS GRID) */}
      {/* ================================================== */}
      <section className="section bg-secondary" style={{ borderTop: '1px solid rgba(27, 59, 54, 0.1)' }}>
        <div className="container">
          <h2 className={styles.sectionHeading} style={{ textAlign: 'center' }}>TRIP DETAILS</h2>

          <div className={styles.specsGrid}>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>STARTING POINT</span>
              <span className={styles.specValue}>{trip.startingPoint || 'Patna'}</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>ENDING POINT</span>
              <span className={styles.specValue}>{trip.endingPoint || 'Patna'}</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>STAY</span>
              <span className={styles.specValue}>{trip.stayType || 'Triple Sharing'}</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>TRANSPORT</span>
              <span className={styles.specValue}>{trip.transportType || 'Group Transportation'}</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>MEALS</span>
              <span className={styles.specValue}>{trip.mealsInfo || 'Breakfast + Dinner'}</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>TRIP CAPTAIN</span>
              <span className={styles.specValue}>Experienced Drifter Captain</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>GROUP SIZE</span>
              <span className={styles.specValue}>{trip.groupSize || '12-16 Drifters'}</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>DIFFICULTY</span>
              <span className={styles.specValue}>{trip.difficulty || 'Moderate'}</span>
            </div>
            <div className={styles.specCard}>
              <span className={styles.specLabel}>DURATION</span>
              <span className={styles.specValue}>{trip.duration}</span>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================== */}
      {/* 8. WHO IS THIS FOR? */}
      {/* ================================================== */}
      <section className="section">
        <div className="container">
          <div className={styles.forGrid}>
            {/* YOU'LL PROBABLY LOVE THIS IF... */}
            <div className={styles.loveCard}>
              <h3 className={`${styles.forTitle} ${styles.loveTitle}`}>YOU'LL PROBABLY LOVE THIS IF...</h3>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><span className={styles.greenCheck}>✓</span> You love trekking.</li>
                <li className={styles.checkItem}><span className={styles.greenCheck}>✓</span> You'd rather explore than sit at home.</li>
                <li className={styles.checkItem}><span className={styles.greenCheck}>✓</span> You enjoy meeting new people.</li>
                <li className={styles.checkItem}><span className={styles.greenCheck}>✓</span> You're into backpacking.</li>
                <li className={styles.checkItem}><span className={styles.greenCheck}>✓</span> You want more active weekends.</li>
                <li className={styles.checkItem}><span className={styles.greenCheck}>✓</span> You don't need your entire friend group to join before you go.</li>
                <li className={styles.checkItem}><span className={styles.greenCheck}>✓</span> You're okay with a little chaos.</li>
              </ul>
            </div>

            {/* YOU MIGHT NOT LOVE THIS IF... */}
            <div className={styles.notLoveCard}>
              <h3 className={`${styles.forTitle} ${styles.notLoveTitle}`}>YOU MIGHT NOT LOVE THIS IF...</h3>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><span className={styles.redCross}>✕</span> You expect a luxury resort vacation.</li>
                <li className={styles.checkItem}><span className={styles.redCross}>✕</span> You hate walking.</li>
                <li className={styles.checkItem}><span className={styles.redCross}>✕</span> You want every minute planned perfectly.</li>
                <li className={styles.checkItem}><span className={styles.redCross}>✕</span> You don't like meeting new people.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================== */}
      {/* 9. THE COMMUNITY (WHO'S COMING?) */}
      {/* ================================================== */}
      {trip.participantCount && (
        <section className="section bg-secondary">
          <div className="container" style={{ maxWidth: '640px' }}>
            <div className={styles.communityBox}>
              <h2 className={styles.sectionHeading} style={{ fontSize: '2.2rem', marginBottom: '0.4rem' }}>WHO'S COMING?</h2>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-amber)' }}>
                “{trip.participantCount} Drifters are already in.”
              </p>

              {trip.drifterAvatars && trip.drifterAvatars.length > 0 && (
                <div className={styles.avatarStrip}>
                  {trip.drifterAvatars.map((img, idx) => (
                    <div key={idx} className={styles.avatar} style={{ backgroundImage: `url(${img})` }}></div>
                  ))}
                </div>
              )}

              <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', margin: '1rem 0' }}>
                “Going solo? Perfect. Most Drifters don't know everyone before the trip.”
              </p>

              <button onClick={scrollToRegistration} className={styles.primaryCta} style={{ marginTop: '0.5rem' }}>
                I'M IN →
              </button>
            </div>
          </div>
        </section>
      )}


      {/* ================================================== */}
      {/* 10. FOMO EXPERIENCE SECTION */}
      {/* ================================================== */}
      <section className={styles.fomoSection}>
        <div className="container">
          <h2 className={styles.fomoTitle}>
            YOU'LL FORGET THE ITINERARY.<br />
            YOU WON'T FORGET THE PEOPLE.
          </h2>
          <p className={styles.fomoText}>
            “The bus ride. The random 2 AM conversation. The person you met on Day 1. The joke nobody else understands. The photo you didn't know was being taken. That's the stuff we actually care about.”
          </p>
        </div>
      </section>


      {/* ================================================== */}
      {/* 11. FAQ ACCORDION */}
      {/* ================================================== */}
      {trip.faqs && trip.faqs.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className={styles.sectionHeading} style={{ textAlign: 'center' }}>FREQUENTLY ASKED QUESTIONS</h2>

            <div className={styles.faqList}>
              {trip.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={styles.faqItem}>
                    <div className={styles.faqQuestion} onClick={() => toggleFaq(idx)}>
                      <span>{faq.question}</span>
                      <span style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>{isOpen ? '−' : '+'}</span>
                    </div>
                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p style={{ margin: 0 }}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* ================================================== */}
      {/* 12. FINAL CTA */}
      {/* ================================================== */}
      <section className={styles.finalCtaBox}>
        <div className="container">
          <h2 className={styles.sectionHeading} style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>READY TO DRIFT?</h2>
          <p className={styles.introCopy} style={{ marginBottom: '2rem' }}>
            “Your next story is probably one decision away.”
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToRegistration} className={styles.primaryCta}>
              JOIN THE ADVENTURE →
            </button>
            <a href="tel:+917978578168" className={styles.secondaryCta} style={{ color: 'var(--color-forest)', borderColor: 'var(--color-forest)' }}>
              📞 CALL +91 79785 78168
            </a>
            <a href={`https://wa.me/917978578168?text=${encodeURIComponent(`Hi Drifter! I have a question about ${trip.title}`)}`} target="_blank" rel="noopener noreferrer" className={styles.secondaryCta} style={{ color: 'var(--color-forest)', borderColor: 'var(--color-forest)' }}>
              💬 WHATSAPP US →
            </a>
          </div>

          <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--color-amber)', marginTop: '1.2rem' }}>
            “{trip.spots || 'Limited spots available.'}”
          </p>
        </div>
      </section>


      {/* ================================================== */}
      {/* 13. TRUST / SAFETY & LEGAL */}
      {/* ================================================== */}
      <section className={styles.trustStrip}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>✓ EXPERIENCED TRIP CAPTAINS</div>
            <div className={styles.trustItem}>✓ CLEAR INCLUSIONS</div>
            <div className={styles.trustItem}>✓ TRANSPARENT PRICING</div>
            <div className={styles.trustItem}>✓ COMMUNITY-FIRST EXPERIENCES</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
            <span>📞 <strong>Call Support:</strong> <a href="tel:+917978578168" style={{ color: 'var(--color-amber)' }}>+91 79785 78168</a></span>
            <Link href="/community">Terms & Conditions</Link>
            <Link href="/community">Cancellation Policy</Link>
            <Link href="/community">Privacy Policy</Link>
            <Link href="/partnerships">Contact Us</Link>
          </div>
        </div>
      </section>


      {/* ================================================== */}
      {/* 14. MOBILE STICKY BOTTOM BAR */}
      {/* ================================================== */}
      <div className={styles.mobileStickyBar}>
        <div>
          <span className={styles.stickyPrice}>{trip.startingPrice}</span>
          <span style={{ fontSize: '0.75rem', opacity: 0.7, display: 'block' }}>per person</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a href="tel:+917978578168" className={styles.stickyBtn} style={{ background: 'var(--color-forest)', color: '#FFF', padding: '0.75rem 0.85rem' }} title="Call Support">
            📞
          </a>
          <button onClick={scrollToRegistration} className={styles.stickyBtn}>
            JOIN ADVENTURE →
          </button>
        </div>
      </div>


      {/* REGISTRATION MODAL / POPUP */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(7, 18, 14, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: 'var(--color-forest)',
            color: '#F4F0E6',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '480px',
            width: '100%',
            position: 'relative',
            border: '1.5px solid var(--color-amber)'
          }}>
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'none', border: 'none', color: '#FFF', fontSize: '1.4rem', cursor: 'pointer'
              }}
            >
              ✕
            </button>

            <h3 style={{ color: 'var(--color-amber)', fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: '0 0 0.3rem 0' }}>
              JOIN {trip.title}
            </h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '0.5rem' }}>
              Fill in your details below to request your spot on this drop.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-amber)', marginBottom: '1.2rem' }}>
              📞 Questions? Call or WhatsApp us directly at <a href="tel:+917978578168" style={{ color: '#FFF', fontWeight: 'bold', textDecoration: 'underline' }}>+91 79785 78168</a>
            </p>

            {formSubmitted ? (
              <div style={{ background: 'rgba(0,230,118,0.2)', border: '1px solid #00E676', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                🎉 <strong>You're Registered!</strong><br />Our Trip Captain will reach out on WhatsApp shortly.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {trip.availableBatches && trip.availableBatches.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--color-amber)', fontWeight: 'bold' }}>SELECT YOUR BATCH *</label>
                    <select
                      value={selectedBatch}
                      onChange={(e) => setSelectedBatch(e.target.value)}
                      style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', background: '#07120E', color: '#FFF' }}
                    >
                      {trip.availableBatches.map((batch, idx) => (
                        <option key={idx} value={batch}>{batch}</option>
                      ))}
                    </select>
                  </div>
                )}
                <input 
                  type="text" 
                  required 
                  placeholder="Full Name *" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#FFF' }}
                />
                <input 
                  type="tel" 
                  required 
                  placeholder="WhatsApp Number *" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#FFF' }}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#FFF' }}
                />

                <button type="submit" className={styles.primaryCta} style={{ width: '100%', marginTop: '0.5rem' }}>
                  SUBMIT REGISTRATION →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
