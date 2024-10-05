"use client";
import React, { createContext, useContext, useState } from "react";
import airportsData from "@/public/data.json";

interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}

interface AirportContextType {
  departureDate: Date | undefined;
  setDepartureDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  returnDate: Date | undefined;
  setReturnDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  fromAirport: Airport | null; // Change this to Airport object
  setFromAirport: React.Dispatch<React.SetStateAction<Airport | null>>;
  toAirport: Airport | null; // Change this to Airport object
  setToAirport: React.Dispatch<React.SetStateAction<Airport | null>>;
  fromFilteredAirports: Airport[];
  setFromFilteredAirports: React.Dispatch<React.SetStateAction<Airport[]>>;
  toFilteredAirports: Airport[];
  setToFilteredAirports: React.Dispatch<React.SetStateAction<Airport[]>>;
  showFromDropdown: boolean;
  setShowFromDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  showToDropdown: boolean;
  setShowToDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  warningMessage: string;
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AirportContext = createContext<AirportContextType | undefined>(undefined);

export const AirportProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [fromAirport, setFromAirport] = useState<Airport | null>(null);
  const [toAirport, setToAirport] = useState<Airport | null>(null);
  const [fromFilteredAirports, setFromFilteredAirports] = useState(
    airportsData.airports
  );
  const [toFilteredAirports, setToFilteredAirports] = useState(
    airportsData.airports
  );
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <AirportContext.Provider
      value={{
        departureDate,
        setDepartureDate,
        returnDate,
        setReturnDate,
        fromAirport,
        setFromAirport,
        toAirport,
        setToAirport,
        fromFilteredAirports,
        setFromFilteredAirports,
        toFilteredAirports,
        setToFilteredAirports,
        showFromDropdown,
        setShowFromDropdown,
        showToDropdown,
        setShowToDropdown,
        warningMessage,
        setWarningMessage,
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </AirportContext.Provider>
  );
};

export const useAirportContext = () => {
  const context = useContext(AirportContext);
  if (!context) {
    throw new Error("useAirportContext must be used within an AirportProvider");
  }
  return context;
};
