
import { companies } from "@/data/companies";
import CompanyCard from "@/components/CompanyCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050e40] py-12 px-4 sm:px-6 lg:px-8 bg-opacity-95 bg-[url('/lovable-uploads/ff3840f7-bf0b-40ad-9d46-1a5e7a02a8cb.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Integration Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our ecosystem of integration partners that help build and enhance your business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
