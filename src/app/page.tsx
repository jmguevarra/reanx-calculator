"use client";

import CalculatorMain from "@/components/calculators/main";
import CircularLoader from "@/components/Loaders/circular-loader";
import CalculatorContext from "@/shared/context/calculator";
import { ICalculatorLog } from "@/shared/interfaces/calculator";
import { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [calculatedValue, setCalculatedValue] = useState("");
  const [logs, setLogs] = useState<ICalculatorLog[]>([]);

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
          logs,
          setLogs,
        }}
      >
        <CalculatorMain />
      </CalculatorContext.Provider>
    </>
  );
};

export default Home;
