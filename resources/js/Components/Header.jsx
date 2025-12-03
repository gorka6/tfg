import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Framework/Dropdown";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import CambioIdioma from "@/Components/CambioIdioma";
import CambioTema from "@/Components/CambioTema";

export default function Header({ auth }) {
  const { t } = useContextoIdioma();
  const user = auth?.user;

  return (
    <header  >
      <div  >
        <Link href={route("home")}  >
          <h1>DND</h1>
        </Link>
      </div>

      <div  >
        <div  >
          <CambioIdioma />
          <CambioTema />
        </div>

        <nav  >
          {user ? (
            <Dropdown>
              <Dropdown.Trigger>
                <button  >
                  {user.name}
                  <svg
                     
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Dropdown.Trigger>

              <Dropdown.Content  >
                <Dropdown.Link href={route("dashboard")}>
                  {t.home.profile}
                </Dropdown.Link>
                <Dropdown.Link href={route("profile.edit")}>
                  {t.home.edit}
                </Dropdown.Link>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                  {t.home.logout}
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          ) : (
            <>
              <Link href={route("register")}  >
                {t.home.register}
              </Link>
              <Link href={route("login")}  >
                {t.home.login}
              </Link>
            </>
          )}
          <Link href={route("fichas.index")}  >
            {t.home.sheet}
          </Link>
          <Link href={route("fichas.tiradas")}  >
            {t.home.throws}
          </Link>
        </nav>
      </div>
    </header>
  );
}
