import { Head } from "@inertiajs/react";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import GuestLayout from "@/Layouts/GuestLayout";
import FondoSeamless from "@/Components/FondoSeamless";
import HomeFilas from "@/Components/HomeFilas";
import "../../../css/pages/home.css"

export default function Index({ auth = {} }) {
  const { t } = useContextoIdioma();

  return (
    <>
      <GuestLayout auth={auth}>
        <Head title="Home" />

        <section className="home-section">
          <FondoSeamless>
            <div className="home-block home-block-centered">
              <h2>{t.home.subtitle_1}</h2>
              <p>{t.home.body_1}</p>
            </div>
            <HomeFilas title={t.home.subtitle_3} body={t.home.body_3} image="/images/web/prueba.png" reverse />
            <HomeFilas title={t.home.subtitle_4} body={t.home.body_4} image="/images/web/prueba.png" />
            <HomeFilas title={t.home.subtitle_5} body={t.home.body_5} image="/images/web/prueba.png" reverse />
            <HomeFilas title={t.home.subtitle_8} body={t.home.body_8} image="/images/web/prueba.png" />
            <HomeFilas title={t.home.subtitle_7} body={t.home.body_7} image="/images/web/prueba.png" reverse />
          </FondoSeamless>
        </section>
      </GuestLayout>
    </>
  );
}
