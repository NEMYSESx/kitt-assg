"use client";
import React from "react";
import { SearchNav } from "@/components/search-nav";
import { useAirportContext } from "@/context/use-airport"; // Use the context
import { TopBar } from "@/components/topbar";
import Sidebar from "@/components/sidebar"; // Import the Sidebar component

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen, toggleSidebar } = useAirportContext(); // Destructure sidebar state and toggle function

  return (
    <div>
      <SearchNav onClick={toggleSidebar} />{" "}
      {/* You can control the sidebar from here */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {children}
    </div>
  );
}
