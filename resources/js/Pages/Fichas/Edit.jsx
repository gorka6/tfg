import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import FichaForm from "@/Components/FichaForm";
import FondoSeamless from "@/Components/FondoSeamless";
import "../../../css/pages/fichas-edit.css"

export default function Edit({ ficha, races, subraces, classes, backgrounds, classesSkills, traits }) {
  const form = useForm({
    name: ficha.name ?? "",
    str: ficha.str ?? 0,
    dex: ficha.dex ?? 0,
    con: ficha.con ?? 0,
    int: ficha.int ?? 0,
    wis: ficha.wis ?? 0,
    cha: ficha.cha ?? 0,
    alignment: ficha.alignment ?? "tn",
    race_id: ficha.race_id ?? null,
    class_id: ficha.class_id ?? null,
    subrace_id: ficha.subrace_id ?? null,
    background_id: ficha.background_id ?? null,
    exp: ficha.exp ?? 0,
    skills: (ficha.skills ?? []).map(skill => skill.id),
    traits: (ficha.traits ?? []).map(trait => trait.id)
  });

  const handleSubmit = () => {
    form.put(route("fichas.update", ficha.id), {
      onSuccess: () => {
      }
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title={`Editar ficha: ${ficha.name}`} />
      <div className="form-container">
        <FondoSeamless>
          <FichaForm
            mode="edit"
            form={form}
            races={races}
            subraces={subraces}
            classes={classes}
            backgrounds={backgrounds}
            classesSkills={classesSkills}
            traits={traits}
            onSubmit={handleSubmit}
            processing={form.processing}
            errors={form.errors}
          />
        </FondoSeamless>
      </div>
    </AuthenticatedLayout>
  );
}
