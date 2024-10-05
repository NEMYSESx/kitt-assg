import { Search } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";

export const SearchNav = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="border h-28">
      <div className="bg-white rounded-full p-4 pl-6 border border-gray-400 mb-8 flex justify-between h-14 w-[800px] mx-auto mt-4">
        {" "}
        {/* Adjusted width and centering */}
        <div className="flex-1 flex items-center space-x-4">
          {/* Group CDG and Paris Charles De Gaulle on the same line */}
          <div className="flex items-center space-x-2 w-40">
            <div className="font-semibold text-lg">CDG</div>
            <div className=" text-gray-500 w-32">Paris Charles...</div>
          </div>
          <Separator orientation="vertical" />

          <div className="flex items-center space-x-2">
            <div className="font-semibold text-lg">DXB</div>
            <div className=" text-gray-500 w-40">Dubai International...</div>
          </div>
          <Separator orientation="vertical" />
        </div>
        <div className="flex-1 text-center">
          <div className="font-semibold ">Jun 25 - Jul 2</div>
        </div>
        <Separator orientation="vertical" />
        <div className=" mr-8 mb-3 h-12 w-14">
          <button
            className="p-2 mb-3 h-10 w-10 rounded-full ml-11 border bg-gray-300"
            onClick={onClick}
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
