
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
        className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white h-10 px-4 flex items-center gap-2"
      >
        <Plus size={16} /> New Connection
      </Button>
    </div>
  );
};

export default IFSProviderHeader;
