import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      Notfound
      <br />
      <Link to="/products">Go back</Link>
    </div>
  );
};

export default Notfound;
