import { Link, usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Framework/Dropdown";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import CambioIdioma from "@/Components/CambioIdioma";
import "../../css/components/header.css";

export default function Header({ auth }) {
  const { t } = useContextoIdioma();
  const user = auth?.user;
  const { url, component } = usePage();
  console.log(route("fichas.index"));
  return (
    <header className="header">
      {/* ZONA IZDA: controles */}
      <div className="header-left">
        <div className="header-controls">
          <div className="cambio-idioma">
            <CambioIdioma />
          </div>
        </div>

      </div>

      {/* ZONA CENTRO: fichas - logo - tiradas */}
      <div className="header-center">
        <Link
          href={route("fichas.index")}
          className={`header-link header-link--center ${url === "/fichas" ? "active" : ""
            }`}
        >
          <img src="/images/web/fichas.svg" className="header-icon" alt="icono" />
          {t.home.sheet}
        </Link>

        <Link href={route("home")} className="header-logo-link">
          <img src="/images/web/logo.svg" alt="Logo" className="header-logo" />
        </Link>

        <Link
          href={route("fichas.tiradas")}
          className={`header-link header-link--center ${url === "/fichas/tiradas" ? "active" : ""
            }`}
        >
          <img src="/images/web/tiradas.svg" className="header-icon" alt="icono" />
          {t.home.throws}
        </Link>
      </div>

      {/* ZONA DERECHA: auth */}
      <div>
        <div>
          {user ? (
            <>
              <p className="auth-welcome">{t.home.welcome}</p>

              <Dropdown>
                <Dropdown.Trigger>
                  <button className="dropdown-trigger">{user.name}</button>
                </Dropdown.Trigger>

                <Dropdown.Content className="dropdown-content">
                  <Dropdown.Link href={route("profile.edit")} className="dropdown-link">
                    {t.home.edit}
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="dropdown-link"
                  >
                    {t.home.logout}
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </>
          ) : (
            <div className="header-auth-links">
              <Link href={route("register")}>{t.home.register}</Link>
              <Link href={route("login")}>{t.home.login}</Link>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}
