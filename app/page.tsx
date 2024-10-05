// app/page.tsx (or your main component file)

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useAirportContext } from "@/context/use-airport";
import airportsData from "@/public/data.json"; // Import airportsData
import DatePicker from "@/components/date-picker"; // Import your DatePicker component
import WarningMessage from "@/components/warning"; // Import your WarningMessage component
import { Search } from "lucide-react";
import { DestinationSwitcher } from "@/components/airport-switcher"; // Import your DestinationSwitcher
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

// Define the Airport type
type Airport = {
  code: string;
  name: string;
  city: string;
  country: string;
};

export default function Home() {
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

  const handleSearch = () => {
    if (!fromAirport || !toAirport || !departureDate) {
      setWarningMessage("Please fill in all required fields."); // Set warning message
      return;
    }
    setWarningMessage(""); // Clear warning message
    router.push("/loading");
  };

  const [selectedFromAirport, setSelectedFromAirport] =
    useState<Airport | null>(null); // State for selected departure airport
  const [selectedToAirport, setSelectedToAirport] = useState<Airport | null>(
    null
  ); // State for selected destination airport

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-5xl mb-8 text-center">Good afternoon, Brian</h1>
      <Card className="w-full max-w-6xl mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="text-lg bg-gray-100 inline-block px-4 py-2 rounded-md w-36 text-center">
            Flights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4 items-center">
            <DestinationSwitcher
              airports={airportsData.airports} // Updated to match new component prop
              selectedAirport={selectedToAirport} // Handle selected destination logic
              onSelect={(airport) => {
                setSelectedToAirport(airport); // Update the selected destination
                setToAirport(airport.code); // Set the airport code for context
              }}
            />
            <div className="rounded-full bg-gray-200 p-3">
              <ArrowLeftRight className="h-6 w-6" />
            </div>
            <DestinationSwitcher
              airports={airportsData.airports} // Updated to match new component prop
              selectedAirport={selectedFromAirport} // Handle selected departure logic
              onSelect={(airport) => {
                setSelectedFromAirport(airport); // Update the selected departure airport
                setFromAirport(airport.code); // Set the airport code for context
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
              className="bg-button-color hover:bg-teal-700 text-white w-60 h-14 rounded-md text-lg mt-7"
              onClick={handleSearch}
            >
              <Search className="mr-2" size={20} />
              Search flights
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
