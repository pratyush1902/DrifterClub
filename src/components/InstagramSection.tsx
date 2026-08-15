import React from 'react';

const INSTA_POSTS = [
  {
    id: 1,
    image: '/images/story_campfire_tribe.jpg',
    tag: 'CAMPFIRE LORE',
    caption: '2 AM acoustic jams under a million stars. Strangers on Friday, family by Sunday. 🎸✨',
    likes: '1.2k'
  },
  {
    id: 2,
    image: '/images/pokhara_dhampus.jpg',
    tag: 'POKHARA DROP',
    caption: 'Party before bed, disappear into Annapurna clouds at sunrise. 🏔️🔥',
    likes: '2.4k'
  },
  {
    id: 3,
    image: '/images/manifesto.jpg',
    tag: 'NETARHAT PINES',
    caption: 'Pine forest coffee & cold mountain breeze. This is your sign to skip town this weekend. ☕🌲',
    likes: '980'
  },
  {
    id: 4,
    image: '/images/bihar.jpg',
    tag: 'ROHTASGARH CLIFFS',
    caption: 'Camping inside ancient fort ruins over Kaimur valley. Reclaiming Bihar’s outdoors. ⛺⚔️',
    likes: '1.8k'
  }
];

export default function InstagramSection() {
  const instaUrl = "https://www.instagram.com/thedrifter.club/";

  return (
    <section className="section" style={{ background: 'var(--color-forest)', color: 'var(--color-text-inverse)', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem', 
              background: 'rgba(255, 69, 0, 0.15)', 
              color: 'var(--color-amber)', 
              borderRadius: 'var(--radius-pill)', 
              fontWeight: 800, 
              fontSize: '0.8rem', 
              letterSpacing: '0.12em',
              marginBottom: '0.6rem'
            }}>
              <InstagramIcon size={14} color="var(--color-amber)" />
              LIVE FROM THE TRAIL
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: 0 }}>
              FOLLOW THE LORE ON INSTAGRAM
            </h2>
            <p style={{ color: 'rgba(244, 240, 230, 0.8)', fontSize: '1.05rem', margin: '0.4rem 0 0 0', maxWidth: '580px' }}>
              No staged photos or scripted videos. Just unscripted trail moments, campfire laughs, and upcoming drop announcements.
            </p>
          </div>

          <a 
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              padding: '0.85rem 1.5rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(220, 39, 67, 0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              textDecoration: 'none'
            }}
          >
            <InstagramIcon size={18} color="#FFFFFF" />
            <span>@thedrifter.club</span>
            <span style={{ opacity: 0.8 }}>↗</span>
          </a>
        </div>


        {/* Photo Feed Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}>
          {INSTA_POSTS.map((post) => (
            <a 
              key={post.id}
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                background: 'rgba(255,255,255,0.05)',
                textDecoration: 'none',
                color: '#FFF'
              }}
            >
              {/* Background Image */}
              <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.4s ease'
              }} />

              {/* Dark Gradient Overlay */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(7, 18, 14, 0.92) 0%, rgba(7, 18, 14, 0.2) 60%, rgba(7, 18, 14, 0.4) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.25rem'

              }}>
                {/* Top Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.1em', 
                    background: 'rgba(0,0,0,0.6)', 
                    backdropFilter: 'blur(4px)',
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '4px',
                    color: 'var(--color-amber)'
                  }}>
                    {post.tag}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <InstagramIcon size={16} color="#FFF" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div>
                  <p style={{ 
                    fontSize: '0.88rem', 
                    lineHeight: '1.4', 
                    margin: '0 0 0.5rem 0',
                    fontWeight: 500,
                    opacity: 0.95
                  }}>
                    {post.caption}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-amber)' }}>
                    <span>❤️ {post.likes}</span>
                    <span>• View on Instagram ↗</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}
