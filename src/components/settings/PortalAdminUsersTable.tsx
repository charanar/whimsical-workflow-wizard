
import { MoreVertical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PortalAdminUser } from "./PortalAdminUsersSection";

interface PortalAdminUsersTableProps {
  users: PortalAdminUser[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const PortalAdminUsersTable = ({ users, onEdit, onDelete }: PortalAdminUsersTableProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm rounded-md overflow-hidden w-full">
      <div className="border-b border-gray-200">
        <div className="grid grid-cols-4 bg-[#49495b] text-white text-xs p-3">
          <div className="px-3 font-medium">EMAIL</div>
          <div className="px-3 font-medium">NAME</div>
          <div className="px-3 font-medium">STATUS</div>
          <div className="px-3 font-medium">ROLE</div>
        </div>
      </div>
      <CardContent className="p-0">
        {users.length > 0 ? (
          users.map((user) => (
            <div 
              key={user.id} 
              className="grid grid-cols-4 border-b border-gray-200 items-center hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-800 font-medium p-3 px-3 truncate text-xs">
                {user.email}
              </div>
              <div className="text-gray-600 p-3 px-3 truncate text-xs">{user.name}</div>
              <div className="text-gray-600 p-3 px-3 text-xs">
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">
                  {user.status}
                </div>
              </div>
              <div className="text-gray-600 p-3 px-3 text-xs flex items-center justify-between">
                {user.role}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuItem onClick={() => onEdit(user.id)}>
                      Edit user
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-red-500 focus:text-red-500" 
                      onClick={() => onDelete(user.id)}
                    >
                      Delete user
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 text-sm">No users found</div>
        )}
      </CardContent>
    </Card>
  );
};

export default PortalAdminUsersTable;
