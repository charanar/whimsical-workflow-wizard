
import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";
import { Cog, Share2, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <div className="w-16 bg-white backdrop-blur-sm flex flex-col items-center py-8 border-r border-gray-100 shadow-sm">
        {/* Top logo */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/e91fd30d-9816-4f0e-bc08-82343c1a82f6.png" 
            alt="Logo" 
            className="w-8 h-8"
          />
        </div>
        
        {/* Middle icons */}
        <div className="flex-1 flex flex-col items-center space-y-8">
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <Cog size={20} />
          </button>
        </div>
        
        {/* Bottom user icon */}
        <div className="mt-auto">
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Covalent Hub</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our ecosystem of integration partners that help build and enhance your business solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                logo={company.logo}
                name={company.name}
                description={company.description}
                tags={company.tags}
                active={company.active}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
