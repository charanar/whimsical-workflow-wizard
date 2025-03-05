
import { SettingsIcon, ExternalLink, Users, Mail, Clock } from "lucide-react";

type SettingsSidebarProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const SettingsSidebar = ({ activeCategory, setActiveCategory }: SettingsSidebarProps) => {
  return (
    <div className="w-40 border-r border-gray-100 bg-gray-50">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 text-[#353acd]">Settings</h2>
        
        {/* General Section */}
        <div className="mb-4">
          <button 
            onClick={() => setActiveCategory("general")}
            className={`flex items-center w-full mb-2 text-left px-3 py-2 rounded-lg transition-all ${
              activeCategory === "general" 
                ? "bg-[#1963ff] text-white font-medium shadow-md" 
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <SettingsIcon className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">General</span>
          </button>
          
          {/* Always display submenu items */}
          <div className="ml-2 pl-4 border-l-2 border-[#1963ff]">
            <ul className="space-y-1 py-1">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setActiveCategory("ifs-provider"); }}
                  className={`flex items-center text-xs py-1.5 px-2 rounded transition-colors duration-150 group
                    ${activeCategory === "ifs-provider" ? "bg-gray-200 text-[#1963ff] font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>IFS Access provider</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setActiveCategory("history-audits"); }}
                  className={`flex items-center text-xs py-1.5 px-2 rounded transition-colors duration-150 group
                    ${activeCategory === "history-audits" ? "bg-gray-200 text-[#1963ff] font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>History Audits</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setActiveCategory("history-logs-config"); }}
                  className={`flex items-center text-xs py-1.5 px-2 rounded transition-colors duration-150 group
                    ${activeCategory === "history-logs-config" ? "bg-gray-200 text-[#1963ff] font-medium" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>History Logs Configuration</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center text-xs text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>Email Alerts</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center text-xs text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>Email Alert Configuration</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center text-xs text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>Enable Integration</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Users Section */}
        <div>
          <button 
            onClick={() => setActiveCategory("users")}
            className={`flex items-center w-full mb-2 text-left px-3 py-2 rounded-lg transition-all ${
              activeCategory === "users" 
                ? "bg-[#1963ff] text-white font-medium shadow-md" 
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Users className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Users</span>
          </button>
          
          {/* Always display submenu items */}
          <div className="ml-2 pl-4 border-l-2 border-[#1963ff]">
            <ul className="space-y-1 py-1">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center text-xs text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>Portal Admin Users</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center text-xs text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>Portal Access Level</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center text-xs text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                >
                  <span className="mr-1 text-[#1963ff]">•</span>
                  <span>Portal Access Management</span>
                  <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
