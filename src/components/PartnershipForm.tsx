'use client';

import { useState } from 'react';

export default function PartnershipForm() {
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
  );
}
