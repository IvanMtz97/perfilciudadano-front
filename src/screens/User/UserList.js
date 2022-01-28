import React from "react";
import { Link } from "react-router-dom";

import users from "../../dummy/users";

const UserList = () => {
  const onDelete = (id) => {
    //TODO: Add DELETE request to remove user
  };

  return(
    <> 
      <h3>Usuarios</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {
            users.map(({ id, name }, index) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <Link to={`/user/${id}`}>Actualizar</Link>
                </td>
                <td>
                  <button onClick={() => onDelete(id)}>Eliminar</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table> 

      <Link to="/user/create"><p>Agregar Usuario
        l</p></Link>
    </>
  )
};

export default UserList;