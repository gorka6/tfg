import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import FichaForm from "@/Components/FichaForm";

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
      <FichaForm
        mode="create"
        form={form}
        {...props}
        onSubmit={handleSubmit}
      />
    </AuthenticatedLayout>
  );
}
