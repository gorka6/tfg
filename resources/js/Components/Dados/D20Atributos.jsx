import { useEffect, useState } from "react";

export default function D20Atributos({ ficha, bonus, savThrow1, savThrow2 }) {
    const [resultado, setResultado] = useState(null);
    const [atributo, setAtributo] = useState("str");
    const [dc, setDc] = useState("");
    const atributos = ["str", "dex", "con", "int", "wis", "cha"];
    const tirar = () => {
        if (!ficha || !dc) return alert("Selecciona ficha y pon un DC");

        const d20 = Math.floor(Math.random() * 20) + 1;

        const baseMod = Math.floor((ficha[atributo] - 10) / 2);

        const classSavThrow1 = savThrow1 === savThrow1 ? 1 : 0;

        const classSavThrow2 = savThrow2 === savThrow1 ? 1 : 0;


        const bonusAtributo = bonus
            ? bonus.find(b => b.attribute.abbrev === atributo)?.bonus || 0
            : 0;

        const mod = baseMod + bonusAtributo + classSavThrow1 + classSavThrow2;

        const total = d20 + mod;
        const exito = total >= Number(dc);

        setResultado({ d20, baseMod, bonusAtributo, classSavThrow1, classSavThrow2, mod, total, exito });
    };

    useEffect(() => {
        setResultado(null);
    }, [dc, atributo]);

    return (
        <>
            <input
                type="number"
                value={dc}
                onChange={(e) => setDc(e.target.value)}
                placeholder="DC"
            />
            <select value={atributo} onChange={(e) => setAtributo(e.target.value)}>
                {atributos.map(a => <option key={a} value={a}>{a.toUpperCase()}</option>)}
            </select>
            <div>
                <button onClick={tirar}>Tirar</button>
                {resultado && (
                    <div style={{ marginTop: "10px" }}>
                        <p>d20: {resultado.d20}</p>
                        <p>Modificador base ({atributo.toUpperCase()}): {resultado.baseMod}</p>
                        <p>Bonus de raza/subraza: {resultado.bonusAtributo}</p>
                        <p>Bonus de pericia por clase 1 {savThrow1}: {resultado.classSavThrow1}</p>
                        <p>Bonus de pericia por clase 2 {savThrow2}: {resultado.classSavThrow2}</p>
                        <p>Modificador total: {resultado.mod}</p>
                        <p>Total (d20 + modificador): {resultado.total}</p>
                        <p>{resultado.exito ? "✅ ¡Éxito!" : "❌ Fallo"}</p>
                    </div>
                )}
            </div>
        </>

    );
}
