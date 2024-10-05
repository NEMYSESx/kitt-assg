"use client";
import React, { useState } from "react";
import FlightCard from "@/components/flight-card";
import flightsData from "@/public/flights.json";

const FlightList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {flightsData.map((flight, index) => (
        <div key={index} className="mb-6">
          {" "}
          {/* Adds margin bottom to each card */}
          <FlightCard {...flight} />
        </div>
      ))}
    </div>
  );
};

export default FlightList;
