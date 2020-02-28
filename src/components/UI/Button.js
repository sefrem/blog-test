import React from "react";
import "./button.css"

const Button = props => {
  const { classModificator, onClick, text } = props;
  return (
    <button className={`btn ${classModificator}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
