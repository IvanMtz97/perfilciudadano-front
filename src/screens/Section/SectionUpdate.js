import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";
import { OPTIONS_URI } from "../../constants";
import { updateSection } from "../../services/section";

const SectionUpdate = () => {
  const { id: sectionId } = useParams();
  const { response } = useFetch(`${OPTIONS_URI}/${sectionId}`);

  const [section, setSection] = useState({
    name: "",
  });

  useEffect(() => {
    if (response) {
      const { name, type } = response;
      setSection({ name, type });
    }
  }, [response]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSection((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onUpdate = async () => {
    const res = await updateSection(sectionId, section);
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
