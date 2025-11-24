import { Link, useForm } from "@inertiajs/react";
import { normTexto } from "@/utils/normTexto";

export default function FichaCard({ ficha, t}) {
    const { delete: destroy } = useForm();
    const razaNorm = normTexto(ficha.race.name);
    const subrazaNorm = ficha.subrace ? normTexto(ficha.subrace.name) : null;
    const origenNorm = normTexto(ficha.background.name);
    const claseNorm = normTexto(ficha.character_class.name);
    console.log(t.lang)

    return (
        <div className="ficha-card">
            <h2 className="ficha-nombre">{ficha.name}</h2>
            <p>
                <strong>{t.create.race}: {t.races[razaNorm]}</strong>
            </p>
            <p>
                <strong>
                    {t.create.subrace}: {subrazaNorm ? t.subraces[subrazaNorm] : t.subraces.no_subrace}
                </strong>
            </p>
            <p>
                <strong>{t.create.background}: {t.backgrounds[origenNorm]}</strong>
            </p>
            <p>
                <strong>{t.create.class}: {t.classes[claseNorm]}</strong>
            </p>
            <p>
                <strong>{t.create.str}:</strong> {ficha.str}
            </p>
            <p>
                <strong>{t.create.dex}:</strong> {ficha.dex}
            </p>
            <p>
                <strong>{t.create.con}:</strong> {ficha.con}
            </p>
            <p>
                <strong>{t.create.int}:</strong> {ficha.int}
            </p>
            <p>
                <strong>{t.create.wis}:</strong> {ficha.wis}
            </p>
            <p>
                <strong>{t.create.cha}:</strong> {ficha.cha}
            </p>
            <p>
                <strong>{t.create.align}:</strong> {t.alignments[ficha.alignment]}
            </p>

            <div className="ficha-acciones">
                <a className="ficha-btn-ver" href={`/fichas/${ficha.id}/pdf-${t.lang}`} target="_blank" rel="noopener noreferrer">Ver PDF</a>
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
