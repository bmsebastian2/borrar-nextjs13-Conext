import { ContextoEjemplo } from "../../context/EjemploContextProvider";
import { useContext } from "react";
import Link from "next/link";
const index = () => {
  const { counter, setCounter } = useContext(ContextoEjemplo);
  return (
    <>
      <div>QUESTION</div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <Link href={"/Enlace/Productos"}>Otro enlace</Link>
     
    </>
  );
};

export default index;
