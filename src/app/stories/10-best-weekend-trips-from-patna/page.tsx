import Link from 'next/link';

export const metadata = {
  title: '10 Best Weekend Trips from Patna for 2026 | Drifter Community',
  description: 'Looking to escape Patna this weekend? Discover the 10 best weekend trips from Patna for 2026—from Netarhat pine camping & Rajgir to Nepal & Darjeeling.',
};

export default function WeekendTripsFromPatnaPage() {
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
            PATNA TRAVEL GUIDE • 2026 EDITION
          </span>
          <h1 className="text-forest" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: '1.15', marginBottom: '1.2rem', fontFamily: 'var(--font-display)' }}>
            10 Best Weekend Trips from Patna for 2026
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '720px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
            Escapes for Adventurers, Backpackers, & Nature Lovers starting directly from Patna Basecamp.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            <span>📍 By Drifter Captain Crew</span>
            <span>•</span>
            <span>⏱️ 8 Min Read</span>
            <span>•</span>
            <span>🔥 Field Tested</span>
          </div>
        </header>

        {/* FEATURED BANNER IMAGE */}
        <div style={{
          height: '420px',
          width: '100%',
          backgroundImage: "url('https://images.unsplash.com/photo-1599632740188-8a4f152a8342?q=80&w=1170&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '3rem',
          border: '1px solid rgba(255,69,0,0.2)'
        }}></div>

        {/* ARTICLE INTRO */}
        <section style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
            Your Weekend Doesn't Have To Look Like Your Weekday
          </h2>
          <p style={{ marginBottom: '1.2rem' }}>
            Let’s be honest for a second. If your ideal Saturday consists of endless scrolling on your phone, driving through crowded Boring Road traffic, or sitting in the same café under fluorescent lights, you’re doing weekends wrong.
          </p>
          <blockquote style={{
            borderLeft: '4px solid var(--color-amber)',
            paddingLeft: '1.2rem',
            margin: '1.5rem 0',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--color-forest)',
            fontStyle: 'italic'
          }}>
            “Your weekend doesn't have to look like your weekday. Sometimes you don't need a long vacation. You just need to leave Patna.”
          </blockquote>
          <p style={{ marginBottom: '1.2rem' }}>
            Whether you’re craving pine forest air, high-altitude mountain views, fireside acoustic sessions, or just a quick 24-hour reset away from the city dust, there are world-class landscapes waiting just a few hours from Gandhi Maidan.
          </p>
          <p>
            As Bihar's premier outdoor and adventure community, we at <strong>Drifter</strong> put together this definitive, field-tested guide to the <strong>10 best weekend trips from Patna for 2026</strong>. No generic travel brochure fluff—just real distances, honest budgets, transport hacks, and high-vibe recommendations for travellers starting directly from Patna.
          </p>
        </section>

        {/* QUICK COMPARISON TABLE */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.2rem' }}>
            Quick Comparison: Top Weekend Getaways from Patna
          </h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(11,26,20,0.15)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-secondary)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-forest)', color: '#FFF', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Destination</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Distance</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Travel Time</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Ideal Duration</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Approx Budget</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '1. Netarhat (Jharkhand)', dist: '~370 km', time: '8–9 hrs', dur: '2D / 1N', budget: '₹3,500 – ₹5,500', best: 'Pine camping & stargazing' },
                  { name: '2. Rajgir & Gridhakuta', dist: '~100 km', time: '2.5–3 hrs', dur: '1D / 2D1N', budget: '₹1,200 – ₹2,500', best: 'Quick hill hikes & hot springs' },
                  { name: '3. Rohtasgarh Fort', dist: '~170 km', time: '4.5–5 hrs', dur: '2D / 1N', budget: '₹2,500 – ₹4,000', best: 'Cliffside fort camping & ruins' },
                  { name: '4. Varanasi (UP)', dist: '~250 km', time: '3.5 hrs (Vande Bharat)', dur: '2D / 1N', budget: '₹2,500 – ₹4,500', best: 'Ghats, midnight food & boats' },
                  { name: '5. Bodh Gaya', dist: '~110 km', time: '2.5–3 hrs', dur: '1D / 2D1N', budget: '₹1,500 – ₹3,000', best: 'Zen monasteries & quiet cafes' },
                  { name: '6. Deoghar & Trikut', dist: '~250 km', time: '5–6 hrs', dur: '2D / 1N', budget: '₹2,000 – ₹3,800', best: 'Forest hills & ropeways' },
                  { name: '7. Pokhara (Nepal)', dist: '~480 km', time: '11–13 hrs (Bus)', dur: '3D/2N or 4D/3N', budget: '₹11,000 – ₹15,000', best: 'Clubs, cafes & secret trek' },
                  { name: '8. Darjeeling (WB)', dist: '~500 km', time: '9–10 hrs (Train)', dur: '3D / 2N', budget: '₹6,000 – ₹9,500', best: 'Tea hills & Kanchenjunga' },
                  { name: '9. Jibhi Valley (HP)', dist: '~1,150 km', time: '20–22 hrs', dur: '4D / 3N', budget: '₹8,500 – ₹13,000', best: 'Pine chalets & trout rivers' },
                  { name: '10. Meghalaya', dist: '~900 km', time: 'Flight + 3h drive', dur: '4D / 3N', budget: '₹12,000 – ₹18,000', best: 'Living root bridges & canyons' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(11,26,20,0.08)', backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(11,26,20,0.02)' }}>
                    <td style={{ padding: '0.8rem 1rem', fontWeight: 'bold', color: 'var(--color-forest)' }}>{row.name}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{row.dist}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{row.time}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{row.dur}</td>
                    <td style={{ padding: '0.8rem 1rem', color: 'var(--color-amber)', fontWeight: 'bold' }}>{row.budget}</td>
                    <td style={{ padding: '0.8rem 1rem' }}>{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 10 DESTINATIONS DETAILED SECTIONS */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '2rem' }}>
            Detailed Breakdown: 10 Best Weekend Getaways from Patna
          </h2>

          {/* 1. NETARHAT */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-amber)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              1. Netarhat, Jharkhand — <span style={{ color: 'var(--color-amber)' }}>Pine Forest & Stargazing Escape</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              If crisp pine needle paths, chilly mountain breeze, and zero light pollution sound like your kind of reset, Netarhat is arguably the single best <strong>2 day trip from Patna</strong>. Often called the <em>"Queen of Chotanagpur"</em>, Netarhat sits at an altitude of 3,622 feet and offers thick pine wilderness that feels world’s apart from the Gangetic plains.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~370 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 8–9 hrs</div>
              <div><strong>🚗 Best Transport:</strong> Train to Ranchi + Taxi or Private Cab</div>
              <div><strong>⏳ Ideal Duration:</strong> 2 Days / 1 Night</div>
              <div><strong>💰 Budget Range:</strong> ₹4,499 – ₹5,500</div>
              <div><strong>🌤️ Best Season:</strong> Sep – March</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Overnight wilderness pine forest camping, fireside BBQ & acoustic jams, watch the dawn break over Magnolia Point, and hike down to Lower Ghaghri Waterfalls.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Best For:</strong> Camping enthusiasts, stargazers, budget backpackers, and friend groups looking for a weekend reset.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              🔥 <em>Pro Tip:</em> Check out our specialized <Link href="/expeditions/netarhat-camping" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>Netarhat weekend trip</Link> community drops leaving directly from Patna Basecamp.
            </p>
          </div>

          {/* 2. RAJGIR */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-forest)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              2. Rajgir & Gridhakuta Peak — <span style={{ color: 'var(--color-amber)' }}>Quick Hill Hike & Ancient Valley</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              For those who only have a single day or a light weekend window, Rajgir is the ultimate quick <strong>short trip from Patna</strong>. Enclosed by seven emerald hills, Rajgir combines rocky ridge trekking with ancient monastic heritage and natural geothermal hot springs.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~100 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 2.5–3 hrs</div>
              <div><strong>🚗 Best Transport:</strong> Rajgir Express / 4-Lane Highway Drive</div>
              <div><strong>⏳ Ideal Duration:</strong> 1 Day / 2D1N</div>
              <div><strong>💰 Budget Range:</strong> ₹1,200 – ₹2,500</div>
              <div><strong>🌤️ Best Season:</strong> Oct – March</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Hike up the ancient stone steps to Gridhakuta (Vulture's Peak), ride the aerial ropeway to Vishwa Shanti Stupa, explore Ghora Katora eco-lake by cycle, and relax at Pandu Pokhar.</p>
            <p><strong>Best For:</strong> First-time hikers, solo explorers, couples wanting a quick getaway, and budget travellers.</p>
          </div>

          {/* 3. ROHTASGARH FORT */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-amber)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              3. Rohtasgarh Fort & Kaimur Plateau — <span style={{ color: 'var(--color-amber)' }}>Cliffside Fort Camping</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              If you are looking for genuine <strong>adventure trips from Patna</strong> that haven't been ruined by commercial crowds, Rohtasgarh Fort on the Kaimur Plateau is an absolute holy grail. Perched on a 1,500-foot limestone cliff overlooking the Son River, camping inside ancient 16th-century fort ruins under an unpolluted night sky is an experience very few travellers know exists in Bihar.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~170 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 4.5–5 hrs</div>
              <div><strong>🚗 Best Transport:</strong> Train to Dehri-on-Sone + Taxi + Trail Hike</div>
              <div><strong>⏳ Ideal Duration:</strong> 2 Days / 1 Night</div>
              <div><strong>💰 Budget Range:</strong> ₹2,500 – ₹4,000</div>
              <div><strong>🌤️ Best Season:</strong> Nov – Feb</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Trek up the Kaimur limestone steps, pitch cliffside tents inside historic fort courtyards, watch the sun set over the Son river valley, and gather around a campfire under stargazing skies.</p>
            <p><strong>Best For:</strong> Fit backpackers, history buffs, and wild campers who don't mind roughing it out.</p>
          </div>

          {/* 4. VARANASI */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-forest)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              4. Varanasi, Uttar Pradesh — <span style={{ color: 'var(--color-amber)' }}>Midnight Ghats & Electric Energy</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              Looking for <strong>places to visit near Patna</strong> that offer unmatched cultural intensity and electric night energy? Thanks to the high-speed Vande Bharat Express, Varanasi is now less than 4 hours away from Patna Junction.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~250 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 3.5 hrs (Vande Bharat Express)</div>
              <div><strong>🚗 Best Transport:</strong> Patna-Varanasi Vande Bharat Express</div>
              <div><strong>⏳ Ideal Duration:</strong> 2 Days / 1 Night</div>
              <div><strong>💰 Budget Range:</strong> ₹2,500 – ₹4,500</div>
              <div><strong>🌤️ Best Season:</strong> Oct – March</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Watch the evening Ganga Aarti from a wooden boat at Dashashwamedh Ghat, wander through secret narrow alleys (galiyan), indulge in midnight malaiyyo and kulhad lassi, and take sunrise photos at Assi Ghat.</p>
            <p><strong>Best For:</strong> Photographers, solo backpackers, foodies, and culture seekers.</p>
          </div>

          {/* 5. BODH GAYA */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-amber)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              5. Bodh Gaya — <span style={{ color: 'var(--color-amber)' }}>Zen Monasteries & Slow Cafe Reset</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              When city noise and chaos get too loud, Bodh Gaya serves as the quietest, most peaceful <strong>weekend getaway from Patna</strong>. Designated a UNESCO World Heritage site, it’s a global hub where Buddhist monks from Japan, Thailand, Bhutan, and Tibet gather.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~110 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 2.5–3 hrs</div>
              <div><strong>🚗 Best Transport:</strong> Train to Gaya Junction + 20min Auto/Cab</div>
              <div><strong>⏳ Ideal Duration:</strong> 1 Day / 2D1N</div>
              <div><strong>💰 Budget Range:</strong> ₹1,500 – ₹3,000</div>
              <div><strong>🌤️ Best Season:</strong> Nov – March</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Sit quietly under the sacred Bodhi Tree, explore diverse international temple architecture (Thai Monastery, Japanese Daijokyo Temple), and spend quiet afternoons sipping herbal tea at offbeat garden cafes.</p>
            <p><strong>Best For:</strong> Solo travellers, digital nomads needing a quiet reading weekend, and couples.</p>
          </div>

          {/* 6. DEOGHAR */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-forest)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              6. Deoghar & Trikut Pahar, Jharkhand — <span style={{ color: 'var(--color-amber)' }}>Sacred Hills & Forest Trails</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              Located in the Santhal Pargana division of Jharkhand, Deoghar offers a great mix of rocky hill treks, lush forest surroundings, and deep spiritual roots.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~250 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 5–6 hrs</div>
              <div><strong>🚗 Best Transport:</strong> Train to Jasidih Junction + Taxi</div>
              <div><strong>⏳ Ideal Duration:</strong> 2 Days / 1 Night</div>
              <div><strong>💰 Budget Range:</strong> ₹2,000 – ₹3,800</div>
              <div><strong>🌤️ Best Season:</strong> Oct – March</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Ride the Trikut Pahar ropeway or hike the rocky forest trails to Trikutachal ashram, explore Nandan Pahar hill garden, and visit the ancient Baidyanath Temple complex.</p>
            <p><strong>Best For:</strong> Nature lovers, family groups, and weekend road-trippers.</p>
          </div>

          {/* 7. POKHARA */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-amber)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              7. Pokhara & Secret Ridge, Nepal — <span style={{ color: 'var(--color-amber)' }}>High-Altitude Party & Alpine Reset</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              Who says an international trip can't be done on a <strong>3 day trip from Patna</strong>? With Nepal right across the Bihar border, heading from Patna to Pokhara is easier than travelling to South India. Pokhara is the ultimate contrast destination: lakeshore clubbing and craft beer by night, paired with serene Annapurna mountain views at dawn.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~480 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 11–13 hrs (Overnight Bus)</div>
              <div><strong>🚗 Best Transport:</strong> Patna to Raxaul Train/Bus + Direct Border Bus</div>
              <div><strong>⏳ Ideal Duration:</strong> 3D/2N or 4D/3N</div>
              <div><strong>💰 Budget Range:</strong> ₹10,998 – ₹15,000</div>
              <div><strong>🌤️ Best Season:</strong> Sep – Nov & March – May</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Lakeshore cafe crawling in Lakeside Pokhara, night clubbing with mountain DJs, sunrise boating on Fewa Lake, and a secret day-trek up the Dhampus / Australian Camp mountain ridge.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Best For:</strong> Adventure lovers, group of friends, backpackers, and party-goers.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              🔥 <em>Pro Tip:</em> Check out our live <Link href="/expeditions/pokhara-party-secret-trek" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>Patna to Nepal</Link> expedition drops with curated community captains.
            </p>
          </div>

          {/* 8. DARJEELING */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-forest)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              8. Darjeeling & Singalila Ridge, WB — <span style={{ color: 'var(--color-amber)' }}>Tea Hills & Mountain Sunrise</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              If you’re craving true Himalayan mountain air, tea gardens, and colonial charm, heading from <strong>Patna to Darjeeling</strong> is classic for a reason.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~500 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> 9–10 hrs (Overnight Train)</div>
              <div><strong>🚗 Best Transport:</strong> Train to NJP + Shared Tata Sumo Jeep</div>
              <div><strong>⏳ Ideal Duration:</strong> 3 Days / 2 Nights</div>
              <div><strong>💰 Budget Range:</strong> ₹6,000 – ₹9,500</div>
              <div><strong>🌤️ Best Season:</strong> Oct – Dec & March – May</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Watch sunrise illuminating Kanchenjunga from Tiger Hill, walk through tea estates in Happy Valley, sip authentic Darjeeling tea at Glenary's bakery, and take a joyride on the historic Darjeeling Himalayan Toy Train.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Best For:</strong> Mountain lovers, couples, photography buffs, and foodies.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              🏔️ <em>Planning a longer trail?</em> Keep an eye out for our upcoming guide on <Link href="/expeditions/sandakphu-trek" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>Patna to Darjeeling</Link> and Sandakphu cloudwalks.
            </p>
          </div>

          {/* 9. JIBHI */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-amber)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              9. Jibhi & Tirthan Valley, Himachal — <span style={{ color: 'var(--color-amber)' }}>Offbeat Pine Chalet Hideaway</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              When a 4-day long weekend opens up (like Holi, Independence Day, or Diwali), take the leap from <strong>Patna to Jibhi</strong>. Tucked inside the Seraj Valley of Himachal Pradesh, Jibhi is a serene wooden chalet paradise untouched by the massive commercial crowds of Manali.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~1,150 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> ~20–22 hrs (Train + Bus)</div>
              <div><strong>🚗 Best Transport:</strong> Express Train to Delhi/Chandigarh + Volvo Bus</div>
              <div><strong>⏳ Ideal Duration:</strong> 4 Days / 3 Nights</div>
              <div><strong>💰 Budget Range:</strong> ₹8,500 – ₹13,000</div>
              <div><strong>🌤️ Best Season:</strong> March – June & Oct – Feb</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Stay in riverside wooden chalets, hike through secret pine needle trails to Jibhi Waterfall, trek up to Jalori Pass (10,800 ft) and Serolsar Lake, and enjoy trout fish by the river.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Best For:</strong> Backpackers, couples, nature addicts, and offbeat travellers.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              🌲 <em>Comparing Himachal trails?</em> Read our upcoming breakdown on <Link href="/expeditions/kasol-party-trekking" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>Patna to Kasol</Link> vs <Link href="/expeditions/sojha-offbeat-cafe" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>Patna to Jibhi</Link>.
            </p>
          </div>

          {/* 10. MEGHALAYA */}
          <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', borderLeft: '5px solid var(--color-forest)' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '0.8rem' }}>
              10. Meghalaya (Shillong & Cherrapunji) — <span style={{ color: 'var(--color-amber)' }}>Cloud & Canyon Adventure</span>
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              For travellers willing to take a quick flight or express rail trip for an extended weekend, Meghalaya offers dramatic river canyons, double-decker living root bridges, and turquoise natural pools.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', backgroundColor: 'var(--color-bg-primary)', padding: '1.2rem', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              <div><strong>📍 Distance:</strong> ~900 km from Patna</div>
              <div><strong>⏱️ Travel Time:</strong> Flight to Guwahati + 3h drive</div>
              <div><strong>🚗 Best Transport:</strong> Direct/1-stop Flight (PAT to GAU) + Taxi</div>
              <div><strong>⏳ Ideal Duration:</strong> 4 Days / 3 Nights</div>
              <div><strong>💰 Budget Range:</strong> ₹12,000 – ₹18,000</div>
              <div><strong>🌤️ Best Season:</strong> Oct – April</div>
            </div>

            <p style={{ marginBottom: '0.8rem' }}><strong>What To Do:</strong> Hike 3,000 steps down to Nongriat Double Decker Living Root Bridge, cliff jump into crystal clear rivers at Shnongpdeng, explore Mawsmai caves, and enjoy live music at Shillong cafes.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Best For:</strong> Thrill seekers, backpackers, and landscape photographers.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              🌊 <em>Want the full East India circuit?</em> Check out our upcoming guides for <Link href="/expeditions" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>Patna to Meghalaya</Link> and <Link href="/expeditions" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>Patna to Sikkim</Link>.
            </p>
          </div>
        </section>

        {/* BEST BY CATEGORY */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
            Best Weekend Trips from Patna Categorized by Travel Style
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: 'var(--color-amber)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>🥾 Best for Trekking</h4>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li><strong>Rohtasgarh Fort Trail (Bihar):</strong> Steep 3-hr cliff climb.</li>
                <li><strong>Sandakphu Ridge (WB):</strong> High-altitude cloudwalks.</li>
                <li><strong>Jalori Pass & Serolsar (HP):</strong> Pine forest alpine trail.</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-amber)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>⛺ Best for Camping</h4>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li><strong>Netarhat Pines (Jharkhand):</strong> Stargazing & campfires.</li>
                <li><strong>Rohtasgarh Ruins (Bihar):</strong> Cliffside fort tents.</li>
                <li><strong>Pokhara Mountain Ridge (Nepal):</strong> Annapurna fireside.</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-amber)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>👩‍❤️‍👨 Best for Couples</h4>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li><strong>Darjeeling Tea Estates:</strong> Cozy hotels & Glenary's.</li>
                <li><strong>Jibhi Wooden Chalets:</strong> Cabin by trout streams.</li>
                <li><strong>Bodh Gaya:</strong> Quiet garden cafes & monasteries.</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-amber)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>🤘 Best for Friend Groups</h4>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li><strong>Pokhara (Nepal):</strong> Lakeshore clubbing & secret trek.</li>
                <li><strong>Netarhat Drop:</strong> Campfire BBQ & group road trip.</li>
                <li><strong>Varanasi:</strong> Alley food crawls & night ghats.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CHEAPEST TRIPS */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
            Cheapest Weekend Trips from Patna (Under ₹3,000 Budget)
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            If you're on a tight student budget or just want a high-value weekend getaway under ₹3,000:
          </p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <li><strong>Rajgir (Day Trip / Overnight):</strong> Total budget ~₹1,200 – ₹2,000. Take MEMU/express train, stay in local guesthouses, and explore by bicycle.</li>
            <li><strong>Bodh Gaya:</strong> Total budget ~₹1,500 – ₹2,500. Gaya train ticket costs less than ₹100; budget monasteries offer clean, affordable stays.</li>
            <li><strong>Netarhat Camping:</strong> Total budget ~₹3,500. Extremely cost-effective when travelling in a group of 4 to split taxi costs from Ranchi/Lohardaga.</li>
          </ol>
        </section>

        {/* LONG WEEKENDS */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
            Best Long-Weekend Options from Patna (3 to 4 Days)
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            When a gazetted holiday falls on a Friday or Monday, take advantage of these longer routes starting from Patna:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            <li><strong>Pokhara & Secret Mountain Ridge (Nepal):</strong> 4D/3N journey via border bus.</li>
            <li><strong>Jibhi & Tirthan Valley (Himachal):</strong> 4D/3N journey via Tejas Express + Volvo.</li>
            <li><strong>Meghalaya (Shillong & Cherrapunji):</strong> 4D/3N journey via Patna to Guwahati flight.</li>
          </ul>
        </section>

        {/* FAQS SECTION */}
        <section style={{ marginBottom: '3.5rem', backgroundColor: 'var(--color-bg-secondary)', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--color-forest)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
            Frequently Asked Questions (FAQs)
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q1: What is the best 2 day trip from Patna for nature lovers?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>Netarhat</strong> in Jharkhand is the best 2-day nature trip from Patna. It offers pine forest wilderness, cool mountain temperatures, sunrise viewpoints at Magnolia Point, and zero light pollution for stargazing.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q2: Can I visit Nepal on a weekend trip from Patna?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Yes! A 3-day or 4-day long weekend is sufficient for a trip to <strong>Pokhara, Nepal</strong> from Patna. You can take an overnight bus from Patna to the Birgunj border and head straight to Pokhara for lakeshore nightlife and Himalayan ridge views.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q3: Which is the closest hill station near Patna?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>Netarhat</strong> (~370 km) is the closest true highland/hill retreat from Patna. For closer rolling green hills, <strong>Rajgir</strong> (~100 km) and <strong>Trikut Pahar in Deoghar</strong> (~250 km) are the fastest hill escapes.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q4: How much does a weekend camping trip from Patna typically cost?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                A 2D/1N weekend camping trip from Patna (like Netarhat or Rohtasgarh Fort) typically costs between <strong>₹2,500 and ₹5,500 per person</strong>, including round-trip transport, camping tents, equipment, and meals.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q5: Is Rohtasgarh Fort camping safe for travellers starting from Patna?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                Yes, when done in organized groups with local captains. Rohtasgarh Fort has seen a major eco-tourism revival. However, because it is located on a remote limestone plateau, it is strongly recommended to travel with experienced local outdoor leaders like <strong>Drifter</strong>.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--color-forest)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Q6: What is the fastest weekend destination to reach from Patna by train?</h4>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                <strong>Varanasi</strong> is the fastest destination by high-speed train (approx. 3.5 hours on the Patna-Varanasi Vande Bharat Express). <strong>Gaya / Bodh Gaya</strong> is also under 2 hours via express trains.
              </p>
            </div>
          </div>
        </section>

        {/* CONCLUSION & BRAND CTA */}
        <section style={{
          backgroundColor: 'var(--color-forest)',
          color: '#FFF',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--color-amber)', marginBottom: '1rem' }}>
            Stop Waiting For The "Perfect" Vacation
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 2rem', opacity: 0.9, lineHeight: '1.6' }}>
            You don't need a month off, a ₹50,000 bank balance, or a complex itinerary to live an extraordinary life. The mountains, pine forests, ancient forts, and river ghats are right here in our backyard—waiting for you to step outside Patna.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/expeditions" className="btn btn-primary" style={{ backgroundColor: 'var(--color-amber)', borderColor: 'var(--color-amber)', color: '#FFF' }}>
              EXPLORE LIVE EXPEDITION DROPS →
            </Link>
            <a 
              href="https://wa.me/917978578168?text=Hey!%20I%20read%20the%20Patna%20weekend%20guide%20and%20want%20to%20join%20the%20Drifter%20tribe!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ color: '#FFF', borderColor: '#FFF' }}
            >
              💬 JOIN DRIFTER WHATSAPP TRIBE
            </a>
          </div>
        </section>

      </div>
    </article>
  );
}
