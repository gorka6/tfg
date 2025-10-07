import { useContextoTema } from "@/Contexts/ContextoTema";
import '../../css/components/cambiotema.css';

export default function CambioTema() {
  const { tema, setTema } = useContextoTema();

  const toggleTema = () => {
    setTema(tema === 'c' ? 'o' : 'c');
  };

  return (
    <button className="theme-toggle-button" onClick={toggleTema}>
      {tema === 'c' ? '🌙' : '🌞'}
    </button>
  );
}
