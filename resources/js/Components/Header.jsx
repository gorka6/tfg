import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Framework/Dropdown";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import CambioIdioma from "@/Components/CambioIdioma";
import CambioTema from "@/Components/CambioTema";
import "../../css/components/header.css";

export default function Header({ auth }) {
  const { t } = useContextoIdioma();
  const user = auth?.user;

  return (
    <header className="header">
      <div className="header-left">
        <Link href={route("home")} className="header-logo-link">
          <img
            src="/images/web/logo.svg"
            alt="Hero Forge Logo"
            className="header-logo"
          />
        </Link>
      </div>

      <div className="header-right">
        <div className="header-controls">
          <CambioIdioma />
          <CambioTema />
        </div>

        <nav className="header-nav">
          {user ? (
            <Dropdown>
              <Dropdown.Trigger>
                <button className="dropdown-trigger">
                  {user.name}
                </button>
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
          ) : (
            <>
              <Link href={route("register")} className="header-link">
                {t.home.register}
              </Link>
              <Link href={route("login")} className="header-link">
                {t.home.login}
              </Link>
            </>
          )}
          <Link href={route("fichas.index")} className="header-link">
            {t.home.sheet}
          </Link>
          <Link href={route("fichas.tiradas")} className="header-link">
            {t.home.throws}
          </Link>
        </nav>
      </div>
    </header>
  );
}
