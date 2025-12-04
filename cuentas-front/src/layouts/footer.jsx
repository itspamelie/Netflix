export default function Footer(){
    return(
        <>
           <footer className="py-5 bg-black text-light">
            <div className="container"> 
                <div>
                    <p>¿Preguntas? Llama al <a href="#">0900900900</a></p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#">Preguntas Frecuentes</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Centro de Medios</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Tienda de Netflix</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Formas de Ver</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Preferencias de Cookies</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Prueba de Velocidad</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Solo en Netflix</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#">Centro de Ayuda</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Relaciones con Inversionistas</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Canjear tarjetas de regalo</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Términos de Uso</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Información Corporativa</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Garantía Legal</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Opciones de Anuncios</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#">Cuenta</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Empleos</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Comprar tarjetas de regalo</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Privacidad</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Contáctanos</a>
                            </li>
                            <li className="mb-2">
                                <a href="#">Avisos Legales</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="py-3">
                    <div className="position-absolute">
                        <img className="position-absolute" width="17" src="./img/globe-icon.png" alt="globo"/>
                    </div>
                    <div className="position-absolute">
                        <div className="arrow-down position-absolute"></div>
                    </div>
                    <select className="position-relative py-1" name="" id="">
                        <option value="">Español</option>
                    </select>
                </div>

                <p>Netflix México</p>
            </div>
        </footer>
        </>
    )
}
