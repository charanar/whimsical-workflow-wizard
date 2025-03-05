
import { User, UserPlus, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import PortalAdminUsersTable from "./PortalAdminUsersTable";
import { toast } from "sonner";

export interface PortalAdminUser {
  id: string;
  email: string;
  name: string;
  status: string;
  role: string;
}

const mockAdminUsers: PortalAdminUser[] = [
  { id: "1", email: "tharushiAmanda89@covalentworld.com", name: "", status: "Active", role: "PortalAdmin" },
  { id: "2", email: "B@rb.com", name: "bcud cdd", status: "Active", role: "" },
  { id: "3", email: "ben.timberlake@gmail.com", name: "Ben Timberlake", status: "Active", role: "PortalAdmin" },
  { id: "4", email: "amy.tharu@gmail.com", name: "Ben Timberlake", status: "Active", role: "PortalAdmin" },
  { id: "5", email: "amy.tharu@gmail.com", name: "Ben Timberlake", status: "Active", role: "PortalAdmin" },
];

const PortalAdminUsersSection = () => {
  const [adminUsers, setAdminUsers] = useState<PortalAdminUser[]>(mockAdminUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddUser = () => {
    toast.success("Add user functionality will be implemented here");
  };

  const handleDeleteUser = (id: string) => {
    setAdminUsers(adminUsers.filter(user => user.id !== id));
    toast.info(`User deleted`);
  };

  const handleEditUser = (id: string) => {
    toast.info(`Editing user with ID: ${id}`);
  };

  // Filter users based on search term
  const filteredUsers = adminUsers.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <User className="h-5 w-5 mr-2 text-[#353acd]" />
          <h2 className="text-xl font-semibold text-[#353acd]">Admin Users</h2>
        </div>
        <p className="text-gray-500 text-xs ml-7">Portal Access Management</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex-1"></div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 h-10 w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            className="bg-[#062f4b] hover:bg-[#062f4b]/90 text-white h-10 px-4 flex items-center gap-2"
            onClick={handleAddUser}
          >
            <Plus size={16} /> New
          </Button>
        </div>
      </div>

      <PortalAdminUsersTable 
        users={filteredUsers} 
        onEdit={handleEditUser} 
        onDelete={handleDeleteUser} 
      />
    </div>
  );
};

export default PortalAdminUsersSection;
