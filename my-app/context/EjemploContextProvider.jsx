import { createContext, useState } from "react";

export const ContextoEjemplo = createContext();

const ContextEjemploProviderUserState = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const valueSend = { counter, setCounter };

  return (
    <ContextoEjemplo.Provider value={valueSend}>
      {children}
    </ContextoEjemplo.Provider>
  );
};

export default ContextEjemploProviderUserState;
