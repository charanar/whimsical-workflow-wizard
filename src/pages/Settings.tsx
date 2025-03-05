import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Cog, Database, ExternalLink, Mail, Plus, Settings as SettingsIcon, Share2, Trash2, Users, Check, X, Circle, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for IFS Access Provider connections with correct endpoint pattern
const initialConnections = [
  { id: 1, endpoint: "https://newifsendpoint.com/service1", username: "admin_user", integration: "Pandadoc", status: "active", condition: "online" },
  { id: 2, endpoint: "https://newifsendpoint.com/connect", username: "service_account", integration: "CompanyHouse", status: "active", condition: "online" },
  { id: 3, endpoint: "https://newifsendpoint.com/hooks", username: "api_user", integration: "SendInBlue", status: "deactivated", condition: "offline" },
  { id: 4, endpoint: "https://newifsendpoint.com/maps", username: "maps_service", integration: "GoogleMap", status: "active", condition: "online" },
];

const Settings = () => {
  const navigate = useNavigate();
  // Track the active category for highlighting in the sidebar
  const [activeCategory, setActiveCategory] = useState("ifs-provider");
  // For IFS connections data
  const [connections, setConnections] = useState(initialConnections);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleTestConnection = (id) => {
    console.log(`Testing connection ${id}`);
    toast.success(`Connection ${id} tested successfully!`);
    // In a real app, this would test the connection and provide feedback
  };

  const handleDeleteConnection = (id) => {
    setConnections(connections.filter(conn => conn.id !== id));
    toast.info(`Connection ${id} deleted`);
  };

  const handleAddConnection = () => {
    const newId = Math.max(...connections.map(c => c.id), 0) + 1;
    const newConnection = {
      id: newId,
      endpoint: "https://newifsendpoint.com/newconnection",
      username: "new_user",
      integration: "New Integration",
      status: "active",
      condition: "online"
    };
    setConnections([...connections, newConnection]);
    toast.success("New connection added");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar - significantly narrower */}
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
      
      {/* Settings sidebar - narrower */}
      <div className="w-52 border-r border-gray-100 bg-gray-50">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4 text-[#1963ff]">Settings</h2>
          
          {/* General Section - reduced vertical spacing */}
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
            
            {activeCategory === "general" && (
              <div className="ml-2 pl-4 border-l-2 border-[#1963ff] animate-fade-in">
                <ul className="space-y-1 py-1">
                  <li>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); setActiveCategory("ifs-provider"); }}
                      className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                    >
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>IFS Access provider</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>History Audits</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>History Logs Configuration</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>Email Alerts</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>Email Alert Configuration</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>Enable Integration</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Users Section - reduced vertical spacing */}
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
            
            {activeCategory === "users" && (
              <div className="ml-2 pl-4 border-l-2 border-[#1963ff] animate-fade-in">
                <ul className="space-y-1 py-1">
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>Portal Admin Users</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
                      <span>Portal Access Level</span>
                      <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group">
                      <span className="mr-1 text-[#1963ff]">•</span>
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

      {/* Main content area - expanded to utilize full width */}
      <div className="flex-1 bg-slate-50">
        <div className="p-4 max-w-full">
          {/* Back button */}
          <button 
            onClick={handleBackClick} 
            className="mb-4 flex items-center text-[#1EAEDB] hover:text-[#0FA0CE] transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            <span className="font-medium">Back to Integrations</span>
          </button>
          
          {activeCategory === "ifs-provider" ? (
            <div>
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h1 className="text-3xl font-bold flex items-center gap-3 text-[#1EAEDB]">
                    <Database className="h-8 w-8 text-[#33C3F0]" />
                    IFS Access Provider
                  </h1>
                  <p className="text-gray-600 text-sm mt-2 ml-11">Configure your IFS access provider connections</p>
                </div>
                <Button 
                  onClick={handleAddConnection} 
                  className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white font-semibold px-5 py-2.5 rounded-md shadow-md"
                >
                  <Plus size={18} className="mr-1.5" /> New Connection
                </Button>
              </div>

              <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-5 bg-white text-gray-500 text-sm p-4">
                    <div className="px-3 col-span-2 font-medium">IFS ENDPOINT</div>
                    <div className="px-3 font-medium">USERNAME</div>
                    <div className="px-3 font-medium">STATUS</div>
                    <div className="px-3 text-center font-medium">CONDITION</div>
                  </div>
                </div>
                <CardContent className="p-0">
                  {connections.map((connection) => (
                    <div 
                      key={connection.id} 
                      className="grid grid-cols-5 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-gray-800 font-medium p-4 px-3 col-span-2 truncate flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-600">{connection.username.charAt(0).toUpperCase()}</span>
                        </div>
                        {connection.endpoint}
                      </div>
                      <div className="text-gray-600 p-4 px-3 truncate">{connection.username}</div>
                      <div className="p-4 px-3">
                        {connection.status === "active" ? (
                          <span className="inline-flex items-center text-green-600">
                            <Check size={16} className="mr-1" /> Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-red-500">
                            <X size={16} className="mr-1" /> Deactivated
                          </span>
                        )}
                      </div>
                      <div className="p-4 px-3 flex items-center justify-between">
                        <span className={`inline-flex items-center ${connection.condition === "online" ? "text-green-600" : "text-red-500"}`}>
                          <Circle size={8} className="mr-1 fill-current" /> 
                          {connection.condition === "online" ? "Online" : "Offline"}
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuItem onClick={() => handleTestConnection(connection.id)}>
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Item history
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Set as admin
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              Edit item
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-500 focus:text-red-500" 
                              onClick={() => handleDeleteConnection(connection.id)}
                            >
                              Delete item
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <div className="mt-5 text-sm text-gray-500 flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-[#33C3F0]" />
                <p>You can add multiple connections to different IFS instances. Each connection can be linked to a specific integration.</p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-md">
              <div className="flex flex-col items-center justify-center py-8">
                <SettingsIcon className="h-16 w-16 text-[#1EAEDB] opacity-20 mb-4" />
                <p className="text-gray-600 text-lg">
                  Select a setting category from the sidebar to configure your IFS integration settings.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
