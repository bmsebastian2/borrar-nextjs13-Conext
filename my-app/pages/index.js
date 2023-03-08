import React from "react";
import GpsAutomatic from "../pages/GpsAutomatic/GpsAutomatic";
import GpsManual from "./GpsManual/GpsManual";

import { ContextoEjemplo } from "../context/EjemploContextProvider";
import { useContext } from "react";
const index = () => {
  const { counter, setCounter } = useContext(ContextoEjemplo);

  return (
    <>
      <div>index</div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <GpsAutomatic />
      <GpsManual />
    </>
  );
};

export default index;
