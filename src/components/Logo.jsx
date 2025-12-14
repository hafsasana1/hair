import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="40%" stopColor="#34d399" />
          <stop offset="70%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <circle cx="32" cy="32" r="30" fill="url(#hairGradient)" opacity="0.15" />
      
      <g filter="url(#glow)">
        <path
          d="M16 20C16 20 12 32 16 44C20 56 28 58 34 56"
          stroke="url(#hairGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M26 14C26 14 20 30 24 44C28 58 34 60 38 58"
          stroke="url(#hairGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M36 10C36 10 30 28 34 44C38 60 44 62 48 58"
          stroke="url(#hairGradient)"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M46 14C46 14 42 32 46 46C50 60 54 58 56 54"
          stroke="url(#hairGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      
      <path
        d="M40 28C40 28 48 22 56 26C64 30 60 42 54 48C48 54 40 52 38 48C36 44 40 34 40 28Z"
        fill="url(#leafGradient)"
      />
      <path
        d="M50 30C48 38 44 46 40 48"
        stroke="#047857"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      <circle cx="20" cy="10" r="3" fill="url(#accentGradient)" />
      <circle cx="52" cy="10" r="2.5" fill="url(#accentGradient)" />
      <circle cx="10" cy="30" r="2" fill="url(#accentGradient)" />
      
      <path
        d="M6 48L9 44M9 44L12 48M9 44V52"
        stroke="url(#accentGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
