
import { Shield, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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

      <div className="bg-amber-100 rounded-md overflow-hidden border border-amber-200">
        <div className="grid grid-cols-2 p-4 bg-amber-200 text-amber-950 font-semibold text-sm">
          <div>Name</div>
          <div>Normalized Name</div>
        </div>
        <div>
          {mockAccessLevels.map((level) => (
            <div 
              key={level.id} 
              className="grid grid-cols-2 p-4 border-t border-amber-200 text-sm"
            >
              <div>{level.name}</div>
              <div>{level.normalizedName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalAccessLevelSection;
