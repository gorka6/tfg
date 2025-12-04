import React from "react";
import "../../css/components/fondo-seamless.css";

export default function FondoSeamless({ children, className = "" }) {
  return (
    <div className={`fondo-seamless ${className}`}>
      {children}
    </div>
  );
}
