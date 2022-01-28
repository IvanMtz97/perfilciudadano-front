import React, { useState } from "react";

const UserUpdate = () => {
  const [user, setUser] = useState({
    name: "User 1",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onUpdate = () => {
    //TODO: Add PUT request to update user
  };

  return(
    <> 
      <h3>Actualizar Usuario</h3>

      <label>Nombre:</label>
      <input type="text" id="name" value={user.name} onChange={handleChange} />

      <br /><br />

      <label>Contraseña:</label>
      <input type="text" id="password" value={user.password} onChange={handleChange} />

      <br /><br />

      <button onClick={onUpdate}>Actualizar</button>
    </>
  )
};

export default UserUpdate;