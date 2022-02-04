import React from "react";
import { Link } from "react-router-dom";

import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import postalcodes from "../../dummy/postalcodes";
import { POSTAL_CODE_URI } from "../../constants";

const PostalCodeList = () => {
  const { response, error } = useFetch("https://jsonplaceholder.typicode.com/todos", {});
  // const { response, error } = useFetch(POSTAL_CODE_URI, {});

  const onDelete = (id) => {
    //TODO: Add DELETE request to remove postalcode
  };

  if(!response) return <Loader/>;

  if(error) return <Error error={error} />;

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