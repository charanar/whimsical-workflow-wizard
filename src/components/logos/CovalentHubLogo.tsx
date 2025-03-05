
import React from 'react';
import { Network } from 'lucide-react';

interface CovalentHubLogoProps {
  size?: number;
  className?: string;
}

const CovalentHubLogo: React.FC<CovalentHubLogoProps> = ({ size = 48, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <Network 
          size={size} 
          className="text-[#1963ff]" 
          strokeWidth={1.5}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[30%] h-[30%] rounded-full bg-[#434ce8]" />
        </div>
      </div>
    </div>
  );
};

export default CovalentHubLogo;
