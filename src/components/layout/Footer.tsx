import Link from 'next/link';
import DrifterLogo from '@/components/DrifterLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <DrifterLogo variant="dark" height={44} showTagline={true} />
          <p style={{ marginTop: '0.8rem', fontSize: '0.88rem', color: 'rgba(248, 245, 240, 0.75)', lineHeight: '1.6' }}>
            🏢 <strong>Office:</strong> Maurya Lok Complex, Patna<br />
            ⚖️ <strong>Legal Name:</strong> Trevmonk Travelsolution Pvt Ltd<br />
            📞 <strong>Contact:</strong> +91 7978578168
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Explore</h4>
            <Link href="/expeditions">Expeditions</Link>
            <Link href="/community">Community</Link>
            <Link href="/stories">Stories</Link>
          </div>
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Connect</h4>
            <Link href="/events">Events</Link>
            <Link href="/partnerships">Partnerships</Link>
            <a href="https://www.instagram.com/thedrifter.club/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-amber)' }}>
              📸 Instagram (@thedrifter.club)
            </a>

            <a href="https://wa.me/917978578168" target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Join</h4>
            <a 
              href="https://wa.me/917978578168?text=Hi%20Drifter!%20I%20want%20to%20join%20the%20community%20WhatsApp%20group." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Drifter. Brand operated by <strong>Trevmonk Travelsolution Pvt Ltd</strong>. All rights reserved. | Office: Maurya Lok Complex, Patna | Contact: +91 7978578168</p>
        </div>
      </div>

    </footer>
  );
}
