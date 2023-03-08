import "@/styles/globals.css";
import ContextEjemploProviderUserState from "../context/EjemploContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextEjemploProviderUserState>
        <Component {...pageProps} />
      </ContextEjemploProviderUserState>
    </>
  );
}
