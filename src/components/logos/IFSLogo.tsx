
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
      viewBox="0 0 24 24" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#0066B3" />
      <path d="M5 7H19V9H5V7Z" fill="white" />
      <path d="M5 11H19V13H5V11Z" />
      <path d="M5 15H19V17H5V15Z" fill="white" />
    </svg>
  );
};

export default IFSLogo;
