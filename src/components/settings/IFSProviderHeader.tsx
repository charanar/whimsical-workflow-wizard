
import { Database, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type IFSProviderHeaderProps = {
  onAddConnection: () => void;
};

const IFSProviderHeader = ({ onAddConnection }: IFSProviderHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2 text-[#062f4b]">
          <Database className="h-6 w-6 text-[#062f4b]" />
          IFS Access Provider
        </h1>
        <p className="text-gray-600 text-xs mt-1 ml-8">
          Configure your IFS access provider connections
        </p>
      </div>
      <Button 
        onClick={onAddConnection} 
        variant="outline"
        className="border-[#07603a] text-[#07603a] hover:bg-[#07603a]/10 font-semibold px-4 py-2 rounded-md shadow-md text-sm"
      >
        <Plus size={16} className="mr-1.5" /> New Connection
      </Button>
    </div>
  );
};

export default IFSProviderHeader;
