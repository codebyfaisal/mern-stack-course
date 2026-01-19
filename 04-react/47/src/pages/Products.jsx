import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {[1, 2, 3, 4, 56, 6].map((id) => (
        <p>
          <Link to={`/products/${id}`}>{id}</Link>
        </p>
      ))}
    </div>
  );
};

export default Products;
