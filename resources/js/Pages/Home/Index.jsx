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
            <HomeFilas title={t.home.subtitle_2} body={t.home.body_2} image="/images/web/home/home-body-2.png" reverse />
            <HomeFilas title={t.home.subtitle_3} body={t.home.body_3} image="/images/web/home/home-body-3.png" />
            <HomeFilas title={t.home.subtitle_4} body={t.home.body_4} image="/images/web/home/home-body-4.webp" reverse />
            <HomeFilas title={t.home.subtitle_6} body={t.home.body_6} image="/images/web/home/home-body-6.webp" />
            <HomeFilas title={t.home.subtitle_5} body={t.home.body_5} image="/images/web/home/home-body-5.webp" reverse />
          </FondoSeamless>
        </section>
      </GuestLayout>
    </>
  );
}
