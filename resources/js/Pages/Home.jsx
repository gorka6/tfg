import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Header from "@/Components/Header";
import "../../css/pages/home.css";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";

export default function Home({ auth }) {
  const { t } = useContextoIdioma();

  return (
    <>
      <Head title="Home" />
      <div className="container">
        <Header auth={auth}/>

        <section className="home-hero">
          <h2 className="home-title">{t.home.title}</h2>
          <p className="home-sub">{t.home.subtitle}</p>

          <div className="home-actions">
            <Link href={route("register")}>
              <PrimaryButton>{t.home.register}</PrimaryButton>
            </Link>
            <Link href={route("login")}>
              <PrimaryButton>{t.home.login}</PrimaryButton>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
