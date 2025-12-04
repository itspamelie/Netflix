export default function HeaderDashboard() {
  return (
    <>
      <nav className="col-md-2 d-none d-md-block bg-black min-vh-100 p-3">
        
        <img 
          src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/netflix%20logo.png?raw=true"
          alt="Logo de Netflix"
          className="logo mb-4"
        />

        <ul className="nav flex-column">

          <li className="nav-item">
            <a className="nav-link text-light bg-secondary rounded mb-1" href="/dashboard">
              Panel Principal
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="/dashboard/suscriptions">
              Suscripciones
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="/dashboard/contents">
              Contenidos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="/dashboard/series">
              Series
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="/dashboard/icons">
              Íconos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="/dashboard/ads">
              Publicidad
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="/dashboard/genres">
              Géneros / Clasificaciones
            </a>
          </li>

        </ul>
      </nav>
    </>
  );
}
