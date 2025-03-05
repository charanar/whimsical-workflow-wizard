
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
        <div className="grid grid-cols-7 bg-[#49495b] text-white text-xs p-3">
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
        <div className="text-center py-8 text-gray-500 text-sm">No audit records found</div>
      </CardContent>
    </Card>
  );
};

export default HistoryAuditsTable;
