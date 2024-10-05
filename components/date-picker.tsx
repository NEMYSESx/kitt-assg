"use client";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface DatePickerProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date | undefined) => void;
  placeholder: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onSelectDate,
  placeholder,
}) => {
  return (
    <div className="relative ">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={`w-60 justify-start text-left font-normal h-14 ${
              !selectedDate && "text-muted-foreground"
            }`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selectedDate || undefined}
            onSelect={(date) => onSelectDate(date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
