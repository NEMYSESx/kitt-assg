"use client";

import React, { useState } from "react";
import { SearchNav } from "@/components/search-nav";
import { useAirportContext } from "@/context/use-airport";
import { TopBar } from "@/components/topbar";
import Sidebar from "@/components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSidebarOpen, toggleSidebar } = useAirportContext();
  const [isTopBarOpen, setIsTopBarOpen] = useState(false);

  const openTopBar = () => {
    setIsTopBarOpen(true);
  };

  const closeTopBar = () => {
    setIsTopBarOpen(false);
  };

  return (
    <div>
      <SearchNav onClick={openTopBar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {isTopBarOpen && <TopBar onClose={closeTopBar} />}

      {children}
    </div>
  );
}
