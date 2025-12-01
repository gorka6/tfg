import { useEffect, useState } from "react";

export default function D20Atributos({ ficha, bonus }) {
    const [resultado, setResultado] = useState(null);
    const [atributo, setAtributo] = useState("str");
    const [dc, setDc] = useState("");
    const atributos = ["str", "dex", "con", "int", "wis", "cha"];
    const tirar = () => {
        const d20 = Math.floor(Math.random() * 20) + 1;
        const mod = Math.max(0, Math.floor((ficha[atributo] - 10) / 2));
        const total = d20 + mod;
        const exito = total >= Number(dc);

        setResultado({ d20, mod, total, exito });
    };
    useEffect(() => {
        setResultado(null);
    }, [dc, atributo]);

    console.log(bonus)

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
                    <div>
                        <p>d20: {resultado.d20}</p>
                        <p>Mod {atributo.toUpperCase()}: {resultado.mod}</p>
                        <p>Total: {resultado.total}</p>
                        <p>{resultado.exito ? "✅ ¡Éxito!" : "❌ Fallo"}</p>
                    </div>
                )}
            </div>
        </>

    );
}
