import React, { useState } from "react";
import "../../../css/components/d6atributos.css";

export default function D6Button({ value, setValue }) {
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
        <div className="d6-container">
            <button
                type="button"
                onClick={rollDice}
                className={`d6-button ${isRolling ? "rolling" : ""}`}
                disabled={isRolling}
            >
                {isRolling ? "Rodando..." : "Tirar 3D6"}
            </button>

            <div className="dice-display">
                {rolls.map((roll, i) => (
                    <img
                        key={i}
                        src={`/images/dice/dice${roll}.gif?${refreshKey}`}
                        alt={`Dado ${roll}`}
                        className="dice-face"
                    />
                ))}
            </div>

            <p className="dice-result">
                Total: {isRolling ? "—" : value}
            </p>

        </div>
    );
}
