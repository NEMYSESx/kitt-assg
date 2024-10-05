import { ArrowLeft, Clock, Circle } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  console.log("open", isOpen);
  return (
    <div
      className={`fixed top-0 right-0 w-[700px] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col${
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
      }`}
    >
      <div className="p-4 w-[400px]">
        <button
          className="text-black hover:text-gray-800 rounded-full bg-gray-300 p-2 z-200"
          onClick={() => {
            onClose();
            console.log("Close button clicked!");
          }}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mt-6 mb-4">Flight details</h2>
        <Separator className="mb-4 w-[700px]" />
        <div className="space-y-6">
          <FlightSegment
            date="Sat 28 Sept"
            time="2:15"
            from="DXB"
            fromFull="Dubai International Airport"
            to="RUH"
            toFull="King Khalid International Airport"
            airline="Saudi Arabian Airlines"
            flightNumber="SV563"
            duration="3h 45m"
          />
          <div className="absolute h-56 border-dashed border-2 top-[257px] right-[670px]"></div>

          <div className="absolute top-[220px] pl-10">
            <div className="text-sm text-gray-500 mb-2">
              {"Sat 28 Sept"} • {"2:15"}
            </div>
            <div className="flex items-baseline">
              <span className="font-semibold mr-2">{"RUH"}</span>
              <span className="font-semibold">
                {"King Khalid International Airport"}
              </span>
            </div>
          </div>

          <div className="absolute bottom-[160px] pl-10">
            <div className="text-sm text-gray-500 mb-2">
              {"Sat 28 Sept"} • {"2:15"}
            </div>
            <div className="flex items-baseline">
              <span className="font-semibold mr-2">{"CDG"}</span>
              <span className="font-semibold">{"Paris charles Airport"}</span>
            </div>
          </div>

          <Layover duration="2h 25m" />

          <FlightSegment
            date="Sat 28 Sept"
            time="2:15"
            from="RUH"
            fromFull="King Khalid International Airport"
            to="CDG"
            toFull="Paris - Charles de Gaulle Airport"
            airline="Saudi Arabian Airlines"
            flightNumber="SV563"
            duration="3h 45m"
          />
        </div>
      </div>
      <div className="mt-48 h-auto flex flex-col items-end space-y-56">
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  );
};

type FlightSegmentProps = {
  date: string;
  time: string;
  from: string;
  fromFull: string;
  to: string;
  toFull: string;
  airline: string;
  flightNumber: string;
  duration: string;
};

const FlightSegment: React.FC<FlightSegmentProps> = ({
  date,
  time,
  from,
  fromFull,
}) => {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col items-center">
        <Circle />

        <div className=" h-20 my-1  border-black border-2"></div>

        <Circle />
      </div>

      <div className="flex-1">
        <div className="text-sm text-gray-500 mb-2">
          {date} • {time}
        </div>
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="font-semibold mr-2">{from} •</span>
            <span className="font-semibold">{fromFull}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Layover: React.FC<{ duration: string }> = ({ duration }) => {
  return (
    <div className="flex space-x-4 mt-20 ml-16">
      <div className="flex flex-col items-center my-20">
        <Clock />
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-500 my-20">Layover {duration}</div>
      </div>
    </div>
  );
};

const FlightCard = () => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <img
        className="w-10 h-10"
        src="https://s3-alpha-sig.figma.com/img/ea70/b280/dfe3360521722410b57f9f5917445a6f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBvBpL73nueTsgSvy1j8lsJ25CL30j49OWG92whTeQiDrpruiCkPicWbjYjGHlaxn5fhjaIeq3GlpCDtsgmBEm9iEPG8S4pJ~9DT~vfA5g8XWDUm2eKtqpZRMdO1iqyNU-1vZVl~KIuFc-bRUlhcrkOl3WCssCUPRS0riS0fYEISCO-mVJDsRM6vHYfXWRJhEWvBp2QB38WLXK3Z0FOw3B3BRnaSlN2gjsKsb3RH0kBODgmm-TOvXR6eBXbRySYX7Si4vLDQDL5hJ5m-o4s9dQbvhPyFOXDSYsNmFHw00eAOu1yM~y04zW1HmJET9MZj0PYt8O0UYLimH8z7hvv4-A__"
        alt="Saudi Arabian Airlines Logo"
      />
      <div className="text-sm text-gray-700">
        <p className="font-semibold">Saudi Arabian Airlines • SV553</p>
        <p>Economy • A330</p>
        <p>Flight time 3h 45m</p>
      </div>
    </div>
  );
};

export default Sidebar;
