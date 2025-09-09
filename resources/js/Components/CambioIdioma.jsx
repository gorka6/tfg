import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import "../../css/components/cambioidioma.css";

export default function CambioIdioma() {
  const { lang, setLang } = useContextoIdioma();

  return (
    <div className="language-switcher">
      <button
        onClick={() => setLang("es")}
        className={`language-button ${lang === "es" ? "active" : ""}`}
      >
        🇪🇸
      </button>

      <button
        onClick={() => setLang("en")}
        className={`language-button ${lang === "en" ? "active" : ""}`}
      >
        🇬🇧
      </button>
    </div>
  );
}
