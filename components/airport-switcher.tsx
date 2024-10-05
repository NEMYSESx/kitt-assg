// components/DestinationSwitcher.tsx

"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useRouter } from "next/navigation";
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
  airports: Airport[]; // Update to use the Airport type
  selectedAirport: Airport | null; // Changed to Airport type
  onSelect: (airport: Airport) => void; // Update to Airport type
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
                  <div className="flex items-end">
                    <div>
                      <div>{airport.country}</div>
                      <span>{airport.city}</span>
                    </div>
                    <span>{airport.code}</span>
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
