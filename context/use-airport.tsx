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
  fromAirport: string;
  setFromAirport: React.Dispatch<React.SetStateAction<string>>;
  toAirport: string;
  setToAirport: React.Dispatch<React.SetStateAction<string>>;
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
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
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
    setIsSidebarOpen((prev) => {
      console.log("Previous state:", prev);
      const newState = !prev;
      console.log("New state:", newState);
      return newState;
    });
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
