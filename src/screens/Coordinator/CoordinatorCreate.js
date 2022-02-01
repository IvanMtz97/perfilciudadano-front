import React, { useState } from "react";

import coordinators from "../../dummy/coordinators";
import directors from "../../dummy/directors";

const CoordinatorCreate = () => {
  const [coordinator, setDirector] = useState({
    name: "",
    secretary_id: "",
    director_id: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDirector((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSelectChange = (e) => {
    setDirector((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const onCreate = () => {
    //TODO: Add POST request to create coordinator
  }

  return(
    <> 
      <h3>Agregar Coordinador</h3>

      <label>Nombre:</label>
      <input type="text" id="name" value={coordinator.name} onChange={handleChange} />

      <br /><br />

      <label>Secretaria:</label>
      <select id="secretary_id" value={coordinator.secretary_id} onChange={onSelectChange}>
        <option value="" />
        {
          coordinators.map(({id, name}, index) => 
            <option key={index} value={id}>{name}</option>
          )
        }
      </select>

      <br /><br />

      <label>Director:</label>
      <select id="director_id" value={coordinator.director_id} onChange={onSelectChange}>
        <option value="" />
        {
          directors.map(({id, name}, index) => 
            <option key={index} value={id}>{name}</option>
          )
        }
      </select>

      <br /><br />

      <button onClick={onCreate}>Agregar</button>
    </>
  )
};

export default CoordinatorCreate;