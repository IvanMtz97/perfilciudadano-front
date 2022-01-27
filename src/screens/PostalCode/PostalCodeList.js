import React from "react";
import { Link } from "react-router-dom";

import postalCodes from "../../dummy/postalcodes";

const PostalCodeList = () => {
  return(
    <> 
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Código Postal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            postalCodes.map(({ id, name, }, index) => 
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td><Link to={`/postalcode/${id}`}>Update</Link></td>
              </tr>)
          }
        </tbody>
      </table> 

      <Link to="/postalcode/create"><p>Create Postal Code</p></Link>
    </>
  )
};

export default PostalCodeList;