"use client";

import {
  ARITHMETIC_OPERATORS,
  CALCULATOR_CHARACTERS,
  CALCULATOR_OPERATORS,
} from "@/constant/calculator";
import { evaluate, floor, format } from "mathjs";
import React, { useContext, useState } from "react";
import CalculatorDrawerLogs from "./DrawerLogs";
import CalculatorContext from "@/shared/context/calculator";

const CalculatorMain: React.FC = () => {
  //descructuring context properties
  const { input, setInput, calculatedValue, setCalculatedValue } =
    useContext(CalculatorContext);

  const [isComputed, setIsComputed] = useState<boolean>(false);

  const handleClick = (value: any) => {
    const lastChar = input.charAt(input.length - 1);

    // no number yet and clicked operator
    if (input.length < 1 && CALCULATOR_OPERATORS.includes(value)) return;

    //if lastcharter and inputted button is the same
    if (lastChar === value && CALCULATOR_OPERATORS.includes(lastChar))
      return null;

    //change arithmetic operator
    if (
      ARITHMETIC_OPERATORS.includes(value) &&
      ARITHMETIC_OPERATORS.includes(lastChar)
    ) {
      return setInput(input.slice(0, -1) + value);
    }

    //proceed to some action
    if (value === "=") {
      try {
        //empty the calculatedValue if input is become empty
        if (!input) return setCalculatedValue("");

        //check if the last character is operato except the module operator
        if (
          CALCULATOR_OPERATORS.includes(lastChar) &&
          !CALCULATOR_OPERATORS.includes("%")
        )
          return;

        //replace x string and divided symbol by real arithmetic characters
        let convertedString = input.replace(/×/g, "*").replace(/÷/g, "/");
        const result = evaluate(convertedString);

        //set percistion and formating to auto
        const precision = result % 1 === 0 ? 6 : 2;
        const formattedResult = format(result, {
          notation: "auto",
          precision: precision,
        });

        setCalculatedValue(formattedResult);
      } catch (error) {
        console.error("Error: ", error);
      }
    } else if (value === "C") {
      // Clearing the input and calculated fields
      setInput("");
      setCalculatedValue("");
      setIsComputed(false);
    } else if (value === "⌫") {
      //remove last character
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-80 px-6 pt-20 pb-2 rounded-2xl bg-black shadow-lg">
        {/* Display */}
        <div className="text-right text-white mb-4">
          <div
            className={`${
              isComputed ? "scale-60 opacity-70" : "scale-100 opacity-100"
            } mb-1 text-4xl font-bold transition-transform duration-500`}
          >
            {input || "0"}
          </div>
          <div className="text-4xl font-bold transition duration-500">
            {calculatedValue || ""}
          </div>
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
