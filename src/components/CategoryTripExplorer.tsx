'use client';

import { useState } from 'react';
import { CATEGORIES_DATA, CategoryData, Trip } from '@/data/categories';
import styles from './CategoryTripExplorer.module.css';

interface CategoryTripExplorerProps {
  onSelectTrip?: (tripTitle: string) => void;
}

export default function CategoryTripExplorer({ onSelectTrip }: CategoryTripExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryData>(CATEGORIES_DATA[0]); // Default Bihar

  return (
    <div className={styles.explorerContainer}>
      {/* Category Tabs */}
      <div className={styles.categoryTabs}>
        {CATEGORIES_DATA.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.tabBtn} ${selectedCategory.id === cat.id ? styles.activeTabBtn : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.name} ({cat.trips.length})
          </button>
        ))}
      </div>

      {/* Selected Category Vision Banner */}
      <div className={styles.categoryVisionBox}>
        <h3 className={styles.categoryTitle}>{selectedCategory.name} Category</h3>
        <p className={styles.categoryVisionText}>
          "{selectedCategory.vision}"
        </p>
      </div>

      {/* Trips Grid for Selected Category */}
      <div className={styles.tripsGrid}>
        {selectedCategory.trips.map((trip) => (
          <div key={trip.id} className={styles.tripCard}>
            <div 
              className={styles.imageWrapper} 
              style={{ backgroundImage: `url(${trip.imageUrl})` }}
            >
              <span className={`
                ${styles.statusBadge} 
                ${trip.status === 'UPCOMING' ? styles.statusBadgeUpcoming : ''} 
                ${trip.status === 'WEEKLY MEETUP' ? styles.statusBadgeWeekly : ''}
              `}>
                {trip.status}
              </span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.tripLocation}>📍 {trip.location}</span>
              <h4 className={styles.tripTitle}>{trip.title}</h4>
              <p className={styles.tripVision}>{trip.vision}</p>
              <div className={styles.cardFooter}>
                {onSelectTrip ? (
                  <button 
                    onClick={() => onSelectTrip(trip.title)}
                    className={styles.actionBtn}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    Join Waitlist &rarr;
                  </button>
                ) : (
                  <a href="#waitlist" className={styles.actionBtn}>
                    View Trip Details &rarr;
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
