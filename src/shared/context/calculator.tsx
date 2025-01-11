import React, { Dispatch, SetStateAction } from "react";

//initialize interface property
interface props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  calculatedValue: string;
  setCalculatedValue: Dispatch<SetStateAction<string>>;
}

//create context and export it
const CalculatorContext = React.createContext<props>({
  input: "",
  setInput: () => {},
  calculatedValue: "",
  setCalculatedValue: () => {},
});

export default CalculatorContext;
