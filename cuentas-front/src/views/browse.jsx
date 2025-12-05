import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/browse.css';

export default function Browse() {

    const [isBrowseOpen, setIsBrowseOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [contents, setContents] = useState([]);
    const [episodes, setEpisodes] = useState([]);

        // Guardar temporada seleccionada por cada serie
    const [selectedContent, setSelectedContent] = useState(null);
const [selectedSeason, setSelectedSeason] = useState(null);
const [selectedEpisode, setSelectedEpisode] = useState(null);

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const fetchContents = async () => {
        if (!token) return;
        try {
            const res = await fetch("http://localhost:8000/api/content", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (res.ok) setContents(data.data);
        } catch (err) {
            console.log(err);
        }
    };

        const fetchEpisodes = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/episodes", {
                headers: { Authorization: `Bearer ${token.replace(/"/g, "")}` }
            });
            const data = await res.json();
            if (res.ok) {
                const seriesOnly = data.data.filter(ep => ep.contenido?.tipo !== "pelicula");
                setEpisodes(seriesOnly);

            }
        } catch (err) {
            console.log(err);
        }
    };



    useEffect(() => {
        if (!token || !user) {
            navigate("/login"); // ✅ ahora sí está definida
            return;
        }
        fetchEpisodes();
        fetchContents();
    }, [token, user]); 

    // Dentro del componente Browse, después de fetchContents y de definir contents
const latestContent = contents.length > 0 
  ? contents.reduce((prev, current) => 
      new Date(prev.created_at) > new Date(current.created_at) ? prev : current
    )
  : null;

  // Top 5 más recientes
const top5 = contents
  .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  .slice(0, 5);


const openSeriesModal = (serie) => {
    const eps = episodes.filter(e => e.contenido_id === serie.id);

 const grouped = eps.reduce((acc, ep) => {
    const temporada = ep.temporada?.numero; // ← AQUÍ EL FIX

    if (!temporada) return acc; // seguridad

    if (!acc[temporada]) acc[temporada] = [];
    acc[temporada].push(ep);

    return acc;
}, {});

    setSelectedContent({
        ...serie,
        grouped,
    });



    // seleccionar temporada 1 por defecto
    const firstSeason = Math.min(...Object.keys(grouped).map(Number));
    setSelectedSeason(firstSeason);

    // no episodio seleccionado
    setSelectedEpisode(null);

    const modal = new bootstrap.Modal(document.getElementById("seriesModal"));
    modal.show();
};


    return(
    <>
<div className="body-browse">
      <div className="fixed-div">
        <div className="parent-div">
          <img 
            src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/netflix%20logo.png?raw=true" 
            alt="netflix img" 
            className="logo" 
          />
          
          <div className="dropdown" >
            <span className="browse-el">Browse</span>
            <div className="dropdown-content" >
              <p><a href="#" className='a-browse'>Inicio</a></p>
              <p><a href="#dramas" className='a-browse'>Películas</a></p>
              <p><a href="#top-tv" className='a-browse'>Top &amp; populares</a></p>
              <p><a href="#list" className='a-browse'>Documentales</a></p>
            </div>
          </div>
        </div>

        {/* notification nav y otros iconos */}
        <div className="float-op" style={{ float: 'right' }}>
          <div className="search"></div>
        </div>
        
        {/* Notificaciones Dropdown */}
        <div className="dropdown2" style={{ float: 'right' }} >
          <div className="dropbtn"></div>
          <div className="dropdown-content2">
            <div className="span-style"></div>
          

          </div>
        </div>

        <div className="user-img" style={{ float: 'right' }}>
          <img src="https://github.com/Chinemereem/Netflix-clone/blob/master/images/user.png?raw=true" alt="" />
          <span className="span-icon"></span>
        </div>
      </div>
      
              {/*EL LANZAMIENTO MAS NUEVO */}
       <div className="between-img-div">
        {latestContent ? (
          <img
            src={`http://localhost:8000/portadas/${latestContent.portada}`} 
            className="between-img"
            alt={latestContent.titulo}
          />
        ) : (
          <img
            src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/between-1.webp"
            className="between-img"
            alt="Between" 
          />
        )}
      </div>
      
      <div className="logo-and-text mb-5">
        <div 
          className="titleWrapper" 
          style={{ transformOrigin: 'left bottom', transform: 'scale(1) translate3d(0px, 0px, 0px)', transitionDuration: '1300ms', transitionDelay: '0ms' }}
        >
          <div className="billboard-title">
            <img className="title-logo" src="https://raw.githubusercontent.com/Chinemereem/Netflix-clone/master/images/netflixsvg.webp" title="Between" alt="Between" style={{ visibility: 'hidden' }} />
          </div>
        </div>
        
        <div 
          className="info-wrapper" 
          style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '1300ms', transitionDelay: '0ms', opacity: 1 }}
        >
      
          
         <div className="d-flex gap-2 mt-3">
  {/* Botón Play */}
  <button className="btn btn-light btn-lg d-flex align-items-center"
    type="button" data-bs-toggle="modal"
  data-bs-target="#contentModal"
     onClick={() => {
        setSelectedContent(latestContent); 
    }}>
      <i className='bi bi-play-fill'></i>
    Play
  </button>

  {/* Botón More Info */}
  <button
    className="btn btn-secondary btn-lg d-flex align-items-center"
    type="button"
  >
       <i className='bi bi-info-circle'></i> &nbsp;More Info
  </button>
</div>

          
        </div>
      </div>
      
   
      <div className="ratin-div" style={{ float: 'right' }}>
        <button aria-label="Replay" className="color-supplementary" type="button">
          <div className="small-div">
            <svg className="style-svg" viewBox="0 0 24 24">
              <path d="M20 12.35l1.919-1.371 1.162 1.627-4.08 2.915-4.082-2.915 1.162-1.627L18 12.349V12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.93 0 3.68-.79 4.94-2.06l1.42 1.42A8.954 8.954 0 0 1 11 21a9 9 0 1 1 9-9v.35z" fill="currentColor"></path>
            </svg>
          </div>
        </button>
        <span className="rating">
          <span className="maturity-number">3+</span>
        </span>
      </div>

       <section className="all-drama mt-2">
        {/*PELICULAS */}
<div className="tv-dramas mb-2" id="dramas">
  <div className="div-width">
    <h2 className="tv-h2">Películas</h2>

    <div className="all-movie-div mt-3">
      {contents
        .filter((item) => item.tipo === "pelicula")
        .map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`http://localhost:8000/portadas/${movie.portada}`}
              alt={movie.titulo}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedContent(movie);

                // Abrir modal manualmente
                const modal = new bootstrap.Modal(
                  document.getElementById("contentModal")
                );
                modal.show();
              }}
            />
          </div>
        ))}
    </div>
  </div>
</div>

<div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>

{/* SERIES */}
<div className="tv-series mb-4" id="series">
  <h2 className="tvd-h2">Series</h2>
  <div className="div-width">
    <div className="all-movie-div">

      {contents
        .filter((item) => item.tipo === "serie")
        .map((serie) => (
          <div
            key={serie.id}
            className="movie-item"
            onClick={() => openSeriesModal(serie)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={`http://localhost:8000/portadas/${serie.portada}`}
              alt={serie.titulo}
            />
          </div>
        ))}

    </div>
  </div>
</div>



<div className="my-list" id="list">
  <h2 className="h2list mt-5">Documentales</h2>
  <div className="list-div-width">
    <div className="second-div-list">
      {contents
        .filter((item) => item.tipo === "documental")
        .map((doc) => (
          <div
            key={doc.id}
            className="movie-item nevertheless-list"
            style={{ cursor: "pointer" }}
            onClick={() => openSeriesModal(doc)}
          >
            <img src={`http://localhost:8000/portadas/${doc.portada}`} alt={doc.titulo} />
          </div>
        ))}
    </div>
  </div>
</div>

        


<div className="container my-4">
  <h2 className="text-white fw-bold mb-3">Top 5 en México</h2>

  <div className="d-flex overflow-auto gap-4 top10-container">
    {top5.map((item, index) => (
      <div key={item.id} className="top10-item position-relative">
        <img
          src={`http://localhost:8000/portadas/${item.portada}`}
          className="img-fluid rounded"
          alt={item.titulo}
        />
        <span className="top10-number">{index + 1}</span>
      </div>
    ))}
  </div>
</div>
     <div className="aror">
          <a className="prev a-browse">&#10094;</a>
          <a className="next a-browse">&#10095;</a>
        </div>

       <div className="my-list div-list" id="animes">
  <h2 className="h2list mb-4" style={{ position: 'relative', top: '60px' }}>Animes</h2> 
  <div className="list-div-width">
    <div className="second-div-list">
      {contents
        .filter((item) => item.tipo === "anime")
        .map((anime) => (
          <div
            key={anime.id}
            className="movie-item nevertheless-list"
            style={{ cursor: "pointer" }}
            onClick={() => openSeriesModal(anime)}
          >
            <img
              src={`http://localhost:8000/portadas/${anime.portada}`}
              alt={anime.titulo}
            />
          </div>
        ))}
    </div>
  </div>
</div>

      </section>
 <footer>
        <div className="grid-container">
          <div className="grid-item">
            {/* Íconos de Font Awesome: asumiendo que el script está cargado globalmente 
                o que se reemplazarán por iconos de react-icons. */}
            <span><i className="fab fa-facebook-square"></i></span>
            <span><i className="fab fa-instagram"></i></span>
            <span><i className="fab fa-youtube"></i></span>
            <p>Audio and Subtitle</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
            <p className="p-grid">Service code</p>
            <p>&copy;1997-2021 Netflix, inc,(7cBab736-9ae4-4251-9ea9-cf9fdd09f7cc)</p>
          </div>
          <div className="grid-item">
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>
          <div className="grid-item">
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preference</p>
          </div>
          <div className="grid-item">
            <p>Gift Cards</p>
            <p>Terms Of Use</p>
            <p>Corperate Information</p>
          </div>
        </div>
      </footer>
      </div>

      {/* MODAL DE INFORMACIÓN DEL CONTENIDO */}
<div
  className="modal fade"
  id="contentModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content bg-dark text-white">

      {/* HEADER */}
      <div className="modal-header border-secondary">
        <h5 className="modal-title">
          {selectedContent?.titulo} ({selectedContent?.fechaEstreno})
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="modal"
        ></button>
      </div>

      {/* BODY */}
      <div className="modal-body">

        {/* VIDEO */}
        {selectedContent?.video && (
          <video
            src={`http://localhost:8000/contents/${selectedContent.video}`}
            className="w-100 rounded mb-3"
            controls
          ></video>
        )}

        <p><strong></strong> {selectedContent?.descripcion}</p>
        <p><strong>Duración:</strong> {selectedContent?.duracion} min</p>
<p><strong>Clasificación </strong> {selectedContent?.clasificacion?.nombre}, <strong>Género</strong> {selectedContent?.genero?.nombre} </p>

      </div>

      {/* FOOTER */}
      <div className="modal-footer border-secondary">
        <button
          className="btn btn-outline-light"
          data-bs-dismiss="modal"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</div>

{/* MODAL DE SERIES */}
<div
  className="modal fade"
  id="seriesModal"
  tabIndex="-1"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content bg-dark text-white">

      <div className="modal-header border-secondary">
        <h5 className="modal-title">{selectedContent?.titulo}</h5>
        <button className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body">

        {selectedContent?.grouped && Object.keys(selectedContent.grouped).length > 0 ? (
          <>
            {/* SELECT DE TEMPORADAS */}
            <label className="fw-bold">Temporada:</label>
            <select
              className="form-select mb-3 bg-secondary text-white"
              value={selectedSeason || ""}
              onChange={(e) => {
                const seasonKey = e.target.value;
                setSelectedSeason(seasonKey);
                setSelectedEpisode(null);
              }}
            >
              <option value="">Selecciona temporada</option>

              {Object.keys(selectedContent.grouped)
                .sort((a, b) => Number(a) - Number(b))
                .map((seasonKey) => (
                  <option key={seasonKey} value={seasonKey}>
                    Temporada {seasonKey}
                  </option>
                ))}
            </select>

            {/* SELECT DE EPISODIOS */}
            {selectedSeason && (
              <>
                <label className="fw-bold">Episodio:</label>
                <select
                  className="form-select mb-3 bg-secondary text-white"
                  value={selectedEpisode || ""}
                  onChange={(e) => setSelectedEpisode(e.target.value)}
                >
                  <option value="">Selecciona episodio</option>

                  {selectedContent.grouped[selectedSeason]
                    .sort((a, b) => a.numero - b.numero)
                    .map((ep) => (
                      <option key={ep.id} value={ep.id}>
                        {ep.numero}. {ep.titulo}
                      </option>
                    ))}
                </select>
              </>
            )}

            {/* VIDEO DEL EPISODIO O TRAILER */}
            {selectedSeason && selectedEpisode ? (
              (() => {
                const episodio = selectedContent.grouped[selectedSeason]
                  .find(ep => String(ep.id) === String(selectedEpisode));

                return episodio ? (
                  <video
                    src={`http://localhost:8000/episodes/${episodio.video}`}
                    controls
                    className="w-100 rounded mb-3"
                  ></video>
                ) : null;
              })()
            ) : (
              <video
                src={`http://localhost:8000/contents/${selectedContent?.video}`}
                controls
                className="w-100 rounded mb-3"
              ></video>
            )}
          </>
        ) : (
          <p>No hay temporadas ni episodios registrados.</p>
        )}

        {/* INFO GENERAL */}
        <p className="mt-3">{selectedContent?.descripcion}</p>
        <p><strong>Clasificación:</strong> {selectedContent?.clasificacion?.nombre}</p>
        <p><strong>Género:</strong> {selectedContent?.genero?.nombre}</p>
      </div>

    </div>
  </div>
</div>





    </>
    )
}