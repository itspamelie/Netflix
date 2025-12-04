import '../css/login.css'
import { Link } from "react-router-dom";

export default function Modal({ show, onClose }) {
    if (!show) return null;

    return (
        <div className="netflix-modal-overlay">
            <div className="netflix-modal">

                <h2 className="modal-title">Crear cuenta</h2>

                <p className="modal-subtitle">
                    Ingresa tus datos para comenzar tu membresía.
                </p>

                <form className="modal-form">

                    <input
                        type="text"
                        className="form-control modal-input"
                        placeholder="Nombre completo"
                        name="name"
                    />

                    <input
                        type="email"
                        className="form-control modal-input"
                        placeholder="Correo electrónico"
                        name="email"
                    />

                    <input
                        type="tel"
                        className="form-control modal-input"
                        placeholder="Número de teléfono"
                        name="phone"
                    />

                    <input
                        type="password"
                        className="form-control modal-input"
                        placeholder="Contraseña"
                        name="password"
                    />

                    <select
                        className="form-control modal-input"
                        name="suscripcion_id"
                    >
                        <option value="">Selecciona tu plan</option>
                        <option value="1">Básico — $149.99 / mes (1 pantalla)</option>
                        <option value="2">Estándar — $199.99 / mes (2 pantallas)</option>
                        <option value="3">Premium — $299.99 / mes (4 pantallas)</option>
                    </select>

                    {/* BOTÓN QUE REDIRIGE A PAYMENT */}
                    <Link
                        to="/payment"
                        className="red-btn modal-btn fw-bold w-100"
                        style={{ textDecoration: "none", display: "block", textAlign: "center" }}
                    >
                        Registrarse
                    </Link>

                </form>

                <button
                    className="modal-close-btn"
                    onClick={onClose}
                >
                    ×
                </button>

            </div>
        </div>
    );
}
