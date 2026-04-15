import { useState } from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  UserPlus, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Star,
  Phone,
  Mail,
  FileText
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { cn } from "../../lib/utils";

const drivers = [
  { id: "DRV-001", name: "John Mutua", email: "john.mutua@email.com", phone: "+254 712 345 678", vehicle: "Toyota Vitz (KDA 123X)", status: "active", rating: 4.8, trips: 1240, joined: "Jan 2024" },
  { id: "DRV-002", name: "Peter Njoroge", email: "peter.n@email.com", phone: "+254 722 987 654", vehicle: "Honda Fit (KDB 456Y)", status: "active", rating: 4.9, trips: 850, joined: "Feb 2024" },
  { id: "DRV-003", name: "Samuel Kip", email: "sam.kip@email.com", phone: "+254 733 111 222", vehicle: "Boda Boda (KMCA 789Z)", status: "inactive", rating: 4.5, trips: 2100, joined: "Nov 2023" },
  { id: "DRV-004", name: "James Mwangi", email: "j.mwangi@email.com", phone: "+254 701 555 444", vehicle: "Toyota Fielder (KDC 321A)", status: "pending", rating: 0, trips: 0, joined: "Apr 2024" },
  { id: "DRV-005", name: "Robert K.", email: "robert.k@email.com", phone: "+254 711 000 999", vehicle: "Tuk-tuk (KTUA 111B)", status: "active", rating: 4.7, trips: 420, joined: "Mar 2024" },
];

export function Drivers() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Driver Management</h1>
          <p className="text-sm text-zinc-500">Onboard, verify, and manage your driver fleet.</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2">
          <UserPlus className="w-4 h-4" />
          Onboard New Driver
        </Button>
      </div>

      <Card className="border-zinc-200 shadow-sm">
        <CardHeader className="border-b border-zinc-100 pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input 
                placeholder="Search by name, ID, or vehicle..." 
                className="pl-10 h-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Badge variant="secondary" className="bg-zinc-100 text-zinc-600 border-zinc-200">
                Total: {drivers.length}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-zinc-100">
                <TableHead className="w-[80px] text-[10px] font-bold uppercase text-zinc-400 pl-6">ID</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Driver</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Vehicle</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Status</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Rating</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Trips</TableHead>
                <TableHead className="w-[50px] pr-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id} className="border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                  <TableCell className="font-mono text-xs text-zinc-500 pl-6">{driver.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 border border-zinc-200">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${driver.name}`} />
                        <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-zinc-900">{driver.name}</span>
                        <span className="text-[10px] text-zinc-500">{driver.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-zinc-600">{driver.vehicle}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "text-[10px] px-2 py-0 h-5 font-bold uppercase tracking-tighter",
                        driver.status === 'active' && "bg-green-50 text-green-700 border-green-100",
                        driver.status === 'inactive' && "bg-zinc-100 text-zinc-600 border-zinc-200",
                        driver.status === 'pending' && "bg-orange-50 text-orange-700 border-orange-100",
                      )}
                    >
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{driver.rating || "N/A"}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-medium text-zinc-700">{driver.trips.toLocaleString()}</TableCell>
                  <TableCell className="pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem className="gap-2">
                          <FileText className="w-4 h-4" /> View Documents
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Phone className="w-4 h-4" /> Contact Driver
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-red-600">
                          <XCircle className="w-4 h-4" /> Suspend Account
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
