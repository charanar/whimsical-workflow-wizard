
import { Database, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type IFSProviderHeaderProps = {
  onAddConnection: () => void;
};

const IFSProviderHeader = ({ onAddConnection }: IFSProviderHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 text-[#1EAEDB]">
          <Database className="h-8 w-8 text-[#33C3F0]" />
          IFS Access Provider
        </h1>
        <p className="text-gray-600 text-sm mt-2 ml-11">Configure your IFS access provider connections</p>
      </div>
      <Button 
        onClick={onAddConnection} 
        className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white font-semibold px-5 py-2.5 rounded-md shadow-md"
      >
        <Plus size={18} className="mr-1.5" /> New Connection
      </Button>
    </div>
  );
};

export default IFSProviderHeader;
