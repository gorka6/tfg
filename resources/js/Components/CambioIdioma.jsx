import { useContextoIdioma } from "@/Contexts/ContextoIdioma";

export default function CambioIdioma() {
  const { lang, setLang } = useContextoIdioma();

  return (
    <div>
      <button
        onClick={() => setLang("es")}
      >
        🇪🇸
      </button>

      <button
        onClick={() => setLang("en")}
      >
        🇬🇧
      </button>
    </div>
  );
}
