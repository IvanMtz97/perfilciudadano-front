import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteOption, getOptionsAsync } from "../../services/option";

const SectionList = () => {
  const [sections, setSections] = useState([]);

  const onDelete = async (id) => {
    if (window.confirm("Quieres eliminar la seccion?")) {
      const res = await deleteOption(id);
      if (res.status === 200) {
      }
    }
  };

  useEffect(() => {
    const getOptions = async () => {
      const res = await getOptionsAsync("Section");
      setSections(res);
    };

    getOptions();
  }, []);

  return (
    <>
      <h3>Secciones</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Sección</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {sections.map(({ id, name }, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <Link to={`/section/${id}`}>Actualizar</Link>
              </td>
              <td>
                <button onClick={() => onDelete(id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/section/create">
        <p>Agregar Sección</p>
      </Link>
    </>
  );
};

export default SectionList;
