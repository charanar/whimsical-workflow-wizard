
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Tag {
  name: string;
}

interface CompanyCardProps {
  logo: React.ComponentType;
  name: string;
  description: string;
  tags: Tag[];
}

const CompanyCard = ({ logo: Logo, name, description, tags }: CompanyCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="h-12 flex items-center">
          <Logo />
        </div>
        <h3 className="text-2xl font-semibold mt-4">{name}</h3>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200"
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
