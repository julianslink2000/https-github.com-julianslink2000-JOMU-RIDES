import { 
  Users, 
  Car, 
  MapPin, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";

const kpiData = [
  { label: "Active Trips", value: "1,284", icon: MapPin, change: "+12.5%", trend: "up", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Available Drivers", value: "452", icon: Car, change: "-3.2%", trend: "down", color: "text-green-600", bg: "bg-green-50" },
  { label: "Total Revenue (KES)", value: "842,500", icon: CreditCard, change: "+18.2%", trend: "up", color: "text-orange-600", bg: "bg-orange-50" },
  { label: "Active Riders", value: "12,402", icon: Users, change: "+5.4%", trend: "up", color: "text-purple-600", bg: "bg-purple-50" },
];

const revenueData = [
  { name: "06:00", revenue: 45000 },
  { name: "08:00", revenue: 120000 },
  { name: "10:00", revenue: 85000 },
  { name: "12:00", revenue: 95000 },
  { name: "14:00", revenue: 75000 },
  { name: "16:00", revenue: 140000 },
  { name: "18:00", revenue: 185000 },
  { name: "20:00", revenue: 110000 },
];

const recentTrips = [
  { id: "TR-9021", rider: "Sarah Kamau", driver: "John Mutua", from: "Westlands", to: "CBD", status: "active", amount: "KES 450" },
  { id: "TR-9020", rider: "David Omondi", driver: "Peter Njoroge", from: "Kilimani", to: "JKIA", status: "completed", amount: "KES 1,200" },
  { id: "TR-9019", rider: "Grace Wanjiku", driver: "Samuel Kip", from: "Karen", to: "Lavington", status: "completed", amount: "KES 650" },
  { id: "TR-9018", rider: "Michael Otieno", driver: "James Mwangi", from: "South C", to: "Upper Hill", status: "cancelled", amount: "KES 0" },
  { id: "TR-9017", rider: "Alice Njeri", driver: "Robert K.", from: "Parklands", to: "Gigiri", status: "completed", amount: "KES 550" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Operations Overview</h1>
          <p className="text-sm text-zinc-500">Real-time performance metrics for Nairobi operations.</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-white px-3 py-1">
            <Clock className="w-3 h-3 mr-2 text-zinc-400" />
            Last updated: 2 mins ago
          </Badge>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.label} className="border-zinc-200 shadow-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${kpi.bg}`}>
                  <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                </div>
                <div className={`flex items-center text-xs font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.change}
                  {kpi.trend === 'up' ? <ArrowUpRight className="w-3 h-3 ml-1" /> : <ArrowDownRight className="w-3 h-3 ml-1" />}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-zinc-500">{kpi.label}</p>
                <p className="text-2xl font-bold text-zinc-900">{kpi.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 border-zinc-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Revenue Trend (Today)</CardTitle>
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-100">Peak Hours</Badge>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fill: '#71717a'}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fill: '#71717a'}}
                  tickFormatter={(value) => `K${value/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#f97316' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#f97316" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Vehicle Distribution */}
        <Card className="border-zinc-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Fleet Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { label: "Standard Taxi", count: 245, percentage: 65, color: "bg-blue-500" },
              { label: "Boda Boda", count: 112, percentage: 25, color: "bg-orange-500" },
              { label: "Tuk-tuk", count: 45, percentage: 10, color: "bg-green-500" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-700">{item.label}</span>
                  <span className="text-zinc-500">{item.count} units</span>
                </div>
                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color}`} 
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-zinc-100">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <AlertCircle className="w-3 h-3 text-orange-500" />
                <span>12 vehicles have documents expiring this week.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Trips Table */}
      <Card className="border-zinc-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Recent Trips</CardTitle>
          <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">View All</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-zinc-100">
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Trip ID</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Rider</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Driver</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Route</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Status</TableHead>
                <TableHead className="text-[10px] font-bold uppercase text-zinc-400 text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTrips.map((trip) => (
                <TableRow key={trip.id} className="border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                  <TableCell className="font-mono text-xs text-zinc-500">{trip.id}</TableCell>
                  <TableCell className="font-medium text-zinc-900">{trip.rider}</TableCell>
                  <TableCell className="text-zinc-600">{trip.driver}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <span>{trip.from}</span>
                      <ArrowUpRight className="w-3 h-3 rotate-45" />
                      <span>{trip.to}</span>
                    </div>
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
                  <TableCell className="text-right font-semibold text-zinc-900">{trip.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
