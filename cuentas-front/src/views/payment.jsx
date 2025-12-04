import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Payment() {

  const navigate = useNavigate();

  const [propietario, setPropietario] = useState("");
  const [numero, setNumero] = useState("");
  const [cvv, setCvv] = useState("");
  const [fecha, setFecha] = useState("");

  const submitPayment = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:8000/api/datospagos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          propietariotarjeta: propietario,
          numerotarjeta: numero,
          cvv: cvv,
          fechavencimiento: fecha
        })
      });

      const data = await res.json();
      console.log("RESPUESTA PAGO:", data);

      if (res.ok) {
        alert("Método de pago registrado correctamente.");
        navigate("/browse");
      } else {
        alert("Error al registrar el método de pago.");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#111",      // MISMO COLOR DEL MODAL
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >

      <div className="payment-card">

        <h1 className="modal-title" style={{ marginBottom: "10px" }}>
          Método de Pago
        </h1>

        <p className="modal-subtitle">
          Ingresa los datos de tu tarjeta para activar tu membresía.
        </p>

        <form onSubmit={submitPayment} className="modal-form">

          {/* PROPIETARIO */}
          <input
            type="text"
            className="form-control modal-input"
            placeholder="Nombre del propietario"
            required
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />

          {/* TARJETA */}
          <input
            type="text"
            maxLength="16"
            className="form-control modal-input"
            placeholder="Número de tarjeta"
            required
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />

          {/* CVV */}
          <input
            type="text"
            maxLength="3"
            className="form-control modal-input"
            placeholder="CVV"
            required
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />

          {/* FECHA */}
          <input
            type="date"
            className="form-control modal-input"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          {/* BOTÓN */}
          <button className="red-btn modal-btn fw-bold w-100" type="submit">
            Guardar método de pago
          </button>

        </form>
      </div>
    </div>
  );
}
