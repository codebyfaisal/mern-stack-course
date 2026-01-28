import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="card"
      style={theme === "dark" ? { background: "white", color: "black" } : {}}
    >
      <h3>Title</h3>
      <p>Description</p>
      <button>Add to card</button>
    </div>
  );
};

export default Card;
