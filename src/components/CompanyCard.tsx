
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
  tags?: Tag[];
}

const CompanyCard = ({ logo: Logo, name, description, tags = [] }: CompanyCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white rounded-xl border border-gray-100">
      <CardHeader className="pb-2 flex flex-col items-center">
        <div className="h-20 flex items-center justify-center">
          <Logo />
        </div>
        <h3 className="text-lg font-semibold mt-2 text-center text-gray-800">{name}</h3>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col px-4 pb-4">
        <p className="text-gray-600 mb-4 flex-1 text-center text-sm line-clamp-2">{description}</p>
        <div className="mt-auto flex justify-center">
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200 text-xs"
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
