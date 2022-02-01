import React from "react";
import { Link } from "react-router-dom";

import secretaries from "../../dummy/secretaries";

const SecretaryList = () => {
  const onDownloadCSV = () => {
    //TODO: Add download CSV functionality
  }

  return(
    <> 
      <h3>Secretarias</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Folio Asignado</th>
            <th>Secretaria</th>
            <th>Líderes Vinculados</th>
            <th>Estructuras Vinculadas</th>
          </tr>
        </thead>
        <tbody>
          {
            secretaries.map(({ 
              id, folio_number, name, related_leaders_quantity, related_structures_quantity }, 
              index
            ) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{folio_number}</td>
                <td>{name}</td>
                <td>{related_leaders_quantity}</td>
                <td>{related_structures_quantity}</td>
              </tr>
            )
          }
        </tbody>
      </table> 

      <br /><br />

      <Link to="/secretary/create"><p>Agregar Secretaria</p></Link>
      <button onClick={onDownloadCSV}>Descargar CSV</button>
    </>
  )
};

export default SecretaryList;