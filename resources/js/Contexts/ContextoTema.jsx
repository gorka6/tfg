import { createContext, useContext, useState, useEffect } from "react";

const ContextoTema = createContext();

export function ContextoTemaProvider({ children }) {
  const [tema, setTema] = useState(localStorage.getItem("tema") || "o");

  useEffect(() => {
    localStorage.setItem("tema", tema);

    document.documentElement.classList.remove("c", "o");
    document.documentElement.classList.add(tema);
  }, [tema]);

  return (
    <ContextoTema.Provider value={{ tema, setTema }}>
      {children}
    </ContextoTema.Provider>
  );
}

export function useContextoTema() {
  return useContext(ContextoTema);
}
