import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import HomeFeed from "@/components/HomeFeed";
import SearchView from "@/components/SearchView";
import ProfileView from "@/components/ProfileView";

type Tab = "home" | "search" | "profile";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeFeed />;
      case "search":
        return <SearchView />;
      case "profile":
        return <ProfileView />;
      default:
        return <HomeFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-background safe-area-top">
      {/* Background gradient decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-md mx-auto"
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
