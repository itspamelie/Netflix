import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Payment() {
  const navigate = useNavigate();
  const [propietario, setPropietario] = useState("");
  const [numero, setNumero] = useState("");
  const [cvv, setCvv] = useState("");
  const [fecha, setFecha] = useState("");

  // 1️⃣ Redirigir si no hay token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  const submitPayment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      // 2️⃣ Guardar datos de pago
      const res = await fetch("http://127.0.0.1:8000/api/payment_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          propietariotarjeta: propietario,
          numerotarjeta: numero,
          cvv,
          fechavencimiento: fecha,
        }),
      });

      const pagoData = await res.json();
      if (!res.ok) {
        console.log("Error guardando pago:", pagoData);
        alert("Error al registrar el método de pago.");
        return;
      }

      // 3️⃣ Crear perfil por defecto para el usuario logueado
      const perfilRes = await fetch("http://127.0.0.1:8000/api/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: "Perfil 1",
          user_id: pagoData.data.user_id, // del pago guardado
          img_id: 1,
          tipo_cuenta: "Adulto",
        }),
      });

      const perfilData = await perfilRes.json();
      if (!perfilRes.ok) {
        console.log("Error creando perfil:", perfilData);
        alert("Error al crear perfil por defecto.");
        return;
      }

      // 4️⃣ Redirigir a /index
      alert("Método de pago registrado y perfil creado correctamente.");
      navigate("/index");
    } catch (error) {
      console.log(error);
      alert("Hubo un problema al registrar tu pago o perfil.");
    }
  };

  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
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
          <input
            type="text"
            className="form-control modal-input"
            placeholder="Nombre del propietario"
            required
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
          <input
            type="text"
            maxLength="16"
            className="form-control modal-input"
            placeholder="Número de tarjeta"
            required
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <input
            type="text"
            maxLength="3"
            className="form-control modal-input"
            placeholder="CVV"
            required
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          <input
            type="date"
            className="form-control modal-input"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <button className="red-btn modal-btn fw-bold w-100" type="submit">
            Guardar método de pago
          </button>
        </form>
      </div>
    </div>
  );
}
