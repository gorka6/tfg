import React, { useState } from "react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import DadosRoller from "./DadosRoller";

export default function D6Button({ value, setValue }) {

    const { t } = useContextoIdioma();
    const [rolls, setRolls] = useState([]);
    const [isRolling, setIsRolling] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const rollDice = () => {
        setIsRolling(true);
        const newRolls = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);
        setRolls(newRolls);
        setRefreshKey(Date.now());

        const total = newRolls.reduce((a, b) => a + b, 0);
        setTimeout(() => {
            setValue(total);
            setIsRolling(false);
        }, 1000);
    };

    return (
        <div>
            <button
                type="button"
                onClick={rollDice}
                disabled={isRolling}
            >
                {isRolling ? t.create.rolling : t.create.roll}
            </button>

            <div>
                <DadosRoller dieType="d6" rolls={rolls} refreshKey={refreshKey} />
            </div>

            <p>
                Total: {isRolling ? "—" : value}
            </p>

        </div>
    );
}
