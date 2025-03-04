
import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Technology Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our ecosystem of AI technology partners that help build and enhance AI-powered solutions.
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
