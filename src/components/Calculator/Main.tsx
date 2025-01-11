"use client";

import { CALCULATOR_CHARACTERS } from "@/constant/calculator";
import { evaluate } from "mathjs";
import React, { useEffect, useState } from "react";
import CalculatorDrawerLogs from "./DrawerLogs";

const CalculatorMain: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: any) => {
    if (value === "=") {
      try {
        setResult(evaluate(input));
      } catch (error) {
        console.error("Error: ", error);
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-80 px-6 pt-20 pb-2 rounded-2xl bg-black shadow-lg">
        {/* Display */}
        <div className="text-right text-white mb-4">
          <div className="text-xs opacity-70 mb-1">{input || "0"}</div>
          <div className="text-4xl font-bold">{result || "0"}</div>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {CALCULATOR_CHARACTERS.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`text-xl font-semibold w-14 h-14 rounded-full flex justify-center items-center ${
                btn === "="
                  ? "bg-gradient-to-r from-orange-400 to-red-500 text-white"
                  : btn === "C"
                  ? "bg-gray-600 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <CalculatorDrawerLogs></CalculatorDrawerLogs>
      </div>
    </div>
  );
};

export default CalculatorMain;
