import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/index.css'

export default function Index() {
    
   const navigate = useNavigate()
    const [perfiles, setPerfiles] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = JSON.parse(localStorage.getItem("user"))

        if (!token || !user) {
            navigate("/login")
            return
        }

        const fetchPerfiles = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/profiles/${user.id}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })

                const data = await res.json()
                console.log("PERFILES", data)

                if (res.ok) {
                    setPerfiles(data.data)
                } else {
                    alert("Error al obtener perfiles")
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchPerfiles()
    }, [])

    // Selección de perfil
    const seleccionarPerfil = (perfil) => {
        localStorage.setItem("perfil", JSON.stringify(perfil))
        navigate("/browse") 
    }

    return(
    <>
        <div className="logo-index body-index"></div>

            <div className="wrapper">
                <h1>Who's Watching?</h1>

                <div className="profile-wrap">

                    {perfiles.map((p) => (
                        <div className="profile px-5" key={p.id} onClick={() => seleccionarPerfil(p)}>
                            <div className="profile-icon">
                                <img 
                                    src={`http://localhost:8000/profilepictures/${p.img.img}`}
                                    alt={p.img.nombre}
                                    style={{ width: 150, height: 150, borderRadius: "10px" }}
                                />
                            </div>

                            <div className="profile-name">
                                {p.nombre}
                            </div>
                        </div>
                    ))}

                </div>

                <a href="#" onClick={() => navigate("/manage-profiles")}>Manage Profiles</a>
            </div>
    </>
    )
}