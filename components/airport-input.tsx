"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

interface AirportInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredAirports: { name: string; code: string }[];
  selectAirport: (airport: { name: string; code: string }) => void;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
}

const AirportInput: React.FC<AirportInputProps> = ({
  placeholder,
  value,
  onChange,
  filteredAirports,
  selectAirport,
  showDropdown,
  setShowDropdown,
}) => {
  return (
    <div className="relative">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setShowDropdown(true)}
        className="pl-10 h-14 w-full border-gray-300"
      />
      <MapPin
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      {showDropdown && value && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
          {filteredAirports.map((airport) => (
            <div
              key={airport.code}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => selectAirport(airport)}
            >
              {airport.name} ({airport.code})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportInput;
