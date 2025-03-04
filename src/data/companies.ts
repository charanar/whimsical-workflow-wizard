
import AgentOpsLogo from "@/components/logos/AgentOpsLogo";
import AWSLogo from "@/components/logos/AWSLogo";
import AnthropicLogo from "@/components/logos/AnthropicLogo";
import BoxLogo from "@/components/logos/BoxLogo";
import ChromaLogo from "@/components/logos/ChromaLogo";
import ClouderaLogo from "@/components/logos/ClouderaLogo";

export interface Company {
  id: string;
  logo: React.ComponentType;
  name: string;
  description: string;
  tags: { name: string }[];
}

export const companies: Company[] = [
  {
    id: "1",
    logo: AgentOpsLogo,
    name: "AgentOps",
    description: "Industry-leading platform to test and debug AI agents.",
    tags: [{ name: "Integrations" }]
  },
  {
    id: "2",
    logo: AWSLogo,
    name: "Amazon AWS",
    description: "Cloud platform with scalable computing and ML tools.",
    tags: [{ name: "Education" }, { name: "Infrastructure" }]
  },
  {
    id: "3",
    logo: AnthropicLogo,
    name: "Anthropic",
    description: "AI research and development company.",
    tags: [{ name: "LLMs" }, { name: "Applications" }, { name: "Integrations" }, { name: "Infrastructure" }]
  },
  {
    id: "4",
    logo: BoxLogo,
    name: "Box",
    description: "Industry-leading cloud-based AI-powered platform that provides file sharing, collaboration, and content management tools for businesses.",
    tags: [{ name: "Applications" }]
  },
  {
    id: "5",
    logo: ChromaLogo,
    name: "Chroma",
    description: "Open-source database for AI applications.",
    tags: [{ name: "Applications" }, { name: "Integrations" }]
  },
  {
    id: "6",
    logo: ClouderaLogo,
    name: "Cloudera",
    description: "Hybrid data, analytics, and AI platform transforming diverse data into trusted insights with scalable, secure solutions.",
    tags: [{ name: "Infrastructure" }, { name: "Applications" }]
  }
];
