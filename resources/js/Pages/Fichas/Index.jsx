import { Head, Link } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FichaCard from "@/Components/FichaCard";

export default function Index({ fichas }) {
    const { t } = useContextoIdioma();

    console.log(t)
    return (
        <AuthenticatedLayout>
            <Head title="Mis Fichas" />

            <div  >
                <div  >
                    <h1  >{t.index.mysheets}</h1>
                    <Link
                        href={route("fichas.create")}
                         
                    >
                        {t.index.newsheet}
                    </Link>
                </div>

                {fichas.length === 0 ? (
                    <div  >
                        <p  >
                            {t.index.nosheets}
                        </p>
                        <Link
                            href={route("fichas.create")}
                             
                        >
                            {t.index.firstsheet}
                        </Link>
                    </div>
                ) : (
                    <div  >
                        {fichas.map((ficha) => (
                            <FichaCard key={ficha.id} ficha={ficha} t={t} />
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    )
}