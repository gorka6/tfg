import { Head, Link } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/pages/fichas-index.css";
import { useForm } from "@inertiajs/react";

export default function FichasIndex({ fichas }) {
    const { t } = useContextoIdioma();
    const { delete: destroy } = useForm();

    return (
        <AuthenticatedLayout>
            <Head title="Mis Fichas" />

            <div className="fichas-container">
                <div className="fichas-header">
                    <h1 className="fichas-title">{t.index.mysheets}</h1>
                    <Link
                        href={route("fichas.create")}
                        className="fichas-btn-crear"
                    >
                        {t.index.newsheet}
                    </Link>
                </div>

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
                    <div className="fichas-grid">
                        {fichas.map((ficha) => (
                            <div key={ficha.id} className="ficha-card">
                                <h2 className="ficha-nombre">{ficha.nombre}</h2>
                                <p><strong>{t.create.atk}</strong> {ficha.ataque}</p>
                                <p><strong>{t.create.align}</strong> {ficha.alignment}</p>

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
                                    onClick={() => destroy(route("fichas.destroy", ficha.id))}>
                                        {t.index.delete}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    )
}