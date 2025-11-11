import { Link, useForm } from "@inertiajs/react";

export default function FichaCard({ ficha, t }) {
    const { delete: destroy } = useForm();

    return (
        <div className="ficha-card">
            <h2 className="ficha-nombre">{ficha.name}</h2>
            <p>
                <strong>{t.create.atk}</strong> {ficha.str}
            </p>
            <p>
                <strong>{t.create.align}</strong> {t.alignments[ficha.alignment]}
            </p>

            <div className="ficha-acciones">
                <Link
                    href={route("fichas.show", ficha.id)}
                    className="ficha-btn-ver"
                >
                    {t.index.show}
                </Link>
                <Link
                    href={route("fichas.edit", ficha.id)}
                    className="ficha-btn-editar"
                >
                    {t.index.edit}
                </Link>
                <button
                    className="ficha-btn-eliminar"
                    onClick={() => destroy(route("fichas.destroy", ficha.id))}
                >
                    {t.index.delete}
                </button>
            </div>
        </div>
    );
}
