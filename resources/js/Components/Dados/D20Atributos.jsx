import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import { useEffect, useState } from "react";
import DadosRoller from "./DadosRoller";

export default function D20Atributos({ ficha, bonus, savThrow1, savThrow2 }) {

    const { t } = useContextoIdioma();
    const [resultado, setResultado] = useState(null);
    const [atributo, setAtributo] = useState("str");
    const [dc, setDc] = useState("");
    const atributos = ["str", "dex", "con", "int", "wis", "cha"];
    const [refreshKey, setRefreshKey] = useState(0);

    const tirar = () => {
        if (!ficha || !dc) return alert("Selecciona ficha y pon un DC");

        const d20 = Math.floor(Math.random() * 20) + 1;

        const baseMod = Math.floor((ficha[atributo] - 10) / 2);

        const classSavThrow1 = savThrow1 === atributo ? 1 : 0;

        const classSavThrow2 = savThrow2 === atributo ? 1 : 0;


        const bonusAtributo = bonus
            ? bonus.find(b => b.attribute.abbrev === atributo)?.bonus || 0
            : 0;

        const mod = baseMod + bonusAtributo + classSavThrow1 + classSavThrow2;

        const total = d20 + mod;
        const exito = total >= Number(dc);

        setResultado({ d20, baseMod, bonusAtributo, classSavThrow1, classSavThrow2, mod, total, exito });
        setRefreshKey(Date.now());
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
                        <DadosRoller dieType="d20" rolls={[resultado.d20]} refreshKey={refreshKey} />
                        <p>d20: {resultado.d20}</p>
                        <p>{t.throws.base_mod} ({atributo.toUpperCase()}): {resultado.baseMod > 0 ? `+${resultado.baseMod}` : resultado.baseMod}</p>
                        <p>{t.throws.race_bonus}: +{resultado.bonusAtributo}</p>
                        <p>{t.throws.sav_throw1}({savThrow1}): +{resultado.classSavThrow1}</p>
                        <p>{t.throws.sav_throw2}({savThrow2}): +{resultado.classSavThrow2}</p>
                        <p>{t.throws.total_mod}: {resultado.mod}</p>
                        <p>Total (d20 + {t.throws.mod}): {resultado.total}</p>
                        <p>{resultado.exito ? t.throws.pass : t.throws.fail}</p>
                    </div>
                )}
            </div>
        </>

    );
}
