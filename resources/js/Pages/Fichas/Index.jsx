import { Head, Link } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FichaCard from "@/Components/FichaCard";
import FondoSeamless from "@/Components/FondoSeamless";
import "../../../css/pages/fichas-index.css"

export default function Index({ fichas }) {
    const { t } = useContextoIdioma();

    return (
        <AuthenticatedLayout>
            <Head title="Mis Fichas" />
            <div className="index-container">
                <FondoSeamless>
                    <div className="index-content">
                        {fichas.length === 0 ? (
                            <div>
                                <p className="no-fichas-text">{t.index.nosheets}</p>
                                <Link href={route("fichas.create")} className="index-link">
                                    {t.index.firstsheet}
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <div className="index-header">
                                    <h1 className="index-title">{t.index.mysheets}</h1>
                                    <Link href={route("fichas.create")} className="new-sheet-btn">
                                        {t.index.newsheet}
                                    </Link>
                                </div>

                                <div className="fichas-list">
                                    {fichas.map((ficha) => (
                                        <FichaCard key={ficha.id} ficha={ficha} t={t} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </FondoSeamless>

            </div>
        </AuthenticatedLayout>
    )
}