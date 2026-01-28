import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <p>Logo</p>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shorts"}>Shorts</Link>
        </li>
        <li>
          <Link to={"/account"}>Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
