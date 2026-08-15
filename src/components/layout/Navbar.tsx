'use client';

import { useState } from 'react';
import Link from 'next/link';
import DrifterLogo from '@/components/DrifterLogo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        {/* Responsive Logo */}
        <Link href="/" onClick={closeMobileMenu} className={styles.logoWrapper}>
          <DrifterLogo height={36} showTagline={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/community" className={styles.navLink}>Community</Link>
          <Link href="/expeditions" className={styles.navLink}>Expeditions</Link>
          <Link href="/events" className={styles.navLink}>Events</Link>
          <Link href="/stories" className={styles.navLink}>Stories</Link>
          <Link href="/partnerships" className={styles.navLink}>Partnerships</Link>
        </nav>

        {/* Action CTAs */}
        <div className={styles.ctaWrapper}>
          {/* Direct Phone Call Link */}
          <a 
            href="tel:+917978578168" 
            className={styles.phoneLink}
            title="Call Drifter Support: +91 7978578168"
          >
            📞 +91 79785 78168
          </a>

          <a 
            href="https://www.instagram.com/thedrifter.club/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Follow @thedrifter.club on Instagram"
            aria-label="Instagram"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(11, 26, 20, 0.06)',
              color: 'var(--color-forest)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, background 0.2s ease'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a 
            href="https://wa.me/917978578168?text=Hi%20Drifter!%20I%20want%20to%20join%20the%20tribe." 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaBtn}
          >
            Join Tribe
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            onClick={toggleMobileMenu} 
            className={styles.hamburgerBtn}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className={styles.mobileDrawer}>
            <Link href="/" onClick={closeMobileMenu} className={styles.mobileNavLink}>
              <span>Home</span>
              <span>&rarr;</span>
            </Link>
            <Link href="/expeditions" onClick={closeMobileMenu} className={styles.mobileNavLink}>
              <span>Expeditions & Trips</span>
              <span>&rarr;</span>
            </Link>
            <Link href="/community" onClick={closeMobileMenu} className={styles.mobileNavLink}>
              <span>Community Manifesto</span>
              <span>&rarr;</span>
            </Link>
            <Link href="/events" onClick={closeMobileMenu} className={styles.mobileNavLink}>
              <span>Events & Drops</span>
              <span>&rarr;</span>
            </Link>
            <Link href="/stories" onClick={closeMobileMenu} className={styles.mobileNavLink}>
              <span>Tribe Stories</span>
              <span>&rarr;</span>
            </Link>
            <Link href="/partnerships" onClick={closeMobileMenu} className={styles.mobileNavLink}>
              <span>Partnerships</span>
              <span>&rarr;</span>
            </Link>

            <a 
              href="tel:+917978578168" 
              className={styles.mobilePhoneBtn}
            >
              📞 Call Us: +91 79785 78168
            </a>

            <a 
              href="https://wa.me/917978578168?text=Hi%20Drifter!%20I%20want%20to%20join%20the%20tribe." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaBtn}
              style={{ textAlign: 'center', marginTop: '0.2rem', width: '100%', padding: '0.8rem 1rem', fontSize: '1rem' }}
            >
              Join WhatsApp Tribe →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
