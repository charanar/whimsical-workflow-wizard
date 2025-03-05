
import React from 'react';

interface IFSLogoProps {
  className?: string;
  size?: number;
}

const IFSLogo: React.FC<IFSLogoProps> = ({ className = "", size = 48 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with gradient */}
      <circle 
        cx="100" 
        cy="100" 
        r="90" 
        fill="url(#ifsGradient)" 
      />
      
      {/* Define the gradient */}
      <defs>
        <linearGradient id="ifsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
      </defs>
      
      {/* IFS Text */}
      <text 
        x="100" 
        y="120" 
        fontFamily="Arial, sans-serif" 
        fontSize="70" 
        fontWeight="bold" 
        fill="white" 
        textAnchor="middle"
      >
        IFS
      </text>
    </svg>
  );
};

export default IFSLogo;
