import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Dashboard } from "../../pages/Dashboard";
import { Drivers } from "../../pages/Drivers";
import { Trips } from "../../pages/Trips";
import { Payments } from "../../pages/Payments";

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "drivers":
        return <Drivers />;
      case "trips":
        return <Trips />;
      case "payments":
        return <Payments />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-zinc-400">
            <p className="text-lg font-medium">Module "{activeTab}" is under construction</p>
            <p className="text-sm">We're building this section for the Nairobi market.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full bg-zinc-50 overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
