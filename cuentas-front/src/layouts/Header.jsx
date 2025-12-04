import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../layouts/Modal";



export default function Header() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <header className="position-relative header-home">
                <nav className="navbar navbar-expand">
                    <div className="container">
                        <img src="/img/logo.png" />
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <Link
                                to="/login"
                                className="red-btn fw-semibold"
                                style={{ textDecoration: "none" }}
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </nav>

                <section className="hero container h-75 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="hero-title text-white text-center">Películas, series y más, sin límites</h1>
                    <p className="hero-first-p text-white text-center">Mira desde donde quieras. Cancela cuando quieras.</p>
                    <p className="hero-second-p text-white text-center">¿Listo para mirar? Ingresa tu correo para crear o reiniciar tu membresía.</p>

                    <form className="form-home row g-3 d-flex align-items-center justify-content-center w-100 w-lg-75">
                        

                        <div className="col-auto">
                            <button
                                type="button"
                                className="get-started-btn red-btn fw-bold"
                                onClick={() => setShowModal(true)}
                            >
                                Comenzar
                            </button>
                        </div>
                    </form>
                </section>
            </header>

            {/* Modal */}
            <Modal show={showModal} onClose={() => setShowModal(false)} />
        </>
    );
}

