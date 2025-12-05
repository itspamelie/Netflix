import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';


export default function SeriesDashboard() {
    const token = localStorage.getItem("token");
    const [episodes, setEpisodes] = useState([]);
    const [contents, setContents] = useState([]);
    

    // Estados para modal de capítulo
    const [showEpisodeModal, setShowEpisodeModal] = useState(false);
    const [currentSeason, setCurrentSeason] = useState(null);
    const [episodeForm, setEpisodeForm] = useState({
        titulo: "",
        numero: "",
        duracion: "",
        sinopsis: "",
        video: null
    });

    // Guardar temporada seleccionada por cada serie
    const [selectedSeasons, setSelectedSeasons] = useState({});

    useEffect(() => {
        fetchEpisodes();
        fetchContents();
    }, []);

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

    const fetchContents = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/content", {
                headers: { Authorization: `Bearer ${token.replace(/"/g, "")}` }
            });
            const data = await res.json();
            if (res.ok) {
                const series = data.data.filter(c => c.tipo !== "pelicula");
                setContents(series);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // Agrupar episodios por serie → temporada con IDs incluidos
    const grouped = {};
    episodes.forEach(ep => {
        const serie = ep.contenido?.titulo || "Sin nombre";
        const temporadaNum = ep.temporada?.numero || "N/A";
        const temporadaTitulo = ep.temporada?.titulo || "";

        if (!grouped[serie]) grouped[serie] = {};
        if (!grouped[serie][temporadaNum]) {
            grouped[serie][temporadaNum] = {
                titulo: temporadaTitulo,
                episodios: [],
                temporadaId: ep.temporada?.id || null,
                contenidoId: ep.contenido?.id || null
            };
        }
        grouped[serie][temporadaNum].episodios.push(ep);
    });

    // Series sin episodios
    const pendingSeries = contents.filter(c => !grouped[c.titulo]);

    // Abrir modal y setear IDs de la temporada seleccionada
    const handleOpenEpisodeModal = (serieName) => {
        const temporadaNum = selectedSeasons[serieName]; // Temporada actualmente seleccionada
        if (!temporadaNum) {
            alert("No hay temporada seleccionada.");
            return;
        }

        const season = grouped[serieName][temporadaNum]; // Obtenemos la temporada completa
        if (!season?.temporadaId || !season?.contenidoId) {
            alert("No se puede agregar capítulo, faltan IDs de temporada o contenido.");
            return;
        }

        setCurrentSeason({
            temporadaId: season.temporadaId,
            contenidoId: season.contenidoId
        });

        setEpisodeForm({
            titulo: "",
            numero: "",
            duracion: "",
            sinopsis: "",
            video: null
        });

        setShowEpisodeModal(true);
    };

    const handleEpisodeChange = (e) => {
        const { name, value, files } = e.target;
        setEpisodeForm(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleEpisodeSubmit = async (e) => {
        e.preventDefault();
        if (!currentSeason) return;

        const fd = new FormData();
        fd.append("titulo", episodeForm.titulo);
        fd.append("numero", episodeForm.numero);
        fd.append("duracion", episodeForm.duracion);
        fd.append("sinopsis", episodeForm.sinopsis);
        fd.append("video", episodeForm.video);
        fd.append("temporada_id", currentSeason.temporadaId);
        fd.append("contenido_id", currentSeason.contenidoId);

        try {
            const res = await fetch("http://localhost:8000/api/episodes", {
                method: "POST",
                headers: { Authorization: `Bearer ${token.replace(/"/g, "")}` },
                body: fd
            });

            console.log("STATUS:", res.status, res.statusText);
            const text = await res.text();
            console.log("RESPUESTA DEL BACKEND:", text);
            alert("Revisa la consola para ver la respuesta del servidor");
        } catch (err) {
            console.error(err);
            alert("Error en la petición");
        }
    };


    // Modal para nueva temporada + capítulo
    const [showNewSeasonModal, setShowNewSeasonModal] = useState(false);
    const [newSeasonForm, setNewSeasonForm] = useState({
        numero: "",
        titulo: "",
        // Capítulo inicial
        capituloTitulo: "",
        capituloNumero: "",
        capituloDuracion: "",
        capituloSinopsis: "",
        capituloVideo: null
    });
    const [selectedContentId, setSelectedContentId] = useState(null);

    // --- Funciones para nueva temporada + capítulo ---
    const handleOpenNewSeasonModal = (contenidoId) => {
        setSelectedContentId(contenidoId);
        setNewSeasonForm({
            numero: "",
            titulo: "",
            capituloTitulo: "",
            capituloNumero: "",
            capituloDuracion: "",
            capituloSinopsis: "",
            capituloVideo: null
        });
        setShowNewSeasonModal(true);
    };

    const handleNewSeasonChange = (e) => {
        const { name, value, files } = e.target;
        setNewSeasonForm(prev => ({ ...prev, [name]: files ? files[0] : value }));
    };

    const handleNewSeasonSubmit = async (e) => {
        e.preventDefault();
        if (!selectedContentId) return;

        try {
            // 1️⃣ Crear la temporada
            const seasonRes = await fetch("http://localhost:8000/api/seasons", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
                body: JSON.stringify({
                    contenido_id: selectedContentId,
                    numero: newSeasonForm.numero,
                    titulo: newSeasonForm.titulo
                })
            });
            const seasonData = await seasonRes.json();
            if (!seasonRes.ok) { alert("Error al crear temporada"); return; }

            const temporadaId = seasonData.data.id;

            // 2️⃣ Crear capítulo inicial
            const fd = new FormData();
            fd.append("titulo", newSeasonForm.capituloTitulo);
            fd.append("numero", newSeasonForm.capituloNumero);
            fd.append("duracion", newSeasonForm.capituloDuracion);
            fd.append("sinopsis", newSeasonForm.capituloSinopsis);
            fd.append("video", newSeasonForm.capituloVideo);
            fd.append("temporada_id", temporadaId);
            fd.append("contenido_id", selectedContentId);

            const capRes = await fetch("http://localhost:8000/api/episodes", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
                body: fd
            });

            if (!capRes.ok) { alert("Error al crear capítulo inicial"); return; }

            alert("Temporada y capítulo creados correctamente");
            setShowNewSeasonModal(false);
            fetchEpisodes();
        } catch (err) { console.error(err); alert("Error en la petición"); }
    };

    //ELIMINAR
    const handleDeleteEpisode = async (episodeId) => {
        if (!window.confirm("¿Seguro que quieres eliminar este capítulo?")) return;

        try {
            const res = await fetch(`http://localhost:8000/api/episodes/${episodeId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token.replace(/"/g, "")}` }
            });

            if (!res.ok) {
                const text = await res.text();
                alert("Error al eliminar capítulo: " + text);
                return;
            }

            alert("Capítulo eliminado correctamente");
            fetchEpisodes(); // refrescar lista
        } catch (err) {
            console.error(err);
            alert("Error al eliminar capítulo");
        }
    };

//ACTUALIZAR
const [showEditEpisodeModal, setShowEditEpisodeModal] = useState(false);
const [editingEpisode, setEditingEpisode] = useState(null);
const handleOpenEditEpisodeModal = (ep) => {
  setEditingEpisode(ep);
  setEpisodeForm({
    titulo: ep.titulo,
    numero: ep.numero,
    duracion: ep.duracion,
    sinopsis: ep.sinopsis,
    video: null, // opcional, no obliga a subir video
  });
  setShowEditEpisodeModal(true);
};


const handleEpisodeUpdate = async (e) => {
  e.preventDefault();
  if (!editingEpisode) return;

  try {
    const fd = new FormData();
    fd.append("titulo", episodeForm.titulo || "");
    fd.append("numero", episodeForm.numero || "");
    fd.append("duracion", episodeForm.duracion || "");
    fd.append("sinopsis", episodeForm.sinopsis || "");
    if (episodeForm.video) fd.append("video", episodeForm.video);
    fd.append("_method", "PUT"); // Importante para Laravel

    const res = await fetch(`http://localhost:8000/api/episodes/${editingEpisode.id}`, {
      method: "POST", // usamos POST con _method=PUT
      headers: {
        "Authorization": `Bearer ${token.replace(/"/g, "")}`,
        "Accept": "application/json"
      },
      body: fd
    });

    const data = await res.json(); // parseamos directo a JSON

    if (res.ok) {
      alert("Episodio actualizado correctamente");
      fetchEpisodes();
      setShowEditEpisodeModal(false);
      setEditingEpisode(null);
    } else {
      console.error("Error backend:", data);
      if (data.errors) {
        alert("Errores: " + Object.values(data.errors).flat().join(", "));
      } else {
        alert("Error al actualizar episodio. Revisa la consola.");
      }
    }
  } catch (err) {
    console.error(err);
    alert("Error en la petición");
  }
};


    return (
        <>

            <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-4">Series con episodios</h3>
            </div>
<div className="row">
  {Object.keys(grouped).length === 0 && <p>No hay series con episodios para mostrar</p>}

  {Object.keys(grouped).map((serieName) => {
    const temporadas = grouped[serieName];
    const temporadaKeys = Object.keys(temporadas).sort((a, b) => a - b);
    const selectedSeason = selectedSeasons[serieName] || temporadaKeys[0];
    const currentTemp = temporadas[selectedSeason];

    return (
      <div className="col-12 col-md-4 mb-4" key={serieName}>
        <Card>
          <Card.Body>
            <Card.Title>{serieName}</Card.Title>
            <Form.Group className="mb-2">
              <Form.Label>Selecciona Temporada</Form.Label>
              <Form.Select
  value={selectedSeasons[serieName] || ""}
  onChange={(e) =>
    setSelectedSeasons(prev => ({
      ...prev,
      [serieName]: e.target.value
    }))
  }
>
  <option value="" disabled>
    Selecciona una temporada
  </option>
  {temporadaKeys.map(tn => (
    <option key={tn} value={tn}>
      Temporada {tn} - {temporadas[tn].titulo}
    </option>
  ))}
</Form.Select>


            </Form.Group>
          </Card.Body>

          <ListGroup className="list-group-flush">
            {currentTemp.episodios.map(ep => (
              <ListGroup.Item key={ep.id} className="d-flex justify-content-around align-items-center px-4">
                <span>{ep.numero}. {ep.titulo} ({ep.duracion} min)</span>
                <Button variant="danger" size="sm" onClick={() => handleDeleteEpisode(ep.id)}>
                 <i className='bi bi-trash'></i>
                </Button>
               <Button variant="warning" size="sm" onClick={() => handleOpenEditEpisodeModal(ep)}>
  <i className='bi bi-pencil'></i>
</Button>
              </ListGroup.Item>
            ))}
            <ListGroup.Item className="d-flex justify-content-between">
              <Button variant="danger" onClick={() => handleOpenEpisodeModal(serieName)}>
                + capítulo
              </Button>
              <Button variant="dark" onClick={() => handleOpenNewSeasonModal(currentTemp.contenidoId)}>
                + Temporada
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  })}
</div>

<hr />
<h3 className="mb-4">Pendientes de episodios</h3>

<div className="row">
  {pendingSeries.length === 0 && <p>No hay series pendientes</p>}

  {pendingSeries.map(s => (
    <div className="col-12 col-md-4 mb-4" key={s.id}>
      <Card>
        <Card.Body>
          <Card.Title>{s.titulo}</Card.Title>
          <Card.Text>Sin episodios aún</Card.Text>
          <Button variant="danger" onClick={() => handleOpenNewSeasonModal(s.id)}>
            + Temporada
          </Button>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>


            {/* Modal de agregar capítulo */}
            <Modal show={showEpisodeModal} onHide={() => setShowEpisodeModal(false)} className='dark-modal text-white'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-white'>Agregar Capítulo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEpisodeSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                value={episodeForm.titulo}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Número</Form.Label>
                            <Form.Control
                                type="number"
                                name="numero"
                                value={episodeForm.numero}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Duración (min)</Form.Label>
                            <Form.Control
                                type="number"
                                name="duracion"
                                value={episodeForm.duracion}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Sinopsis</Form.Label>
                            <Form.Control
                                type="text"
                                name="sinopsis"
                                value={episodeForm.sinopsis}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Video</Form.Label>
                            <Form.Control
                                type="file"
                                name="video"
                                accept="video/*"
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="danger" type="submit">Agregar Capítulo</Button>
                    </Form>
                </Modal.Body>
            </Modal>


            {/* Modal para nueva temporada + capítulo */}
            <Modal show={showNewSeasonModal} onHide={() => setShowNewSeasonModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-white'>Agregar Nueva Temporada + Capítulo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleNewSeasonSubmit}>
                        <h5 className='text-white'>Temporada</h5>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Número</Form.Label>
                            <Form.Control type="number" name="numero" value={newSeasonForm.numero} onChange={handleNewSeasonChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Título</Form.Label>
                            <Form.Control type="text" name="titulo" value={newSeasonForm.titulo} onChange={handleNewSeasonChange} required />
                        </Form.Group>

                        <hr className='text-white' />
                        <h5 className='text-white'>Primer Capítulo</h5>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Título</Form.Label>
                            <Form.Control type="text" name="capituloTitulo" value={newSeasonForm.capituloTitulo} onChange={handleNewSeasonChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Número</Form.Label>
                            <Form.Control type="number" name="capituloNumero" value={newSeasonForm.capituloNumero} onChange={handleNewSeasonChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Duración (min)</Form.Label>
                            <Form.Control type="number" name="capituloDuracion" value={newSeasonForm.capituloDuracion} onChange={handleNewSeasonChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Sinopsis</Form.Label>
                            <Form.Control type="text" name="capituloSinopsis" value={newSeasonForm.capituloSinopsis} onChange={handleNewSeasonChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Video</Form.Label>
                            <Form.Control type="file" name="capituloVideo" accept="video/*" onChange={handleNewSeasonChange} required />
                        </Form.Group>

                        <Button variant="danger" type="submit">Crear Temporada y Capítulo</Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={showEditEpisodeModal} onHide={() => { setShowEditEpisodeModal(false); setEditingEpisode(null); }}>
  <Modal.Header closeButton>
    <Modal.Title className='text-white'>Editar Capítulo</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleEpisodeUpdate}>
      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Título</Form.Label>
        <Form.Control className='text-white' type="text" name="titulo" value={episodeForm.titulo} onChange={handleEpisodeChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Número</Form.Label>
        <Form.Control type="number" name="numero" value={episodeForm.numero} onChange={handleEpisodeChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Duración (min)</Form.Label>
        <Form.Control type="number" name="duracion" value={episodeForm.duracion} onChange={handleEpisodeChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Sinopsis</Form.Label>
        <Form.Control type="text" name="sinopsis" value={episodeForm.sinopsis} onChange={handleEpisodeChange} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Video (opcional)</Form.Label>
        <Form.Control type="file" name="video" accept="video/*" onChange={handleEpisodeChange} />
      </Form.Group>

      <Button variant="warning" type="submit">Actualizar Capítulo</Button>
    </Form>
  </Modal.Body>
</Modal>

        </>
    )
}
