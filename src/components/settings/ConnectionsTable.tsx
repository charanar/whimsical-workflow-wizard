
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
    <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden w-full">
      <div className="border-b border-gray-200">
        <div className="grid grid-cols-5 bg-white text-gray-500 text-xs p-3">
          <div className="px-3 font-medium">IFS ENDPOINT</div>
          <div className="px-3 font-medium">USERNAME</div>
          <div className="px-3 font-medium">PASSWORD</div>
          <div className="px-3 font-medium">INTEGRATIONS</div>
          <div className="px-3 font-medium text-center">TEST CONNECTION</div>
        </div>
      </div>
      <CardContent className="p-0">
        {connections.map((connection) => (
          <div 
            key={connection.id} 
            className="grid grid-cols-5 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
          >
            <div className="text-gray-800 font-medium p-3 px-3 truncate flex items-center gap-2 text-xs">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">{connection.username.charAt(0).toUpperCase()}</span>
              </div>
              {connection.endpoint}
            </div>
            <div className="text-gray-600 p-3 px-3 truncate text-xs">{connection.username}</div>
            <div className="text-gray-600 p-3 px-3 text-xs">••••••••</div>
            <div className="text-gray-600 p-3 px-3 text-xs">
              {connection.status === "active" ? (
                <span className="inline-flex items-center text-green-600">
                  <Check size={14} className="mr-1" /> {connection.integration}
                </span>
              ) : (
                <span className="inline-flex items-center text-gray-500">
                  {connection.integration}
                </span>
              )}
            </div>
            <div className="p-3 px-3 flex items-center justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs border-[#353acd] text-[#353acd] hover:bg-[#353acd]/10 h-7 px-2"
                onClick={() => onTestConnection(connection.id)}
              >
                Test Connection
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0 ml-2">
                    <MoreVertical className="h-3 w-3" />
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
