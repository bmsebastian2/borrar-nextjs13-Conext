import { ContextoEjemplo } from "../../../../context/EjemploContextProvider";
import { useContext } from "react";
import Link from "next/link";

const Tercerizados = () => {
  const { counter, setCounter } = useContext(ContextoEjemplo);
  return (
    <div>
      Tercerizados
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <Link href={"/"}>Inicio voy</Link>
    </div>
  );
};

export default Tercerizados;
