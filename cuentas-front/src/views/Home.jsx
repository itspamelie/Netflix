import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'
import Header from '../layouts/Header';
import Footer from '../layouts/footer';


function Home() {

  return (
<>
<div className="body-home">
 <Header></Header>

        <section className="purple-section position-absolute d-flex justify-content-center">
            <div className="container-md d-row d-md-flex justify-content-center">
                <div className="d-flex align-items-center justify-content-end px-4 col-12 col-md-5">
                    <img className="img-fluid" src="./img/popcorn-logo.png" alt="palomitas"/>
                </div>
                <div className="d-flex flex-column justify-content-center col-12 col-md-7">
                    <p>El Netflix que amas por solo £4.99</p>
                    <p>Obtén el plan Estándar con anuncios.</p>
                    <a href="#">Saber más</a>
                </div>
            </div>
        </section>

        <section className="enjoy-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6">
                    <h2 className="section-title text-center text-lg-start">Disfruta en tu TV</h2>
                    <p className="section-paragraph text-center text-lg-start">
                        Mira en Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, reproductores Blu-Ray y más.
                        Disfruta de tus series y películas favoritas en la pantalla grande.
                    </p>
                </div>
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/tv.png" alt="tv"/>
                </div>
            </div>
        </section>

        <section className="watch-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/mobile-img.png" alt="movil"/>
                </div>
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6 order-first order-lg-last">
                    <h2 className="section-title text-center text-lg-start">Mira en todas partes</h2>
                    <p className="section-paragraph text-center text-lg-start">
                        Reproduce películas y series ilimitadas en tu teléfono, tablet, laptop y TV.  
                        Cambia de dispositivo sin perder tu progreso en la reproducción.
                    </p>
                </div>
            </div>
        </section>

        <section className="children-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6">
                    <h2 className="section-title text-center text-lg-start">Crea perfiles para niños</h2>
                    <p className="section-paragraph text-center text-lg-start">
                        Envía a los niños a aventuras con sus personajes favoritos en un espacio diseñado solo para ellos.
                        Con controles parentales y contenido apropiado para su edad, seguro y divertido.
                    </p>
                </div>
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/children-img.png" alt="niños"/>
                </div>
            </div>
        </section>

        <section className="download-section py-5 bg-black text-light">
            <div className="container d-flex row m-auto">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="./img/download-img.jpg" alt="descargar"/>
                </div>
                <div className="d-flex flex-column justify-content-center col-12 col-lg-6 order-first order-lg-last">
                    <h2 className="section-title text-center text-lg-start">Descarga tus programas para verlos sin conexión</h2>
                    <p className="section-paragraph text-center text-lg-start">
                        Disponible solo en planes sin anuncios.  
                        Guarda tus series y películas favoritas para verlas cuando quieras, incluso sin internet.
                    </p>
                </div>
            </div>
        </section>

        <section className="faq-section py-5 bg-black text-light">
            <div className="container">
                <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
                <div className="accordion" id="accordionExample">

                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                ¿Qué es Netflix?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Netflix es un servicio de streaming que ofrece una gran variedad de series, películas,
                                documentales y contenido original. Puedes verlo en cualquier dispositivo con conexión
                                a internet y elegir entre diferentes planes según tus necesidades.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                ¿Cuánto cuesta Netflix?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                El precio de Netflix depende del plan que elijas.  
                                Existen planes con anuncios y sin anuncios, con diferentes opciones de calidad de video 
                                y cantidad de dispositivos que pueden conectarse al mismo tiempo.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                ¿Dónde puedo mirar?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Puedes ver Netflix en tu teléfono, tablet, laptop, smart TV, consola de videojuegos y
                                más dispositivos compatibles.  
                                Además, puedes descargar contenido en dispositivos móviles para verlo sin conexión.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                ¿Cómo cancelo?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Puedes cancelar tu membresía en cualquier momento desde la configuración de tu cuenta.
                                No hay contratos, ni compromisos, ni cargos por cancelación.  
                                Una vez canceles, podrás seguir usando el servicio hasta que termine tu periodo de pago.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                ¿Qué puedo ver en Netflix?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Puedes ver miles de títulos: películas, series, documentales, animes y contenido original
                                exclusivo como Stranger Things, The Witcher, Elite, One Piece, El Juego del Calamar,
                                y mucho más. El catálogo se actualiza constantemente.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                ¿Netflix es bueno para niños?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Sí. Netflix cuenta con perfiles infantiles especialmente diseñados para niños, 
                                con controles parentales, contenido seguro y recomendaciones apropiadas para su edad.
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-center mt-5">
                    ¿Listo para mirar? Ingresa tu correo para crear o reiniciar tu membresía.
                </h3>

                <form className="form-home row g-3 d-flex align-items-center justify-content-center w-100 w-lg-75 m-auto">
                    <div className="form-floating col-auto">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label>Correo electrónico</label>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="get-started-btn red-btn fw-bold">Comenzar</button>
                    </div>
                </form>
            </div>
        </section>

      <Footer></Footer>
      </div>
</>
  )
}

export default Home
