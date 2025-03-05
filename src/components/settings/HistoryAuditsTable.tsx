
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export interface AuditRecord {
  id: number;
  operationType: string;
  integrationScreen: string;
  oldValue: string;
  newValue: string;
  createdOn: string;
  modifiedOn: string;
}

interface HistoryAuditsTableProps {
  auditRecords: AuditRecord[];
  onViewDetails: (id: number) => void;
}

const HistoryAuditsTable = ({ auditRecords, onViewDetails }: HistoryAuditsTableProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden w-full">
      <div className="border-b border-gray-200">
        <div className="grid grid-cols-7 bg-[#b9dbff] text-gray-500 text-xs p-3">
          <div className="px-3 font-medium">ID</div>
          <div className="px-3 font-medium">OPERATION TYPE</div>
          <div className="px-3 font-medium">INTEGRATION SCREEN</div>
          <div className="px-3 font-medium">OLD VALUE</div>
          <div className="px-3 font-medium">NEW VALUE</div>
          <div className="px-3 font-medium">CREATED ON</div>
          <div className="px-3 font-medium">MODIFIED ON</div>
        </div>
      </div>
      <CardContent className="p-0">
        {auditRecords.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">No audit records found</div>
        ) : (
          auditRecords.map((record) => (
            <div 
              key={record.id} 
              className="grid grid-cols-7 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-800 font-medium p-3 px-3 truncate flex items-center gap-2 text-xs">
                {record.id}
              </div>
              <div className="text-gray-600 p-3 px-3 truncate text-xs">{record.operationType}</div>
              <div className="text-gray-600 p-3 px-3 truncate text-xs">{record.integrationScreen}</div>
              <div className="text-gray-600 p-3 px-3 truncate text-xs">{record.oldValue}</div>
              <div className="text-gray-600 p-3 px-3 truncate text-xs">{record.newValue}</div>
              <div className="text-gray-600 p-3 px-3 truncate text-xs">{record.createdOn}</div>
              <div className="text-gray-600 p-3 px-3 flex items-center justify-between text-xs">
                {record.modifiedOn}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 ml-2">
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuItem onClick={() => onViewDetails(record.id)}>
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Export record
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500 focus:text-red-500">
                      Delete record
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default HistoryAuditsTable;
