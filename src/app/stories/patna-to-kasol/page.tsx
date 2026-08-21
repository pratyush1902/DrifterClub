import Link from 'next/link';

export const metadata = {
  title: 'Patna to Kasol: Complete Backpacking Guide, Route, Cost & Itinerary for 2026 | Drifter',
  description: 'Planning a Patna to Kasol trip? Complete 2026 guide covering routes via Delhi/Chandigarh, Bhuntar bus transfers, Tosh treks, budgets & packing.',
  openGraph: {
    title: 'Patna to Kasol: Complete Backpacking Guide for 2026',
    description: 'Looking to travel from Patna to Kasol? Complete 2026 backpacking guide with train routes, Tosh treks, Parvati Valley cafes, and budgets.',
    url: 'https://www.drifter.buzz/stories/patna-to-kasol',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Patna to Kasol Himachal Backpacking Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patna to Kasol: Complete Backpacking Guide for 2026',
    description: 'Train routes, Bhuntar buses, Parvati valley cafes, Tosh treks, and budget breakdown from Patna.',
    images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function PatnaToKasolPage() {
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
            HIMACHAL EXPEDITION • 2026 BACKPACKING GUIDE
          </span>
          <h1 className="text-forest" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.15', marginBottom: '1.2rem', fontFamily: 'var(--font-display)' }}>
            Patna to Kasol: Complete Backpacking Guide, Route, Cost & Itinerary for 2026
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '720px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
            Routes via Delhi/Chandigarh, Bhuntar Bus Transfers, Tosh & Kheerganga Treks, Honest Budgets & Packing Tips for Bihar Backpackers.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            <span>📍 By Drifter Captain Crew</span>
            <span>•</span>
            <span>⏱️ 12 Min Read</span>
            <span>•</span>
            <span>🌲 Field Tested in Parvati Valley</span>
          </div>
        </header>

        {/* FEATURED BANNER IMAGE */}
        <div style={{
          height: '420px',
          width: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1662944113366-123561a844e1?q=80&w=1074&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '3rem',
          border: '1px solid rgba(255,69,0,0.2)'
        }}></div>

        {/* ARTICLE INTRO */}
        <section style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-forest)', marginBottom: '1.2rem' }}>
            Kasol isn't exactly around the corner from Patna. But for backpackers, that's part of the point.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            Travelling from the dusty plains of Bihar to the pine-scented air of Parvati Valley in Himachal Pradesh requires roughly 1,150 to 1,250 kilometers of travel across trains, Volvo buses, and mountain roads. It's not a lazy 2-hour domestic hop. Yet every month, hundreds of students, young professionals, and solo travellers set out from Patna Basecamp to make the journey to Kasol.
          </p>
          <p>
            Why? Because Kasol offers a complete sensory reset. Roaring rivers, wooden cafe terraces, high-altitude pine forests, and a vibrant backpacker community that feels worlds away from everyday city life. Whether you are planning your first Himalayan trip or your inaugural solo backpacking run, this guide breaks down every step of the <strong>Patna to Kasol</strong> journey.
          </p>
        </section>

        {/* QUICK ANSWER BOX */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--color-amber)' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Quick Answer: Patna to Kasol Travel Essentials
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', fontSize: '0.98rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Distance & Time:</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>~1,150–1,250 km (20 to 24 hours total travel time via Delhi/Chandigarh).</span>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Recommended Days:</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>5 to 7 Days (Allows 2 days transit + 3 to 5 full days on mountain ground).</span>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Approximate Budget:</strong><br />
              <span style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>₹8,500 – ₹14,500 per head</span> (Budget to Mid-range 5-6 day trip).
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Best Seasons:</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>March–June (Spring/Summer) & Oct–Nov (Crisp Autumn).</span>
            </div>
          </div>
        </section>

        {/* ROUTES COMPARISON */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Patna to Kasol: Best Routes & Transport Options
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Getting to Kasol from Patna requires a 2-leg strategy: take a train or flight to Delhi/Chandigarh, then an overnight AC Volvo bus up to Bhuntar, followed by a 1-hour local bus or cab into Kasol.
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid rgba(11,26,20,0.15)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-forest)', color: '#FFF', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Route Option</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Primary Transport</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Approx. Time</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Cost Level</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { route: '1. Patna → Delhi → Bhuntar → Kasol', trans: 'Rajdhani/Tejas + Volvo Bus', time: '22–24 hrs', cost: 'Budget to Mid', best: 'Best balance of cost & availability' },
                  { route: '2. Patna → Chandigarh → Bhuntar → Kasol', trans: 'Express Rail + HRTC Volvo', time: '20–22 hrs', cost: 'Budget', best: 'Faster mountain bus leg' },
                  { route: '3. Patna → Flight to Kullu (KUU)', trans: 'Flight (PAT-DEL-KUU) + Taxi', time: '6–8 hrs', cost: 'High', best: 'Short timeline & maximum comfort' },
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

        {/* BHUNTAR TO KASOL */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
            How to Reach Kasol from Bhuntar / Kullu (The Final Leg)
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
            Bhuntar is the gateway junction where all Manali-bound Volvo buses drop off travellers heading to Parvati Valley.
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Local HRTC Bus (Cheapest):</strong> Cross the main road bridge to Bhuntar Bus Stand. Local buses run to Kasol/Manikaran every 30–45 mins. <em>Fare: ~₹50–₹70 | Time: 1h 15m.</em>
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Shared / Private Taxi:</strong> Taxis wait right at the Bhuntar bridge. <em>Private Taxi: ~₹1,000–₹1,400 per cab | Shared: ~₹200–₹350 per seat | Time: 45–60 mins.</em>
            </li>
          </ul>
        </section>

        {/* SAMPLE ITINERARIES */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            How Many Days Do You Need? (Sample Itineraries)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-amber)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>🌲 5-Day Essential Kasol & Tosh Itinerary</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>Day 1:</strong> Train from Patna to Delhi, overnight Volvo bus to Bhuntar. <br />
                <strong>Day 2:</strong> Arrive Kasol 9 AM, check into hostel, riverwalk hike to Chalal village, evening cafe hopping. <br />
                <strong>Day 3:</strong> Visit Manikaran hot springs, taxi to Tosh village (7,874 ft), hilltop wooden stay & sunset peaks. <br />
                <strong>Day 4:</strong> Morning short hike to Kutla waterfall, afternoon bus to Bhuntar, overnight Volvo to Delhi. <br />
                <strong>Day 5:</strong> Arrive Delhi morning, return train back to Patna.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-forest)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>🏔️ 7-Day Complete Parvati Valley & Kheerganga Trek</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Adds a 2-day wilderness trek to <strong>Kheerganga</strong> (9,700 ft) with natural hot water springs and night camping under snow-capped peaks.
              </p>
            </div>
          </div>
        </section>

        {/* BUDGET BREAKDOWN */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Kasol Trip Cost Breakdown from Patna (2026 Estimates)
          </h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(11,26,20,0.15)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-forest)', color: '#FFF' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Category</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Budget Backpacker Profile</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Mid-Range Profile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold' }}>Patna to Delhi Rail</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹500 – ₹1,200 (Sleeper/3AC)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹1,500 – ₹2,500 (Rajdhani 3AC/2AC)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold' }}>Delhi-Bhuntar Volvo Bus</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹1,600 – ₹2,200 (Round Trip)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹2,500 – ₹3,500 (Semi-Sleeper AC)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold' }}>Stays (4 Nights)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹1,600 – ₹3,200 (Hostel dorms)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹4,000 – ₹8,000 (Private rooms)</td>
                </tr>
                <tr style={{ backgroundColor: 'rgba(255,69,0,0.1)', fontWeight: 'bold' }}>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--color-forest)' }}>5-Day Total Estimate</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--color-amber)' }}>₹6,800 – ₹12,200 per head</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--color-amber)' }}>₹15,200 – ₹26,500 per head</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
            Frequently Asked Questions (FAQs)
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q1: How do I reach Kasol from Patna?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Take a train or flight from Patna to Delhi/Chandigarh. Board an overnight AC Volvo bus to Bhuntar, and take a local bus or shared cab to Kasol (30 km / 1 hr).
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q2: How many days are enough for Kasol?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>5 Days</strong> (including transit) is sufficient for a quick Kasol, Chalal, and Tosh trip. <strong>7 Days</strong> allows you to add the 2-day Kheerganga trek.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q3: How much does a Kasol trip from Patna cost?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                A budget backpacking trip costs between <strong>₹6,800 and ₹12,200 per person</strong>, while a mid-range trip with boutique stays costs <strong>₹15,200 – ₹26,500</strong>.
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
            Kasol Isn't Nearby. And That's Why It's An Adventure.
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 1.5rem', opacity: 0.9, lineHeight: '1.6' }}>
            Sometimes the destination isn't the hard part. Finding people who are ready to leave with you is.
          </p>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-amber)' }}>
            That's exactly why Drifter exists—bringing together travellers and backpackers from Bihar for curated group drops.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/expeditions/kasol-party-trekking" className="btn btn-primary" style={{ backgroundColor: 'var(--color-amber)', borderColor: 'var(--color-amber)', color: '#FFF' }}>
              CHECK KASOL EXPEDITION DROPS →
            </Link>
            <a 
              href="https://wa.me/917978578168?text=Hey!%20I%20read%20the%20Kasol%20guide%20and%20want%20to%20join%20the%20Drifter%20tribe!" 
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
