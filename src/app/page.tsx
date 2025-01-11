"use client";

import Calculator from "@/components/Calculator/Main";
import CircularLoader from "@/components/Loaders/CircularLoader";
import CalculatorContext from "@/shared/context/calculator";
import { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [calculatedValue, setCalculatedValue] = useState("");

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <CircularLoader />;

  return (
    <>
      <CalculatorContext.Provider
        value={{
          input,
          setInput,
          calculatedValue,
          setCalculatedValue,
        }}
      >
        <Calculator />
      </CalculatorContext.Provider>
    </>
  );
};

export default Home;
