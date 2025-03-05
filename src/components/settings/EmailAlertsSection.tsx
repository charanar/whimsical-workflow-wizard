
import { Mail, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

interface EmailAlert {
  id: number;
  applicationName: string;
  alertName: string;
}

interface EmailAlertsSectionProps {
  showConfigView?: boolean;
}

const EmailAlertsSection = ({ showConfigView = false }: EmailAlertsSectionProps) => {
  const [showConfiguration, setShowConfiguration] = useState(showConfigView);
  
  // Update internal state when prop changes
  useEffect(() => {
    setShowConfiguration(showConfigView);
  }, [showConfigView]);

  const handleSave = () => {
    toast.success("Email alert configuration saved successfully");
    setShowConfiguration(false);
  };

  const handleCreateAlert = () => {
    setShowConfiguration(true);
  };

  const handleBackToList = () => {
    setShowConfiguration(false);
  };

  return (
    <div className="space-y-6">
      {!showConfiguration ? (
        <>
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

          <div className="flex justify-between items-center">
            <Button 
              onClick={handleCreateAlert}
              className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white"
            >
              Create Alert
            </Button>
          </div>

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
                  {/* The table is empty but we keep the structure visible */}
                  <TableRow className="h-16 border-b border-gray-200">
                    <TableCell colSpan={2} className="text-center text-gray-500 text-sm">
                      No alerts configured
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      ) : (
        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-[#353acd]" />
              <h2 className="text-xl font-semibold text-[#353acd]">Email Alerts</h2>
            </div>
            <p className="text-gray-500 text-xs ml-7">Create Email Alert Configuration</p>
            <Button 
              variant="outline"
              onClick={handleBackToList}
              className="mt-4 ml-7"
            >
              Back To List
            </Button>
          </div>

          <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden w-full bg-gray-50">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-600 font-medium text-sm">Name</label>
                </div>
                <div className="md:col-span-2">
                  <Input placeholder="Enter alert name" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-gray-600 font-medium text-sm">Application Name</label>
                </div>
                <div className="md:col-span-2">
                  <div className="relative">
                    <select className="w-full rounded-md border border-input bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none">
                      <option value="" disabled selected>Select application</option>
                      <option value="pandadoc">PandaDoc</option>
                      <option value="companyhouse">CompanyHouse</option>
                      <option value="sendinblue">SendInBlue</option>
                      <option value="google">GoogleMap</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-gray-600 font-medium text-sm">Subject</label>
                </div>
                <div className="md:col-span-2">
                  <Input defaultValue="${severity}: Application undeployed" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-gray-600 font-medium text-sm">Message</label>
                </div>
                <div className="md:col-span-2">
                  <Textarea 
                    className="min-h-[150px]" 
                    defaultValue={`Hello,\nYou are receiving this alert because:\nMessage \${messageContent} was failed due to error message\n\${errorMessage}\n\nThanks`}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-gray-600 font-medium text-sm">Recipients</label>
                </div>
                <div className="md:col-span-2">
                  <Input placeholder="Enter email addresses separated by comma" />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white rounded-full px-32"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default EmailAlertsSection;
