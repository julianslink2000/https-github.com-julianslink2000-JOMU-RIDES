import { Search, Bell, Menu, Globe } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Badge } from "../../../components/ui/badge";

export function Header() {
  return (
    <header className="h-16 border-bottom border-zinc-200 bg-white flex items-center justify-between px-6 shrink-0 z-10">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <Input 
            placeholder="Search trips, drivers, or transactions..." 
            className="pl-10 bg-zinc-50 border-zinc-200 focus-visible:ring-orange-500 h-9 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100 mr-4">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider">System Online</span>
        </div>

        <Button variant="ghost" size="icon" className="relative text-zinc-500">
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-orange-500 border-2 border-white text-[10px]">
            12
          </Badge>
        </Button>

        <Button variant="ghost" size="icon" className="text-zinc-500">
          <Globe className="w-5 h-5" />
        </Button>

        <div className="h-6 w-[1px] bg-zinc-200 mx-2" />

        <div className="flex flex-col items-end mr-2">
          <span className="text-xs font-semibold text-zinc-900">Nairobi, KE</span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">GMT +3</span>
        </div>
      </div>
    </header>
  );
}
