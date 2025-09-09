import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import CambioIdioma from "@/Components/CambioIdioma";
import '../../css/components/header.css';
import '../../css/components/cambioidioma.css';
import CambioTema from "./CambioTema";

export default function Header({ auth }) {
  const { t } = useContextoIdioma();

  return (
    <header className="header">
      <div>
        <Link href={route("home")} className="header-title">
          <h1>DND</h1>
        </Link>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <CambioIdioma />
          <CambioTema />
        </div>
        <nav className="header-nav">
          {auth.user ? (
            <Link href={route("dashboard")}>
              <PrimaryButton>{t.home.profile}</PrimaryButton>
            </Link>
          ) : (
            <>
              <Link href={route("register")}>
                <PrimaryButton>{t.home.register}</PrimaryButton>
              </Link>
              <Link href={route("login")}>
                <PrimaryButton>{t.home.login}</PrimaryButton>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
