import { useEffect, useState } from "react";

export default function IconsDashboard() {
  const token = localStorage.getItem("token");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/images", {
        headers: { 
          Authorization: `Bearer ${token.replace(/"/g, "")}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        setImages(data.data); // data.data porque así lo devuelves en tu backend
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3 className="mb-5">Fotos de perfil</h3>
      <div className="row">
        {images.length === 0 && <p>No hay imágenes para mostrar</p>}
        {images.map((img) => (
          <div className="col-4 col-md-2 mb-3" key={img.id}>
            <div className="card">
              <img
                src={`http://localhost:8000/profilepictures/${img.img}`}
                alt={img.nombre}
                className="card-img-top"
              />
              <div className="card-body p-2">
                <p className="card-text text-center">{img.nombre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
