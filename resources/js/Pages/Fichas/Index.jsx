import { Head, Link } from "@inertiajs/react";
import "../../../css/pages/home.css";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function FichasIndex({ auth = {} }) {
  const { t } = useContextoIdioma();

  if(auth?.user){
    return(
      <AuthenticatedLayout>
          <Head title="Home"/>
          <p>index fichass</p>
      </AuthenticatedLayout>
    )
  }

  return (
    <>
      <GuestLayout auth={auth}>
        <Head title="Home" />
        <div className="container">

          <section className="home-hero">
            <h2 className="home-title">{t.home.title}</h2>
            <p className="home-sub">{t.home.subtitle}</p>
          </section>
        </div>
      </GuestLayout>
    </>
  );
}