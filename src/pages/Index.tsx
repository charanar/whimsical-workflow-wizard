import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";
import { Cog, Share2, User, Sparkle } from "lucide-react";

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
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <Sparkle className="text-blue-500 h-6 w-6 mr-2" />
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text font-bold text-lg">
                INTEGRATION PLATFORM
              </span>
              <Sparkle className="text-blue-500 h-6 w-6 ml-2" />
            </div>
            <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
              Covalent Hub
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
