import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function GenresDashboard() {
  const token = localStorage.getItem("token");
  const [genres, setGenres] = useState([]);
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {
    fetchGenres();
    fetchClassifications();
  }, []);

    const fetchGenres = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/genres", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            if (res.ok) setGenres(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchClassifications = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/classifications", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            if (res.ok) setClassifications(data.data);
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <>
      <h3 className="mt-4">Géneros</h3>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {genres.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center">
                No hay géneros
              </td>
            </tr>
          ) : (
            genres.map((g) => (
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.nombre}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <h3 className="mt-4">Clasificaciones</h3>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {classifications.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                No hay clasificaciones
              </td>
            </tr>
          ) : (
            classifications.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nombre}</td>
                <td>{c.descripcion}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
}
