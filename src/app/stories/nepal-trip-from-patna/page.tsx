import Link from 'next/link';

export const metadata = {
  title: 'Nepal Trip from Patna: Complete Budget Travel Guide for 2026 | Drifter',
  description: 'Planning a Nepal trip from Patna? Complete 2026 guide covering routes, Raxaul border crossing, Kathmandu vs Pokhara, budget breakdown, and packing tips.',
  openGraph: {
    title: 'Patna to Nepal Trip: Complete Backpacking & Budget Guide 2026',
    description: 'Planning a Nepal trip from Patna? Complete guide covering Raxaul border crossing, Kathmandu vs Pokhara, Voter ID rules, Tata Sumo fares, and budgets.',
    url: 'https://www.drifter.buzz/stories/nepal-trip-from-patna',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Patna to Nepal Travel Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patna to Nepal Trip: Complete Backpacking Guide 2026',
    description: 'Raxaul border crossing, Pokhara treks, Tata Sumo fares, Voter ID rules, and budget breakdown from Patna.',
    images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'],
  },
};

export default function NepalTripFromPatnaPage() {
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
            PATNA TO NEPAL • 2026 EXPEDITION GUIDE
          </span>
          <h1 className="text-forest" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.15', marginBottom: '1.2rem', fontFamily: 'var(--font-display)' }}>
            Nepal Trip from Patna: Complete Budget Travel Guide for 2026
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '720px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
            Routes, Raxaul Border Crossing, Kathmandu vs Pokhara, Honest Budgets, & Packing Tips for Bihar Travellers.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            <span>📍 By Drifter Captain Crew</span>
            <span>•</span>
            <span>⏱️ 10 Min Read</span>
            <span>•</span>
            <span>🇳🇵 Field Tested overland</span>
          </div>
        </header>

        {/* FEATURED BANNER IMAGE */}
        <div style={{
          height: '420px',
          width: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=736&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '3rem',
          border: '1px solid rgba(255,69,0,0.2)'
        }}></div>

        {/* ARTICLE INTRO */}
        <section style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--color-forest)', marginBottom: '1.2rem' }}>
            Nepal is one of the easiest international destinations for travellers from Bihar—but knowing where to cross, how to reach Kathmandu or Pokhara, and what the trip actually costs makes a huge difference.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            If you live in Patna, you are sitting right on the doorstep of the Himalayas. You don't need a visa application process, expensive international flight tickets, or months of complicated logistics to cross an international border. A <strong>Nepal trip from Patna</strong> is one of the most accessible overland international journeys you can take in Asia.
          </p>
          <p>
            Whether you’re planning a quick 4-day weekend escape to Lakeside Pokhara or an extended 7-day backpacking trip across the Kathmandu Valley, this guide breaks down every practical detail you need—from Raxaul border procedures and local bus connections to honest budget breakdowns and safety tips for Indian travellers.
          </p>
        </section>

        {/* QUICK ANSWER BOX */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--color-amber)' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Quick Answer: Nepal Travel Essentials for Patna Travellers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', fontSize: '0.98rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Is Nepal practical from Patna?</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>Yes. You can cross the border via Raxaul/Birgunj in under 6 hours from Patna.</span>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>How many days to plan?</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>4 to 7 Days. 4 days is ideal for Pokhara; 7 days for a full Kathmandu + Pokhara circuit.</span>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Approximate Budget?</strong><br />
              <span style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>₹7,000 – ₹15,000 per person</span> (4–6 day backpacking trip).
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Best Overland Route?</strong><br />
              <span style={{ color: 'var(--color-text-muted)' }}>Patna → Raxaul (Train/Bus) → Birgunj Border → Pokhara/Kathmandu (Sumo/Bus).</span>
            </div>
          </div>
          <div style={{ marginTop: '1.2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-primary)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)' }}>
            ⚠️ <strong>Document Rule:</strong> Indian citizens officially require a valid <strong>Indian Passport OR Voter ID card</strong>. (Aadhar is generally NOT accepted for overland border clearance).
          </div>
        </section>

        {/* ROUTES COMPARISON */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Patna to Nepal: Best Routes Comparison
          </h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(11,26,20,0.15)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-forest)', color: '#FFF', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Route</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Distance</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Travel Time</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Cost Range</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { route: '1. Patna → Raxaul → Birgunj → Kathmandu/Pokhara', dist: '~480 km', time: '11–13 hrs', cost: '₹1,200 – ₹2,500', best: 'Best direct route for Bihar travellers' },
                  { route: '2. Patna → Gorakhpur → Sunauli → Pokhara', dist: '~550 km', time: '14–16 hrs', cost: '₹1,500 – ₹3,000', best: 'Alternative route from Western Bihar' },
                  { route: '3. Patna → Jaynagar → Janakpur → Kathmandu', dist: '~400 km', time: '10–12 hrs', cost: '₹1,000 – ₹2,000', best: 'Cultural trip visiting Eastern Nepal' },
                  { route: '4. Patna → Flight Connection → Kathmandu', dist: 'Flight', time: '5–8 hrs total', cost: '₹8,500 – ₹16,000', best: 'Short timeline / High comfort' },
                ].map((r, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(11,26,20,0.08)', backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(11,26,20,0.02)' }}>
                    <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold', color: 'var(--color-forest)' }}>{r.route}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{r.dist}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{r.time}</td>
                    <td style={{ padding: '0.8rem 1rem', color: 'var(--color-amber)', fontWeight: 'bold' }}>{r.cost}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* RAXAUL BORDER CROSSING */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
            Patna to Raxaul & Nepal Border Crossing: Step-by-Step
          </h2>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Reaching Raxaul:</strong> Take the daily Patna-Raxaul Express or Sadbhavana Express from Patna Junction (approx. 5 to 6 hrs, sleeper ~₹200-₹350), or a direct bus from Bairiya ISBT Patna.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Crossing the Border:</strong> Take an e-rickshaw from Raxaul Railway Station to Maitri Setu (Friendship Bridge) and walk across into Birgunj, Nepal.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <strong>Onward Transport from Birgunj:</strong> Take a shared 9-seater Tata Sumo to Kathmandu (approx. 5 hours, ~700-900 NPR) or a deluxe bus to Pokhara (approx. 8 hours, ~900-1300 NPR).
            </li>
          </ol>
        </section>

        {/* KATHMANDU VS POKHARA */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Kathmandu vs Pokhara: Which Destination Fits Your Vibe?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-forest)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>Kathmandu</h3>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Dense, historic, cultural chaos. Famous for ancient temples, heritage stupas (Swayambhunath, Boudhanath), Thamel night pub crawls, and street food.
              </p>
              <strong>Best For:</strong> Culture lovers, history buffs, and urban backpackers.
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid var(--color-amber)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-amber)', fontSize: '1.5rem', marginBottom: '0.8rem' }}>Pokhara</h3>
              <p style={{ fontSize: '0.98rem', lineHeight: '1.6', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Serene alpine vibe, Phewa lake boating, Annapurna mountain views, lakeshore cafes, live acoustic music, and secret mountain ridge hikes.
              </p>
              <strong>Best For:</strong> First-timers, outdoor adventure seekers, and friend groups.
            </div>
          </div>
        </section>

        {/* ITINERARIES */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            How Many Days Do You Need? (Sample Plans)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-amber)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>⚡ 4-Day Quick Pokhara Weekend Escape</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>Day 0:</strong> Evening train from Patna to Raxaul. <br />
                <strong>Day 1:</strong> Cross into Birgunj, morning Sumo to Pokhara. Lakeside sunset & acoustic live music. <br />
                <strong>Day 2:</strong> Sarangkot sunrise over Annapurna, Fewa Lake boating, World Peace Pagoda hike. <br />
                <strong>Day 3:</strong> Dhampus secret mountain ridge trek & cafe hopping. <br />
                <strong>Day 4:</strong> Morning return bus to border, back in Patna by Monday.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-forest)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>🏔️ 7-Day Complete Nepal Circuit (Kathmandu + Pokhara)</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Full 7-day trip exploring Kathmandu's heritage stupas & Thamel nightlife for 2 days, then heading to Pokhara for 3 days of lakeshore chill and Himalayan trail trekking.
              </p>
            </div>
          </div>
        </section>

        {/* BUDGET BREAKDOWN */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Nepal Trip Cost Breakdown from Patna
          </h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
            Reference Conversion: <strong>1 INR ≈ 1.60 NPR</strong>. Indian currency (₹100 & ₹200 notes) is widely accepted.
          </p>

          <div style={{ overflowX: 'auto', border: '1px solid rgba(11,26,20,0.15)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-forest)', color: '#FFF' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Category</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Budget Backpacker</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Mid-Range Traveller</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold' }}>Transport (Round Trip)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹1,500 – ₹2,500 (Train + Sumo)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹4,000 – ₹7,000 (Private Cabs)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold' }}>Stay (Per Night)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹400 – ₹700 (Hostel dorm)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹1,500 – ₹3,000 (Hotel room)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold' }}>Food & Drinks (Per Day)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹500 – ₹800 (Dal Bhat / Momos)</td>
                  <td style={{ padding: '0.8rem 1rem' }}>₹1,200 – ₹2,200 (Restaurants)</td>
                </tr>
                <tr style={{ backgroundColor: 'rgba(255,69,0,0.1)', fontWeight: 'bold' }}>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--color-forest)' }}>5-Day Total Estimate</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--color-amber)' }}>₹7,500 – ₹10,500 per head</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--color-amber)' }}>₹14,500 – ₹22,000 per head</td>
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
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q1: How can I travel from Patna to Nepal by road?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Take a train or bus from Patna to the Raxaul border (5-6 hours). Cross into Birgunj, Nepal, and take a shared Tata Sumo or tourist bus to Kathmandu (~5 hours) or Pokhara (~8 hours).
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q2: Can Indian citizens travel to Nepal without a passport?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Yes. Indian citizens do not require a passport if they carry a valid <strong>Voter ID Card issued by the Election Commission of India</strong>. Aadhar is generally NOT accepted for official border clearance.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q3: How much does a complete Nepal trip from Patna cost?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                A budget 4 to 5-day backpacking trip from Patna typically costs between <strong>₹7,500 and ₹11,000 per person</strong>, covering round-trip transit, hostel stays, food, and local sightseeing.
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
            Stop Postponing The Mountain Drop
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 1.5rem', opacity: 0.9, lineHeight: '1.6' }}>
            Nepal isn't necessarily a big international trip. From Bihar, it can be your next long weekend, your first backpacking adventure, or simply the trip you finally stop postponing.
          </p>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-amber)' }}>
            “Sometimes the hardest part isn't finding the destination. It's finding people who are ready to go.” — That's exactly why Drifter exists.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/expeditions/pokhara-party-secret-trek" className="btn btn-primary" style={{ backgroundColor: 'var(--color-amber)', borderColor: 'var(--color-amber)', color: '#FFF' }}>
              JOIN OUR NEXT PATNA TO NEPAL DROP →
            </Link>
            <a 
              href="https://wa.me/917978578168?text=Hey!%20I%20read%20the%20Nepal%20guide%20and%20want%20to%20join%20the%20Drifter%20tribe!" 
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
