import React from "react";
import { Link } from "react-router-dom";

import postalcodes from "../../dummy/postalcodes";

const PostalCodeList = () => {
  const onDelete = (id) => {
    //TODO: Add DELETE request to remove postalcode
  };

  return(
    <> 
      <h3>Códigos Postales</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Código Postal</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {
            postalcodes.map(({ id, name, }, index) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <Link to={`/postalcode/${id}`}>Actualizar</Link>
                </td>
                <td>
                  <button onClick={() => onDelete(id)}>Eliminar</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table> 

      <Link to="/postalcode/create"><p>Agregar Código Postal</p></Link>
    </>
  )
};

export default PostalCodeList;