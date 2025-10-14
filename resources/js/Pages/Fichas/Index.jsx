import { Head, Link } from "@inertiajs/react";
import "../../../css/pages/home.css";
import { useContextoIdioma } from "@/Contexts/ContextoIdioma";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "../../../css/pages/fichas-index.css";

export default function FichasIndex({ fichas, auth = {} }) {
    const { t } = useContextoIdioma();

    return (
        <AuthenticatedLayout>
<Head title="Mis Fichas" />

      <div className="fichas-container">
        <div className="fichas-header">
          <h1 className="fichas-title">Mis Fichas</h1>
          <Link
            href={route("fichas.create")}
            className="fichas-btn-crear"
          >
            Nueva ficha
          </Link>
        </div>

        {fichas.length === 0 ? (
          <div className="fichas-vacio">
            <p className="fichas-texto-vacio">
              Aún no tienes ninguna ficha creada.
            </p>
            <Link
              href={route("fichas.create")}
              className="fichas-btn-crear"
            >
              Crear mi primera ficha
            </Link>
          </div>
        ) : (
          <div className="fichas-grid">
            {fichas.map((ficha) => (
              <div key={ficha.id} className="ficha-card">
                <h2 className="ficha-nombre">{ficha.nombre}</h2>
                <p><strong>Ataque:</strong> {ficha.ataque}</p>
                <p><strong>Alineamiento:</strong> {ficha.alignment}</p>

                <div className="ficha-acciones">
                  <Link
                    href={route("fichas.show", ficha.id)}
                    className="ficha-btn-ver"
                  >
                    Ver
                  </Link>
                  <Link
                    href={route("fichas.edit", ficha.id)}
                    className="ficha-btn-editar"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
        </AuthenticatedLayout>
    )
}