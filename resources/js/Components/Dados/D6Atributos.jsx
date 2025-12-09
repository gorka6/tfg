import React, { useState } from "react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import DadosRoller from "./DadosRoller";
import "../../../css/components/d6-atributos.css";

export default function D6Button({ label, value, setValue }) {
    const { t } = useContextoIdioma();
    const [rolls, setRolls] = useState([]);
    const [isRolling, setIsRolling] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const rollDice = () => {
        if (isRolling) return;
        setIsRolling(true);
        const newRolls = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);
        setRolls(newRolls);
        setRefreshKey(Date.now());

        const total = newRolls.reduce((a, b) => a + b, 0);
        setTimeout(() => {
            setValue(total);
            setIsRolling(false);
        }, 800);
    };

    return (
        <div className="d6-button">
            {label && <div className="d6-label">{label}</div>}
            <button
                type="button"
                className="d6-roll-btn"
                onClick={rollDice}
                disabled={isRolling}
            >
                {isRolling ? t.create.rolling : t.create.roll}
            </button>

            <DadosRoller dieType="d6" rolls={rolls} refreshKey={refreshKey} />

            <div className="d6-total">
                {isRolling ? "—" : `Total: ${value}`}
            </div>
        </div>
    );
}
