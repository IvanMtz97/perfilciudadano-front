import React, { useState } from "react";

import secretaries from "../../dummy/secretaries";

const DirectorCreate = () => {
  const [director, setDirector] = useState({
    name: "",
    secretary_id: "",
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
      secretary_id: e.target.value,
    }));
  }

  const onCreate = () => {
    //TODO: Add POST request to create director
  }

  return(
    <> 
      <h3>Agregar Director</h3>

      <label>Nombre:</label>
      <input type="text" id="name" value={director.name} onChange={handleChange} />

      <br /><br />

      <label>Secretaria:</label>
      <select value={director.secretary_id} onChange={onSelectChange}>
        <option value="" />
        {
          secretaries.map(({id, name}, index) => 
            <option key={index} value={id}>{name}</option>
          )
        }
      </select>

      <br /><br />

      <button onClick={onCreate}>Agregar</button>
    </>
  )
};

export default DirectorCreate;