
import { Shield, Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface AccessLevel {
  id: string;
  name: string;
  normalizedName: string;
}

const mockAccessLevels: AccessLevel[] = [
  { id: "1", name: "SuperAdmin", normalizedName: "SUPERADMIN" },
  { id: "2", name: "TokenGenerator", normalizedName: "TOKENGENERATOR" },
  { id: "3", name: "PortalAdmin", normalizedName: "PORTALADMIN" },
  { id: "4", name: "IntegrationUser", normalizedName: "INTEGRATIONUSER" },
];

const PortalAccessLevelSection = () => {
  const handleAddAccessLevel = () => {
    toast.success("Add access level functionality will be implemented here");
  };

  const handleEditAccessLevel = (id: string) => {
    toast.info(`Editing access level with ID: ${id}`);
  };

  const handleDeleteAccessLevel = (id: string) => {
    toast.info(`Deleting access level with ID: ${id}`);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Shield className="h-5 w-5 mr-2 text-[#353acd]" />
          <h2 className="text-xl font-semibold text-[#353acd]">Portal Access Level</h2>
        </div>
        <p className="text-gray-500 text-xs ml-7">Portal Access Management</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex-1"></div>
        <Button 
          className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white h-10 px-4 flex items-center gap-2"
          onClick={handleAddAccessLevel}
        >
          <Plus size={16} /> New
        </Button>
      </div>

      <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden w-full">
        <div className="border-b border-gray-200">
          <div className="grid grid-cols-2 bg-[#49495b] text-white text-xs p-3">
            <div className="px-3 font-medium">NAME</div>
            <div className="px-3 font-medium">NORMALISED NAME</div>
          </div>
        </div>
        <CardContent className="p-0">
          {mockAccessLevels.length > 0 ? (
            mockAccessLevels.map((level) => (
              <div 
                key={level.id} 
                className="grid grid-cols-2 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
              >
                <div className="text-gray-800 font-medium p-3 px-3 truncate text-xs">
                  {level.name}
                </div>
                <div className="text-gray-600 p-3 px-3 truncate text-xs flex items-center justify-between">
                  {level.normalizedName}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                      <DropdownMenuItem onClick={() => handleEditAccessLevel(level.id)}>
                        Edit access level
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-red-500 focus:text-red-500" 
                        onClick={() => handleDeleteAccessLevel(level.id)}
                      >
                        Delete access level
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 text-sm">No access levels found</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PortalAccessLevelSection;
