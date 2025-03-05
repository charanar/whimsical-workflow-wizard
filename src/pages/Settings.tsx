
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Cog, Database, ExternalLink, Mail, Plus, Settings as SettingsIcon, Share2, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Mock data for IFS Access Provider connections
const initialConnections = [
  { id: 1, endpoint: "https://newifsendpoint.com", username: "NewConnection", integration: "Pandadoc" },
  { id: 2, endpoint: "https://newifsendpoint.com", username: "TestConnection", integration: "CompanyHouse" },
  { id: 3, endpoint: "https://newifsendpoint.com", username: "TestConnection", integration: "SendInBlue" },
  { id: 4, endpoint: "https://newifsendpoint.com", username: "TestConnection", integration: "GoogleMap" },
];

const Settings = () => {
  const navigate = useNavigate();
  // Track the active category for highlighting in the sidebar
  const [activeCategory, setActiveCategory] = useState("general");
  // For IFS connections data
  const [connections, setConnections] = useState(initialConnections);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleTestConnection = (id) => {
    console.log(`Testing connection ${id}`);
    // In a real app, this would test the connection and provide feedback
  };

  const handleDeleteConnection = (id) => {
    setConnections(connections.filter(conn => conn.id !== id));
  };

  const handleAddConnection = () => {
    const newId = Math.max(...connections.map(c => c.id), 0) + 1;
    const newConnection = {
      id: newId,
      endpoint: "https://newifsendpoint.com",
      username: "NewConnection",
      integration: "New Integration"
    };
    setConnections([...connections, newConnection]);
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
        
        {/* Middle icons - update to use Share2 and Cog from lucide-react */}
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
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); setActiveCategory("ifs-provider"); }}
                      className="flex items-center text-sm text-gray-700 py-1.5 px-2 rounded hover:bg-gray-100 transition-colors duration-150 group"
                    >
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
      <div className="flex-1 p-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <button 
            onClick={handleBackClick} 
            className="mb-6 flex items-center text-[#1963ff] hover:text-[#0e50dd] transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            <span>Back to Integrations</span>
          </button>
          
          {activeCategory === "ifs-provider" ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2">
                    <Mail className="h-6 w-6" />
                    IFS Access Provider .Net
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">Portal Access Management</p>
                </div>
                <Button onClick={handleAddConnection} className="bg-amber-500 hover:bg-amber-600">
                  <Plus size={16} className="mr-1" /> New
                </Button>
              </div>

              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="grid grid-cols-5 bg-amber-100 text-amber-900 font-medium p-4">
                  <div>IFS endpoint</div>
                  <div>User Name</div>
                  <div>Password</div>
                  <div>Integration</div>
                  <div className="text-center">Test Connection</div>
                </div>
                <CardContent className="p-0">
                  {connections.map((connection) => (
                    <div 
                      key={connection.id} 
                      className="grid grid-cols-5 p-4 border-b border-gray-100 items-center hover:bg-gray-50"
                    >
                      <div className="text-gray-800">{connection.endpoint}</div>
                      <div className="text-gray-800">{connection.username}</div>
                      <div>
                        <Input 
                          type="password" 
                          value="••••••••••••••••••••••••••••••••••••••••••••••" 
                          readOnly 
                          className="bg-gray-100 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <Badge variant="outline" className="bg-white border-gray-200 text-gray-700 hover:bg-white">
                          {connection.integration}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Button 
                          onClick={() => handleTestConnection(connection.id)} 
                          className="bg-amber-800 hover:bg-amber-900 text-white text-sm"
                        >
                          Test IFS Connection
                        </Button>
                        <Button 
                          onClick={() => handleDeleteConnection(connection.id)} 
                          variant="destructive" 
                          size="sm" 
                          className="text-sm"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-600">
                Select a setting category from the sidebar to configure your IFS integration settings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
