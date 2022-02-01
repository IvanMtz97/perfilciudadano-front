import React from "react";
import { Link } from "react-router-dom";

import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import sections from "../../dummy/sections";
import { SECTION_URI } from "../../constants";

const SectionList = () => {
  const { response } = useFetch("https://jsonplaceholder.typicode.com/todos", {});
  // const { response } = useFetch(SECTION_URI, {});

  if(!response) return <Loader/>

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