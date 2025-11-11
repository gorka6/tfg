import { Head, Link } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/pages/fichas-index.css";
import { useForm } from "@inertiajs/react";
import FichaCard from "@/Components/FichaCard";

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
                            <FichaCard key={ficha.id} ficha={ficha} t={t} />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    )
}