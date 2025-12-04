import { useContextoIdioma } from "@/Contexts/ContextoIdioma";

export default function CambioIdioma() {
  const { lang, setLang } = useContextoIdioma();

  return (
    <div >
      <button
        onClick={() => setLang("es")}
      >
        <img src="/images/web/es.png" alt="" />
      </button>

      <button
        onClick={() => setLang("en")}
      >
        <img src="/images/web/en.svg" alt="" />
      </button>
    </div>
  );
}
