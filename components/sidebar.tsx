import { ArrowLeft } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[700px] h-full bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
          <ArrowLeft />
        </button>
        <h2 className="text-xl font-semibold">Flight Details</h2>
        <Separator />
        {/* Add your sidebar content here */}
      </div>
    </div>
  );
};

export default Sidebar;
