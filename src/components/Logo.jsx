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
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      
      <circle cx="32" cy="32" r="30" fill="url(#hairGradient)" opacity="0.1" />
      
      <path
        d="M18 18C18 18 16 28 18 38C20 48 26 52 32 52"
        stroke="url(#hairGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26 14C26 14 22 26 24 38C26 50 30 54 34 54"
        stroke="url(#hairGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 12C34 12 30 26 32 40C34 54 38 56 40 56"
        stroke="url(#hairGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 14C42 14 40 28 42 40C44 52 46 54 48 52"
        stroke="url(#hairGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 18C48 18 48 30 48 40C48 50 50 50 52 48"
        stroke="url(#hairGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M42 32C42 32 48 26 54 28C60 30 58 38 54 42C50 46 44 46 42 44C40 42 42 36 42 32Z"
        fill="url(#leafGradient)"
      />
      <path
        d="M48 30C48 34 46 40 44 42"
        stroke="#15803d"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      <circle cx="22" cy="12" r="2" fill="url(#accentGradient)" />
      <circle cx="50" cy="14" r="1.5" fill="url(#accentGradient)" />
      <circle cx="14" cy="26" r="1.5" fill="url(#accentGradient)" />
      
      <path
        d="M8 44L10 42M10 42L12 44M10 42V46"
        stroke="url(#accentGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 54L54 52M54 52L56 54M54 52V56"
        stroke="url(#accentGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
