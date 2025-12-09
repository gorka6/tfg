import D20Atributos from "@/Components/Dados/D20Atributos";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { filtraOpciones } from "@/utils/filtraOpciones";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import FondoSeamless from "@/Components/FondoSeamless";
import "../../../css/pages/tiradas.css"

export default function Tiradas({ fichas, bonus, characterClasses }) {
    const { t } = useContextoIdioma();
    const [selectedFichaId, setSelectedFichaId] = useState("");
    const [selectedFicha, setSelectedFicha] = useState(null);

    const handleSelectFicha = (e) => {
        const id = e.target.value;
        setSelectedFichaId(id);

        const ficha = fichas.find(f => f.id == id);
        setSelectedFicha(ficha || null);
    };

    const bonusRaza = selectedFicha
        ? filtraOpciones(bonus, "race_id", selectedFicha.race_id)
            .filter(b =>
                b.subrace_id === null ||
                (selectedFicha.subrace_id && Number(b.subrace_id) === Number(selectedFicha.subrace_id))
            )
        : [];

    const claseFicha = selectedFicha
        ? filtraOpciones(characterClasses, "id", selectedFicha.class_id)
        : [];

    return (
        <AuthenticatedLayout>
            <Head title="Tiradas" />

            <div className="tiradas-container">
                <FondoSeamless>
                    <div className="tiradas-inner">

                        <h2 className="tiradas-title">{t.throws.throws}</h2>

                        {fichas.length === 0 ? (
                            <div className="tiradas-empty">
                                <p>{t.index.nosheets}</p>
                                <Link href={route("fichas.create")}>
                                    {t.index.firstsheet}
                                </Link>
                            </div>
                        ) : (
                            <div className="tiradas-content">

                                <p className="tiradas-select-text">{t.throws.select}</p>

                                <div className="tiradas-select-group">
                                    <label htmlFor="fichas">{t.index.mysheets}</label>
                                    <select
                                        id="fichas"
                                        value={selectedFichaId}
                                        onChange={handleSelectFicha}
                                    >
                                        <option value="">{t.choose_one}</option>
                                        {fichas.map(f => (
                                            <option key={f.id} value={f.id}>
                                                {f.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="tiradas-atributos">
                                    <D20Atributos
                                        ficha={selectedFicha}
                                        bonus={bonusRaza}
                                        savThrow1={claseFicha[0]?.saving_throw_attribute1.abbrev}
                                        savThrow2={claseFicha[0]?.saving_throw_attribute2.abbrev}
                                    />
                                </div>

                            </div>
                        )}
                    </div>
                </FondoSeamless>
            </div>
        </AuthenticatedLayout>
    );
}
