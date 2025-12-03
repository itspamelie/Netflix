import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

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
                const seriesOnly = data.data.filter(ep => ep.contenido?.tipo === "serie");
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
                const series = data.data.filter(c => c.tipo === "serie");
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

    // Abrir modal y setear IDs
    const handleOpenEpisodeModal = (season) => {
        if (!season.temporadaId || !season.contenidoId) {
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

        try {
            const fd = new FormData();
            fd.append("titulo", episodeForm.titulo);
            fd.append("numero", episodeForm.numero);
            fd.append("duracion", episodeForm.duracion);
            fd.append("sinopsis", episodeForm.sinopsis);
            fd.append("video", episodeForm.video);
            fd.append("temporada_id", currentSeason.temporadaId);
            fd.append("contenido_id", currentSeason.contenidoId);

            const res = await fetch("http://localhost:8000/api/episodes", {
                method: "POST",
                headers: {         
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json"
                },
                body: fd
            });

            const ct = res.headers.get("content-type") || "";
            let data = ct.includes("application/json") ? await res.json() : await res.text();

            console.log("Response:", data);

            if (res.ok) {
                alert("Capítulo agregado correctamente");
                setShowEpisodeModal(false);
                fetchEpisodes(); // refrescar episodios
            } else {
                console.error("Error:", data);
                alert("Error al agregar capítulo");
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

            {Object.keys(grouped).length === 0 && <p>No hay series con episodios para mostrar</p>}

            {Object.keys(grouped).map(serieName =>
                Object.keys(grouped[serieName]).map(tempNum => {
                    const temp = grouped[serieName][tempNum];
                    return (
                        <Card className="mb-4" key={`${serieName}-${tempNum}`} style={{ width: '22rem' }}>
                            <Card.Body>
                                <Card.Title>{serieName}</Card.Title>
                                {temp.titulo && (
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Temporada {tempNum} - {temp.titulo}
                                    </Card.Subtitle>
                                )}
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                {temp.episodios.map(ep => (
                                    <ListGroup.Item key={ep.id}>
                                        {ep.numero}. {ep.titulo} ({ep.duracion} min)
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>
                                    <Button variant="danger" onClick={() => handleOpenEpisodeModal(temp)}>
                                        Agregar capítulo
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    )
                })
            )}

            <hr />
            <h3 className="mb-4">Pendientes de episodios</h3>
            {pendingSeries.length === 0 && <p>No hay series pendientes</p>}

            {pendingSeries.map(s => (
                <Card className="mb-3" key={s.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{s.titulo}</Card.Title>
                        <Card.Text>Sin episodios aún</Card.Text>
                        <Card.Text>
                            <button className="btn btn-danger" type="button">
                                Agregar Nueva Temporada
                            </button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}

            {/* Modal de agregar capítulo */}
            <Modal show={showEpisodeModal} onHide={() => setShowEpisodeModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Capítulo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEpisodeSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                value={episodeForm.titulo}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Número</Form.Label>
                            <Form.Control
                                type="number"
                                name="numero"
                                value={episodeForm.numero}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Duración (min)</Form.Label>
                            <Form.Control
                                type="number"
                                name="duracion"
                                value={episodeForm.duracion}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Sinopsis</Form.Label>
                            <Form.Control
                                type="text"
                                name="sinopsis"
                                value={episodeForm.sinopsis}
                                onChange={handleEpisodeChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Video</Form.Label>
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
        </>
    )
}
