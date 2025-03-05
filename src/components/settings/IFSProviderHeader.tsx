
import { Database, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type IFSProviderHeaderProps = {
  onAddConnection: () => void;
};

const IFSProviderHeader = ({ onAddConnection }: IFSProviderHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-3"> {/* Changed from mb-5 to mb-3 */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3 text-[#062f4b]">
          <Database className="h-8 w-8 text-[#062f4b]" />
          IFS Access Provider
        </h1>
        <p className="text-gray-600 text-sm mt-1 ml-11"> {/* Changed from mt-2 to mt-1 */}
          Configure your IFS access provider connections
        </p>
      </div>
      <Button 
        onClick={onAddConnection} 
        variant="outline"
        className="border-[#353acd] text-[#353acd] hover:bg-[#353acd]/10 font-semibold px-5 py-2.5 rounded-md shadow-md"
      >
        <Plus size={18} className="mr-1.5" /> New Connection
      </Button>
    </div>
  );
};

export default IFSProviderHeader;
