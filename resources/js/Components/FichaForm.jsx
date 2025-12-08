import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import Selector from "@/Components/Selector";
import D6Button from "@/Components/Dados/D6Atributos";
import PrimaryButton from "@/Components/Framework/PrimaryButton";
import { opcionesBuild } from "@/utils/opcionesBuild";
import { filtraOpciones } from "@/utils/filtraOpciones";
import "../../css/components/ficha-form.css"
import GridSelect from "./GridSelect";

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
        ], t.traits);

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

    const onRaceChange = (value) => {
        const id = value === "" ? null : Number(value);
        setData("race_id", id);
        setData("subrace_id", null);
        setData("traits", []);
    };

    const onSubraceChange = (value) => {
        const id = value === "" ? null : Number(value);
        setData("subrace_id", id);
        setData("traits", []);
    };

    const onClassChange = (value) => {
        const id = value === "" ? null : Number(value);
        setData("class_id", id);
        setData("skills", []);
        setData("traits", []);
    };
    console.log(racesOptions)
    return (
        <div className="ficha-form-wrapper">
            <form onSubmit={handleSubmit} className="ficha-form">

                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="name">{t.create.name}</label>
                    <input
                        id="name"
                        type="text"
                        value={data.name}
                        placeholder={t.create.enter_name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <p className="error-msg">{errors.name}</p>}
                </div>

                {/* Raza */}
                <div className="form-group">
                    <GridSelect
                        label={t.create.race}
                        options={racesOptions}
                        value={data.race_id}
                        onChange={onRaceChange}
                        mode="races"
                        placeholder={t.create.select_race}
                    />
                    {errors.race_id && <p className="error-msg">{errors.race_id}</p>}
                </div>


                {/* Idiomas */}
                {languagesFiltered.length > 0 && (
                    <div className="form-group">
                        <p><strong>{t.create.languages}:</strong></p>
                        <ul className="list-languages">
                            {languagesFiltered.map(lang => (
                                <li key={lang.value}>{lang.label}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Subraza */}
                <div className="form-group">
                    <GridSelect
                        label={t.create.subrace}
                        options={subracesOptions}
                        value={data.subrace_id}
                        onChange={onSubraceChange}
                        disabled={subracesOptions.length === 0}
                        placeholder={
                            subracesOptions.length === 0
                                ? (selectedRaceId ? t.create.no_subrace : t.create.select_race)
                                : t.create.select_subrace
                        }
                        mode="subraces"
                    />

                    {errors.subrace_id && <p className="error-msg">{errors.subrace_id}</p>}
                </div>

                {/* Clase */}
                <div className="form-group">
                    <GridSelect
                        label={t.create.class}
                        options={classesOptions}
                        value={data.class_id}
                        onChange={onClassChange}
                        placeholder={t.create.select_class}
                        mode="classes"
                    />

                    {errors.class_id && <p className="error-msg">{errors.class_id}</p>}
                </div>

                {/* Habilidades */}
                <div className="form-group">
                    <p className="section-title">Habilidades</p>
                    {skillsOptions.length === 0 ? (
                        <p className="empty-msg">
                            {selectedClassId
                                ? "No hay habilidades disponibles."
                                : "Selecciona una clase para ver habilidades."}
                        </p>
                    ) : (
                        <Selector
                            options={skillsOptions}
                            selected={data.skills}
                            onChange={(newSkills) => setData("skills", newSkills)}
                        />
                    )}
                    {errors.skills && <p className="error-msg">{errors.skills}</p>}
                </div>

                {/* Rasgos */}
                <div className="form-group">
                    <p className="section-title">Rasgos</p>
                    {traitsOptions.length === 0 ? (
                        <p className="empty-msg">
                            {(selectedRaceId || selectedClassId)
                                ? "No hay rasgos disponibles."
                                : "Selecciona raza, subraza o clase para ver rasgos."}
                        </p>
                    ) : (
                        <Selector
                            options={traitsOptions}
                            selected={data.traits}
                            onChange={(newTraits) => setData("traits", newTraits)}
                            max={6}
                        />
                    )}
                    {errors.traits && <p className="error-msg">{errors.traits}</p>}
                </div>

                {/* Stats */}
                <div className="stats-grid">
                    <div className="form-group">
                        <label>{t.create.str}</label>
                        <D6Button value={data.str} setValue={(val) => setData("str", val)} />
                    </div>
                    <div className="form-group">
                        <label>{t.create.dex}</label>
                        <D6Button value={data.dex} setValue={(val) => setData("dex", val)} />
                    </div>
                    <div className="form-group">
                        <label>{t.create.con}</label>
                        <D6Button value={data.con} setValue={(val) => setData("con", val)} />
                    </div>
                    <div className="form-group">
                        <label>{t.create.int}</label>
                        <D6Button value={data.int} setValue={(val) => setData("int", val)} />
                    </div>
                    <div className="form-group">
                        <label>{t.create.wis}</label>
                        <D6Button value={data.wis} setValue={(val) => setData("wis", val)} />
                    </div>
                    <div className="form-group">
                        <label>{t.create.cha}</label>
                        <D6Button value={data.cha} setValue={(val) => setData("cha", val)} />
                    </div>
                </div>

                {/* Alineamiento */}
                <div className="form-group">
                    <label htmlFor="alignment">{t.create.align}</label>
                    <select
                        id="alignment"
                        value={data.alignment}
                        onChange={(e) => setData("alignment", e.target.value)}
                    >
                        {alignmentsList.map(a => (
                            <option key={a.value} value={a.value}>{a.label}</option>
                        ))}
                    </select>
                    {errors.alignment && <p className="error-msg">{errors.alignment}</p>}
                </div>

                {/* Background */}
                <div className="form-group">
                    <label htmlFor="background">{t.create.background}</label>
                    <select
                        id="background"
                        value={data.background_id ?? ""}
                        onChange={(e) => setData("background_id", Number(e.target.value))}
                    >
                        <option value="">{t.create.background}</option>
                        {backgroundsOptions.map(b => (
                            <option key={b.value} value={b.value}>{b.label}</option>
                        ))}
                    </select>
                    {errors.background_id && <p className="error-msg">{errors.background_id}</p>}
                </div>

                <PrimaryButton disabled={processing} type="submit" className="submit-btn">
                    {processing
                        ? t.create.saving
                        : (mode === "edit" ? t.create.update ?? t.create.save : t.create.save)}
                </PrimaryButton>
            </form>
        </div>
    );
}