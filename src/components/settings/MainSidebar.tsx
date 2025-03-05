
import { Link } from "react-router-dom";
import { Cog, Share2 } from "lucide-react";

const MainSidebar = () => {
  return (
    <div className="w-12 bg-white backdrop-blur-sm flex flex-col items-center py-8 border-r border-gray-100 shadow-sm">
      {/* Top logo */}
      <div className="mb-16">
        <img 
          src="/lovable-uploads/e91fd30d-9816-4f0e-bc08-82343c1a82f6.png" 
          alt="Logo" 
          className="w-8 h-8"
        />
      </div>
      
      {/* Middle icons - using Share2 and Cog from lucide-react */}
      <div className="flex-1 flex flex-col items-center space-y-8">
        <Link to="/">
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <Share2 size={20} />
          </button>
        </Link>
        <button className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 text-[#1963ff] transition-colors">
          <Cog size={20} />
        </button>
      </div>
      
      {/* Bottom user icon with login link */}
      <div className="mt-auto">
        <Link to="/login">
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainSidebar;
