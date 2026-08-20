import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Guides & Adventure Stories | Drifter',
  description: 'Comprehensive, field-tested travel guides for travellers starting from Patna, Bihar. Nepal budget guides, Kasol, Jibhi, Meghalaya, and weekend getaways.',
  openGraph: {
    title: 'Travel Guides & Adventure Stories | Drifter',
    description: 'Field-tested travel guides for travellers starting from Patna. Detailed routes, budgets, itineraries, and trail recaps.',
    url: 'https://thedrifter.club/stories',
  },
};

export default function Stories() {
  return (
    <div className="section" style={{ backgroundColor: 'var(--color-bg-primary)', padding: '4rem 0' }}>
      <div className="container">
        <h1 className="text-forest animate-fade-up" style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem' }}>
          DRIFTER GUIDES & STORIES
        </h1>
        <p className="animate-fade-up" style={{ animationDelay: '0.1s', maxWidth: '640px', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
          Field-tested travel guides, authentic trail recaps, and stories forged outside Patna.
        </p>

        {/* FEATURED GUIDES GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem', marginBottom: '3.5rem' }}>

          {/* GUIDE 1 — WEEKEND TRIPS FROM PATNA */}
          <div style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid var(--color-amber)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              height: '180px',
              backgroundImage: "url('https://images.unsplash.com/photo-1599632740188-8a4f152a8342?q=80&w=1170&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '1.3rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-amber)',
                color: '#FFF',
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                marginBottom: '0.6rem',
                letterSpacing: '0.08em',
                alignSelf: 'flex-start'
              }}>
                WEEKEND GUIDE • 2026 📌
              </span>
              <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                10 Best Weekend Trips from Patna
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.2rem', fontSize: '0.88rem' }}>
                From Netarhat pine camping and Rohtasgarh fort ruins to Pokhara nightlife & Darjeeling tea hills.
              </p>
              <Link 
                href="/stories/10-best-weekend-trips-from-patna" 
                className="btn btn-primary"
                style={{ backgroundColor: 'var(--color-amber)', borderColor: 'var(--color-amber)', color: '#FFF', marginTop: 'auto', textAlign: 'center', fontSize: '0.85rem' }}
              >
                READ FULL GUIDE →
              </Link>
            </div>
          </div>

          {/* GUIDE 2 — NEPAL TRIP FROM PATNA */}
          <div style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid var(--color-forest)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              height: '180px',
              backgroundImage: "url('https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=736&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '1.3rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-forest)',
                color: '#FFF',
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                marginBottom: '0.6rem',
                letterSpacing: '0.08em',
                alignSelf: 'flex-start'
              }}>
                OVERLAND INTERNATIONAL 🇳🇵
              </span>
              <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                Nepal Trip from Patna: Budget Guide
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.2rem', fontSize: '0.88rem' }}>
                Routes, Raxaul border crossing, Kathmandu vs Pokhara, Voter ID rules & budget breakdown.
              </p>
              <Link 
                href="/stories/nepal-trip-from-patna" 
                className="btn btn-primary"
                style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.85rem' }}
              >
                READ NEPAL GUIDE →
              </Link>
            </div>
          </div>

          {/* GUIDE 3 — PATNA TO KASOL */}
          <div style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid var(--color-amber)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              height: '180px',
              backgroundImage: "url('https://images.unsplash.com/photo-1662944113366-123561a844e1?q=80&w=1074&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '1.3rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-amber)',
                color: '#FFF',
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                marginBottom: '0.6rem',
                letterSpacing: '0.08em',
                alignSelf: 'flex-start'
              }}>
                HIMACHAL BACKPACKING 🌲
              </span>
              <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                Patna to Kasol: Backpacking Guide
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.2rem', fontSize: '0.88rem' }}>
                Routes via Delhi/Chandigarh, Bhuntar bus transfers, Tosh & Kheerganga treks & packing.
              </p>
              <Link 
                href="/stories/patna-to-kasol" 
                className="btn btn-primary"
                style={{ backgroundColor: 'var(--color-amber)', borderColor: 'var(--color-amber)', color: '#FFF', marginTop: 'auto', textAlign: 'center', fontSize: '0.85rem' }}
              >
                READ KASOL GUIDE →
              </Link>
            </div>
          </div>

          {/* GUIDE 4 — PATNA TO JIBHI */}
          <div style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid var(--color-forest)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              height: '180px',
              backgroundImage: "url('https://images.unsplash.com/photo-1757234891950-543e358697ee?q=80&w=1073&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '1.3rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-forest)',
                color: '#FFF',
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                marginBottom: '0.6rem',
                letterSpacing: '0.08em',
                alignSelf: 'flex-start'
              }}>
                OFFBEAT VILLAGE ☕
              </span>
              <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                Patna to Jibhi: Offbeat Guide 2026
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.2rem', fontSize: '0.88rem' }}>
                Aut tunnel transfers, Jalori Pass, Serolsar Lake, Shoja stays & quiet pine chalets.
              </p>
              <Link 
                href="/stories/patna-to-jibhi" 
                className="btn btn-primary"
                style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.85rem' }}
              >
                READ JIBHI GUIDE →
              </Link>
            </div>
          </div>

          {/* GUIDE 5 — PATNA TO MEGHALAYA */}
          <div style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '2px solid var(--color-amber)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              height: '180px',
              backgroundImage: "url('https://images.unsplash.com/photo-1599632740188-8a4f152a8342?q=80&w=1170&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div style={{ padding: '1.3rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-amber)',
                color: '#FFF',
                fontFamily: 'var(--font-display)',
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                marginBottom: '0.6rem',
                letterSpacing: '0.08em',
                alignSelf: 'flex-start'
              }}>
                NORTHEAST ADVENTURE 🌧️
              </span>
              <h2 className="text-forest" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
                Patna to Meghalaya: Backpacking Guide
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.5', marginBottom: '1.2rem', fontSize: '0.88rem' }}>
                Guwahati transit, Sohra waterfalls, Nongriat root bridges & Dawki river camping.
              </p>
              <Link 
                href="/stories/patna-to-meghalaya" 
                className="btn btn-primary"
                style={{ backgroundColor: 'var(--color-amber)', borderColor: 'var(--color-amber)', color: '#FFF', marginTop: 'auto', textAlign: 'center', fontSize: '0.85rem' }}
              >
                READ MEGHALAYA GUIDE →
              </Link>
            </div>
          </div>

        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
          TRAIL DISPATCHES & RECAPS
        </h2>

        <div className="grid md:grid-cols-3 gap-md">
          {[
            { id: 1, title: 'Conquering The Rain at Dhampus', img: 'https://images.unsplash.com/photo-1722595631756-170e6905dfb7?q=80&w=736&auto=format&fit=crop' },
            { id: 2, title: 'From Patna Basecamp to 12,000 Feet', img: 'https://images.unsplash.com/photo-1599632740188-8a4f152a8342?q=80&w=1170&auto=format&fit=crop' },
            { id: 3, title: 'The Pine Sunrise That Reset My Mind', img: 'https://images.unsplash.com/photo-1662702641221-aa0149a2806f?q=80&w=1170&auto=format&fit=crop' },
            { id: 4, title: 'Mist, Pines, & True Grit at Netarhat', img: 'https://images.unsplash.com/photo-1574859532068-361a402b48b6?q=80&w=765&auto=format&fit=crop' },
            { id: 5, title: 'Trekking Solo, Returning With A Tribe', img: 'https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?q=80&w=1074&auto=format&fit=crop' },
            { id: 6, title: 'Fortress Camping Under The Stars', img: 'https://images.unsplash.com/photo-1682517885754-04bb5fbaf2bb?q=80&w=1170&auto=format&fit=crop' },
          ].map((story) => (
            <div key={story.id} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--color-bg-secondary)', border: '1px solid rgba(11,26,20,0.08)' }}>
              <div style={{ 
                height: '200px', 
                backgroundImage: `url(${story.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div style={{ padding: 'var(--spacing-sm)' }}>
                <h3 className="text-forest" style={{ fontSize: '1.2rem' }}>{story.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                  A brief snippet from the trail about the amazing experience and the bonds forged.
                </p>
                <Link href="/stories/patna-to-meghalaya" style={{ color: 'var(--color-amber)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
