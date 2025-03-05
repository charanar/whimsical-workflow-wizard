
import { Clock, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@radix-ui/react-select";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const HistoryLogsConfigSection = () => {
  const handleSave = () => {
    toast.success("History logs configuration saved successfully");
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Clock className="h-5 w-5 mr-2 text-[#353acd]" />
          <h2 className="text-xl font-semibold text-[#353acd]">History Logs Delete Configuration</h2>
        </div>
        <p className="text-gray-500 text-xs ml-7">Create History-log Delete Configuration</p>
      </div>

      <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden w-full bg-gray-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-600 font-medium text-sm">Integrations</label>
            </div>
            <div className="md:col-span-2">
              <div className="relative">
                <select className="w-full rounded-md border border-input bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none">
                  <option value="" disabled selected>Integrations</option>
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
              <label className="text-gray-600 font-medium text-sm">Statuses</label>
            </div>
            <div className="md:col-span-2">
              <div className="relative">
                <select className="w-full rounded-md border border-input bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none">
                  <option value="" disabled selected>Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="deleted">Deleted</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-600 font-medium text-sm">Schedule</label>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-4">
                <div>
                  <label className="text-gray-500 text-xs">Every:</label>
                  <div className="relative mt-1">
                    <select className="w-full rounded-md border border-input bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none">
                      <option value="" disabled selected>Please select</option>
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">Year</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-xs">Current Schedule:</label>
                  <div className="mt-1 h-4 flex items-center space-x-1">
                    <div className="h-2 w-2 bg-[#b9dbff] rounded-full"></div>
                    <div className="h-2 w-2 bg-[#b9dbff] rounded-full"></div>
                    <div className="h-2 w-2 bg-[#b9dbff] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-600 font-medium text-sm">Error Status</label>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-4">
                <Separator className="my-4" />
                <div>
                  <label className="text-gray-500 text-xs">Every:</label>
                  <div className="relative mt-1">
                    <select className="w-full rounded-md border border-input bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none">
                      <option value="" disabled selected>Please select</option>
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">Year</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-xs">Current Schedule:</label>
                  <div className="mt-1 h-4 flex items-center space-x-1">
                    <div className="h-2 w-2 bg-[#b9dbff] rounded-full"></div>
                    <div className="h-2 w-2 bg-[#b9dbff] rounded-full"></div>
                    <div className="h-2 w-2 bg-[#b9dbff] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button 
              className="w-full bg-[#062f4b] hover:bg-[#062f4b]/90 text-white"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryLogsConfigSection;

