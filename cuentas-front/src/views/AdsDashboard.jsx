import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function AdsDashboard() {
  const token = localStorage.getItem("token");
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/ads", {
        headers: {
          Authorization: `Bearer ${token.replace(/"/g, "")}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setAds(data.data); // data.data porque así lo envías desde Laravel
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3 className="mt-4">Anuncios</h3>
      <Table variant="dark" striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Archivo</th>
            <th>Vista previa</th>
          </tr>
        </thead>
        <tbody>
          {ads.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No hay anuncios disponibles
              </td>
            </tr>
          ) : (
            ads.map((ad, index) => (
              <tr key={ad.id}>
                <td>{index + 1}</td>
                <td>{ad.nombre}</td>
                <td>{ad.tipo}</td>
                <td>{ad.archivo}</td>
                <td>
                  {ad.tipo === "Video" ? (
                    <video
                      src={`http://localhost:8000/ads/${ad.archivo}`}
                      width="200"
                      controls
                    />
                  ) : (
                    <img
                      src={`http://localhost:8000/ads/${ad.archivo}`}
                      alt={ad.nombre}
                      width="100"
                    />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
}
