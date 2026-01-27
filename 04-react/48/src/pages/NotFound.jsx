import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      NotFound
      <br />
      <Link to="/products">Go back</Link>
    </div>
  );
};

export default NotFound;
