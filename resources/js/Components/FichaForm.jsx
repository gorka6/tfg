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

    const { data, setData, reset, post, processing, errors } = form;

    const selectedRaceId = data.race_id;
    const selectedSubraceId = data.subrace_id;
    const selectedClassId = data.class_id;

    const alignmentsList = [
        { value: "lg", label: t.alignments.lg, color: "#4CAF50" },
        { value: "ng", label: t.alignments.ng, color: "#8BC34A" },
        { value: "cg", label: t.alignments.cg, color: "#CDDC39" },
        { value: "ln", label: t.alignments.ln, color: "#03A9F4" },
        { value: "tn", label: t.alignments.tn, color: "#9E9E9E" },
        { value: "cn", label: t.alignments.cn, color: "#FFC107" },
        { value: "le", label: t.alignments.le, color: "#F44336" },
        { value: "ne", label: t.alignments.ne, color: "#E91E63" },
        { value: "ce", label: t.alignments.ce, color: "#9C27B0" },
    ];

    const racesOptions = opcionesBuild(races, t.races);
    const classesOptions = opcionesBuild(classes, t.classes);
    const backgroundsOptions = opcionesBuild(backgrounds, t.backgrounds);
    const subracesOptions = opcionesBuild(filtraOpciones(subraces, "race_id", selectedRaceId), t.subraces);
    const languagesFiltered = opcionesBuild(
        filtraOpciones(languages, "race_id", selectedRaceId).map(l =>
            ({ id: l.language.id, name: l.language.name })),
        t.languages
    );

    const classSkillsFiltered = filtraOpciones(classesSkills, "class_id", selectedClassId);
    const skillsOptions = opcionesBuild(
        classSkillsFiltered.map(cs => ({ id: cs.skill_id, name: cs.skill.name })),
        t.skills
    );

    const traitsOptions = opcionesBuild(
        [
            ...filtraOpciones(traits, "race_id", selectedRaceId),
            ...filtraOpciones(traits, "subrace_id", selectedSubraceId),
            ...filtraOpciones(traits, "class_id", selectedClassId)
        ], t.traits);

    /* Handlers */
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

    return (
        <div className="ficha-form-wrapper">
            <form onSubmit={handleSubmit} className="ficha-form">

                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="name" className="form-label">{t.create.name}</label>
                    <input
                        id="name"
                        type="text"
                        value={data.name}
                        placeholder={t.create.enter_name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <p className="error-msg">{errors.name}</p>}
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Raza */}
                <div className="form-group">
                    <label htmlFor="race" className="form-label">{t.create.race}</label>
                    <GridSelect
                        options={racesOptions}
                        value={data.race_id}
                        onChange={onRaceChange}
                        mode="races"
                        placeholder={t.create.select_race}
                    />
                    {errors.race_id && <p className="error-msg">{errors.race_id}</p>}

                    {/* Idiomas */}
                    {languagesFiltered.length > 0 && (
                        <div className="form-group">
                            <p className="form-label"><strong>{t.create.languages}</strong></p>
                            <ul className="list-languages">
                                {languagesFiltered.map(lang => (
                                    <li key={lang.value}>{lang.label}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Subraza */}
                <div className="form-group">
                    <label htmlFor="subrace" className="form-label">{t.create.subrace}</label>
                    <GridSelect
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
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Clase */}
                <div className="form-group">
                    <label htmlFor="class" className="form-label">{t.create.class}</label>
                    <GridSelect
                        options={classesOptions}
                        value={data.class_id}
                        onChange={onClassChange}
                        placeholder={t.create.select_class}
                        mode="classes"
                    />
                    {errors.class_id && <p className="error-msg">{errors.class_id}</p>}
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Habilidades */}
                <div className="form-group">
                    <p className="form-label section-title">{t.create.skills}</p>
                    {skillsOptions.length === 0 ? (
                        <p className="empty-msg">
                            {selectedClassId ? t.create.no_skills : t.create.select_skills}
                        </p>
                    ) : (
                        <div>
                            <p className="selector-msg">{t.create.selector} 4 - [{data.skills.length}]</p>
                            <Selector
                                options={skillsOptions}
                                selected={data.skills}
                                onChange={(newSkills) => setData("skills", newSkills)}
                            />
                        </div>
                    )}
                    {errors.skills && <p className="error-msg">{errors.skills}</p>}
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Rasgos */}
                <div className="form-group">
                    <p className="form-label section-title">{t.create.traits}</p>
                    {traitsOptions.length === 0 ? (
                        <p className="empty-msg">
                            {(selectedRaceId || selectedClassId)
                                ? t.create.no_traits
                                : t.create.select_traits}
                        </p>
                    ) : (
                        <div>
                            <p className="selector-msg">{t.create.selector} 5 - [{data.traits.length}]</p>

                            <Selector
                                options={traitsOptions}
                                selected={data.traits}
                                onChange={(newTraits) => setData("traits", newTraits)}
                                max={5}
                            />
                        </div>
                    )}
                    {errors.traits && <p className="error-msg">{errors.traits}</p>}
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Background */}
                <div className="form-group">
                    <label htmlFor="background" className="form-label">{t.create.background}</label>
                    <GridSelect
                        options={backgroundsOptions}
                        value={data.background_id}
                        onChange={(value) => setData("background_id", Number(value))}
                        placeholder={t.create.background}
                        mode="backgrounds"
                    />
                    {errors.background_id && <p className="error-msg">{errors.background_id}</p>}
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Stats */}
                <div className="stats-grid">
                    <div className="form-group">
                        <D6Button label={t.create.str} value={data.str} setValue={(val) => setData("str", val)} />
                    </div>
                    <div className="form-group">
                        <D6Button label={t.create.dex} value={data.dex} setValue={(val) => setData("dex", val)} />
                    </div>
                    <div className="form-group">
                        <D6Button label={t.create.con} value={data.con} setValue={(val) => setData("con", val)} />
                    </div>
                    <div className="form-group">
                        <D6Button label={t.create.int} value={data.int} setValue={(val) => setData("int", val)} />
                    </div>
                    <div className="form-group">
                        <D6Button label={t.create.wis} value={data.wis} setValue={(val) => setData("wis", val)} />
                    </div>
                    <div className="form-group">
                        <D6Button label={t.create.cha} value={data.cha} setValue={(val) => setData("cha", val)} />
                    </div>
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
                </div>
                {/* Alineamiento en grid 3x3 */}
                <div className="form-group">
                    <label className="form-label">{t.create.align}</label>
                    <div className="alignment-grid">
                        {alignmentsList.map(a => (
                            <button
                                key={a.value}
                                type="button"
                                className={`alignment-item ${data.alignment === a.value ? "selected" : ""}`}
                                style={{
                                    backgroundColor: data.alignment === a.value ? a.color : "#000000ff",
                                    color: data.alignment === a.value ? "#000000ff" : "#ffffffff"
                                }}
                                onClick={() => setData("alignment", a.value)}
                            >
                                {a.label}
                            </button>
                        ))}
                    </div>
                    {errors.alignment && <p className="error-msg">{errors.alignment}</p>}
                </div>
                <div className="sword-container">
                    <img
                        className="sword"
                        src="/images/web/form/sword.png"
                        alt="Espada decorativa"
                    />
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
