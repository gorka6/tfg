export default function Selector({ options, selected, onChange, max = 4 }) {
  const toggle = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter(s => s !== value)
      : selected.length < max
        ? [...selected, value]
        : selected;
    onChange(newSelected);
  };

  return (
    <div>
      {options.map(({ value, label }) => (
        <label key={value} style={{ display: "block" }}>
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
