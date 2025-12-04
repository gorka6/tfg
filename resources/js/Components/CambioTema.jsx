import { useContextoTema } from "@/Contexts/ContextoTema";

export default function CambioTema() {
  const { tema, setTema } = useContextoTema();

  const toggleTema = () => {
    setTema(tema === 'c' ? 'o' : 'c');
  };

  return (
    <button onClick={toggleTema}>
      {tema === 'c' ? (<img src="/images/web/moon.svg"/>) : (<img src="/images/web/sun.svg"/>)}
    </button>
  );
}
