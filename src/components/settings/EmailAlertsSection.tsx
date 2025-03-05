
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface EmailAlert {
  id: number;
  applicationName: string;
  alertName: string;
}

const EmailAlertsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="bg-[#1963ff] p-1.5 rounded text-white">
          <Mail size={16} />
        </div>
        <h1 className="text-xl font-semibold">Email Alerts</h1>
      </div>
      
      <p className="text-sm text-gray-600">
        Configure email alerts for different applications. You will receive notifications
        based on the alerts you have enabled.
      </p>

      <Card className="shadow-sm border-gray-200">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#b9dbff]">
                <TableHead className="font-medium text-gray-700 text-xs py-3">APPLICATION NAME</TableHead>
                <TableHead className="font-medium text-gray-700 text-xs py-3">ALERT NAME</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Table is empty as per requirement */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailAlertsSection;
