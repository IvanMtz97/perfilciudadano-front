import React, { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import { OPTIONS_URI } from "../../constants";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const SectionUpdate = () => {
  const { id } = useParams();
  const URI = `${OPTIONS_URI}/${id}`;

  const { response } = useFetch(URI);

  const [section, setSection] = useState({
    name: "",
  });

  useEffect(() => {
    if (response) {
      setSection(response);
    }
  }, [response]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSection((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onUpdate = () => {
    console.log("toUpdate", section);
    //TODO: Add PUT request to update section
  };

  if (!response) return <Loader />;

  return (
    <>
      <h3>Actualizar Sección</h3>

      <label>Nombre:</label>
      <input
        type="text"
        id="name"
        value={section.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={onUpdate}>Actualizar</button>
    </>
  );
};

export default SectionUpdate;
