import { Link } from "react-router-dom";
import '../css/dashboardsidebar.css';


export default function HeaderDashboard() {
  return (
    <>
      <nav className="col-md-2 d-none d-md-block bg-black min-vh-100 p-3">

        {/* LOGO */}
        <img
          src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/netflix%20logo.png?raw=true"
          alt="Logo de Netflix"
          className="logo mb-4"
        />

        <ul className="nav flex-column">

          {/* PANEL PRINCIPAL */}
          <li className="nav-item">
            <Link className="nav-link text-light bg-secondary rounded mb-1" to="/dashboard">
              Panel Principal
            </Link>
          </li>

          {/* SUSCRIPCIONES */}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dashboard/suscriptions">
              Suscripciones
            </Link>
          </li>

          {/* CONTENIDOS */}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dashboard/contents">
              Contenidos
            </Link>
          </li>

          {/* SERIES */}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dashboard/series">
              Series
            </Link>
          </li>

          {/* ICONOS */}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dashboard/icons">
              Íconos
            </Link>
          </li>

          {/* PUBLICIDAD */}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dashboard/ads">
              Publicidad
            </Link>
          </li>

          {/* GENEROS */}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dashboard/genres">
              Géneros / Clasificaciones
            </Link>
          </li>

          {/* IR AL HOME */}
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Ir al Home
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
