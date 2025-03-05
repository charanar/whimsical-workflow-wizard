
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import MainSidebar from "@/components/settings/MainSidebar";
import SettingsSidebar from "@/components/settings/SettingsSidebar";
import BackButton from "@/components/settings/BackButton";
import IFSProviderSection from "@/components/settings/IFSProviderSection";
import HistoryAuditsSection from "@/components/settings/HistoryAuditsSection";
import PlaceholderSection from "@/components/settings/PlaceholderSection";
import { Connection } from "@/components/settings/ConnectionsTable";
import { AuditRecord } from "@/components/settings/HistoryAuditsTable";

// Mock data for IFS Access Provider connections with https:// format
const initialConnections = [
  { id: 1, endpoint: "https://newifsendpoint.com", username: "admin_user", integration: "Pandadoc", status: "active", condition: "online" },
  { id: 2, endpoint: "https://newifsendpoint.com", username: "service_account", integration: "CompanyHouse", status: "active", condition: "online" },
  { id: 3, endpoint: "https://newifsendpoint.com", username: "api_user", integration: "SendInBlue", status: "deactivated", condition: "offline" },
  { id: 4, endpoint: "https://newifsendpoint.com", username: "maps_service", integration: "GoogleMap", status: "active", condition: "online" },
];

// Mock data for History Audits
const initialAuditRecords = [
  { id: 1, operationType: "Create", integrationScreen: "IFS Provider", oldValue: "-", newValue: "https://newifsendpoint.com", createdOn: "2023-06-01", modifiedOn: "2023-06-01" },
  { id: 2, operationType: "Update", integrationScreen: "User Management", oldValue: "user_readonly", newValue: "user_admin", createdOn: "2023-06-02", modifiedOn: "2023-06-03" },
  { id: 3, operationType: "Delete", integrationScreen: "Integration", oldValue: "Slack", newValue: "-", createdOn: "2023-06-04", modifiedOn: "2023-06-04" },
  { id: 4, operationType: "Create", integrationScreen: "Email Alert", oldValue: "-", newValue: "alerts@example.com", createdOn: "2023-06-05", modifiedOn: "2023-06-05" },
];

const Settings = () => {
  const navigate = useNavigate();
  // Track the active category for highlighting in the sidebar
  const [activeCategory, setActiveCategory] = useState("ifs-provider");
  // For IFS connections data
  const [connections, setConnections] = useState<Connection[]>(initialConnections);
  // For History Audits data
  const [auditRecords, setAuditRecords] = useState<AuditRecord[]>(initialAuditRecords);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleTestConnection = (id: number) => {
    console.log(`Testing connection ${id}`);
    toast.success(`Connection ${id} tested successfully!`);
    // In a real app, this would test the connection and provide feedback
  };

  const handleDeleteConnection = (id: number) => {
    setConnections(connections.filter(conn => conn.id !== id));
    toast.info(`Connection ${id} deleted`);
  };

  const handleAddConnection = () => {
    const newId = Math.max(...connections.map(c => c.id), 0) + 1;
    const newConnection = {
      id: newId,
      endpoint: "https://newifsendpoint.com",
      username: "new_user",
      integration: "New Integration",
      status: "active",
      condition: "online"
    };
    setConnections([...connections, newConnection]);
    toast.success("New connection added");
  };

  const handleViewAuditDetails = (id: number) => {
    console.log(`Viewing audit record ${id}`);
    toast.info(`Viewing details for audit record ${id}`);
    // In a real app, this would show detailed information about the audit record
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Section 1: Main Sidebar with gear, share and logo icons */}
      <MainSidebar />
      
      {/* Section 2: Settings Sidebar */}
      <SettingsSidebar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Section 3: Content area */}
      <div className="flex-1 bg-slate-50">
        <div className="p-2 pl-4">
          {/* Back button */}
          <BackButton onClick={handleBackClick} />
          
          {activeCategory === "ifs-provider" ? (
            <IFSProviderSection 
              connections={connections}
              onAddConnection={handleAddConnection}
              onTestConnection={handleTestConnection}
              onDeleteConnection={handleDeleteConnection}
            />
          ) : activeCategory === "history-audits" ? (
            <HistoryAuditsSection 
              auditRecords={auditRecords}
              onViewDetails={handleViewAuditDetails}
            />
          ) : (
            <PlaceholderSection />
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
