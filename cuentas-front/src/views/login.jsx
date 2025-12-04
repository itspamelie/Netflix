import { useState, useEffect } from 'react'
import '../css/styles.css'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";






export default function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("admin@example.com")
  const [password, setPassword] = useState("123")

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: password
        }),

      });

      const data = await res.json()
      console.log("RESPUESTA", data);

      if (res.ok && data.token) {

        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))

        if (data.user.role == 0) {
          navigate("/index")
        } else {
          navigate("/dashboard")
        }

      } else {
        alert("Credenciales incorrectas o error en el servidor")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="body-login root all">
        <div className="wrapper">

          {/* HEADER */}
          <div className="header">
            <svg
              viewBox="0 0 512 138"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M340.657183,0 L340.657183,100.203061 C353.016406,100.778079 365.344207,101.473198 377.637095,102.293306 L377.637095,123.537553 C358.204486,122.242243 338.690182,121.253471 319.094879,120.57923 L319.094879,0 L340.657183,0 Z M512,0.0118710746 L483.922918,65.1060972 L511.993017,137.54371 L511.961595,137.557485 C503.784957,136.3909 495.597845,135.289637 487.386294,134.233936 L471.623048,93.5776798 L455.709676,130.459835 C448.168455,129.627123 440.61676,128.839275 433.047609,128.100899 L460.419447,64.6708546 L435.351871,0.0118710746 L458.677285,0.0118710746 L472.712335,36.1957639 L488.318473,0.0118710746 L512,0.0118710746 Z M245.093161,119.526252 L245.092462,0.0114869428 L305.282574,0.0114869428 L305.282574,21.4467074 L266.654767,21.4467074 L266.654767,49.2277266 L295.881884,49.2277266 L295.881884,70.4719734 L266.654767,70.4719734 L266.654767,119.521329 L245.093161,119.526252 Z M164.580156,21.448488 L164.579458,0.0103695593 L231.270382,0.0103695593 L231.270382,21.4469875 L208.705375,21.4469875 L208.705375,120.107799 C201.508397,120.296154 194.3191,120.519389 187.144466,120.790104 L187.144466,21.448488 L164.580156,21.448488 Z M90.8682168,126.966224 L90.8682168,0.0139657936 L150.758077,0.0139657936 L150.758077,21.4491862 L112.42703,21.4491862 L112.42703,50.4849807 C121.233151,50.3722116 133.754021,50.2444297 141.543822,50.2632828 L141.543822,71.5092753 C131.792954,71.388127 120.786264,71.6429923 112.42703,71.7264345 L112.42703,103.88974 C125.166805,102.887736 137.944984,102.011069 150.758077,101.270912 L150.758077,122.517253 C130.704017,123.672422 110.740031,125.160591 90.8682168,126.966224 Z M48.5710466,77.8540254 L48.5696502,0.0104745953 L70.1319549,0.0104745953 L70.1319549,128.968837 C62.2496338,129.779728 54.3823252,130.642465 46.5286328,131.553346 L21.5609083,59.8244682 L21.5609083,134.625696 C14.3597408,135.563565 7.17323695,136.54141 0,137.562338 L0,0.0118710746 L20.4911722,0.0118710746 L48.5710466,77.8540254 Z M395.425298,124.819071 L395.425298,124.819211 L395.425298,0.0120101224 L416.987603,0.0120101224 L416.987603,126.599777 C409.809478,125.960833 402.624371,125.369895 395.425298,124.819071 Z"
                  fill="#DB202C"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </div>

          {/* LOGIN */}
          <div className="login">
            <form onSubmit={submit} className="signin-form">
              <h1 className="title">Iniciar sesión</h1>

              {/* EMAIL */}
              <div className="field">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  className="text-input"
                  required
                />
                <span className="floating-label">Correo electrónico o número de teléfono</span>
              </div>

              {/* PASSWORD */}
              <div className="field">
                <input
                  type="password"
                  className="text-input"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="floating-label test">Contraseña</span>
              </div>

              <button type="submit" className="signin-btn mb-5">Iniciar sesión</button>

              {/* REMEMBER ME */}
              <div className="action-group">
                <label htmlFor="remember-me">
                  <input type="checkbox" className="checkbox" id="remember-me" />
                  Recuérdame
                </label>

                <a className="a-special" href="#">¿Necesitas ayuda?</a>
              </div>

              {/* ONBOARDING */}
              <div className="onboarding">
                <div>
                  <div className="icon">
                    {/* FACEBOOK ICON */}
                    <svg width="256px" height="256px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M241.871,256.001 C249.673,256.001 256,249.675 256,241.872 L256,14.129 C256,6.325 249.673,0 241.871,0 L14.129,0 C6.324,0 0,6.325 0,14.129 L0,241.872 C0,249.675 6.324,256.001 14.129,256.001 L241.871,256.001" fill="#395185"></path>
                        <path d="M176.635,256.001 L176.635,156.864 L209.912,156.864 L214.894,118.229 L176.635,118.229 L176.635,93.561 C176.635,82.375 179.742,74.752 195.783,74.752 L216.242,74.743 L216.242,40.188 C212.702,39.717 200.558,38.665 186.43,38.665 C156.932,38.665 136.738,56.67 136.738,89.736 L136.738,118.229 L103.376,118.229 L103.376,156.864 L136.738,156.864 L136.738,256.001 L176.635,256.001" fill="#FFFFFF"></path>
                      </g>
                    </svg>
                  </div>
                  <small>Inicia sesión con Facebook</small>
                </div>

                <p>
                  ¿Nuevo en Netflix?
                  <a className="a-special" href="#"> Créate una cuenta ahora.</a>


                </p>
                <Link to="/">Ir al Home</Link>
              </div>
            </form>
          </div>

          {/* FOOTER */}




        </div>
        <div className="footer">
          <p className="questions">¿Preguntas? Llama al 1-555-555-5555</p>

          <div className="terms">
            <a className="a-special" href="#">Términos de tarjetas de regalo</a>
            <a className="a-special" href="#">Términos de uso</a>
            <a className="a-special" href="#">Declaración de privacidad</a>
          </div>

          <select>
            <option value="english">Inglés</option>
            <option value="espanol">Español</option>
          </select>
        </div>
      </div>

    </>
  )
}
