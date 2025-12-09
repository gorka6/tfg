import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import { useEffect, useState } from "react";
import DadosRoller from "./DadosRoller";
import "../../../css/components/d20-atributos.css"

export default function D20Atributos({ ficha, bonus, savThrow1, savThrow2 }) {
    const { t } = useContextoIdioma();
    const [resultado, setResultado] = useState(null);
    const [atributo, setAtributo] = useState("str");
    const [dc, setDc] = useState("");
    const atributos = ["str", "dex", "con", "int", "wis", "cha"];
    const [refreshKey, setRefreshKey] = useState(0);

    const tirar = () => {
        if (!ficha || !dc) return alert(t.throws.select_dc);

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
    console.log(atributos.map(a => t.create.a))
    console.log(t.create.str)

    useEffect(() => { setResultado(null); }, [dc, atributo]);

    return (
        <div className="d20-wrapper">

            <p className="d20-instruction">{t.throws.difficult_att}</p>

            <div className="d20-form-row">
                <input
                    className="d20-input"
                    type="number"
                    value={dc}
                    onChange={(e) => setDc(e.target.value)}
                    placeholder="DC"
                    aria-label="DC"
                />

                <select
                    className="d20-select"
                    value={atributo}
                    onChange={(e) => setAtributo(e.target.value)}
                    aria-label="Atributo"
                >
                    {atributos.map(a => <option key={a} value={a}>{t.create[a]}</option>)}
                </select>

                <button className="d20-button" type="button" onClick={tirar}>
                    {t.throws.throw}
                </button>
            </div>

            <div className="d20-media-results">

                <div className="d20-media">
                    {resultado ? (
                        <DadosRoller dieType="d20" rolls={[resultado.d20]} refreshKey={refreshKey} />
                    ) : (
                        <img
                            className="d20-image"
                            src="/images/dice/d20_box.png"
                            alt="Dado sin tirar"
                        />
                    )}
                </div>

                <div className="d20-results">
                    {resultado ? (
                        <>
                            <p className="d20-result-line result-title">{t.throws.results}</p>
                            <p className="d20-result-line">d20: <strong>{resultado.d20}</strong></p>
                            <p className="d20-result-line">
                                {t.throws.base_mod} ({t.create[atributo]}):
                                <strong>{resultado.baseMod > 0 ? `+${resultado.baseMod}` : resultado.baseMod}</strong>
                            </p>
                            <p className="d20-result-line">
                                {t.throws.race_bonus}:
                                <strong>{resultado.bonusAtributo > 0 ? `+${resultado.bonusAtributo}` : resultado.bonusAtributo}</strong>
                            </p>
                            <p className="d20-result-line">
                                {t.throws.sav_throw1} ({t.create[savThrow1]}):
                                <strong>+{resultado.classSavThrow1}</strong>
                            </p>
                            <p className="d20-result-line">
                                {t.throws.sav_throw2} ({t.create[savThrow2]}):
                                <strong>+{resultado.classSavThrow2}</strong>
                            </p>
                            <p className="d20-result-line">
                                {t.throws.total_mod}:
                                <strong>{resultado.mod > 0 ? `+${resultado.mod}` : resultado.mod}</strong>
                            </p>
                            <p className="d20-result-line">
                                {t.throws.total} (d20 + {t.throws.mod}):
                                <strong>{resultado.total}</strong>
                            </p>
                            <p className={`d20-result-pass ${resultado.exito ? "pass" : "fail"}`}>
                                {resultado.exito ? t.throws.pass : t.throws.fail}
                            </p>
                        </>
                    ) : (
                        <p className="d20-result-placeholder">{t.throws.placeholder}</p>
                    )}
                </div>

            </div>
        </div>
    );
}
