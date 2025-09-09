import { createContext, useContext, useState, useEffect } from "react";
import es from "../lang/es";
import en from "../lang/en";

const idiomas = { es, en };

const ContextoIdioma = createContext();

export function ContextoIdiomaProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "es");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = idiomas[lang];

  return (
    <ContextoIdioma.Provider value={{ lang, setLang, t }}>
      {children}
    </ContextoIdioma.Provider>
  );
}

export function useContextoIdioma() {
  return useContext(ContextoIdioma);
}
