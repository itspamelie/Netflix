import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ show, onClose }) {
  if (!show) return null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [suscripcionId, setSuscripcionId] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Crear usuario
      const registerRes = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" // importante para evitar recibir HTML
        },
        body: JSON.stringify({ 
          name, 
          email, 
          password, 
          phone, 
          suscripcion_id: suscripcionId,
          role: 1,
          img: "default.jpg",
          estatus_suscripcion: true
        })
      });

      const registerData = await registerRes.json();
      if (!registerRes.ok) {
        console.log("Error backend (registro):", registerData);
        throw new Error("Error al crear usuario");
      }

      // 2️⃣ Login automático
      const loginRes = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const loginData = await loginRes.json();
      if (!loginRes.ok) {
        console.log("Error backend (login):", loginData);
        throw new Error("Error iniciando sesión");
      }

      localStorage.setItem("token", loginData.token);
      navigate("/payment");

    } catch (error) {
      alert("Hubo un problema al registrarte o iniciar sesión.");
      console.log(error);
    }
  };
  return (
    <div className="netflix-modal-overlay">
      <div className="netflix-modal">

        <h2 className="modal-title">Crear cuenta</h2>
        <p className="modal-subtitle">Ingresa tus datos para comenzar tu membresía.</p>

        <form className="modal-form" onSubmit={handleRegister}>

          <input
            type="text"
            className="form-control modal-input"
            placeholder="Nombre completo"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="form-control modal-input"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control modal-input"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            className="form-control modal-input"
            placeholder="Teléfono"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <select
            className="form-control modal-input"
            onChange={(e) => setSuscripcionId(e.target.value)}
            required
          >
            <option value="">Selecciona tu suscripción</option>
            <option value="1">Básica</option>
            <option value="2">Estándar</option>
            <option value="3">Premium</option>
          </select>

          <button type="submit" className="red-btn modal-btn fw-bold w-100">
            Registrarse
          </button>
        </form>

        <button className="modal-close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}
