import { useState } from "react";
import "../../css/components/grid-select.css";

export default function GridSelect({ options = [], value, onChange, label, mode, disabled, placeholder }) {
    const [open, setOpen] = useState(false);

    const selected = options.find(o => o.value === value);


    return (
        <div className="grid-select">
            <label className="grid-select-label">{label}</label>

            <button
                type="button"
                className="grid-select-trigger"
                onClick={() => !disabled && setOpen(!open)}
                disabled={disabled}            >
                {selected ? selected.label : placeholder}
            </button>

            {open && (
                <div className="grid-select-menu">
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
