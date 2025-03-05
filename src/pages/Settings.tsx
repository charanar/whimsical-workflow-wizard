import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Settings as SettingsIcon, Users, ExternalLink } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  // Track the active category for highlighting in the sidebar
  const [activeCategory, setActiveCategory] = useState("general");

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar - same as in Index.tsx */}
      <div className="w-16 bg-white backdrop-blur-sm flex flex-col items-center py-8 border-r border-gray-100 shadow-sm">
        {/* Top logo */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/e91fd30d-9816-4f0e-bc08-82343c1a82f6.png" 
            alt="Logo" 
            className="w-8 h-8"
          />
        </div>
        
        {/* Middle icons - keep the same as Index.tsx */}
        <div className="flex-1 flex flex-col items-center space-y-8">
          <Link to="/">
            <button className="h-10 w-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.68387 9.5H15.3161C15.7653 9.5 16.0029 9.5 16.1851 9.38751C16.3445 9.28732 16.4613 9.13331 16.5171 8.95501C16.5808 8.75172 16.5388 8.50154 16.4547 8.00117L16.1444 6.04533C16.0985 5.80397 16.0756 5.68329 16.0206 5.57582C15.9711 5.48044 15.9032 5.39699 15.8209 5.33041C15.7282 5.25552 15.6139 5.21118 15.3852 5.12249C14.3693 4.7084 13.1932 4.5 12 4.5C10.8068 4.5 9.63069 4.7084 8.6148 5.12249C8.38609 5.21118 8.27173 5.25552 8.17906 5.33041C8.09681 5.39699 8.02887 5.48044 7.97943 5.57582C7.92439 5.68329 7.90147 5.80397 7.85562 6.04533L7.54534 8.00117C7.46124 8.50154 7.41919 8.75172 7.48294 8.95501C7.53867 9.13331 7.65546 9.28732 7.81493 9.38751C7.99708 9.5 8.23466 9.5 8.68387 9.5Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 10L8 12C8 14.2091 9.79086 16 12 16V16C14.2091 16 16 14.2091 16 12V10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 16V19.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
          </Link>
          <button className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 text-[#1963ff] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0505 9L15.0505 15M15.0505 15L12.0505 12M15.0505 15L18.0505 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 15.0002C7.10729 14.9942 6 13.9543 6 11.6248V10.0002C6 7.00024 7.5 6 10.5 6H16.5C17.9045 6 19 7.09555 19 8.50024V11.6248C19 13.437 18.423 14.6922 17.478 15.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 15V18.5C12 18.7761 11.7761 19 11.5 19H7.5C6.67157 19 6 18.3284 6 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
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

      {/* Settings sidebar */}
      <div className="w-64 border-r border-gray-100 bg-gray-50">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Settings</h2>
          
          {/* General Section */}
          <div className="mb-8">
            <button 
              onClick={() => setActiveCategory("general")}
              className={`flex items-center w-full mb-3 text-left px-3 py-2 rounded-lg transition-all ${
                activeCategory === "general" 
                  ? "bg-[#1963ff] text-white font-medium shadow-md" 
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">General</span>
            </button>
            
            {activeCategory === "general" && (
              <div className="ml-2 pl-4 border-l-2 border-[#1963ff] animate-fade-in">
                <ul className="space-y-2 py-1">
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>IFS Access provider</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>History Audits</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>History Logs Configuration</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>Email Alerts</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>Email Alert Configuration</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>Enable Integration</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Users Section */}
          <div>
            <button 
              onClick={() => setActiveCategory("users")}
              className={`flex items-center w-full mb-3 text-left px-3 py-2 rounded-lg transition-all ${
                activeCategory === "users" 
                  ? "bg-[#1963ff] text-white font-medium shadow-md" 
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Users className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Users</span>
            </button>
            
            {activeCategory === "users" && (
              <div className="ml-2 pl-4 border-l-2 border-[#1963ff] animate-fade-in">
                <ul className="space-y-2 py-1">
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>Portal Admin Users</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>Portal Access Level</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1">•</span>
                      <span>Portal Access Management</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button 
            onClick={handleBackClick} 
            className="mb-6 flex items-center text-[#1963ff] hover:text-[#0e50dd] transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            <span>Back to Integrations</span>
          </button>
          
          <h1 className="text-3xl font-bold mb-8">Settings Dashboard</h1>
          
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <p className="text-gray-600">
              Select a setting category from the sidebar to configure your IFS integration settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
