import React, { useState } from "react";

const SectionCreate = () => {
  const [section, setSection] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSection((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onCreate = () => {
    //TODO: Add POST request to create section
  }

  return(
    <> 
      <h3>Agregar Sección</h3>

      <br /><br />

      <label>Nombre:</label>
      <input type="text" id="name" value={section.name} onChange={handleChange} />

      <br /><br />

      <button onClick={onCreate}>Agregar</button>
    </>
  )
};

export default SectionCreate;