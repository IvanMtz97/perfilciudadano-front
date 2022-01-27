import React from "react";
import { Link } from "react-router-dom";

import suburbs from "../../dummy/suburbs";

const SuburbList = () => {
  const onDelete = (id) => {
    //TODO: Add DELETE request to remove postalcode
  };

  return(
    <> 
      <h3>Colonias</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Colonia</th>
            <th>Código Postal</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {
            suburbs.map(({ id, name, postal_code }, index) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{postal_code.name}</td>
                <td>
                  <Link to={`/suburb/${id}`}>Actualizar</Link>
                </td>
                <td>
                  <button onClick={() => onDelete(id)}>Eliminar</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table> 

      <Link to="/suburb/create"><p>Agregar Colonia</p></Link>
    </>
  )
};

export default SuburbList;