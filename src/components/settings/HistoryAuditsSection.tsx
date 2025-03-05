
import { Mail } from "lucide-react";
import HistoryAuditsTable, { AuditRecord } from "./HistoryAuditsTable";
import { toast } from "sonner";

interface HistoryAuditsSectionProps {
  auditRecords: AuditRecord[];
  onViewDetails: (id: number) => void;
}

const HistoryAuditsSection = ({ auditRecords, onViewDetails }: HistoryAuditsSectionProps) => {
  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Mail className="h-5 w-5 mr-2 text-[#353acd]" />
          <h2 className="text-xl font-semibold text-[#353acd]">History Audit</h2>
        </div>
        <p className="text-gray-500 text-xs ml-7">Audit records</p>
      </div>

      <div className="mb-6">
        <HistoryAuditsTable 
          auditRecords={auditRecords} 
          onViewDetails={onViewDetails} 
        />
      </div>
    </div>
  );
};

export default HistoryAuditsSection;
