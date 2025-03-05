
import React from 'react';

interface CovalentHubLogoProps {
  size?: number;
  className?: string;
}

const CovalentHubLogo: React.FC<CovalentHubLogoProps> = ({ size = 48, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/cc981e67-6e55-4de9-ad94-567d83e4b7d3.png" 
        alt="Covalent Hub Logo" 
        style={{ width: size, height: size }}
        className="object-contain"
      />
    </div>
  );
};

export default CovalentHubLogo;
