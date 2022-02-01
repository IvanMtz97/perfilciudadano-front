import React, { useState } from "react";

const SecretaryCreate = () => {
  const [secretary, setSecretary] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSecretary((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onCreate = () => {
    //TODO: Add POST request to create secretary
  }

  return(
    <> 
      <h3>Agregar Secretaria</h3>

      <br /><br />

      <label>Nombre:</label>
      <input type="text" id="name" value={secretary.name} onChange={handleChange} />

      <br /><br />

      <button onClick={onCreate}>Agregar</button>
    </>
  )
};

export default SecretaryCreate;