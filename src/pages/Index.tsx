import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import UserDashboard from "@/components/UserDashboard";
import OrganizerDashboard from "@/components/OrganizerDashboard";

const Index = () => {
  const [activeView, setActiveView] = useState<"main" | "user" | "organizer">("main");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header activeView={activeView} setActiveView={setActiveView} />
      
      {activeView === "main" && <MainPage />}
      {activeView === "user" && <UserDashboard />}
      {activeView === "organizer" && <OrganizerDashboard />}
      
      <Footer />
    </div>
  );
};

export default Index;
