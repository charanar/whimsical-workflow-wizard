
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Tag {
  name: string;
}

interface CompanyCardProps {
  logo: React.ComponentType;
  name: string;
  description: string;
  active: boolean;
  tags?: Tag[];
}

const CompanyCard = ({ logo: Logo, name, description, active, tags = [] }: CompanyCardProps) => {
  return (
    <Card className={`h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300 rounded-xl 
      border-2 ${active 
        ? 'bg-white border-[#1963ff] border-opacity-70 shadow-sm' 
        : 'bg-gray-100 border-gray-300'}`}>
      <div className={`w-full h-1 ${active ? 'bg-gradient-to-r from-[#50a5ff] to-[#434ce8]' : 'bg-gray-200'}`}></div>
      <CardHeader className="pb-2 flex flex-col items-center">
        <div className={`h-20 flex items-center justify-center ${!active ? 'opacity-60 grayscale' : ''}`}>
          <Logo />
        </div>
        <h3 className={`text-lg font-semibold mt-2 text-center ${active ? 'text-[#3f404d]' : 'text-[#8e90a2]'}`}>{name}</h3>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col px-4 pb-4">
        <p className={`mb-4 flex-1 text-center text-sm line-clamp-2 ${active ? 'text-[#5a5b6f]' : 'text-[#b6b7c3]'}`}>{description}</p>
        <div className="mt-auto flex justify-end">
          <button className={`flex items-center ${active ? 'text-[#1963ff] hover:text-[#0a47eb]' : 'text-gray-500 hover:text-gray-700'} transition-colors font-medium text-sm`}>
            {active ? "Access Integration" : "Learn More"} <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className={`${active ? 'bg-[#edf6ff] hover:bg-[#d7e9ff] text-[#0f3abe]' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'} border-gray-200 text-xs`}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
