import { Head, useForm } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/pages/fichas-create.css";
import D6Button from "@/Components/Dados/D6Atributos";
import { useState } from "react";

export default function FichasCreate({ auth, races = [], subraces = [], classes = [], backgrounds = [] }) {
    const { t } = useContextoIdioma();

    const [step, setStep] = useState(1);
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

    // helper: slugify DB name to match translation keys like "hill_dwarf"
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
        const key = slugify(r.name);
        return { value: r.race_id, label: t.races[key]};
    });

    const classesOptions = classes.map(c => {
        const key = slugify(c.name);
        return { value: c.class_id, label: t.classes[key]};
    });

    const subracesFiltered = selectedRaceId
        ? subraces.filter(sr => Number(sr.race_id) === Number(selectedRaceId))
        : [];

    const subracesOptions = subracesFiltered.map(sr => {
        const key = slugify(sr.name);
        return { value: sr.subrace_id, label: t.subraces[key]};
    });

    const backgroundsOptions = backgrounds.map(b => {
        const key = slugify(b.name);
        return { value: b.background_id ?? b.id ?? b.value, label: t.backgrounds[key]};
    });

    const nextStep = () => setStep(cur => Math.min(cur + 1, 2));
    const prevStep = () => setStep(cur => Math.max(cur - 1, 1));

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
                    {step === 1 && (
                        <>
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

                            <div style={{ marginTop: "1.5rem" }}>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!data.name || !data.race_id || !data.class_id}
                                    style={{
                                        padding: "0.5rem 1.5rem",
                                        fontSize: "1rem",
                                        cursor: (!data.name || !data.race_id || !data.class_id) ? "not-allowed" : "pointer",
                                        borderRadius: "4px",
                                        border: "1px solid #333",
                                        backgroundColor: "#28a745",
                                        color: "white",
                                        minWidth: "100px",
                                        opacity: (!data.name || !data.race_id || !data.class_id) ? 0.6 : 1,
                                    }}
                                >
                                    {t.create.next}
                                </button>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div className="fichas-form-group">
                                <label htmlFor="subrace">{t.create.subrace}</label>
                                <select
                                    id="subrace"
                                    value={data.subrace_id ?? ""}
                                    onChange={(e) => setData("subrace_id", e.target.value === "" ? null : Number(e.target.value))}
                                >
                                    <option value="">{t.create.select_subrace}</option>
                                    {subracesOptions.map(sr => (
                                        <option key={sr.value} value={sr.value}>{sr.label}</option>
                                    ))}
                                </select>
                                {errors.subrace_id && <p className="fichas-error">{errors.subrace_id}</p>}
                            </div>

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

                            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    style={{
                                        padding: "0.5rem 1.5rem",
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                        borderRadius: "4px",
                                        border: "1px solid #333",
                                        backgroundColor: "#6c757d",
                                        color: "white",
                                        minWidth: "100px",
                                    }}
                                >
                                    {t.create.back}
                                </button>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    style={{
                                        padding: "0.5rem 1.5rem",
                                        fontSize: "1rem",
                                        cursor: processing ? "not-allowed" : "pointer",
                                        opacity: processing ? 0.6 : 1,
                                        borderRadius: "4px",
                                        border: "1px solid #333",
                                        backgroundColor: "#007bff",
                                        color: "white",
                                        minWidth: "100px",
                                    }}
                                >
                                    {processing ? t.create.saving : t.create.save}
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
