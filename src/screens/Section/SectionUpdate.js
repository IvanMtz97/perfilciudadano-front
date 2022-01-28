import React, { useState } from "react";

const SectionUpdate = () => {
  const [section, setSection] = useState({
    name: "Section 1",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSection((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onUpdate = () => {
    //TODO: Add PUT request to update section
  };

  return(
    <> 
      <h3>Actualizar Sección</h3>

      <label>Nombre:</label>
      <input type="text" id="name" value={section.name} onChange={handleChange} />

      <br /><br />

      <button onClick={onUpdate}>Actualizar</button>
    </>
  )
};

export default SectionUpdate;