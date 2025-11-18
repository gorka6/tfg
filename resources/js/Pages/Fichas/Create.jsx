import { Head, useForm } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import { useNormTexto } from "@/Hooks/useNormTexto";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/pages/fichas-create.css";
import D6Button from "@/Components/Dados/D6Atributos";
import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function FichasCreate({ auth, races = [], subraces = [], classes = [], backgrounds = [] }) {
    const { t } = useContextoIdioma();

    const [selectedRaceId, setSelectedRaceId] = useState(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        alignment: "tn",
        race_id: null,
        class_id: null,
        subrace_id: null,
        background_id: null,
        exp: 0,
    });

    const slugify = (name = "") =>
        name
            .toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "_")
            .replace(/-/g, "_")
            .replace(/[^\w_]/g, "");

    const alignmentsList = [
        { value: "lg", label: t.alignments.lg },
        { value: "ng", label: t.alignments.ng },
        { value: "cg", label: t.alignments.cg },
        { value: "ln", label: t.alignments.ln },
        { value: "tn", label: t.alignments.tn },
        { value: "cn", label: t.alignments.cn },
        { value: "le", label: t.alignments.le },
        { value: "ne", label: t.alignments.ne },
        { value: "ce", label: t.alignments.ce },
    ];

    const racesOptions = races.map(r => {
        const key = useNormTexto(r.name);
        return { value: r.id, label: t.races[key] };
    });

    const classesOptions = classes.map(c => {
        const key = useNormTexto(c.name)
        return { value: c.id, label: t.classes[key] };
    });

    const subracesFiltered = selectedRaceId
        ? subraces.filter(sr => Number(sr.race_id) === Number(selectedRaceId))
        : [];

    const subracesOptions = subracesFiltered.map(sr => {
        const key = useNormTexto(sr.name);
        return { value: sr.id, label: t.subraces[key] };
    });

    const backgroundsOptions = backgrounds.map(b => {
        const key = useNormTexto(b.name);
        return { value: b.id, label: t.backgrounds[key] };
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("fichas.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Crear Ficha" />

            <div className="fichas-form-container">
                <h1 className="fichas-form-title">{t.create.title}</h1>

                <form onSubmit={handleSubmit} className="fichas-form">
                    {/* Nombre */}
                    <div className="fichas-form-group">
                        <label htmlFor="name">{t.create.name}</label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            placeholder={t.create.enter_name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && <p className="fichas-error">{errors.name}</p>}
                    </div>

                    {/* Raza */}
                    <div className="fichas-form-group">
                        <label htmlFor="race">{t.create.race}</label>
                        <select
                            id="race"
                            value={data.race_id ?? ""}
                            onChange={(e) => {
                                const id = e.target.value === "" ? null : Number(e.target.value);
                                setData("race_id", id);
                                setSelectedRaceId(id);
                                setData("subrace_id", null);
                            }}
                        >
                            <option value="">{t.create.select_race}</option>
                            {racesOptions.map(r => (
                                <option key={r.value} value={r.value}>{r.label}</option>
                            ))}
                        </select>
                        {errors.race_id && <p className="fichas-error">{errors.race_id}</p>}
                    </div>

                    {/* Clase */}
                    <div className="fichas-form-group">
                        <label htmlFor="class">{t.create.class}</label>
                        <select
                            id="class"
                            value={data.class_id ?? ""}
                            onChange={(e) => setData("class_id", e.target.value === "" ? null : Number(e.target.value))}
                        >
                            <option value="">{t.create.select_class}</option>
                            {classesOptions.map(c => (
                                <option key={c.value} value={c.value}>{c.label}</option>
                            ))}
                        </select>
                        {errors.class_id && <p className="fichas-error">{errors.class_id}</p>}
                    </div>

                    {/* Subraza */}
                    <div className="fichas-form-group">
                        <label htmlFor="subrace">{t.create.subrace}</label>
                        <select
                            id="subrace"
                            value={data.subrace_id ?? ""}
                            onChange={(e) => setData("subrace_id", e.target.value === "" ? null : Number(e.target.value))}
                            disabled={subracesFiltered.length === 0}
                        >
                            {subracesFiltered.length === 0 ? (
                                <option value="">{selectedRaceId ? t.create.no_subrace : t.create.select_race}</option>
                            ) : (
                                <>
                                    <option value="">{t.create.no_subrace}</option>
                                    {subracesOptions.map(sr => (
                                        <option key={sr.value} value={sr.value}>{sr.label}</option>
                                    ))}
                                </>
                            )}
                        </select>
                        {errors.subrace_id && <p className="fichas-error">{errors.subrace_id}</p>}
                    </div>

                    {/* Stats */}
                    <div>
                        <label>{t.create.str}</label>
                        <D6Button value={data.str} setValue={(val) => setData("str", val)} />
                        {errors.str && <p className="fichas-error">{errors.str}</p>}
                    </div>

                    <div>
                        <label>{t.create.dex}</label>
                        <D6Button value={data.dex} setValue={(val) => setData("dex", val)} />
                        {errors.dex && <p className="fichas-error">{errors.dex}</p>}
                    </div>

                    <div>
                        <label>{t.create.con}</label>
                        <D6Button value={data.con} setValue={(val) => setData("con", val)} />
                        {errors.con && <p className="fichas-error">{errors.con}</p>}
                    </div>

                    <div>
                        <label>{t.create.int}</label>
                        <D6Button value={data.int} setValue={(val) => setData("int", val)} />
                        {errors.int && <p className="fichas-error">{errors.int}</p>}
                    </div>

                    <div>
                        <label>{t.create.wis}</label>
                        <D6Button value={data.wis} setValue={(val) => setData("wis", val)} />
                        {errors.wis && <p className="fichas-error">{errors.wis}</p>}
                    </div>

                    <div>
                        <label>{t.create.cha}</label>
                        <D6Button value={data.cha} setValue={(val) => setData("cha", val)} />
                        {errors.cha && <p className="fichas-error">{errors.cha}</p>}
                    </div>

                    {/* Alineamiento */}
                    <div className="fichas-form-group">
                        <label htmlFor="alignment">{t.create.align}</label>
                        <select
                            id="alignment"
                            value={data.alignment}
                            onChange={(e) => setData("alignment", e.target.value)}
                        >
                            {alignmentsList.map((align) => (
                                <option key={align.value} value={align.value}>
                                    {align.label}
                                </option>
                            ))}
                        </select>
                        {errors.alignment && <p className="fichas-error">{errors.alignment}</p>}
                    </div>

                    {/* Background */}
                    <div className="fichas-form-group">
                        <label htmlFor="background">{t.create.background}</label>
                        <select
                            id="background"
                            value={data.background_id ?? ""}
                            onChange={(e) => setData("background_id", e.target.value === "" ? null : Number(e.target.value))}
                        >
                            <option value="">{t.create.select_class}</option>
                            {backgroundsOptions.map(b => (
                                <option key={b.value} value={b.value}>{b.label}</option>
                            ))}
                        </select>
                        {errors.background_id && <p className="fichas-error">{errors.background_id}</p>}
                    </div>

                    <PrimaryButton disabled={processing} type="submit" className="min-w-[100px]">
                        {processing ? t.create.saving : t.create.save}
                    </PrimaryButton>

                </form>
            </div>
        </AuthenticatedLayout>
    );
}
