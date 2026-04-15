import { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  CreditCard, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight,
  CheckCircle2,
  Clock,
  AlertCircle,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { cn } from "../../lib/utils";

const transactions = [
  { id: "TX-4501", user: "Sarah Kamau", type: "M-Pesa", amount: "KES 450", status: "completed", date: "Today, 10:45 AM", reference: "RDI829KSL0" },
  { id: "TX-4500", user: "John Mutua (Payout)", type: "Bank Transfer", amount: "KES 12,400", status: "pending", date: "Today, 09:30 AM", reference: "PAY-9021" },
  { id: "TX-4499", user: "David Omondi", type: "Card", amount: "KES 1,200", status: "completed", date: "Today, 08:15 AM", reference: "AUTH_8921" },
  { id: "TX-4498", user: "Grace Wanjiku", type: "M-Pesa", amount: "KES 650", status: "completed", date: "Yesterday, 11:20 PM", reference: "RCH112MSL1" },
  { id: "TX-4497", user: "Michael Otieno", type: "M-Pesa", amount: "KES 450", status: "failed", date: "Yesterday, 10:05 PM", reference: "RCH009XSL2" },
  { id: "TX-4496", user: "Alice Njeri", type: "M-Pesa", amount: "KES 550", status: "completed", date: "Yesterday, 09:45 PM", reference: "RCH998ASL3" },
];

export function Payments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Payments & Finance</h1>
          <p className="text-sm text-zinc-500">Manage transactions, driver payouts, and M-Pesa reconciliations.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2">
            <Wallet className="w-4 h-4" />
            Schedule Payouts
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-zinc-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Total Volume (MTD)</p>
            <p className="text-2xl font-bold text-zinc-900">KES 4.2M</p>
            <div className="flex items-center text-[10px] text-green-600 font-bold mt-2">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +14.2% vs last month
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">M-Pesa Success Rate</p>
            <p className="text-2xl font-bold text-zinc-900">98.4%</p>
            <div className="flex items-center text-[10px] text-green-600 font-bold mt-2">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Stable connection
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Pending Payouts</p>
            <p className="text-2xl font-bold text-zinc-900">KES 184k</p>
            <div className="flex items-center text-[10px] text-orange-600 font-bold mt-2">
              <Clock className="w-3 h-3 mr-1" />
              Next run: Tomorrow
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-200 shadow-sm">
          <CardContent className="p-6">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Failed Txns (24h)</p>
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <div className="flex items-center text-[10px] text-red-600 font-bold mt-2">
              <AlertCircle className="w-3 h-3 mr-1" />
              Requires review
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-zinc-200 shadow-sm">
          <CardHeader className="border-b border-zinc-100 pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Recent Transactions</CardTitle>
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input placeholder="Search reference..." className="pl-10 h-8 text-xs" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-zinc-100">
                  <TableHead className="text-[10px] font-bold uppercase text-zinc-400 pl-6">ID</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-zinc-400">User</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Method</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-zinc-400">Status</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-zinc-400 text-right pr-6">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id} className="border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                    <TableCell className="font-mono text-[10px] text-zinc-500 pl-6">
                      <div className="flex flex-col">
                        <span>{tx.id}</span>
                        <span className="text-[9px] opacity-60">{tx.reference}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-zinc-900">{tx.user}</span>
                        <span className="text-[10px] text-zinc-400">{tx.date}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {tx.type === 'M-Pesa' ? (
                          <Smartphone className="w-3 h-3 text-green-600" />
                        ) : (
                          <CreditCard className="w-3 h-3 text-blue-600" />
                        )}
                        <span className="text-xs text-zinc-600">{tx.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "text-[10px] px-2 py-0 h-5 font-bold uppercase tracking-tighter",
                          tx.status === 'completed' && "bg-green-50 text-green-700 border-green-100",
                          tx.status === 'pending' && "bg-orange-50 text-orange-700 border-orange-100",
                          tx.status === 'failed' && "bg-red-50 text-red-700 border-red-100",
                        )}
                      >
                        {tx.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold text-zinc-900 pr-6">{tx.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500">M-Pesa Gateway Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-xl bg-zinc-900 text-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Live</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-zinc-700 text-zinc-400">API v2.4</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-zinc-500 uppercase font-bold">Current Latency</p>
                <p className="text-2xl font-mono">142ms</p>
              </div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[92%]" />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="text-[10px] h-12 flex flex-col gap-1">
                  <Smartphone className="w-3 h-3" />
                  STK Push Test
                </Button>
                <Button variant="outline" className="text-[10px] h-12 flex flex-col gap-1">
                  <Download className="w-3 h-3" />
                  B2C Statement
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-zinc-500">Float Balance</span>
                <span className="font-bold">KES 1.2M</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[45%]" />
              </div>
              <p className="text-[10px] text-zinc-400 mt-2 italic">Low float alert at KES 500k</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
