"use client";

import React, { useState } from "react";
import { SearchNav } from "@/components/search-nav";
import { useAirportContext } from "@/context/use-airport"; // Use the context
import { TopBar } from "@/components/topbar"; // Import TopBar
import Sidebar from "@/components/sidebar"; // Import Sidebar

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen, toggleSidebar } = useAirportContext(); // Destructure sidebar state and toggle function
  const [isTopBarOpen, setIsTopBarOpen] = useState(false); // State for TopBar visibility

  // Function to handle opening the TopBar
  const openTopBar = () => {
    setIsTopBarOpen(true);
  };

  // Function to handle closing the TopBar
  const closeTopBar = () => {
    setIsTopBarOpen(false);
  };

  return (
    <div>
      {/* SearchNav controls the sidebar */}
      <SearchNav onClick={openTopBar} />
      {/* Sidebar controlled by AirportContext */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Conditionally render TopBar based on isTopBarOpen */}
      {isTopBarOpen && <TopBar onClose={closeTopBar} />}

      {/* The rest of the children */}
      {children}
    </div>
  );
}
