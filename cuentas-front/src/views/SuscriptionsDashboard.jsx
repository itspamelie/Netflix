import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function SuscriptionsDashboard() {

    const [subs, setSubs] = useState([])
    // Form fields
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        cantidad_perfiles: "",
        costo_mensual: "",
        fecha_pagos: ""
    })
    // Obtener token
    const token = localStorage.getItem("token")
    // Obtener suscripciones
    useEffect(() => {
     

        const fetchSubs = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/subscriptions", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })

                const data = await res.json()
                console.log("SUBS:", data)

                if (res.ok) {
                    setSubs(data.data)
                }

            } catch (err) {
                console.log(err)
            }
        }

        fetchSubs()
    }, [])
    // Manejar cambio de inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Agregar nueva suscripción
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:8000/api/subscriptions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()
            console.log("CREAR:", data)

            if (res.ok) {
                alert("Suscripción creada correctamente")

                // Agregar en la tabla sin recargar
                setSubs([...subs, data.data])

                // Limpiar formulario
                setFormData({
                    nombre: "",
                    descripcion: "",
                    cantidad_perfiles: "",
                    costo_mensual: "",
                    fecha_pagos: ""
                })
            } else {
                alert("Error: " + JSON.stringify(data))
            }

        } catch (error) {
            console.log(error)
        }
    }
    // Eliminar suscripción
const deleteSub = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar esta suscripción?")) return;

    try {
        const res = await fetch(`http://localhost:8000/api/subscriptions/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json"
            }
        });

        const data = await res.json();
        console.log("ELIMINAR:", data);

        if (res.ok) {
            // Quitar de la tabla sin recargar
            setSubs(subs.filter(s => s.id !== id));
        } else {
            alert("Error al eliminar: " + JSON.stringify(data));
        }

    } catch (error) {
        console.log(error);
    }
}

//EDITAR


const [currentPlan, setCurrentPlan] = useState(null)
const [editing, setEditing] = useState(false)   

const handleEditClick = (planData) => {
  //establece el plan y activa la edición
  setCurrentPlan(planData);
  setEditing(true);
  setTimeout(() => {
    window.location.hash = '#seccion-editar-suscripcion';
      }, 0);
};

const handleUpdatePlan = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(`http://localhost:8000/api/subscriptions/${currentPlan.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(currentPlan)
        });

        const data = await res.json();
        console.log("UPDATE:", data);

        if (res.ok) {

            // Actualizar en la tabla sin recargar
            setSubs(subs.map(s => 
                s.id === currentPlan.id ? data.data : s
            ));

            alert("Suscripción actualizada correctamente");

            setEditing(false);
            setCurrentPlan(null);

        } else {
            alert("Error al actualizar: " + JSON.stringify(data));
        }
    } catch (err) {
        console.log(err);
    }
};



    return (
        <>
            <h3 className="mb-4">Suscripciones</h3>

            {/* Tabla */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Perfiles</th>
                        <th>Costo Mensual</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {subs.map((s, i) => (
                        <tr key={s.id}>
                            <td>{i + 1}</td>
                            <td>{s.nombre}</td>
                            <td>{s.descripcion}</td>
                            <td>{s.cantidad_perfiles}</td>
                            <td>${s.costo_mensual}</td>
                            <td>{s.fecha_pagos}</td>
                            <td className="d-flex justify-content-around"> <button className="btn btn-danger"  onClick={() => deleteSub(s.id)} type="button"><i className="bi bi-trash"></i></button>
<button type="button" className="btn btn-warning"     onClick={() => {
    handleEditClick(s) 
  }} >
<i className="bi bi-pencil"></i>
</button>
</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <hr />

            {/* FORMULARIO PARA AGREGAR PLANES */}
           <h3 className="mt-4">Agregar nueva suscripción</h3>

<Form onSubmit={handleSubmit} className="mt-3">

    <div className="row">
        <div className="col-md-6 mb-3">
            <Form.Label>Nombre del plan</Form.Label>
            <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
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
    </div>

    <div className="row">
        <div className="col-md-4 mb-3">
            <Form.Label>Cantidad de perfiles</Form.Label>
            <Form.Control
                type="number"
                name="cantidad_perfiles"
                value={formData.cantidad_perfiles}
                onChange={handleChange}
                required
            />
        </div>

        <div className="col-md-4 mb-3">
            <Form.Label>Costo mensual</Form.Label>
            <Form.Control
                type="number"
                step="0.01"
                name="costo_mensual"
                value={formData.costo_mensual}
                onChange={handleChange}
                required
            />
        </div>


 
        <div className="col-md-4 mb-3">
            <Form.Label>Fecha de pago</Form.Label>
            <Form.Control
                type="date"
                name="fecha_pagos"
                value={formData.fecha_pagos}
                onChange={handleChange}
                required
            />
        </div>
        </div>

    <Button variant="danger" type="submit">
        Agregar suscripción
    </Button>

</Form>

<section id="seccion-editar-suscripcion">
{editing && currentPlan && (
  <div className="card mt-4" data-bs-theme="dark">
    <div className="card-header text-white fw-bold">
      Editar Suscripción
    </div>

    <div className="card-body" >
      <form onSubmit={handleUpdatePlan}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={currentPlan.nombre}
              onChange={(e) =>
                setCurrentPlan({ ...currentPlan, nombre: e.target.value })
              }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Cantidad de Perfiles</label>
            <input
              type="number"
              className="form-control"
              value={currentPlan.cantidad_perfiles}
              onChange={(e) =>
                setCurrentPlan({
                  ...currentPlan,
                  cantidad_perfiles: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Costo Mensual</label>
            <input
              type="number"
              className="form-control"
              value={currentPlan.costo_mensual}
              onChange={(e) =>
                setCurrentPlan({
                  ...currentPlan,
                  costo_mensual: e.target.value,
                })
              }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Fecha de Pago</label>
            <input
              type="date"
              className="form-control"
              value={currentPlan.fecha_pagos}
              onChange={(e) =>
                setCurrentPlan({
                  ...currentPlan,
                  fecha_pagos: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            rows="3"
            value={currentPlan.descripcion}
            onChange={(e) =>
              setCurrentPlan({ ...currentPlan, descripcion: e.target.value })
            }
          ></textarea>
        </div>

        <button className="btn btn-danger">Actualizar</button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => {
            setEditing(false)
            setCurrentPlan(null)
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  </div>
)}
</section>

        </>
    )
}
