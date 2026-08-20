import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Meetups in Patna | Drifter',
  description: 'Join Drifter\'s weekly Sunday runs, trek prep gear workshops, adventure film socials, and community meetups in Patna, Bihar.',
  openGraph: {
    title: 'Events & Meetups in Patna | Drifter',
    description: 'Weekly Sunday runs, trek prep workshops, and social nights in Patna.',
    url: 'https://www.drifter.buzz/events',
  },
};

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Sunday Sunrise Run",
      date: "This Sunday, 6:00 AM",
      location: "Eco Park, Patna",
      type: "Fitness",
      free: true
    },
    {
      id: 2,
      title: "Trek Prep: Gear Workshop",
      date: "Next Saturday, 4:00 PM",
      location: "Drifter HQ",
      type: "Prep",
      free: true
    },
    {
      id: 3,
      title: "Community Social: Adventure Films",
      date: "End of Month, 7:00 PM",
      location: "Downtown Cafe",
      type: "Social",
      free: false
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="text-forest animate-fade-up">Events & Meetups</h1>
        <p className="animate-fade-up" style={{ animationDelay: '0.1s', maxWidth: '600px', marginBottom: 'var(--spacing-xl)' }}>
          We don't just meet on the trail. Join our weekly runs, prep workshops, and social nights in Patna.
        </p>

        <div className="grid md:grid-cols-2 gap-md">
          {events.map((evt) => (
            <div key={evt.id} style={{ 
              background: 'var(--color-bg-secondary)', 
              padding: 'var(--spacing-md)', 
              borderRadius: 'var(--radius-lg)' 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 className="text-forest" style={{ marginBottom: 'var(--spacing-xs)' }}>{evt.title}</h3>
                <span style={{ 
                  background: 'var(--color-amber)', 
                  color: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {evt.type}
                </span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-sm)' }}>
                <strong>{evt.date}</strong><br/>
                📍 {evt.location}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 600 }}>{evt.free ? 'Free' : 'Ticketed'}</span>
                {/* MVP RSVP goes to WhatsApp */}
                <a href="https://wa.me/" className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>RSVP</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
