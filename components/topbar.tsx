"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useAirportContext } from "@/context/use-airport";
import airportsData from "@/public/data.json";
import DatePicker from "./date-picker";
import WarningMessage from "./warning";
import { ArrowLeftRight, Search } from "lucide-react";
import { DestinationSwitcher } from "@/components/airport-switcher";

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

  const selectedFromAirport = airportsData.airports.find(
    (airport) => airport.code === fromAirport
  );
  const selectedToAirport = airportsData.airports.find(
    (airport) => airport.code === toAirport
  );

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
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </div>
      <Card className="w-full max-w-7xl mx-auto border-none">
        <CardContent className="space-y-4">
          <div className="flex space-x-4 items-center">
            <DestinationSwitcher
              airports={airportsData.airports}
              selectedAirport={selectedFromAirport || null}
              onSelect={(airport) => {
                setFromAirport(airport.code);
              }}
            />

            <div className="rounded-full bg-gray-200 p-3">
              <ArrowLeftRight className="h-6 w-6" />
            </div>

            <DestinationSwitcher
              airports={airportsData.airports}
              selectedAirport={selectedToAirport || null}
              onSelect={(airport) => {
                setToAirport(airport.code);
              }}
            />

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

          <WarningMessage message={warningMessage} />

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
