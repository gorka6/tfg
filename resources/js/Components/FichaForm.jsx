import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import Selector from "@/Components/Selector";
import D6Button from "@/Components/Dados/D6Atributos";
import PrimaryButton from "@/Components/Framework/PrimaryButton";
import { opcionesBuild } from "@/utils/opcionesBuild";
import { filtraOpciones } from "@/utils/filtraOpciones";

export default function FichaForm({
    mode = "create",
    form,
    races = [],
    subraces = [],
    classes = [],
    backgrounds = [],
    classesSkills = [],
    traits = [],
    languages = [],
    onSubmit
}) {
    const { t } = useContextoIdioma();

    /* -------------------------
       Métodos del useForm
       -------------------------*/
    const { data, setData, reset, post, processing, errors } = form;

    /* -------------------------
       Selecciones actuales
       -------------------------*/
    const selectedRaceId = data.race_id;
    const selectedSubraceId = data.subrace_id;
    const selectedClassId = data.class_id;

    /* -------------------------
       Lista de alineamientos
       -------------------------*/
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

    /* -------------------------
       Options builders
       -------------------------*/
    const racesOptions = opcionesBuild(races, t.races);
    const classesOptions = opcionesBuild(classes, t.classes);
    const backgroundsOptions = opcionesBuild(backgrounds, t.backgrounds);
    const subracesOptions = opcionesBuild(filtraOpciones(subraces, "race_id", selectedRaceId), t.subraces);
    const languagesFiltered = opcionesBuild(
        filtraOpciones(languages, "race_id", selectedRaceId).map(l =>
            ({ id: l.language.id, name: l.language.name })),
        t.languages
    );


    /* -------------------------
       Habilidades por clase
       -------------------------*/
    const classSkillsFiltered = filtraOpciones(classesSkills, "class_id", selectedClassId);
    const skillsOptions = opcionesBuild(
        classSkillsFiltered.map(cs => ({ id: cs.skill_id, name: cs.skill.name })),
        t.skills
    );

    /* -------------------------
       Rasgos disponibles (race/subrace/class)
       -------------------------*/
    const traitsOptions = opcionesBuild(
        [
            ...filtraOpciones(traits, "race_id", selectedRaceId),
            ...filtraOpciones(traits, "subrace_id", selectedSubraceId),
            ...filtraOpciones(traits, "class_id", selectedClassId)
        ],t.traits);

    /* -------------------------
       Handlers
       -------------------------*/
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        } else {
            post(route("fichas.store"), {
                onSuccess: () => reset(),
            });
        }
    };

    const onRaceChange = (e) => {
        const id = e.target.value === "" ? null : Number(e.target.value);
        setData("race_id", id);
        setData("subrace_id", null);
        setData("traits", []);
    };

    const onSubraceChange = (e) => {
        const id = e.target.value === "" ? null : Number(e.target.value);
        setData("subrace_id", id);
        setData("traits", []);
    };

    const onClassChange = (e) => {
        const id = e.target.value === "" ? null : Number(e.target.value);
        setData("class_id", id);
        setData("skills", []);
        setData("traits", []);
    };

    return (
        <div >
            <form onSubmit={handleSubmit} >
                {/* Nombre */}
                <div >
                    <label htmlFor="name">{t.create.name}</label>
                    <input
                        id="name"
                        type="text"
                        value={data.name}
                        placeholder={t.create.enter_name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <p >{errors.name}</p>}
                </div>

                {/* Raza */}
                <div >
                    <label htmlFor="race">{t.create.race}</label>
                    <select id="race"
                        value={data.race_id ?? ""}
                        onChange={onRaceChange}>
                        <option value="">{t.create.select_race}</option>
                        {racesOptions.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                    {errors.race_id && <p >{errors.race_id}</p>}
                </div>
                {/* Idiomas que habla lña raza */}
                {languagesFiltered.length > 0 && (
                    <div >
                        <p><strong>{t.create.languages}:</strong></p>
                        <ul>
                            {languagesFiltered.map(lang => (
                                <li key={lang.value}>{lang.label}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Subraza */}
                <div >
                    <label htmlFor="subrace">{t.create.subrace}</label>
                    <select id="subrace"
                        value={data.subrace_id ?? ""}
                        onChange={onSubraceChange}
                        disabled={subracesOptions.length === 0}>
                        {subracesOptions.length === 0 ? (
                            <option value="">{selectedRaceId ? t.create.no_subrace : t.create.select_race}</option>
                        ) : (
                            <>
                                <option value="">{t.create.no_subrace}</option>
                                {subracesOptions.map(sr => <option key={sr.value} value={sr.value}>{sr.label}</option>)}
                            </>
                        )}
                    </select>
                    {errors.subrace_id && <p >{errors.subrace_id}</p>}
                </div>

                {/* Clase */}
                <div >
                    <label htmlFor="class">{t.create.class}</label>
                    <select id="class"
                        value={data.class_id ?? ""}
                        onChange={onClassChange}>
                        <option value="">{t.create.select_class}</option>
                        {classesOptions.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                    </select>
                    {errors.class_id && <p >{errors.class_id}</p>}
                </div>

                {/* Habilidades */}
                <p>Habilidades</p>
                {skillsOptions.length === 0 ? (
                    <p  >{selectedClassId ? "No hay rasgos disponibles para la selección actual." : "Selecciona raza, subraza o clase para ver rasgos."}</p>
                ) : (
                    <Selector options={skillsOptions} selected={data.skills} onChange={(newSkills) => setData("skills", newSkills)} />
                )}
                {errors.skills && <p  >{errors.skills}</p>}

                {/* Rasgos */}
                <p>Rasgos</p>
                {traitsOptions.length === 0 ? (
                    <p  >{(selectedRaceId || selectedClassId) ? "No hay rasgos disponibles para la selección actual." : "Selecciona raza, subraza o clase para ver rasgos."}</p>
                ) : (
                    <Selector options={traitsOptions} selected={data.traits} onChange={(newTraits) => setData("traits", newTraits)} max={6} />
                )}
                {errors.traits && <p  >{errors.traits}</p>}

                {/* Stats */}
                <div>
                    <label>{t.create.str}</label>
                    <D6Button value={data.str} setValue={(val) => setData("str", val)} />
                    {errors.str && <p  >{errors.str}</p>}
                </div>
                <div>
                    <label>{t.create.dex}</label>
                    <D6Button value={data.dex} setValue={(val) => setData("dex", val)} />
                    {errors.dex && <p  >{errors.dex}</p>}
                </div>
                <div>
                    <label>{t.create.con}</label>
                    <D6Button value={data.con} setValue={(val) => setData("con", val)} />
                    {errors.con && <p  >{errors.con}</p>}
                </div>
                <div>
                    <label>{t.create.int}</label>
                    <D6Button value={data.int} setValue={(val) => setData("int", val)} />
                    {errors.int && <p  >{errors.int}</p>}
                </div>
                <div>
                    <label>{t.create.wis}</label>
                    <D6Button value={data.wis} setValue={(val) => setData("wis", val)} />
                    {errors.wis && <p  >{errors.wis}</p>}
                </div>
                <div>
                    <label>{t.create.cha}</label>
                    <D6Button value={data.cha} setValue={(val) => setData("cha", val)} />
                    {errors.cha && <p  >{errors.cha}</p>}
                </div>

                {/* Alineamiento */}
                <div  >
                    <label htmlFor="alignment">{t.create.align}</label>
                    <select id="alignment"
                        value={data.alignment}
                        onChange={(e) => setData("alignment", e.target.value)}>
                        {alignmentsList.map((align) => <option key={align.value} value={align.value}>{align.label}</option>)}
                    </select>
                    {errors.alignment && <p  >{errors.alignment}</p>}
                </div>

                {/* Background */}
                <div  >
                    <label htmlFor="background">{t.create.background}</label>
                    <select id="background"
                        value={data.background_id ?? ""}
                        onChange={(e) => setData("background_id", Number(e.target.value))}>
                        <option value="">{t.create.background}</option>
                        {backgroundsOptions.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                    </select>
                    {errors.background_id && <p  >{errors.background_id}</p>}
                </div>

                <PrimaryButton disabled={processing} type="submit"  >
                    {processing ? t.create.saving : (mode === "edit" ? t.create.update ?? t.create.save : t.create.save)}
                </PrimaryButton>
            </form>
        </div>
    );
}