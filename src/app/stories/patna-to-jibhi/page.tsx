import Link from 'next/link';

export const metadata = {
  title: 'Patna to Jibhi: Complete Offbeat Himachal Backpacking Guide for 2026 | Drifter',
  description: 'Planning a Patna to Jibhi trip? Complete 2026 offbeat guide covering Aut transit, Jalori Pass, Serolsar Lake, Shoja stays, budgets & packing.',
};

export default function PatnaToJibhiPage() {
  return (
    <article className="section" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-main)', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>

        {/* HERO HEADER */}
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'var(--color-amber)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            padding: '0.3rem 0.8rem',
            borderRadius: '4px',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            OFFBEAT HIMACHAL • 2026 BACKPACKING GUIDE
          </span>
          <h1 className="text-forest" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.15', marginBottom: '1.2rem', fontFamily: 'var(--font-display)' }}>
            Patna to Jibhi: Complete Offbeat Himachal Backpacking Guide for 2026
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '720px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
            Routes via Delhi/Chandigarh, Aut Tunnel Transfers, Jalori Pass, Serolsar Lake, Shoja Stays & Budgets for Bihar Travellers.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            <span>📍 By Drifter Captain Crew</span>
            <span>•</span>
            <span>⏱️ 11 Min Read</span>
            <span>•</span>
            <span>🌲 Field Tested in Tirthan Valley</span>
          </div>
        </header>

        {/* FEATURED BANNER IMAGE */}
        <div style={{
          height: '420px',
          width: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1757234891950-543e358697ee?q=80&w=1073&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '3rem',
          border: '1px solid rgba(255,69,0,0.2)'
        }}></div>

        {/* ARTICLE INTRO */}
        <section style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-forest)', marginBottom: '1.2rem' }}>
            Not every Himachal trip needs Manali, Mall Road, and a packed itinerary.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            If your idea of a mountain getaway involves quiet pine forest trails, wooden stream-side chalets, artisanal coffee, and slow evenings instead of honking traffic and commercial souvenir stalls, Jibhi might be the place.
          </p>
          <p>
            Tucked inside the Tirthan and Seraj valleys of Kullu district, Jibhi has quietly emerged as one of the best offbeat alternatives for backpackers from Bihar. Looking for a quieter alternative to Manali? A <strong>Patna to Jibhi</strong> journey takes you across roughly 1,150 kilometers of rail and mountain bus routes into a world where life moves at the pace of the Tirthan River.
          </p>
        </section>

        {/* QUICK ANSWER BOX */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--color-amber)' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Quick Answer: Patna to Jibhi Travel Essentials
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', fontSize: '0.98rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Distance & Time:</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>~1,150–1,220 km (20 to 23 hours total travel time via Delhi/Chandigarh).</span>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Recommended Days:</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>4 to 6 Days (Allows 2 days transit + 3 to 4 full days in Jibhi & Shoja).</span>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Approximate Budget:</strong><br />
              <span style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>₹7,500 – ₹13,500 per head</span> (Budget backpacking 5-day trip).
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Best Seasons:</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>March–June (Spring/Summer) & Oct–Nov (Autumn Views).</span>
            </div>
          </div>
        </section>

        {/* ROUTES COMPARISON */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Patna to Jibhi: Best Routes & Transport Options
          </h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(11,26,20,0.15)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-forest)', color: '#FFF', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Route Option</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Transport Combination</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Approx. Time</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Cost Level</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { route: '1. Patna → Delhi → Aut → Jibhi', trans: 'Rajdhani Train + Volvo Bus', time: '21–23 hrs', cost: 'Budget to Mid', best: 'Best overall balance & seat availability' },
                  { route: '2. Patna → Chandigarh → Aut → Jibhi', trans: 'Express Rail + HRTC Bus', time: '19–21 hrs', cost: 'Budget', best: 'Shorter mountain bus ride' },
                  { route: '3. Patna → Flight to Kullu (KUU)', trans: 'Flight (PAT-DEL-KUU) + Cab', time: '6–7 hrs', cost: 'High', best: 'Short timelines & flexible budget' },
                ].map((r, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(11,26,20,0.08)', backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(11,26,20,0.02)' }}>
                    <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold', color: 'var(--color-forest)' }}>{r.route}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{r.trans}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{r.time}</td>
                    <td style={{ padding: '0.8rem 1rem', color: 'var(--color-amber)', fontWeight: 'bold' }}>{r.cost}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AUT TO JIBHI */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
            How to Reach Jibhi from Aut Tunnel (The Final Leg)
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
            Aut Tunnel is the key drop-off point on the Delhi-Manali highway for all Jibhi & Tirthan bound travellers.
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Local HRTC Bus (Cheapest):</strong> Catch a local HRTC bus going towards Banjar / Anni from the Aut drop point. <em>Fare: ~₹50–₹80 | Time: 1h 30m.</em>
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Private / Shared Taxi:</strong> Taxis wait right outside the Aut drop point. <em>Private Taxi: ~₹1,000–₹1,500 per cab | Shared: ~₹250–₹400 per seat | Time: 1 hour.</em>
            </li>
          </ul>
        </section>

        {/* SAMPLE ITINERARIES */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            How Many Days Are Enough? (Sample Itineraries)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-amber)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>🌲 4-Day Essential Jibhi Escape</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>Day 1:</strong> Morning train from Patna to Delhi, overnight AC Volvo bus to Aut. <br />
                <strong>Day 2:</strong> Reach Jibhi by 9:30 AM, homestay check-in, pine forest walk to Jibhi Waterfall, stream-side cafe hopping. <br />
                <strong>Day 3:</strong> Drive 12 km to Jalori Pass (10,800 ft), 5 km forest trek to sacred Serolsar Lake, evening campfire. <br />
                <strong>Day 4:</strong> Morning walk in Shoja village meadows, afternoon bus back from Aut Tunnel to Delhi. <br />
                <strong>Day 5:</strong> Arrive Delhi morning, return train back to Patna.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-forest)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>🏔️ 5-Day Jibhi + Shoja + Tirthan Valley Circuit</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Adds high-ridge homestays in <strong>Shoja village</strong>, Raghupur Fort 360-degree peak trek, and Chehni Kothi 1,500-year-old fort walks.
              </p>
            </div>
          </div>
        </section>

        {/* JIBHI VS MANALI */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Jibhi vs Manali: Which One Should You Choose?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-amber)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-amber)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>Jibhi</h3>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Quiet wooden village, slow travel, streamside chalets, forest walks, artisan coffee, minimal commercial crowds.
              </p>
              <strong>Best For:</strong> Backpackers, digital nomads, couples, and nature lovers seeking peace.
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-forest)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>Manali</h3>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Commercial mountain hub, busy Mall Road markets, active nightlife, Solang snow sports, high hotel capacity.
              </p>
              <strong>Best For:</strong> Families, commercial shoppers, and nightlife seekers.
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
            Frequently Asked Questions (FAQs)
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q1: How do I reach Jibhi from Patna?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Take a train or flight from Patna to Delhi/Chandigarh. Board an overnight AC Volvo bus to Aut Tunnel. Take a local bus or cab from Aut to Jibhi (27 km / 1 hr 15 mins).
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q2: How many days are enough for Jibhi?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>4 Days</strong> (including transit) is sufficient for a quick Jibhi, Jibhi Waterfall, and Jalori Pass trip. <strong>6 Days</strong> allows a full Jibhi, Shoja, and Serolsar Lake circuit.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q3: How much does a Jibhi trip from Patna cost?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                A budget backpacking trip costs between <strong>₹6,100 and ₹11,100 per person</strong>, while a mid-range trip with wooden homestays costs <strong>₹13,200 – ₹23,300</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* CONCLUSION & DRIFTER BRAND CTA */}
        <section style={{
          backgroundColor: 'var(--color-forest)',
          color: '#FFF',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--color-amber)', marginBottom: '1rem' }}>
            Trade City Noise For Mountain Streams
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 1.5rem', opacity: 0.9, lineHeight: '1.6' }}>
            Maybe you don't need another crowded tourist destination. Maybe you just need a small mountain village, a good café, a few quiet trails, and a weekend that doesn't feel like every other weekend.
          </p>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-amber)' }}>
            That's the kind of travel we're interested in at Drifter.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/expeditions/sojha-offbeat-cafe" className="btn btn-primary" style={{ backgroundColor: 'var(--color-amber)', borderColor: 'var(--color-amber)', color: '#FFF' }}>
              EXPLORE MORE OFFBEAT ADVENTURES WITH DRIFTER →
            </Link>
            <a 
              href="https://wa.me/917978578168?text=Hey!%20I%20read%20the%20Jibhi%20guide%20and%20want%20to%20join%20the%20Drifter%20tribe!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ color: '#FFF', borderColor: '#FFF' }}
            >
              💬 CHAT WITH TRIP CAPTAINS ON WHATSAPP
            </a>
          </div>
        </section>

      </div>
    </article>
  );
}
