import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from "react-router";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const ProductDetail = () => {
  const { id, name } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  return (
    <div>
      ProductDetail
      <br />
      id: {id}
      <br />
      Name: {name}
      <br />
      <Link to={"/products"}>go back</Link>
      <button
        type="button"
        onClick={() =>
          setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("name", "faisal");
            return params;
          })
        }
      >
        Change the search queries in link
      </button>
      <button type="button" onClick={() => navigate("/about")}>
        Navigate to about page(just like Link)
      </button>
    </div>
  );
};

export default ProductDetail;
