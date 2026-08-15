import styles from './ActivityTypesSection.module.css';

export default function ActivityTypesSection() {
  const activityCategories = [
    {
      id: 1,
      badge: '🏕️ WEEKEND WILD',
      title: 'Bihar Weekend Camping & Hikes',
      description: 'Reclaiming the wild right in our backyard. Overnight campfires, ridge trekking, and stargazing.',
      colorClass: styles.cardColor1,
      gridClass: styles.span2,
      activities: [
        'Kaimur Hills & Rohtasgarh Fort Plateau Camping',
        'Valmiki Tiger Reserve Forest & Riverbank Hikes',
        'Campfire Jam Sessions, Stargazing & Outdoor Cooking',
        'Rajgir Ridge Weekend Treks & Nature Trails'
      ]
    },
    {
      id: 2,
      badge: '🏔️ HIGH ALTITUDE',
      title: 'Himalayan Expeditions',
      description: 'Taking the grit of Bihar to the high peaks of Nepal, Bengal, Sikkim & Himachal.',
      colorClass: styles.cardColor2,
      gridClass: styles.tallCard,
      activities: [
        'Pokhara - Dhampus Annapurna Trail (Nepal)',
        'Sandakphu Kanchenjunga Ridge Trek (North Bengal)',
        'Sikkim High Altitude Glacial Lakes Expedition',
        'Hampta Pass & Spiti Ridge Crossover (Himachal)',
        'Goechala Pass High Mountain Summit Trails'
      ]
    },
    {
      id: 3,
      badge: '🏃 URBAN BASECAMP',
      title: 'Patna Fitness & Socials',
      description: 'Weekly community meetups, trail runs, and social nights right in Patna basecamp.',
      colorClass: styles.cardColor3,
      gridClass: '',
      activities: [
        'Sunday Sunrise Trail Runs (Eco Park, Patna)',
        'Outdoor Adventure Movie & Film Nights',
        'Tribe Coffee & Campfire Meetups',
        'Endurance & Trail Running Conditioning'
      ]
    },
    {
      id: 4,
      badge: '🎒 SAFETY & PREP',
      title: 'Gear & Mountain Workshops',
      description: 'Hands-on preparation so you step onto the trail confident, safe, and fully prepped.',
      colorClass: styles.cardColor4,
      gridClass: '',
      activities: [
        'Trek Packing & Technical Gear Masterclasses',
        'Himalayan Altitude Safety & First Aid Prep',
        'Navigation, Map Reading & Trail Ethics',
        'Leave No Trace Wilderness Workshops'
      ]
    },
    {
      id: 5,
      badge: '🤝 COMMUNITY PARTNERS',
      title: 'Custom Campus & Corporate Drops',
      description: 'Tailored outdoor experiences and adventure club incubation for organizations & colleges.',
      colorClass: styles.cardColor5,
      gridClass: styles.span2,
      activities: [
        'Corporate Team-Building Wilderness Rallies',
        'College Adventure Club & Society Incubation',
        'Private Group Expeditions & Customized Drops',
        'Cross-Promotional Fitness & Gear Partner Sessions'
      ]
    }
  ];

  return (
    <section className="section bg-secondary" style={{ borderTop: '2px solid var(--color-forest)' }}>
      <div className="container">
        <h2 className={`text-forest ${styles.sectionTitle}`}>What We Do</h2>
        <p className={styles.sectionSubtitle}>
          We don't do generic tourism. Explore the different types of outdoor adventures, campus drops, and workshops we organize.
        </p>

        <div className={styles.asymmetricGrid}>
          {activityCategories.map((cat) => (
            <div key={cat.id} className={`${styles.card} ${cat.colorClass} ${cat.gridClass}`}>
              <span className={styles.badge}>{cat.badge}</span>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>

              <ul className={styles.activityList}>
                {cat.activities.map((act, idx) => (
                  <li key={idx} className={styles.activityItem}>
                    <span className={styles.bulletIcon}>✦</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
