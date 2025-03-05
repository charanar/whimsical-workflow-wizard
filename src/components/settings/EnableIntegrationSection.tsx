
import { useState } from "react";
import { Mail, Plus, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { companies } from "@/data/companies";

interface Integration {
  id: string;
  name: string;
  logo: React.ComponentType;
  selected: boolean;
}

const EnableIntegrationSection = () => {
  const [clientName, setClientName] = useState("Waterlogic");
  const [clientCode, setClientCode] = useState("Waterlogic");
  
  // Initialize integrations from companies data
  const [selectedIntegrations, setSelectedIntegrations] = useState<Integration[]>(
    companies.map(company => ({
      id: company.id,
      name: company.name,
      logo: company.logo,
      selected: ['1', '2', '3', '4'].includes(company.id) // Pre-select some integrations
    }))
  );

  const handleSave = () => {
    toast.success("Integration settings saved successfully");
  };

  const handleToggleIntegration = (id: string) => {
    setSelectedIntegrations(prevIntegrations => 
      prevIntegrations.map(integration => 
        integration.id === id 
          ? { ...integration, selected: !integration.selected } 
          : integration
      )
    );
  };

  // Filter selected integrations for display
  const displayedIntegrations = selectedIntegrations.filter(i => i.selected);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-[#1963ff] p-1.5 rounded text-white">
            <Mail size={16} />
          </div>
          <h1 className="text-xl font-semibold">Enable Integration</h1>
        </div>
        <p className="text-sm text-gray-600 ml-7">Client Configuration</p>
      </div>
      
      <Card className="shadow-sm border-gray-200">
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-600 font-medium text-sm">Client Name</label>
            </div>
            <div className="md:col-span-2">
              <Input 
                value={clientName} 
                onChange={(e) => setClientName(e.target.value)}
                className="bg-gray-100" 
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-600 font-medium text-sm">Client Code</label>
            </div>
            <div className="md:col-span-2">
              <Input 
                value={clientCode} 
                onChange={(e) => setClientCode(e.target.value)}
                className="bg-gray-100" 
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-600 font-medium text-sm">Integrations</label>
            </div>
            <div className="md:col-span-2">
              <div className="relative min-h-[46px] border border-gray-300 rounded-md bg-white p-2">
                <div className="flex flex-wrap gap-2">
                  {displayedIntegrations.map((integration) => {
                    const Logo = integration.logo;
                    return (
                      <div 
                        key={integration.id}
                        className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm border border-gray-200"
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          <Logo />
                        </div>
                        <span>{integration.name}</span>
                        <button
                          onClick={() => handleToggleIntegration(integration.id)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    );
                  })}
                  {displayedIntegrations.length > 6 && (
                    <div className="flex items-center text-gray-700 font-medium">
                      +{displayedIntegrations.length - 6}
                    </div>
                  )}
                </div>
                
                {/* Dropdown for adding more integrations would go here in a real implementation */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="fill-current h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-center">
            <Button 
              onClick={handleSave}
              className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white px-20"
            >
              <Plus size={16} className="mr-1.5" /> Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnableIntegrationSection;
