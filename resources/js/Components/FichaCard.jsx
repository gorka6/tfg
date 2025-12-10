import { Link, useForm } from "@inertiajs/react";
import { normTexto } from "@/utils/normTexto";
import "../../css/components/ficha-card.css";

export default function FichaCard({ ficha, t }) {
    const { delete: destroy } = useForm();
    const razaNorm = normTexto(ficha.race.name);
    const subrazaNorm = ficha.subrace ? normTexto(ficha.subrace.name) : null;
    const origenNorm = normTexto(ficha.background.name);
    const claseNorm = normTexto(ficha.character_class.name);

    return (
        <div className="ficha-card">
            <h2>{ficha.name}</h2>

            <p><strong>{t.create.race}:</strong> {t.races[razaNorm]}</p>

            <p>
                <strong>{t.create.subrace}:</strong>{" "}
                {subrazaNorm ? t.subraces[subrazaNorm] : t.subraces.no_subrace}
            </p>

            <p><strong>{t.create.background}:</strong> {t.backgrounds[origenNorm]}</p>
            <p><strong>{t.create.class}:</strong> {t.classes[claseNorm]}</p>

            <p><strong>{t.create.str}:</strong> {ficha.str}</p>
            <p><strong>{t.create.dex}:</strong> {ficha.dex}</p>
            <p><strong>{t.create.con}:</strong> {ficha.con}</p>
            <p><strong>{t.create.int}:</strong> {ficha.int}</p>
            <p><strong>{t.create.wis}:</strong> {ficha.wis}</p>
            <p><strong>{t.create.cha}:</strong> {ficha.cha}</p>

            <p><strong>{t.create.align}:</strong> {t.alignments[ficha.alignment]}</p>

            <div className="ficha-card-actions">
                <a
                    href={`/fichas/${ficha.id}/pdf-${t.lang}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t.index.pdf}
                </a>

                <Link href={route("fichas.edit", ficha.id)}>
                    {t.index.edit}
                </Link>

                <button onClick={() => destroy(route("fichas.destroy", ficha.id))}>
                    {t.index.delete}
                </button>
            </div>
        </div>
    );
}
