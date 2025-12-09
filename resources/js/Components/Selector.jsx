import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import "../../css/components/selector.css"

export default function Selector({ options, selected, onChange, max = 4 }) {
  const toggle = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter(s => s !== value)
      : selected.length < max
        ? [...selected, value]
        : selected;
    onChange(newSelected);
  };

  const { t } = useContextoIdioma();

  return (
    <div className="selector">
      {options.map(({ value, label }) => (
        <label key={value}>
          <input
            type="checkbox"
            value={value}
            checked={selected.includes(value)}
            onChange={() => toggle(value)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}

