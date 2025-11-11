import { Head, Link, useForm } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/pages/fichas-create.css";
import D6Button from "@/Components/Dados/D6Atributos";

export default function FichasCreate({ auth }) {

    const { t } = useContextoIdioma();

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        str: "",
        alignment: "tn",
    });

    const alignments = [
        { value: 'lg', label: t.alignments.lg },
        { value: 'ng', label: t.alignments.ng },
        { value: 'cg', label: t.alignments.cg },
        { value: 'ln', label: t.alignments.ln },
        { value: 'tn', label: t.alignments.tn },
        { value: 'cn', label: t.alignments.cn },
        { value: 'le', label: t.alignments.le },
        { value: 'ne', label: t.alignments.ne },
        { value: 'ce', label: t.alignments.ce },
    ];

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

                    <div className="fichas-form-group">
                        <label htmlFor="name">{t.create.name}</label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && <p className="fichas-error">{errors.name}</p>}
                    </div>

                    <div>
                        <label>{t.create.str}</label>
                        <D6Button value={data.str} setValue={(val) => setData("str", val)} />
                        {errors.str && <p>{errors.str}</p>}
                    </div>

                    <div>
                        <label>{t.create.dex}</label>
                        <D6Button value={data.dex} setValue={(val) => setData("dex", val)} />
                        {errors.dex && <p>{errors.dex}</p>}
                    </div>

                    <div>
                        <label>{t.create.con}</label>
                        <D6Button value={data.con} setValue={(val) => setData("con", val)} />
                        {errors.con && <p>{errors.con}</p>}
                    </div>

                    <div>
                        <label>{t.create.int}</label>
                        <D6Button value={data.int} setValue={(val) => setData("int", val)} />
                        {errors.int && <p>{errors.int}</p>}
                    </div>

                    <div>
                        <label>{t.create.wis}</label>
                        <D6Button value={data.wis} setValue={(val) => setData("wis", val)} />
                        {errors.wis && <p>{errors.wis}</p>}
                    </div>

                    <div>
                        <label>{t.create.cha}</label>
                        <D6Button value={data.cha} setValue={(val) => setData("cha", val)} />
                        {errors.cha && <p>{errors.cha}</p>}
                    </div>

                    <div className="fichas-form-group">
                        <label htmlFor="alignment">{t.create.align}</label>
                        <select
                            id="alignment"
                            value={data.alignment}
                            onChange={(e) => setData("alignment", e.target.value)}
                        >
                            {alignments.map((align) => (
                                <option key={align.value} value={align.value}>
                                    {align.label}
                                </option>
                            ))}
                        </select>
                        {errors.alignment && (
                            <p className="fichas-error">{errors.alignment}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="fichas-btn-submit"
                        disabled={processing}
                    >
                        {processing ? "Guardando..." : "Guardar ficha"}
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}