
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
import { Button } from "@/components/ui/button";

interface EmailAlert {
  id: number;
  applicationName: string;
  alertName: string;
}

// Sample data for email alerts
const sampleAlerts: EmailAlert[] = [
  { id: 1, applicationName: "PandaDoc", alertName: "Document Signed" },
  { id: 2, applicationName: "SendInBlue", alertName: "Campaign Completed" },
  { id: 3, applicationName: "GoogleMap", alertName: "Location Updated" },
  { id: 4, applicationName: "CompanyHouse", alertName: "Company Status Change" },
];

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
              {sampleAlerts.map((alert) => (
                <TableRow key={alert.id} className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                  <TableCell className="text-xs font-medium text-gray-800">{alert.applicationName}</TableCell>
                  <TableCell className="text-xs text-gray-600">{alert.alertName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-4 flex justify-center">
        <Button 
          className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white rounded-full px-32"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EmailAlertsSection;
