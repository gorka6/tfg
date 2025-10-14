import { Head, Link, useForm } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/pages/fichas-create.css";

export default function FichasCreate({ auth }) {

    const { t } = useContextoIdioma();

    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        ataque: "",
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

    console.log(t)

    return (
        <AuthenticatedLayout>
            <Head title="Crear Ficha" />

            <div className="fichas-form-container">
                <h1 className="fichas-form-title">{t.create.title}</h1>

                <form onSubmit={handleSubmit} className="fichas-form">

                    <div className="fichas-form-group">
                        <label htmlFor="nombre">{t.create.name}</label>
                        <input
                            id="nombre"
                            type="text"
                            value={data.nombre}
                            onChange={(e) => setData("nombre", e.target.value)}
                        />
                        {errors.nombre && <p className="fichas-error">{errors.nombre}</p>}
                    </div>

                    <div className="fichas-form-group">
                        <label htmlFor="ataque">{t.create.atk}</label>
                        <input
                            id="ataque"
                            type="number"
                            min="1"
                            value={data.ataque}
                            onChange={(e) => setData("ataque", e.target.value)}
                        />
                        {errors.ataque && <p className="fichas-error">{errors.ataque}</p>}
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