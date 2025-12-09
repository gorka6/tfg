import { useState } from "react";
import "../../css/components/grid-select.css";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";

export default function GridSelect({ options = [], value, onChange, label, mode, disabled = false, placeholder }) {
    const [open, setOpen] = useState(false);
    const selected = options.find(o => o.value === value);
    const { t } = useContextoIdioma();

    return (
        <div className="grid-select">
            <button
                type="button"
                className="grid-select-trigger"
                onClick={() => !disabled && setOpen(!open)}
                disabled={disabled}
            >
                {selected ? selected.label : placeholder}
            </button>

            {open && (
                <div className="grid-select-menu">
                    {mode === "subraces" && (
                        <div
                            className="grid-select-item"
                            onClick={() => {
                                onChange(null);
                                setOpen(false);
                            }}
                        >
                            <span>{t.subraces.no_subrace}</span>
                        </div>
                    )}

                    {options.map(opt => (
                        <div
                            key={opt.value}
                            className="grid-select-item"
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                        >
                            <img src={`/images/web/form/${mode}/${opt.value}.png`} alt={opt.label} />
                            <span>{opt.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
