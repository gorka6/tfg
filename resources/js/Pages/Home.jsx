import { Head } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Home({ auth = {} }) {
  const { t } = useContextoIdioma();

  if(auth?.user){
    return(
      <AuthenticatedLayout>
          <Head title="Home"/>
      </AuthenticatedLayout>
    )
  }

  return (
    <>
      <GuestLayout auth={auth}>
        <Head title="Home" />
        <div  >

          <section  >
            <h2  >{t.home.title}</h2>
            <p  >{t.home.subtitle}</p>
          </section>
        </div>
      </GuestLayout>
    </>
  );
}
