import React, { useState } from "react";

const UserCreate = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onCreate = () => {
    //TODO: Add POST request to create user
  }

  return(
    <> 
      <h3>Agregar Usuario</h3>

      <br /><br />

      <label>Nombre:</label>
      <input type="text" id="name" value={user.name} onChange={handleChange} />

      <br /><br />

      <label>Contraseña:</label>
      <input type="text" id="password" value={user.password} onChange={handleChange} />

      <br /><br />

      <button onClick={onCreate}>Agregar</button>
    </>
  )
};

export default UserCreate;