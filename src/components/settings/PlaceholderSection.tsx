
import { SettingsIcon } from "lucide-react";

const PlaceholderSection = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-md">
      <div className="flex flex-col items-center justify-center py-8">
        <SettingsIcon className="h-16 w-16 text-[#1EAEDB] opacity-20 mb-4" />
        <p className="text-gray-600 text-lg">
          Select a setting category from the sidebar to configure your IFS integration settings.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderSection;
