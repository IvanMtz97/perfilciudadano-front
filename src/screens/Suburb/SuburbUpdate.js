import React, { useState } from "react";

import postalcodes from "../../dummy/postalcodes";

const SuburbUpdate = () => {
  const [suburb, setSuburb] = useState({
    name: "Suburb 1",
    postal_code_id: "1"
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSuburb((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSelectChange = (e) => {
    setSuburb((prevState) => ({
      ...prevState,
      postal_code_id: e.target.value,
    }));
  }

  const onUpdate = () => {
    //TODO: Add PUT request to update suburb
  }

  return(
    <> 
      <h3>Actualizar Colonia</h3>

      <label>Código Postal:</label>
      <select value={suburb.postal_code_id} onChange={onSelectChange}>
        <option value="" />
        {
          postalcodes.map(({id, name}, index) => 
            <option key={index} value={id}>{name}</option>
          )
        }
      </select>

      <br /><br />

      <label>Nombre:</label>
      <input type="text" id="name" value={suburb.name} onChange={handleChange} />


      <br /><br />

      <button onClick={onUpdate}>Actualizar</button>
    </>
  )
};

export default SuburbUpdate;