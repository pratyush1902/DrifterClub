import React from 'react';

interface DrifterLogoProps {
  variant?: 'full' | 'icon' | 'dark' | 'light';
  height?: number;
  showTagline?: boolean;
}

export default function DrifterLogo({ 
  variant = 'full', 
  height = 42,
  showTagline = false 
}: DrifterLogoProps) {
  const isDark = variant === 'dark';
  const primaryColor = isDark ? '#FFFFFF' : '#0B1A14';
  const sunColor = '#FF4500';
  const innerBg = isDark ? '#07120E' : '#F8F5F0';

  // High-precision vector SVG matching official logo image 1:1
  const LogoEmblem = (
    <svg 
      width={height * 0.88} 
      height={height} 
      viewBox="0 0 100 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Main D Outer Block */}
      <path
        d="M 10,5 H 52 C 78,5 95,22 95,55 C 95,88 78,105 52,105 H 10 Z"
        fill={primaryColor}
      />
      {/* Inner D Arch Cutout */}
      <path
        d="M 32,22 H 50 C 66,22 76,34 76,55 C 76,76 66,88 50,88 H 32 Z"
        fill={innerBg}
      />
      {/* Left Mountain Peak */}
      <path
        d="M 10,75 L 42,42 L 56,58 Z"
        fill={primaryColor}
      />
      {/* Right Mountain Peak */}
      <path
        d="M 45,62 L 60,48 L 76,70 Z"
        fill={primaryColor}
      />
      {/* Orange Sun Circle */}
      <circle cx="50" cy="34" r="7.5" fill={sunColor} />
      
      {/* Winding River Trail (Cream/Inner Color) */}
      <path
        d="M 10,105 Q 40,95 48,82 T 76,76 L 95,105 Z"
        fill={primaryColor}
      />
      <path
        d="M 10,96 Q 36,88 44,78 T 68,72 L 68,78 Q 42,84 34,94 Z"
        fill={innerBg}
      />
    </svg>
  );

  if (variant === 'icon') {
    return LogoEmblem;
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', verticalAlign: 'middle' }}>
      {LogoEmblem}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Custom DRIFTER Wordmark */}
        <div style={{ 
          fontFamily: 'var(--font-display)', 
          fontWeight: 900, 
          fontSize: `${height * 0.58}px`, 
          letterSpacing: '0.08em',
          color: primaryColor,
          lineHeight: 1,
          textTransform: 'uppercase'
        }}>
          DRIFTER
        </div>
        
        {(showTagline || variant === 'full') && (
          <span 
            className="drifter-tagline"
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: `${Math.max(9, height * 0.18)}px`, 
              letterSpacing: '0.12em',
              color: isDark ? 'rgba(244, 240, 230, 0.75)' : 'var(--color-text-muted)',
              marginTop: '0.2rem',
              textTransform: 'uppercase',
              fontWeight: 600,
              whiteSpace: 'nowrap'
            }}
          >
            COME FOR THE JOURNEY. STAY FOR THE PEOPLE.
          </span>
        )}
      </div>
    </div>
  );
}

