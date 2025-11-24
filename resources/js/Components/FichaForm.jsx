import React, { useMemo, useCallback } from "react"; 
import { useForm } from "@inertiajs/react"; 
import { useContextoIdioma } from "@/Contexts/ContextoIdioma"; 
import { normTexto } from "@/utils/normTexto"; 
import Selector from "@/Components/Selector"; 
import D6Button from "@/Components/Dados/D6Atributos"; 
import PrimaryButton from "@/Components/PrimaryButton"; 
import { opcionesBuild } from "@/utils/opcionesBuild"; 
import { filtraOpciones } from "@/utils/filtraOpciones"; 
import "../../css/pages/fichas-create.css";

export default function FichaForm({
    mode = "create",
    form,
    races = [],
    subraces = [],
    classes = [],
    backgrounds = [],
    classesSkills = [],
    traits = [],
    onSubmit
}) {
    const { t } = useContextoIdioma();

    if (!form) {
        console.warn("FichaForm: falta prop 'form' (useForm instance).");
        return null;
    }

    const { data, setData, reset, post, processing, errors } = form;

    const selectedRaceId = data.race_id;
    const selectedClassId = data.class_id;

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

    const racesOptions = useMemo(() => opcionesBuild(races, t.races), [races, t.races]);
    const classesOptions = useMemo(() => opcionesBuild(classes, t.classes), [classes, t.classes]);
    const backgroundsOptions = useMemo(() => opcionesBuild(backgrounds, t.backgrounds), [backgrounds, t.backgrounds]);

    const subracesFiltered = useMemo(() => filtraOpciones(subraces, "race_id", selectedRaceId), [subraces, selectedRaceId]);
    const subracesOptions = useMemo(() => opcionesBuild(subracesFiltered, t.subraces), [subracesFiltered, t.subraces]);

    const classSkillsFiltered = useMemo(() => filtraOpciones(classesSkills, "class_id", selectedClassId), [classesSkills, selectedClassId]);
    const skillsOptions = useMemo(() => {
        return classSkillsFiltered.map(cs => ({
            value: cs.skill_id,
            label: t.skills?.[normTexto(cs.skill?.name ?? "")] ?? cs.skill?.name ?? `skill_${cs.skill_id}`
        }));
    }, [classSkillsFiltered, t.skills]);

    const traitsFiltered = useMemo(() => {
        if (!selectedRaceId && !data.subrace_id && !selectedClassId) return [];
        return traits.filter(item => {
            const rId = item.race_id ?? null;
            const srId = item.subrace_id ?? null;
            const cId = item.class_id ?? null;

            return (selectedRaceId && Number(rId) === Number(selectedRaceId))
                || (data.subrace_id && Number(srId) === Number(data.subrace_id))
                || (selectedClassId && Number(cId) === Number(selectedClassId));
        });
    }, [traits, selectedRaceId, data.subrace_id, selectedClassId]);

    const traitsOptions = useMemo(() => {
        const seen = new Set();
        const out = [];
        for (const tr of traitsFiltered) {
            const id = tr.id ?? tr.trait_id;
            if (seen.has(Number(id))) continue;
            seen.add(Number(id));
            out.push({
                value: id,
                label: t.traits?.[normTexto(tr.name)] ?? tr.name
            });
        }
        return out;
    }, [traitsFiltered, t.traits]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (typeof onSubmit === "function") {
            onSubmit();
        } else {
            post(route("fichas.store"), {
                onSuccess: () => reset(),
            });
        }
    }, [onSubmit, post, reset]);

    const handleSetSkills = useCallback((newSkills) => {
        setData("skills", newSkills);
    }, [setData]);

    const handleSetTraits = useCallback((newTraits) => {
        setData("traits", newTraits);
    }, [setData]);

    const onRaceChange = useCallback((e) => {
        const val = e?.target ? e.target.value : e;
        const id = val === "" ? null : Number(val);
        setData("race_id", id);
        setData("subrace_id", null);
        setData("traits", []);
    }, [setData]);

    const onSubraceChange = useCallback((e) => {
        const val = e?.target ? e.target.value : e;
        const id = val === "" ? null : Number(val);
        setData("subrace_id", id);
        setData("traits", []);
    }, [setData]);

    const onClassChange = useCallback((e) => {
        const val = e?.target ? e.target.value : e;
        const id = val === "" ? null : Number(val);
        setData("class_id", id);
        setData("skills", []);
        setData("traits", []);
    }, [setData]);

    return (
        <div className="fichas-form-container">
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
                    <select id="race" value={data.race_id ?? ""} onChange={onRaceChange}>
                        <option value="">{t.create.select_race}</option>
                        {racesOptions.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                    {errors.race_id && <p className="fichas-error">{errors.race_id}</p>}
                </div>

                {/* Subraza */}
                <div className="fichas-form-group">
                    <label htmlFor="subrace">{t.create.subrace}</label>
                    <select id="subrace" value={data.subrace_id ?? ""} onChange={onSubraceChange} disabled={subracesFiltered.length === 0}>
                        {subracesFiltered.length === 0 ? (
                            <option value="">{selectedRaceId ? t.create.no_subrace : t.create.select_race}</option>
                        ) : (
                            <>
                                <option value="">{t.create.no_subrace}</option>
                                {subracesOptions.map(sr => <option key={sr.value} value={sr.value}>{sr.label}</option>)}
                            </>
                        )}
                    </select>
                    {errors.subrace_id && <p className="fichas-error">{errors.subrace_id}</p>}
                </div>

                {/* Clase */}
                <div className="fichas-form-group">
                    <label htmlFor="class">{t.create.class}</label>
                    <select id="class" value={data.class_id ?? ""} onChange={onClassChange}>
                        <option value="">{t.create.select_class}</option>
                        {classesOptions.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                    </select>
                    {errors.class_id && <p className="fichas-error">{errors.class_id}</p>}
                </div>

                {/* Habilidades */}
                <p>Habilidades</p>
                <Selector options={skillsOptions} selected={data.skills} onChange={handleSetSkills} max={4} />
                {errors.skills && <p className="fichas-error">{errors.skills}</p>}

                {/* Rasgos */}
                <p>Rasgos</p>
                {traitsOptions.length === 0 ? (
                    <p className="fichas-note">{(selectedRaceId || data.subrace_id || selectedClassId) ? "No hay rasgos disponibles para la selección actual." : "Selecciona raza, subraza o clase para ver rasgos."}</p>
                ) : (
                    <Selector options={traitsOptions} selected={data.traits} onChange={handleSetTraits} max={6} />
                )}
                {errors.traits && <p className="fichas-error">{errors.traits}</p>}

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
                    <select id="alignment" value={data.alignment} onChange={(e) => setData("alignment", e.target.value)}>
                        {alignmentsList.map((align) => <option key={align.value} value={align.value}>{align.label}</option>)}
                    </select>
                    {errors.alignment && <p className="fichas-error">{errors.alignment}</p>}
                </div>

                {/* Background */}
                <div className="fichas-form-group">
                    <label htmlFor="background">{t.create.background}</label>
                    <select id="background" value={data.background_id ?? ""} onChange={(e) => setData("background_id", e.target.value === "" ? null : Number(e.target.value))}>
                        <option value="">{t.create.background}</option>
                        {backgroundsOptions.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                    </select>
                    {errors.background_id && <p className="fichas-error">{errors.background_id}</p>}
                </div>

                <PrimaryButton disabled={processing} type="submit" className="min-w-[100px]">
                    {processing ? t.create.saving : (mode === "edit" ? t.create.update ?? t.create.save : t.create.save)}
                </PrimaryButton>
            </form>
        </div>
    );
}
