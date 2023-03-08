import { ContextoEjemplo } from "../../context/EjemploContextProvider";
import { useContext } from "react";

import { useRouter } from "next/router";
const Productos = () => {
  const router = useRouter();
  const { counter, setCounter } = useContext(ContextoEjemplo);
  const handleGo = () => router.push("/Enlace/Usuarios/Tercerizados");
  return (
    <>
      <div>Productos</div>
      <h1>{counter}</h1>
      <button onClick={() => handleGo()}>ir Tercerizados</button>
    </>
  );
};

export default Productos;
