
import { Circle, MoreVertical, Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Connection {
  id: number;
  endpoint: string;
  username: string;
  integration: string;
  status: string;
  condition: string;
}

interface ConnectionsTableProps {
  connections: Connection[];
  onTestConnection: (id: number) => void;
  onDeleteConnection: (id: number) => void;
}

const ConnectionsTable = ({ connections, onTestConnection, onDeleteConnection }: ConnectionsTableProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="grid grid-cols-5 bg-white text-gray-500 text-sm p-4">
          <div className="px-3 col-span-2 font-medium">IFS ENDPOINT</div>
          <div className="px-3 font-medium">USERNAME</div>
          <div className="px-3 font-medium">STATUS</div>
          <div className="px-3 text-center font-medium">CONDITION</div>
        </div>
      </div>
      <CardContent className="p-0">
        {connections.map((connection) => (
          <div 
            key={connection.id} 
            className="grid grid-cols-5 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
          >
            <div className="text-gray-800 font-medium p-4 px-3 col-span-2 truncate flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">{connection.username.charAt(0).toUpperCase()}</span>
              </div>
              {connection.endpoint}
            </div>
            <div className="text-gray-600 p-4 px-3 truncate">{connection.username}</div>
            <div className="p-4 px-3">
              {connection.status === "active" ? (
                <span className="inline-flex items-center text-green-600">
                  <Check size={16} className="mr-1" /> Active
                </span>
              ) : (
                <span className="inline-flex items-center text-red-500">
                  <X size={16} className="mr-1" /> Deactivated
                </span>
              )}
            </div>
            <div className="p-4 px-3 flex items-center justify-between">
              <span className={`inline-flex items-center ${connection.condition === "online" ? "text-green-600" : "text-red-500"}`}>
                <Circle size={8} className="mr-1 fill-current" /> 
                {connection.condition === "online" ? "Online" : "Offline"}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => onTestConnection(connection.id)}>
                    View details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Item history
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Duplicate
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Set as admin
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Edit item
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-red-500 focus:text-red-500" 
                    onClick={() => onDeleteConnection(connection.id)}
                  >
                    Delete item
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ConnectionsTable;
