import D20Atributos from "@/Components/Dados/D20Atributos";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { filtraOpciones } from "@/utils/filtraOpciones";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

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

    const claseFicha = selectedFicha ? filtraOpciones(characterClasses, "id", selectedFicha.class_id) : [];
    
    return (
        <AuthenticatedLayout>
            <Head title="Tiradas" />
            <p>Selecciona la ficha</p>
            {fichas.length === 0 ? (
                <div className="fichas-vacio">
                    <p className="fichas-texto-vacio">
                        {t.index.nosheets}
                    </p>
                    <Link
                        href={route("fichas.create")}
                        className="fichas-btn-crear"
                    >
                        {t.index.firstsheet}
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="fichas-form-group">
                        <label htmlFor="fichas">Fichas</label>
                        <select id="fichas"
                            value={selectedFichaId}
                            onChange={handleSelectFicha}>
                            <option value="">Selecciona una ficha</option>
                            {fichas.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
                        </select>
                    </div>
                    <D20Atributos
                        ficha={selectedFicha}
                        bonus={bonusRaza}
                        savThrow1={claseFicha[0]?.saving_throw_attribute1.abbrev}
                        savThrow2={claseFicha[0]?.saving_throw_attribute2.abbrev}
                    />

                </div>

            )}
        </AuthenticatedLayout>
    )
}