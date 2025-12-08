import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import FichaForm from "@/Components/FichaForm";
import FondoSeamless from "@/Components/FondoSeamless";
import "../../../css/pages/ficha-create.css"

export default function Create(props) {
  const form = useForm({
    name: "",
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    alignment: "tn",
    race_id: null,
    class_id: null,
    subrace_id: null,
    background_id: null,
    exp: 0,
    skills: [],
    traits: []
  });

  const handleSubmit = () => {
    form.post(route("fichas.store"), {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Crear Ficha" />
      <div className="form-container">
        <FondoSeamless>
          <FichaForm
            mode="create"
            form={form}
            {...props}
            onSubmit={handleSubmit}
          />
        </FondoSeamless>
      </div>
    </AuthenticatedLayout>
  );
}
