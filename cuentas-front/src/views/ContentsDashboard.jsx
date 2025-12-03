import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";

export default function ContentsDashboard() {

    const token = localStorage.getItem("token");
    const [contents, setContents] = useState([]);
    const [genres, setGenres] = useState([]);
    const [classifications, setClassifications] = useState([]);

    // Formulario
    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        tipo: "",
        fechaEstreno: "",
        duracion: "",
        genero_id: "",
        clasificacion_id: "",
        portada: null,
        video: null
    });

    // Cargar contenidos, géneros y clasificaciones
    useEffect(() => {
        fetchContents();
        fetchGenres();
        fetchClassifications();
    }, []);
    const fetchContents = async () => {
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
    const fetchGenres = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/genres", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            if (res.ok) setGenres(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchClassifications = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/classifications", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            if (res.ok) setClassifications(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    // Manejar cambios del formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // construir FormData (solo agregar campos si tienen valor; files también)
    const fd = new FormData();
    if (formData.titulo) fd.append("titulo", formData.titulo);
    if (formData.descripcion) fd.append("descripcion", formData.descripcion);
    if (formData.tipo) fd.append("tipo", formData.tipo);
    if (formData.fechaEstreno) fd.append("fechaEstreno", formData.fechaEstreno);
    if (formData.duracion) fd.append("duracion", formData.duracion);
    if (formData.genero_id) fd.append("genero_id", formData.genero_id);
    if (formData.clasificacion_id) fd.append("clasificacion_id", formData.clasificacion_id);
    if (formData.portada) fd.append("portada", formData.portada);
    if (formData.video) fd.append("video", formData.video);

    console.log("Enviando FormData:");
    for (const pair of fd.entries()) {
      console.log(pair[0], pair[1]);
    }

    const res = await fetch("http://localhost:8000/api/content", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: fd
    });

    // intentar parsear JSON; si falla, obtener text
    let responseBody;
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      responseBody = await res.json();
    } else {
      responseBody = await res.text();
    }
    console.log("Response body:", responseBody);

    if (res.ok) {
      alert("Contenido agregado correctamente");
      if (responseBody && responseBody.data) {
        setContents(prev => [...prev, responseBody.data]);
      }
      setFormData({
        titulo: "",
        descripcion: "",
        tipo: "",
        fechaEstreno: "",
        duracion: "",
        genero_id: "",
        clasificacion_id: "",
        portada: null,
        video: null
      });
      // limpiar inputs file
      const p = document.getElementById("portadaInput");
      const v = document.getElementById("videoInput");
      if (p) p.value = "";
      if (v) v.value = "";
    } else {
      // manejo de errores comunes
      if (res.status === 422) {
        // Validación Laravel
        console.error("Validation error:", responseBody);
        alert("Error de validación. Revisa la consola.");
      } else if (res.status === 413) {
        alert("Archivo demasiado grande. Verifica post_max_size / upload_max_filesize en php.ini.");
      } else {
        alert("Error al crear: ver consola para más detalles.");
      }
    }

  } catch (err) {
    console.error("Error en fetch:", err);
    alert("Error en la petición. Revisa la consola.");
  }
};


const deleteSub = async (id) => {
    const confirmDelete = window.confirm("¿Seguro que deseas eliminar este contenido?");
    if (!confirmDelete) return;

    try {
        const res = await fetch(`http://localhost:8000/api/content/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            alert("Contenido eliminado");
            // actualizar lista
            setContents(contents.filter(c => c.id !== id));
        } else {
            alert("Error al eliminar");
        }

    } catch (error) {
        console.error(error);
        alert("Error en la petición");
    }
};

// EDITAR CONTENIDO ADAPTADO
const [currentContent, setCurrentContent] = useState(null);
const [editing, setEditing] = useState(false);

const handleEditClick = (content) => {
  setCurrentContent(content);
  setEditing(true);
  setTimeout(() => {
    window.location.hash = '#seccion-editar-contenido';
  }, 0);
};

const handleUpdateContent = async (e) => {
  e.preventDefault();
  if (!currentContent) return;

  try {
    const fd = new FormData();
    fd.append("_method", "PUT"); // importante para Laravel
    if (currentContent.titulo) fd.append("titulo", currentContent.titulo);
    if (currentContent.descripcion) fd.append("descripcion", currentContent.descripcion);
    if (currentContent.tipo) fd.append("tipo", currentContent.tipo);
    if (currentContent.fechaEstreno) fd.append("fechaEstreno", currentContent.fechaEstreno);
    if (currentContent.duracion) fd.append("duracion", currentContent.duracion);
    if (currentContent.genero_id) fd.append("genero_id", currentContent.genero_id);
    if (currentContent.clasificacion_id) fd.append("clasificacion_id", currentContent.clasificacion_id);
    if (currentContent.portada instanceof File) fd.append("portada", currentContent.portada);
    if (currentContent.video instanceof File) fd.append("video", currentContent.video);

    console.log("Enviando FormData para actualizar:");
    for (const pair of fd.entries()) {
      console.log(pair[0], pair[1]);
    }

    const res = await fetch(`http://localhost:8000/api/content/${currentContent.id}`, {
      method: "POST", // usamos POST + _method=PUT
      headers: {
        Authorization: `Bearer ${token}` // no Content-Type
      },
      body: fd
    });

    let responseBody;
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      responseBody = await res.json();
    } else {
      responseBody = await res.text();
    }
    console.log("Response body:", responseBody);

    if (res.ok) {
      alert("Contenido actualizado correctamente");
      if (responseBody && responseBody.data) {
        setContents(contents.map(c => c.id === currentContent.id ? responseBody.data : c));
      }
      setEditing(false);
      setCurrentContent(null);
    } else {
      if (res.status === 422) {
        console.error("Validation error:", responseBody);
        alert("Error de validación. Revisa la consola.");
      } else {
        alert("Error al actualizar: ver consola para más detalles.");
      }
    }

  } catch (err) {
    console.error("Error en fetch:", err);
    alert("Error en la petición. Revisa la consola.");
  }
};



    return (
        <>

            <h3 className="mt-4">Agregar Contenido</h3>

            <Form onSubmit={handleSubmit} className="mt-3">

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <Form.Label>Titulo del Contenido</Form.Label>
                        <Form.Control
                            type="text"
                            name="titulo"
                            value={formData.titulo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            type="text"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-3 mb-3">
                        <Form.Label>Género</Form.Label>
                        <Form.Select
                            name="genero_id"
                            value={formData.genero_id}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione un género</option>
                            {genres.map(g => (
                                <option key={g.id} value={g.id}>{g.nombre}</option>
                            ))}
                        </Form.Select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Form.Label>Clasificación</Form.Label>
                        <Form.Select
                            name="clasificacion_id"
                            value={formData.clasificacion_id}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione clasificación</option>
                            {classifications.map(c => (
                                <option key={c.id} value={c.id}>{c.nombre}</option>
                            ))}
                        </Form.Select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <Form.Label>Tipo</Form.Label>
                         <Form.Select
                            name="tipo"
                            value={formData.tipo}
                            onChange={handleChange}
                            required >
                            <option value="">Seleccione clasificación</option>
                                <option value="pelicula">Pelicula</option>
                                <option value="serie">Serie</option>
                                <option value="documental">Documental</option>
                                <option value="anime">Anime</option>
                        
                        </Form.Select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <Form.Label>Fecha de estreno</Form.Label>
                        <Form.Control
                            type="date"
                            name="fechaEstreno"
                            value={formData.fechaEstreno}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Form.Label>Duración (min)</Form.Label>
                        <Form.Control
                            type="number"
                            name="duracion"
                            value={formData.duracion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                                        <div className="col-md-4 mb-3">
                        <Form.Label>Portada</Form.Label>

                 <Form.Control
    type="file"
    id="portadaInput"
    name="portada"
    accept="image/*"
    onChange={(e) =>
        setFormData({ ...formData, portada: e.target.files[0] })
    }
/>
</div>
                    <div className="col-md-4 mb-3">
                        <Form.Label>Video</Form.Label>

<Form.Control
    type="file"
    id="videoInput"
    name="video"
    accept="video/*"
    onChange={(e) =>
        setFormData({ ...formData, video: e.target.files[0] })
    }
/>
</div>

                </div>

                <Button variant="danger" type="submit">
                    Agregar contenido
                </Button>

            </Form>

            <hr />

            <h3 className="mb-4">Contenidos</h3>

            <Row xs={1} md={3} className="g-4">
                {contents.map((c) => (
                    <Col key={c.id}>
                        <Card data-bs-theme="dark">

                            <Card.Img
                                variant="top"
                                src={
                                    c.portada
                                        ? `http://localhost:8000/portadas/${c.portada}`
                                        : "https://via.placeholder.com/400x250?text=Sin+Portada"
                                }
                                style={{ height: "250px", objectFit: "cover" }}
                            />

                            <Card.Body>
                                <Card.Title>{c.titulo}</Card.Title>
                                <Card.Text>
                                    {c.descripcion?.substring(0, 80)}...
                                </Card.Text>
                                <Card.Text>
                                    Tipo: {c.tipo}
                                </Card.Text>
                               <div className="d-flex justify-content-center gap-2 px-4">
    <button className="btn btn-danger" onClick={() => deleteSub(c.id)} type="button">
        <i className="bi bi-trash"></i>
    </button>
    <button type="button" className="btn btn-warning" onClick={() => {
        handleEditClick(c) 
    }}>
        <i className="bi bi-pencil"></i>
    </button>           
</div>
</Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>

            <hr />

<section id="seccion-editar-contenido">
  {editing && currentContent && (
    <div className="card mt-4" data-bs-theme="dark">
      <div className="card-header text-white fw-bold">
        Editar Contenido
      </div>
      <div className="card-body">
        <form onSubmit={handleUpdateContent}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Titulo</label>
              <input
                type="text"
                className="form-control"
                value={currentContent.titulo}
                onChange={e => setCurrentContent({...currentContent, titulo: e.target.value})}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Descripción</label>
              <input
                type="text"
                className="form-control"
                value={currentContent.descripcion}
                onChange={e => setCurrentContent({...currentContent, descripcion: e.target.value})}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Tipo</label>
              <select
                className="form-select"
                value={currentContent.tipo}
                onChange={e => setCurrentContent({...currentContent, tipo: e.target.value})}
              >
                <option value="pelicula">Pelicula</option>
                <option value="serie">Serie</option>
                <option value="documental">Documental</option>
                <option value="anime">Anime</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Género</label>
              <select
                className="form-select"
                value={currentContent.genero_id}
                onChange={e => setCurrentContent({...currentContent, genero_id: e.target.value})}
              >
                <option value="">Seleccione un género</option>
                {genres.map(g => (
                  <option key={g.id} value={g.id}>{g.nombre}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Clasificación</label>
              <select
                className="form-select"
                value={currentContent.clasificacion_id}
                onChange={e => setCurrentContent({...currentContent, clasificacion_id: e.target.value})}
              >
                <option value="">Seleccione clasificación</option>
                {classifications.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Fecha de estreno</label>
              <input
                type="date"
                className="form-control"
                value={currentContent.fechaEstreno}
                onChange={e => setCurrentContent({...currentContent, fechaEstreno: e.target.value})}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Duración (min)</label>
              <input
                type="number"
                className="form-control"
                value={currentContent.duracion}
                onChange={e => setCurrentContent({...currentContent, duracion: e.target.value})}
              />
            </div>
          </div>

       <div className="row mb-3">
    <div className="col-md-6">
        <label className="form-label">Portada</label>
        <input
            type="file"
            className="form-control"
            // 💡 Cambia la lógica de onChange aquí:
            onChange={e => setCurrentContent({
                ...currentContent, 
                portada: e.target.files[0] || null // Si cancela, pon null
            })}
        />
    </div>
    <div className="col-md-6">
        <label className="form-label">Video</label>
        <input
            type="file"
            className="form-control"
            // 💡 Cambia la lógica de onChange aquí:
            onChange={e => setCurrentContent({
                ...currentContent, 
                video: e.target.files[0] || null // Si cancela, pon null
            })}
        />
    </div>
</div>

          <button type="submit" className="btn btn-danger">Actualizar contenido</button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => { setEditing(false); setCurrentContent(null); }}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  )}
</section>

        </>
    );
}
