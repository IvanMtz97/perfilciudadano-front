import React from "react";

import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import operators from "../../dummy/operators";
import { OPERATOR_URI } from "../../constants";

const OperatorList = () => {
  const { response, error } = useFetch("https://jsonplaceholder.typicode.com/todos", {});
  // const { response, error } = useFetch(OPERATOR_URI, {});

  const onDownloadCSV = () => {
    //TODO: Add download CSV functionality
  }

  if(!response) return <Loader/>;

  if(error) return <Error error={error} />;

  return(
    <> 
      <h3>Operadores</h3>

      <h4>Filtrar datos por:</h4>
      <label>Secretarias</label> &nbsp;
      <label>Direcciones</label> &nbsp;
      <label>Coordinadores</label> &nbsp;

      <br /><br />

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Folio Asignado</th>
            <th>Operador</th>
            <th>Coordinador</th>
            <th>Dirección</th>
            <th>Secretaria</th>
            <th>Líderes Vinculados</th>
            <th>Estructuras Vinculadas</th>
          </tr>
        </thead>
        <tbody>
          {
            operators.map(({ 
              id, folio_number, name, coordinator, director, secretary, related_leaders_quantity, related_structures_quantity }, 
              index
            ) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{folio_number}</td>
                <td>{name}</td>
                <td>{coordinator.name}</td>
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

      <button onClick={onDownloadCSV}>Descargar CSV</button>
    </>
  )
};

export default OperatorList;