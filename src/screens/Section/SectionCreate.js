import React, { useState } from "react";
import { createSection } from "../../services/section";

const SectionCreate = () => {
  const [section, setSection] = useState({
    name: "",
    type: "Section",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSection((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onCreate = async () => {
    const res = await createSection(section);
  };

  return (
    <>
      <h3>Agregar Sección</h3>

      <br />
      <br />

      <label>Nombre:</label>
      <input
        type="text"
        id="name"
        value={section.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={onCreate}>Agregar</button>
    </>
  );
};

export default SectionCreate;
