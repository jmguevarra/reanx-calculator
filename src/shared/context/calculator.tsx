import React from "react";

//initialize interface property
interface props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

//create context and export it
const CalculatorContext = React.createContext<props | null>(null);
export default CalculatorContext;
