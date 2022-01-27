import React, { useState, useEffect } from "react";

const PostalCodeUpdate = () => {
  const [postalCode, setPostalCode] = useState({
    name: "Postal Code 1",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPostalCode((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onUpdate = () => {
    //TODO: Add POST request to create postalcode
  }

  useEffect(() => {
    //TODO: Add GET request to get suburb info
  }, [])

  return(
    <> 
      <h3>Actualizar Código Postal</h3>

      <label>Nombre:</label>
      <input type="text" id="name" value={postalCode.name} onChange={handleChange} />

      <br /><br />

      <button onClick={onUpdate}>Actualizar</button>
    </>
  )
};

export default PostalCodeUpdate;