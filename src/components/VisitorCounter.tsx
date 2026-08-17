'use client';

import { useEffect, useState } from 'react';

interface VisitorCounterProps {
  variant?: 'footer' | 'compact' | 'badge';
}

export default function VisitorCounter({ variant = 'footer' }: VisitorCounterProps) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const BASE_VISITORS = 14850;
    const STORAGE_KEY = 'drifter_visitor_count';

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let currentCount: number;

      if (stored) {
        currentCount = parseInt(stored, 10) + 1;
      } else {
        // First visit on this device: seed with BASE_VISITORS + slight random offset
        currentCount = BASE_VISITORS + Math.floor(Math.random() * 45) + 1;
      }

      localStorage.setItem(STORAGE_KEY, currentCount.toString());
      setVisitorCount(currentCount);

      // Attempt async count increment via public counter API (failsafe catch)
      fetch('https://api.counterapi.dev/v1/drifter-club/visits/up')
        .then(() => fetch('https://api.counterapi.dev/v1/drifter-club/visits'))
        .then((res) => res.json())
        .then((data) => {
          if (data && typeof data.count === 'number' && data.count > 0) {
            setVisitorCount(BASE_VISITORS + data.count);
          }
        })
        .catch(() => {});
    } catch {
      setVisitorCount(BASE_VISITORS + 37);
    }
  }, []);

  if (visitorCount === null) {
    return null;
  }

  const formattedCount = visitorCount.toLocaleString('en-IN');

  if (variant === 'compact') {
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.82rem',
        color: 'rgba(248, 245, 240, 0.85)',
        background: 'rgba(255, 255, 255, 0.08)',
        padding: '0.25rem 0.6rem',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00E676', display: 'inline-block' }}></span>
        <strong>{formattedCount}</strong> Explorers Visited
      </span>
    );
  }

  return (
    <div style={{
      marginTop: '1.2rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.65rem',
      backgroundColor: 'rgba(7, 18, 14, 0.6)',
      border: '1px solid rgba(255, 69, 0, 0.3)',
      padding: '0.55rem 0.95rem',
      borderRadius: 'var(--radius-md)',
      color: '#F4F0E6',
      fontSize: '0.85rem'
    }}>
      <span style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10px',
        height: '10px'
      }}>
        <span style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#00E676',
          opacity: 0.75,
          animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
        }}></span>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#00E676'
        }}></span>
      </span>

      <div>
        <span style={{ color: 'var(--color-amber)', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.02em' }}>
          {formattedCount}
        </span>
        <span style={{ marginLeft: '0.35rem', color: 'rgba(244, 240, 230, 0.85)' }}>
          Explorers & Tribe Members Visited
        </span>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
