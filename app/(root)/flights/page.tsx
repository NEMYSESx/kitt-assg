"use client";
import React from "react";
import FlightCard from "@/components/flight-card";
import flightsData from "@/public/flights.json";
import { useAirportContext } from "@/context/use-airport";

const FlightList: React.FC = () => {
  const { fromAirport, toAirport } = useAirportContext();

  console.log("From Airport:", fromAirport);
  console.log("To Airport:", toAirport);

  const filteredFlights = flightsData.filter((flight) => {
    const departureAirports = flight.segments.map((segment) =>
      segment.route.split("-")[0].trim()
    );

    const arrivalAirports = flight.segments.map((segment) =>
      segment.route.split("-")[1].trim()
    );

    console.log("Departure Airports:", departureAirports);
    console.log("Arrival Airports:", arrivalAirports);

    return (
      fromAirport?.code &&
      toAirport?.code &&
      departureAirports.includes(fromAirport.code) &&
      arrivalAirports.includes(toAirport.code)
    );
  });

  console.log("Filtered Flights:", filteredFlights);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight, index) => (
          <div key={index} className="mb-6">
            <FlightCard {...flight} />{" "}
          </div>
        ))
      ) : (
        <p className="text-center">No flights found for the selected route.</p> // Message if no flights are found
      )}
    </div>
  );
};

export default FlightList;
