import React from "react";
import { Link } from "react-router-dom";

import coordinators from "../../dummy/coordinators";

const CoordinatorList = () => {
  const onDownloadCSV = () => {
    //TODO: Add download CSV functionality
  }

  return(
    <> 
      <h3>Coordinadores</h3>

      <h4>Filtrar datos por:</h4>
      <label>Secretarias</label> &nbsp;
      <label>Direcciones</label> &nbsp;

      <br /><br />

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Folio Asignado</th>
            <th>Coordinador</th>
            <th>Director</th>
            <th>Secretaria</th>
            <th>Líderes Vinculados</th>
            <th>Estructuras Vinculadas</th>
          </tr>
        </thead>
        <tbody>
          {
            coordinators.map(({ 
              id, folio_number, name, director, secretary, related_leaders_quantity, related_structures_quantity }, 
              index
            ) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{folio_number}</td>
                <td>{name}</td>
                <td>{director.name}</td>
                <td>{secretary.name}</td>
                <td>{related_leaders_quantity}</td>
                <td>{related_structures_quantity}</td>
              </tr>
            )
          }
        </tbody>
      </table> 

      <br /><br />

      <Link to="/coordinator/create"><p>Agregar Coordinador</p></Link>
      <button onClick={onDownloadCSV}>Descargar CSV</button>
    </>
  )
};

export default CoordinatorList;