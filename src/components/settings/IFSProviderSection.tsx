
import { Mail } from "lucide-react";
import { Connection } from "./ConnectionsTable";
import ConnectionsTable from "./ConnectionsTable";
import IFSProviderHeader from "./IFSProviderHeader";

interface IFSProviderSectionProps {
  connections: Connection[];
  onAddConnection: () => void;
  onTestConnection: (id: number) => void;
  onDeleteConnection: (id: number) => void;
}

const IFSProviderSection = ({ connections, onAddConnection, onTestConnection, onDeleteConnection }: IFSProviderSectionProps) => {
  return (
    <div>
      <IFSProviderHeader onAddConnection={onAddConnection} />
      
      <ConnectionsTable 
        connections={connections} 
        onTestConnection={onTestConnection} 
        onDeleteConnection={onDeleteConnection} 
      />
      
      <div className="mt-5 text-sm text-gray-500 flex items-start gap-2">
        <Mail className="h-4 w-4 mt-0.5 text-[#33C3F0]" />
        <p>You can add multiple connections to different IFS instances. Each connection can be linked to a specific integration.</p>
      </div>
    </div>
  );
};

export default IFSProviderSection;
