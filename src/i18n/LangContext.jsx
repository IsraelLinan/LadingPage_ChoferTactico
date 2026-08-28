import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es");
  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
