
import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";
import { Cog, Search, Share2, User } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = searchQuery 
    ? companies.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.tags?.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : companies;

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
          {/* Header with search widget */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
            <div className="text-left mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-[#1963ff] via-[#353acd] to-[#2e34a5] text-transparent bg-clip-text">
                Covalent Hub
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-[#50a5ff] to-[#434ce8] mb-6"></div>
              <p className="text-xl text-[#49495b] max-w-2xl leading-relaxed">
                Explore our ecosystem of powerful integrations to streamline your IFS workflows and maximize productivity across your business operations.
              </p>
            </div>
            
            {/* Search widget */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#707287]" />
              </div>
              <input
                type="text"
                className="bg-[#f7f7f8] border border-[#d8d9df] w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1963ff] focus:border-transparent"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
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
