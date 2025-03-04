
import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";
import { Cog, Share2, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-16 bg-[#262f3d]/90 backdrop-blur-sm flex flex-col items-center py-8 border-r border-white/10">
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
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <Cog size={20} />
          </button>
        </div>
        
        {/* Bottom user icon */}
        <div className="mt-auto">
          <button className="h-10 w-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-[#050e40] py-12 px-4 sm:px-6 lg:px-8 bg-opacity-95 bg-[url('/lovable-uploads/ff3840f7-bf0b-40ad-9d46-1a5e7a02a8cb.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-3">Covalent Hub</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
