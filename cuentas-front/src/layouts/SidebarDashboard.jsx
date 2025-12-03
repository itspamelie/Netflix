export default function HeaderDashboard(){
    return(
        <>
                <nav className="col-md-2 d-none d-md-block bg-black min-vh-100 p-3">
       <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/netflix%20logo.png?raw=true" 
            alt="netflix img" 
            className="logo mb-4" 
          />

      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-light bg-secondary rounded mb-1" href="#">Dashboard</a>
        </li>
        <li className="nav-item"><a className="nav-link text-light" href="/dashboard/suscriptions">Suscriptions</a></li>
        <li className="nav-item"><a className="nav-link text-light" href="/dashboard/contents">Contents</a></li>
        <li className="nav-item"><a className="nav-link text-light" href="/dashboard/series">Series</a></li>
        <li className="nav-item"><a className="nav-link text-light" href="/dashboard/icons">Icons</a></li>
        <li className="nav-item"><a className="nav-link text-light" href="/dashboard/profiles">Profiles</a></li>
        <li className="nav-item"><a className="nav-link text-light" href="/dashboard/ads">Ads</a></li>
        <li className="nav-item"><a className="nav-link text-light" href="/dashboard/genres">Genres/classifications</a></li>
      </ul>
    </nav>

    
        </>
    )
}