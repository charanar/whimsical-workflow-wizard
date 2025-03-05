
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className="mb-4 flex items-center text-[#1EAEDB] hover:text-[#0FA0CE] transition-colors"
    >
      <ArrowLeft className="mr-2" size={20} />
      <span className="font-medium">Back to Integrations</span>
    </button>
  );
};

export default BackButton;
