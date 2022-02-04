import React from "react";
import { Link } from "react-router-dom";

import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import sections from "../../dummy/sections";
import { SECTION_URI } from "../../constants";

const SectionList = () => {
  const { response, error } = useFetch("https://jsonplaceholder.typicode.com/todos", {});
  // const { response, error } = useFetch(SECTION_URI, {});

  const onDelete = (id) => {
    //TODO: Add DELETE request to remove section
  };

  if(!response) return <Loader/>;

  if(error) return <Error error={error} />;


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