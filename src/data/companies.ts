
import AgentOpsLogo from "@/components/logos/AgentOpsLogo";
import AWSLogo from "@/components/logos/AWSLogo";
import AnthropicLogo from "@/components/logos/AnthropicLogo";
import BoxLogo from "@/components/logos/BoxLogo";
import ChromaLogo from "@/components/logos/ChromaLogo";
import ClouderaLogo from "@/components/logos/ClouderaLogo";
import MicrosoftAILogo from "@/components/logos/MicrosoftAILogo";
import MicrosoftOutlookLogo from "@/components/logos/MicrosoftOutlookLogo";
import BrevoLogo from "@/components/logos/BrevoLogo";
import GoogleMapsLogo from "@/components/logos/GoogleMapsLogo";
import PandaDocLogo from "@/components/logos/PandaDocLogo";
import PandaDocCraftLogo from "@/components/logos/PandaDocCraftLogo";
import MagnetoLogo from "@/components/logos/MagnetoLogo";
import SalesforceLogo from "@/components/logos/SalesforceLogo";
import HubSpotLogo from "@/components/logos/HubSpotLogo";
import MicrosoftExchangeLogo from "@/components/logos/MicrosoftExchangeLogo";

export interface Company {
  id: string;
  logo: React.ComponentType;
  name: string;
  description: string;
  tags?: { name: string }[];
}

export const companies: Company[] = [
  {
    id: "1",
    logo: MicrosoftAILogo,
    name: "Microsoft AI",
    description: "Convert emails and PDFs to Supplier Invoices in IFS using Microsoft AI.",
    tags: [{ name: "AI" }, { name: "Automation" }]
  },
  {
    id: "2",
    logo: MicrosoftOutlookLogo,
    name: "Microsoft Outlook",
    description: "Keep service technicians organised with IFS Work Orders synchronised with Outlook calendars.",
    tags: [{ name: "Productivity" }, { name: "Integration" }]
  },
  {
    id: "3",
    logo: BrevoLogo,
    name: "Brevo",
    description: "Track delivery of invoices and determine if customers have received or read the email.",
    tags: [{ name: "Email" }, { name: "Tracking" }]
  },
  {
    id: "4",
    logo: GoogleMapsLogo,
    name: "Google Maps",
    description: "Verify addresses using Google Maps within IFS, ensuring accurate location data.",
    tags: [{ name: "Location" }, { name: "Verification" }]
  },
  {
    id: "5",
    logo: PandaDocLogo,
    name: "PandaDoc",
    description: "Simplify e-signature process with dynamic templates. Pre-fill contracts with IFS data.",
    tags: [{ name: "Documents" }, { name: "Signatures" }]
  },
  {
    id: "6",
    logo: PandaDocCraftLogo,
    name: "PandaDocCraft",
    description: "Enable customer onboarding, order entry, and stock checking within the Craft platform.",
    tags: [{ name: "Ecommerce" }, { name: "Customer" }]
  },
  {
    id: "7",
    logo: MagnetoLogo,
    name: "Magneto",
    description: "Place orders through Magneto on credit or by taking payment upfront.",
    tags: [{ name: "Ecommerce" }, { name: "Orders" }]
  },
  {
    id: "8",
    logo: SalesforceLogo,
    name: "Salesforce",
    description: "Improve customer insights with bi-directional integration between Salesforce and IFS.",
    tags: [{ name: "CRM" }, { name: "Customer" }]
  },
  {
    id: "9",
    logo: HubSpotLogo,
    name: "HubSpot",
    description: "Synchronize CRM data, ensuring smooth coordination and improved efficiency.",
    tags: [{ name: "CRM" }, { name: "Marketing" }]
  },
  {
    id: "10",
    logo: MicrosoftExchangeLogo,
    name: "Microsoft Exchange",
    description: "Seamless synchronisation of emails with IFS for better tracking of correspondences.",
    tags: [{ name: "Email" }, { name: "Communication" }]
  }
];
