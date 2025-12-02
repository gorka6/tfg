import React from "react";
import "../../../css/components/d6atributos.css";

export default function DadosRoller({ dieType = "d6", rolls = [], refreshKey = 0 }) {
  return (
    <div className="dice-display">
      {rolls.map((roll, i) => {
        const imageName = `${dieType}_roll_${roll}.gif`;
        return (
          <img
            key={`${i}-${refreshKey}`}
            src={`/images/dice/${imageName}?${refreshKey}`}
            alt={`${dieType} ${roll}`}
            className="dice-face"
          />
        );
      })}
    </div>
  );
}

