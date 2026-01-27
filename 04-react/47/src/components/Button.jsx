import React from "react";

// const Button = (props) => {
//   return (
//     <button>
//       {props.children}
//       {props.label}
//     </button>
//   );
// };

const Button = ({ children, label, onClick }) => {
  // const { children, label } = props;
  return (
    <button onClick={onClick}>
      {children}
      {label}
    </button>
  );
};

export default Button;
