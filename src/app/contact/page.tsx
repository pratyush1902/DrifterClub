export default function Contact() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h1 className="text-forest text-center animate-fade-up">Contact Us</h1>
        <p className="text-center animate-fade-up" style={{ animationDelay: '0.1s', marginBottom: 'var(--spacing-lg)' }}>
          Have a question? Want to join the community? Or just want to say hi? Reach out to us.
        </p>

        <div style={{ background: 'var(--color-bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--spacing-lg)' }}>
          <h3 className="text-forest" style={{ marginBottom: '1rem' }}>Basecamp & Legal Info</h3>
          <p style={{ marginBottom: '0.5rem' }}>🏢 <strong>Office Address:</strong> Maurya Lok Complex, Patna, Bihar</p>
          <p style={{ marginBottom: '0.5rem' }}>⚖️ <strong>Legal Name:</strong> Trevmonk Travelsolution Pvt Ltd</p>
          <p style={{ marginBottom: '0.5rem' }}>📱 <strong>WhatsApp / Call:</strong> <a href="https://wa.me/917978578168" target="_blank" rel="noopener noreferrer" className="text-amber">+91 7978578168</a></p>
          <p style={{ marginBottom: '0.5rem' }}>📸 <strong>Instagram:</strong> <a href="https://www.instagram.com/thedrifter.club/" target="_blank" rel="noopener noreferrer" className="text-amber">@thedrifter.club</a></p>
        </div>


        <h3 className="text-forest">Send a Message</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          <input type="text" placeholder="Your Name" style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }} />
          <textarea placeholder="Your Message" rows={5} style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}></textarea>
          <button type="button" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}
