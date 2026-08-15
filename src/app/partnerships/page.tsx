'use client';

import { useState } from 'react';

export default function Partnerships() {
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!org || !message) return;

    const waText = `Hi Drifter! Partnership Inquiry:\n🏢 *Organization:* ${org}\n✉️ *Email:* ${email || 'N/A'}\n📝 *Details:* ${message}`;
    const waUrl = `https://wa.me/917978578168?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-lg items-center">
          <div>
            <h1 className="text-forest animate-fade-up">Partner With Us</h1>
            <p className="animate-fade-up" style={{ animationDelay: '0.1s', marginBottom: 'var(--spacing-md)' }}>
              Are you a gym owner, a college society head, or a corporate HR looking for team-building? 
              Drifter partners with local organizations to bring the outdoors closer to your people.
            </p>
            
            <h3 className="text-amber">What partnership looks like:</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-main)' }}>
              <li>Cross-promotion and exclusive discounts for your members</li>
              <li>Co-hosted fitness sessions or gear workshops</li>
              <li>Custom corporate outdoor experiences</li>
              <li>College adventure club incubation</li>
            </ul>

            <h3 className="text-forest" style={{ marginTop: 'var(--spacing-lg)' }}>Get in Touch</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-forest)', margin: '0.3rem 0 1rem 0' }}>
              📞 <strong>Direct Phone Line:</strong> <a href="tel:+917978578168" style={{ color: 'var(--color-amber)', fontWeight: 'bold' }}>+91 79785 78168</a>
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-sm)' }}>
              <input 
                type="text" 
                required
                placeholder="Organization Name *" 
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }} 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc' }} 
              />
              <textarea 
                required
                placeholder="How can we partner? *" 
                rows={4} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
              ></textarea>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Inquiry via WhatsApp →
              </button>
            </form>
          </div>
          <div style={{ 
            height: '100%', 
            minHeight: '400px', 
            backgroundImage: "url('/images/bihar.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 69, 0, 0.2)'
          }}></div>
        </div>
      </div>
    </div>
  );
}
