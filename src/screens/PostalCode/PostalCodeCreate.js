import React, { useState } from "react";

const PostalCodeCreate = () => {
  const [postalCode, setPostalCode] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPostalCode((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onCreate = () => {
    //TODO: Add POST request to create postalcode
  }

  return(
    <> 
      <h3>Create Postal Code</h3>

      <label>Name:</label>
      <input type="text" id="name" value={postalCode.name} onChange={handleChange} />

      <br /><br />

      <button onClick={onCreate}>Create</button>
    </>
  )
};

export default PostalCodeCreate;