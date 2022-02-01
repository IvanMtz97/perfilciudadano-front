import React from "react";
import { Link } from "react-router-dom";

import directors from "../../dummy/directors";

const DirectorList = () => {
  const onDownloadCSV = () => {
    //TODO: Add download CSV functionality
  }

  return(
    <> 
      <h3>Directores</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Folio Asignado</th>
            <th>Director</th>
            <th>Secretaria</th>
            <th>Líderes Vinculados</th>
            <th>Estructuras Vinculadas</th>
          </tr>
        </thead>
        <tbody>
          {
            directors.map(({ 
              id, folio_number, name, secretary, related_leaders_quantity, related_structures_quantity }, 
              index
            ) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{folio_number}</td>
                <td>{name}</td>
                <td>{secretary.name}</td>
                <td>{related_leaders_quantity}</td>
                <td>{related_structures_quantity}</td>
              </tr>
            )
          }
        </tbody>
      </table> 

      <br /><br />

      <Link to="/director/create"><p>Agregar Director</p></Link>
      <button onClick={onDownloadCSV}>Descargar CSV</button>
    </>
  )
};

export default DirectorList;