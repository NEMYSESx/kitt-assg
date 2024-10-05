"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useAirportContext } from "@/context/use-airport";
import airportsData from "@/public/data.json";
import DatePicker from "@/components/date-picker";
import WarningMessage from "@/components/warning";
import { Search } from "lucide-react";
import { DestinationSwitcher } from "@/components/airport-switcher";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

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
      setWarningMessage("Please fill in all required fields.");
      return;
    }
    setWarningMessage("");
    router.push("/loading");
  };

  const [selectedFromAirport, setSelectedFromAirport] =
    useState<Airport | null>(null);
  const [selectedToAirport, setSelectedToAirport] = useState<Airport | null>(
    null
  );

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
              airports={airportsData.airports}
              selectedAirport={selectedToAirport}
              onSelect={(airport) => {
                setSelectedToAirport(airport);
                setToAirport(airport.code);
              }}
            />
            <div className="rounded-full bg-gray-200 p-3">
              <ArrowLeftRight className="h-6 w-6" />
            </div>
            <DestinationSwitcher
              airports={airportsData.airports}
              selectedAirport={selectedFromAirport}
              onSelect={(airport) => {
                setSelectedFromAirport(airport);
                setFromAirport(airport.code);
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
