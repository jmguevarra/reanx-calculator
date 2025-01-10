"use client";

import { CALCULATOR_CHARACTERS } from "@/constant/calculator";
import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: any) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Caution: Avoid eval in production
      } catch {
        setResult("Error");
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
      <div className="w-80 p-5 rounded-2xl bg-black shadow-lg">
        {/* Display */}
        <div className="text-right text-white mb-4">
          <div className="text-sm opacity-70">{input || "0"}</div>
          <div className="text-3xl font-bold">{result || "0"}</div>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {CALCULATOR_CHARACTERS.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`text-xl font-semibold p-4 rounded-full ${
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
      </div>
    </div>
  );
};

export default Calculator;
