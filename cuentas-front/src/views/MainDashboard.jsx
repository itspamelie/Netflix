export default function MainDashboard() {
  return (
    <>
      {/* MÉTRICAS SUPERIORES */}
      <div className="row g-3">

        <div className="col-md-3">
          <div className="p-3 bg-black rounded">
            <h4>+1,245 <span className="text-success fs-6">+8.2%</span></h4>
            <p className="text-secondary">Nuevos suscriptores este mes</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-black rounded">
            <h4>$184,230 MXN <span className="text-success fs-6">+12.5%</span></h4>
            <p className="text-secondary">Ingresos del mes</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-black rounded">
            <h4>342,900 <span className="text-danger fs-6">-3.1%</span></h4>
            <p className="text-secondary">Horas vistas por día</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 bg-black rounded">
            <h4>97.4% <span className="text-success fs-6">+1.4%</span></h4>
            <p className="text-secondary">Tasa de retención</p>
          </div>
        </div>

      </div>

      {/* HISTORIAL Y PROYECTOS */}
      <div className="row mt-4 g-4">

        {/* HISTORIAL DE TRANSACCIONES */}
        <div className="col-md-6">
          <div className="bg-black p-3 rounded">
            <h5 className="mb-3">Historial de pagos recientes</h5>

            <ul className="list-group bg-black">

              <li className="list-group-item bg-dark text-light d-flex justify-content-between">
                <span>
                  Renovación de suscripción<br/>
                  <small className="text-secondary">05 Ene 2025</small>
                </span>
                <strong>$149.99</strong>
              </li>

              <li className="list-group-item bg-dark text-light d-flex justify-content-between">
                <span>
                  Pago fallido<br/>
                  <small className="text-secondary">04 Ene 2025</small>
                </span>
                <strong className="text-danger">Error</strong>
              </li>

              <li className="list-group-item bg-dark text-light d-flex justify-content-between">
                <span>
                  Nueva suscripción — Plan Premium<br/>
                  <small className="text-secondary">03 Ene 2025</small>
                </span>
                <strong>$299.99</strong>
              </li>

            </ul>
          </div>
        </div>

        {/* PROYECTOS O TAREAS ABIERTAS */}
        <div className="col-md-6">
          <div className="bg-black p-3 rounded">
            <h5 className="mb-3">Tareas abiertas del sistema</h5>

            <ul className="list-group bg-black text-light">

              <li className="list-group-item bg-dark text-light d-flex justify-content-between">
                <div>
                  <strong>Optimización de rendimiento</strong>
                  <br/><small className="text-secondary">Mejorar carga de catálogos</small>
                </div>
                <small className="text-secondary">Hace 20 min</small>
              </li>

              <li className="list-group-item bg-dark text-light d-flex justify-content-between">
                <div>
                  <strong>Actualización de contenidos</strong>
                  <br/><small className="text-secondary">Agregar nuevas películas</small>
                </div>
                <small className="text-secondary">Hace 1 hora</small>
              </li>

              <li className="list-group-item bg-dark text-light d-flex justify-content-between">
                <div>
                  <strong>Revisión de reportes</strong>
                  <br/><small className="text-secondary">Errores enviados por usuarios</small>
                </div>
                <small className="text-secondary">Hace 10 min</small>
              </li>

            </ul>

          </div>
        </div>

      </div>
    </>
  );
}
