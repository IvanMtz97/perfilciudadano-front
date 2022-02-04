import React from "react";

import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import leaders from "../../dummy/leaders";
import { LEADER_URI } from "../../constants";

const LeaderList = () => {
  const { response, error } = useFetch("https://jsonplaceholder.typicode.com/todos", {});
  // const { response, error } = useFetch(LEADER_URI, {});

  const onDownloadCSV = () => {
    //TODO: Add download CSV functionality
  }

  if(!response) return <Loader/>;

  if(error) return <Error error={error} />;

  return(
    <> 
      <h3>Líderes</h3>

      <h4>Filtrar datos por:</h4>
      <label>Secretarias</label> &nbsp;
      <label>Direcciones</label> &nbsp;
      <label>Coordinadores</label> &nbsp;
      <label>Operadores</label> &nbsp;

      <br /><br />

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Folio Asignado</th>
            <th>Líder</th>
            <th>Operador</th>
            <th>Coordinador</th>
            <th>Dirección</th>
            <th>Secretaria</th>
            <th>Estructuras Vinculadas</th>
            <th>Respuestas de Encuesta</th>
          </tr>
        </thead>
        <tbody>
          {
            leaders.map(({ 
              id, folio_number, name, operator, coordinator, director, secretary, related_structures_quantity, survey_answers_quantity }, 
              index
            ) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{folio_number}</td>
                <td>{name}</td>
                <td>{operator.name}</td>
                <td>{coordinator.name}</td>
                <td>{director.name}</td>
                <td>{secretary.name}</td>
                <td>{related_structures_quantity}</td>
                <td>{survey_answers_quantity}</td>
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

export default LeaderList;