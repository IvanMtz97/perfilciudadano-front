import React from "react";
import { Link } from "react-router-dom";

const viewHeight = window.outerHeight;

const Sidebar = () => {
  return(
    <div 
      style={{ 
        height: viewHeight, 
        float:"left", 
        overflowX: "hidden", 
      }}
    >
      <Link to="/structure/list"><p>Estructuras</p></Link>
      <Link to="//list"><p>Secretarias</p></Link>
      <Link to="//list"><p>Direcciones</p></Link>
      <Link to="//list"><p>Coordinadores</p></Link>
      <Link to="//list"><p>Operadores</p></Link>
      <Link to="//list"><p>Lideres</p></Link>
      <Link to="/postalcode/list"><p>Códigos Postales</p></Link>
      <Link to="/suburb/list"><p>Colonias</p></Link>
      <Link to="/section/list"><p>Secciones</p></Link>
      <Link to="/user/list"><p>Usuarios</p></Link>
    </div>
  )
};

export default Sidebar;