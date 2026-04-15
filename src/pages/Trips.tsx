import { useState } from "react";
import { 
  Search, 
  Filter, 
  MapPin, 
  Navigation, 
  Clock, 
  MoreVertical,
  ExternalLink,
  Map as MapIcon,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { cn } from "../../lib/utils";

const trips = [
  { id: "TR-9021", rider: "Sarah Kamau", driver: "John Mutua", from: "Westlands", to: "CBD", status: "active", amount: "KES 450", time: "12 mins ago", type: "Standard" },
  { id: "TR-9020", rider: "David Omondi", driver: "Peter Njoroge", from: "Kilimani", to: "JKIA", status: "completed", amount: "KES 1,200", time: "45 mins ago", type: "Standard" },
  { id: "TR-9019", rider: "Grace Wanjiku", driver: "Samuel Kip", from: "Karen", to: "Lavington", status: "completed", amount: "KES 650", time: "1 hour ago", type: "Boda Boda" },
  { id: "TR-9018", rider: "Michael Otieno", driver: "James Mwangi", from: "South C", to: "Upper Hill", status: "cancelled", amount: "KES 0", time: "2 hours ago", type: "Standard" },
  { id: "TR-9017", rider: "Alice Njeri", driver: "Robert K.", from: "Parklands", to: "Gigiri", status: "completed", amount: "KES 550", time: "3 hours ago", type: "Tuk-tuk" },
  { id: "TR-9016", rider: "Kevin Maina", driver: "John Mutua", from: "Ngong Road", to: "Yaya Centre", status: "completed", amount: "KES 350", time: "4 hours ago", type: "Standard" },
];

export function Trips() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Trip Tracking</h1>
          <p className="text-sm text-zinc-500">Monitor live rides and historical trip data.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <MapIcon className="w-4 h-4" />
          Live Map View
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-zinc-200 shadow-sm bg-blue-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">In Progress</p>
              <p className="text-xl font-bold text-zinc-900">124</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 shadow-sm bg-green-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Avg. Wait Time</p>
              <p className="text-xl font-bold text-zinc-900">4.2 min</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 shadow-sm bg-orange-50/30">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Hot Zone</p>
              <p className="text-xl font-bold text-zinc-900">Westlands</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-zinc-200 shadow-sm">
        <CardHeader className="border-b border-zinc-100 pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input placeholder="Search by trip ID, rider, or driver..." className="pl-10 h-9" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-zinc-100">
                <TableHead className="w-[100px] text-[10px] font-bold uppercase text-zinc-400 pl-6">Trip ID</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Rider</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Driver</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Route</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Type</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Status</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400 text-right pr-6">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id} className="border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                  <TableCell className="font-mono text-xs text-zinc-500 pl-6">{trip.id}</TableCell>
                  <TableCell className="font-medium text-zinc-900">{trip.rider}</TableCell>
                  <TableCell className="text-zinc-600">{trip.driver}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 text-sm text-zinc-700">
                        <span>{trip.from}</span>
                        <ArrowUpRight className="w-3 h-3 rotate-45 text-zinc-400" />
                        <span>{trip.to}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400">{trip.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px] font-medium border-zinc-200 text-zinc-600">
                      {trip.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "text-[10px] px-2 py-0 h-5 font-bold uppercase tracking-tighter",
                        trip.status === 'active' && "bg-blue-50 text-blue-700 border-blue-100",
                        trip.status === 'completed' && "bg-green-50 text-green-700 border-green-100",
                        trip.status === 'cancelled' && "bg-red-50 text-red-700 border-red-100",
                      )}
                    >
                      {trip.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-zinc-900 pr-6">{trip.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
