"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDown, LocateIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}

interface DestinationSwitcherProps {
  airports: Airport[];
  selectedAirport: Airport | null;
  onSelect: (airport: Airport) => void;
}

export const DestinationSwitcher: React.FC<DestinationSwitcherProps> = ({
  airports,
  selectedAirport,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a destination"
          className={cn(" justify-between")}
        >
          <LocateIcon className="h-4 w-4 mr-2" />
          {selectedAirport ? selectedAirport.city : "Select Destination"}
          <ChevronDown className="ml-8 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search destination..." />
            <CommandEmpty>No destination found</CommandEmpty>
            <CommandGroup heading="Destinations">
              {airports.map((airport) => (
                <CommandItem
                  key={airport.code}
                  onSelect={() => {
                    onSelect(airport);
                    setOpen(false);
                  }}
                  className="text-sm"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-1">
                      <div className="text-lg ">{airport.city}</div>
                      <div className="text-gray-500">{airport.country}</div>
                    </div>
                    <div className="text-lg w-16 text-right">
                      {airport.code}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
