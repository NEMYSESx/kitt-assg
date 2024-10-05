"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useAirportContext } from "@/context/use-airport";
import airportsData from "@/public/data.json"; // Import airportsData
import DatePicker from "./date-picker"; // Import DatePicker component
import WarningMessage from "./warning"; // Import WarningMessage component
import { ArrowLeftRight, Search } from "lucide-react";
import { DestinationSwitcher } from "@/components/airport-switcher"; // Import DestinationSwitcher

// Add `onClose` as a prop from the parent component
export const TopBar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    fromAirport,
    setFromAirport,
    toAirport,
    setToAirport,
    warningMessage,
    setWarningMessage,
  } = useAirportContext();

  const router = useRouter();

  const [selectedFromAirport, setSelectedFromAirport] = useState<{
    name: string;
    code: string;
    city: string;
    country: string;
  } | null>(null);
  const [selectedToAirport, setSelectedToAirport] = useState<{
    name: string;
    code: string;
    city: string;
    country: string;
  } | null>(null);

  useEffect(() => {
    const fromAirportData = airportsData.airports.find(
      (airport) => airport.code === fromAirport
    );
    const toAirportData = airportsData.airports.find(
      (airport) => airport.code === toAirport
    );
    setSelectedFromAirport(fromAirportData || null);
    setSelectedToAirport(toAirportData || null);
  }, [fromAirport, toAirport]);

  const handleSearch = () => {
    if (!fromAirport || !toAirport || !departureDate) {
      setWarningMessage("Please fill in all required fields.");
      return;
    }
    setWarningMessage("");
    router.push("/loading");
  };

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Use the onClose prop here to close the TopBar */}
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </div>
      <Card className="w-full max-w-7xl mx-auto border-none">
        <CardContent className="space-y-4">
          <div className="flex space-x-4 items-center">
            {/* Departure Airport Input */}
            <DestinationSwitcher
              airports={airportsData.airports}
              selectedAirport={selectedFromAirport}
              onSelect={(airport) => {
                setSelectedFromAirport(airport);
                setFromAirport(airport.code); // Update context
              }}
            />

            {/* Arrow Icon */}
            <div className="rounded-full bg-gray-200 p-3">
              <ArrowLeftRight className="h-6 w-6" />
            </div>

            {/* Destination Airport Input */}
            <DestinationSwitcher
              airports={airportsData.airports}
              selectedAirport={selectedToAirport}
              onSelect={(airport) => {
                setSelectedToAirport(airport);
                setToAirport(airport.code); // Update context
              }}
            />

            {/* Date Pickers */}
            <div className="ml-4 flex space-x-4">
              <DatePicker
                selectedDate={departureDate || null}
                onSelectDate={(date) => setDepartureDate(date || undefined)}
                placeholder="Departure"
              />
              <DatePicker
                selectedDate={returnDate || null}
                onSelectDate={(date) => setReturnDate(date || undefined)}
                placeholder="Return"
              />
            </div>
          </div>

          {/* Warning Message */}
          <WarningMessage message={warningMessage} />

          {/* Search Button */}
          <div className="flex justify-end">
            <Button
              className="bg-button-color hover:bg-teal-700 text-white w-60 h-14 rounded-md text-lg mt-7 flex justify-between items-center px-4"
              onClick={handleSearch}
            >
              <ArrowLeftRight className="mr-2" size={20} />
              Search flights
              <Search className="ml-2" size={20} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
