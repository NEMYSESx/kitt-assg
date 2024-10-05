import { Search } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useAirportContext } from "@/context/use-airport";

export const SearchNav = ({ onClick }: { onClick: () => void }) => {
  const { fromAirport, toAirport, departureDate, returnDate } =
    useAirportContext();
  return (
    <div className="border h-28">
      <div className="bg-white rounded-full p-4 pl-6 border border-gray-400 mb-8 flex justify-between h-14 w-[800px] mx-auto mt-4">
        {" "}
        <div className="flex-1 flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-40">
            <div className="font-semibold text-lg">{fromAirport?.code}</div>
            <div className=" text-gray-500 w-32">
              {fromAirport?.name && fromAirport.name.length > 10
                ? `${fromAirport.name.slice(0, 10)}...`
                : fromAirport?.name}
            </div>
          </div>
          <Separator orientation="vertical" />

          <div className="flex items-center space-x-2">
            <div className="font-semibold text-lg">{toAirport?.code}</div>
            <div className=" text-gray-500 w-40">
              {toAirport?.name && toAirport.name.length > 10
                ? `${toAirport.name.slice(0, 10)}...`
                : toAirport?.name}
            </div>
          </div>
          <Separator orientation="vertical" />
        </div>
        <div className="flex-1 text-center">
          <div className="font-semibold">
            {departureDate
              ? departureDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })
              : "No Date"}{" "}
            -{" "}
            {returnDate
              ? returnDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })
              : "No Date"}
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className=" mr-8 mb-3 h-12 w-14">
          <button
            className="absolute h-10 w-10 rounded-full border bg-gray-300 top-[25px] right-[453px]"
            onClick={onClick}
          >
            <Search className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
