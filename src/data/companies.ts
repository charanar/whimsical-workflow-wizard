
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
    description: "Convert emails and PDFs to Supplier Invoices in IFS using Microsoft AI. This integration leverages advanced AI capabilities to automate the conversion process, streamlining invoice management and reducing manual data entry.",
    tags: [{ name: "AI" }, { name: "Automation" }]
  },
  {
    id: "2",
    logo: MicrosoftOutlookLogo,
    name: "Microsoft Outlook",
    description: "Keep service technicians organised with IFS Work Orders synchronised with Outlook calendars. This allows service technicians to manage their daily schedule using just one tool, simplifying their administration and enhancing productivity.",
    tags: [{ name: "Productivity" }, { name: "Integration" }]
  },
  {
    id: "3",
    logo: BrevoLogo,
    name: "Brevo",
    description: "Using our Brevo integration, you can track the delivery of invoices and determine if customers have received or read the email. This capability helps reduce aged debt, improving cash flow, and promptly identifies any issues with invoice receipt within IFS.",
    tags: [{ name: "Email" }, { name: "Tracking" }]
  },
  {
    id: "4",
    logo: GoogleMapsLogo,
    name: "Google Maps",
    description: "This integration facilitates address verification using Google Maps within IFS, ensuring accurate location data for improved logistical operations and customer service. Traffic tracking and alternative route suggestion also help to map more efficient journeys.",
    tags: [{ name: "Location" }, { name: "Verification" }]
  },
  {
    id: "5",
    logo: PandaDocLogo,
    name: "PandaDoc",
    description: "Simplify the e-signature process with dynamic templates. Pre-fill contracts, NDAs, warranties, and other documents with IFS data before sending them for signatures. Signed documents are automatically archived back to IFS, and the status of all documents is tracked within IFS.",
    tags: [{ name: "Documents" }, { name: "Signatures" }]
  },
  {
    id: "6",
    logo: PandaDocCraftLogo,
    name: "PandaDocCraft Ecommerce",
    description: "Integrate Craft and IFS to enable customer onboarding, order entry, order history, stock checking, and credit checking all within the Craft platform but powered by IFS. This integration streamlines e-commerce operations and enhances customer experience.",
    tags: [{ name: "Ecommerce" }, { name: "Customer" }]
  },
  {
    id: "7",
    logo: MagnetoLogo,
    name: "Magneto",
    description: "Place orders through Magneto on credit or by taking payment upfront. See stock levels, customer information, order status, and transaction history. This integration streamlines order fulfilment, improves product availability online, and enhances the overall customer experience.",
    tags: [{ name: "Ecommerce" }, { name: "Orders" }]
  },
  {
    id: "8",
    logo: SalesforceLogo,
    name: "Salesforce",
    description: "Improve customer insights, operational efficiency, and customer service with bi-directional integration between Salesforce and IFS. This integration seamlessly connects customer data, products, opportunities, and quotations, enhancing business processes and customer relationship management.",
    tags: [{ name: "CRM" }, { name: "Customer" }]
  },
  {
    id: "9",
    logo: HubSpotLogo,
    name: "HubSpot",
    description: "Our integration with HubSpot synchronises CRM data, ensuring smooth coordination and improved efficiency in managing customer data. This integration streamlines the workflow of scheduling meetings, capturing submissions and more.",
    tags: [{ name: "CRM" }, { name: "Marketing" }]
  },
  {
    id: "10",
    logo: MicrosoftExchangeLogo,
    name: "Microsoft Exchange",
    description: "Our MS Exchange integration enables seamless synchronisation of emails with IFS, ensuring that all your email communications are automatically synced with IFS, allowing for better management and tracking of correspondences related to your business processes.",
    tags: [{ name: "Email" }, { name: "Communication" }]
  }
];
