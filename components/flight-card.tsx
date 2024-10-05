import Sidebar from "@/components/sidebar";
import { useAirportContext } from "@/context/use-airport";
import React, { useState } from "react";

type Airline = {
  name: string;
  logo: string;
};

type FlightSegment = {
  airline: Airline;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  route: string;
  duration: string;
  stops: string;
  additionalInfo?: string;
};

type FlightCardProps = {
  segments: FlightSegment[];
  price: number;
};

const FlightCard: React.FC<FlightCardProps> = ({ segments, price }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toggleSidebar } = useAirportContext();

  return (
    <div className="flex justify-between items-center border border-gray-200 shadow-sm  h-60 rounded-lg hover:shadow-lg hover:bg-gray-100">
      {/* Flight Details */}
      <div className="flex flex-col space-y-4 w-[1200px] h-60 p-4 border">
        {segments.map((segment, index) => (
          <div key={index} className="flex justify-between">
            {/* Airline Logo and Info */}
            <div className="flex space-x-4 items-center pl-3">
              <img
                src={segment.airline.logo}
                alt={`${segment.airline.name} logo`}
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <span className="font-medium text-gray-500">
                  {segment.airline.name} • {segment.flightNumber}
                </span>
                <div>
                  <span className="text-lg font-semibold">
                    {segment.departureTime} - {segment.arrivalTime}
                  </span>
                  {segment.additionalInfo && (
                    <span className="text-red-500 text-sm pl-2">
                      {segment.additionalInfo}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Flight Route and Duration */}
            <div className="flex items-end m-7 pl-28 w-80">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">{segment.route}</span>
                <span className="font-medium text-xl">{segment.duration}</span>
              </div>
              <span className="text-lg font-medium pl-10">{segment.stops}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Price and Select Button */}
      <div className="flex flex-col items-end border h-60 w-60 p-4 rounded-r-lg">
        <div className=" flex flex-col mt-20">
          <span className="text-lg text-gray-500">from</span>
          <span className="text-xl ">AED {price.toFixed(2)}</span>
          <button
            className="bg-button-color text-white px-6 py-3 rounded-lg mt-4 hover:bg-green-700 w-52"
            onClick={toggleSidebar}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
