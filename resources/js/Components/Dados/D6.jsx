import React from "react";
import "../../../css/components/d6.css"

export default function D6Button({ value, setValue }) {

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setValue(randomNumber);
    };

    return (
        <button
            type="button"
            onClick={rollDice}
            className="d6-button"
        >
            Tirar D6 {value !== "" && `(${value})`}
        </button>
    );
}