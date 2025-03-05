
import React from 'react';

interface IFSLogoProps {
  className?: string;
  size?: number;
}

const IFSLogo: React.FC<IFSLogoProps> = ({ className = "", size = 20 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 800 800" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sunburst gradient */}
      <defs>
        <linearGradient id="purpleBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b57f9" />
          <stop offset="100%" stopColor="#1EAEDB" />
        </linearGradient>
      </defs>
      
      {/* Sunburst rays - top left to bottom right */}
      <g fill="url(#purpleBlueGradient)">
        {/* Top rays */}
        <path d="M200 120 L240 20 L260 95 Z" />
        <path d="M260 120 L320 30 L330 100 Z" />
        <path d="M320 130 L400 50 L390 120 Z" />
        <path d="M380 150 L450 80 L430 150 Z" />
        
        {/* Right rays */}
        <path d="M430 170 L520 110 L480 190 Z" />
        <path d="M460 220 L560 190 L500 240 Z" />
        <path d="M470 280 L570 270 L490 300 Z" />
        <path d="M470 340 L560 360 L480 370 Z" />
        
        {/* Bottom rays */}
        <path d="M450 400 L530 440 L460 430 Z" />
        <path d="M410 430 L470 500 L420 460 Z" />
        <path d="M360 450 L390 530 L370 470 Z" />
        <path d="M300 455 L310 540 L320 470 Z" />
        
        {/* Left rays */}
        <path d="M240 445 L220 530 L260 465 Z" />
        <path d="M190 425 L150 500 L210 445 Z" />
        <path d="M150 385 L80 440 L170 405 Z" />
        <path d="M130 330 L50 350 L150 345 Z" />
        
        {/* Top-left rays */}
        <path d="M120 270 L40 260 L130 290 Z" />
        <path d="M120 210 L30 170 L130 230 Z" />
        <path d="M140 160 L70 100 L150 180 Z" />
        <path d="M170 130 L110 60 L180 150 Z" />
      </g>
      
      {/* IFS Text */}
      <g transform="translate(450, 320)" fill="#9b57f9">
        <path d="M0 0 L40 0 L40 160 L0 160 Z" />
        <path d="M60 0 L200 0 L200 40 L60 40 Z" />
        <path d="M60 60 L160 60 L160 100 L60 100 Z" />
        <path d="M60 120 L200 120 L200 160 L60 160 Z" />
        <path d="M220 0 C270 0 320 30 320 80 C320 130 270 160 220 160 L220 120 C250 120 280 110 280 80 C280 50 250 40 220 40 L220 0 Z" />
      </g>
    </svg>
  );
};

export default IFSLogo;
