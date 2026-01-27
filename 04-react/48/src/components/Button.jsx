import React from "react";

const Button = (props) => {
  return <button>{props.children}
  {props.label}
  </button>;
};

export default Button;
