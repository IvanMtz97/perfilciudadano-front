import React from "react";
import { Link } from "react-router-dom";

import sections from "../../dummy/sections";

const SectionList = () => {
  const onDelete = (id) => {
    //TODO: Add DELETE request to remove section
  };

  return(
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
          {
            sections.map(({ id, name }, index) => 
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
            )
          }
        </tbody>
      </table> 

      <Link to="/section/create"><p>Agregar Sección</p></Link>
    </>
  )
};

export default SectionList;