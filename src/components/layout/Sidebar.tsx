import { 
  LayoutDashboard, 
  Users, 
  Car, 
  MapPin, 
  CreditCard, 
  TrendingUp, 
  Bell, 
  LifeBuoy, 
  BarChart3, 
  Settings, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { ScrollArea } from "../../../components/ui/scroll-area";

const menuItems = [
  { group: "Operations", items: [
    { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
    { icon: MapPin, label: "Trip Tracking", id: "trips" },
    { icon: Users, label: "Drivers", id: "drivers" },
    { icon: Users, label: "Riders", id: "riders" },
  ]},
  { group: "Finance", items: [
    { icon: CreditCard, label: "Payments", id: "payments" },
    { icon: TrendingUp, label: "Pricing & Surge", id: "pricing" },
  ]},
  { group: "Fleet", items: [
    { icon: Car, label: "Vehicle Registry", id: "fleet" },
  ]},
  { group: "Communication", items: [
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: LifeBuoy, label: "Support & SOS", id: "support" },
  ]},
  { group: "Intelligence", items: [
    { icon: BarChart3, label: "Analytics", id: "analytics" },
  ]},
  { group: "Admin", items: [
    { icon: ShieldCheck, label: "Roles", id: "roles" },
    { icon: Settings, label: "Settings", id: "settings" },
  ]},
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="flex flex-col h-full bg-zinc-950 text-zinc-400 border-r border-zinc-800 w-64 shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          J
        </div>
        <span className="text-white font-bold text-lg tracking-tight">JOMU RIDES</span>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-6 py-4">
          {menuItems.map((group) => (
            <div key={group.group} className="space-y-1">
              <h4 className="px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                {group.group}
              </h4>
              {group.items.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 px-4 py-2 h-9 text-sm font-medium transition-all hover:bg-zinc-900 hover:text-white",
                    activeTab === item.id ? "bg-zinc-900 text-orange-500" : "text-zinc-400"
                  )}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-orange-500" : "text-zinc-500")} />
                  {item.label}
                  {activeTab === item.id && <ChevronRight className="ml-auto w-3 h-3" />}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 px-2 py-3 rounded-lg bg-zinc-900/50">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-300">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Julian Slink</p>
            <p className="text-[10px] text-zinc-500 truncate">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
