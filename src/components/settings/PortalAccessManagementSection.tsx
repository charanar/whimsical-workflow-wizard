
import { User, Plus, Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export interface AccessManagement {
  id: string;
  name: string;
  roles: string[];
}

const mockAccessManagement: AccessManagement[] = [
  { id: "1", name: "Dashboard", roles: ["SuperAdmin", "PortalAdmin"] },
  { id: "2", name: "Settings", roles: ["SuperAdmin"] },
  { id: "3", name: "User Management", roles: ["SuperAdmin", "PortalAdmin"] },
  { id: "4", name: "Reporting", roles: ["SuperAdmin", "PortalAdmin", "IntegrationUser"] },
];

const PortalAccessManagementSection = () => {
  const [accessManagement, setAccessManagement] = useState<AccessManagement[]>(mockAccessManagement);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddAccessManagement = () => {
    toast.success("Add access management functionality will be implemented here");
  };

  const handleEditAccessManagement = (id: string) => {
    toast.info(`Editing access management with ID: ${id}`);
  };

  const handleDeleteAccessManagement = (id: string) => {
    toast.info(`Deleting access management with ID: ${id}`);
    setAccessManagement(accessManagement.filter(item => item.id !== id));
  };

  // Filter access management based on search term
  const filteredAccessManagement = accessManagement.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <User className="h-5 w-5 mr-2 text-[#353acd]" />
          <h2 className="text-xl font-semibold text-[#353acd]">Portal Access Management</h2>
        </div>
        <p className="text-gray-500 text-xs ml-7">Portal Access Management</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex-1"></div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 h-10 w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white h-10 px-4 flex items-center gap-2"
            onClick={handleAddAccessManagement}
          >
            <Plus size={16} /> New
          </Button>
        </div>
      </div>

      <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden w-full">
        <div className="border-b border-gray-200">
          <div className="grid grid-cols-2 bg-[#49495b] text-white text-xs p-3">
            <div className="px-3 font-medium">NAME</div>
            <div className="px-3 font-medium">ROLES</div>
          </div>
        </div>
        <CardContent className="p-0">
          {filteredAccessManagement.length > 0 ? (
            filteredAccessManagement.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-2 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
              >
                <div className="text-gray-800 font-medium p-3 px-3 truncate text-xs">
                  {item.name}
                </div>
                <div className="text-gray-600 p-3 px-3 text-xs flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.roles.map((role, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 px-2 py-0.5 rounded text-gray-700 text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuItem onClick={() => handleEditAccessManagement(item.id)}>
                        Edit access
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-red-500 focus:text-red-500" 
                        onClick={() => handleDeleteAccessManagement(item.id)}
                      >
                        Delete access
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 text-sm">No access management found</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PortalAccessManagementSection;
