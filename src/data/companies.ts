
import MicrosoftAILogo from "@/components/logos/MicrosoftAILogo";
import MicrosoftOutlookLogo from "@/components/logos/MicrosoftOutlookLogo";
import MicrosoftExchangeLogo from "@/components/logos/MicrosoftExchangeLogo";
import PandaDocLogo from "@/components/logos/PandaDocLogo";
import SalesforceLogo from "@/components/logos/SalesforceLogo";
import HubSpotLogo from "@/components/logos/HubSpotLogo";

export interface Company {
  id: string;
  logo: React.ComponentType;
  name: string;
  description: string;
  active: boolean;
  tags?: { name: string }[];
}

export const companies: Company[] = [
  {
    id: "1",
    logo: PandaDocLogo,
    name: "PandaDoc",
    description: "Simplify e-signature process with dynamic templates. Pre-fill contracts with IFS data.",
    active: true,
    tags: [{ name: "Documents" }, { name: "Signatures" }]
  },
  {
    id: "2",
    logo: MicrosoftAILogo,
    name: "Microsoft AI",
    description: "Convert emails and PDFs to Supplier Invoices in IFS using Microsoft AI.",
    active: true,
    tags: [{ name: "AI" }, { name: "Automation" }]
  },
  {
    id: "3",
    logo: MicrosoftExchangeLogo,
    name: "Microsoft Exchange",
    description: "Seamless synchronisation of emails with IFS for better tracking of correspondences.",
    active: true,
    tags: [{ name: "Email" }, { name: "Communication" }]
  },
  {
    id: "4",
    logo: HubSpotLogo,
    name: "HubSpot",
    description: "Synchronize CRM data, ensuring smooth coordination and improved efficiency.",
    active: false,
    tags: [{ name: "CRM" }, { name: "Marketing" }]
  },
  {
    id: "5",
    logo: MicrosoftOutlookLogo,
    name: "Microsoft Outlook",
    description: "Keep service technicians organised with IFS Work Orders synchronised with Outlook calendars.",
    active: false,
    tags: [{ name: "Productivity" }, { name: "Integration" }]
  },
  {
    id: "6",
    logo: SalesforceLogo,
    name: "Salesforce",
    description: "Improve customer insights with bi-directional integration between Salesforce and IFS.",
    active: false,
    tags: [{ name: "CRM" }, { name: "Customer" }]
  }
];
