import React from "react";
import "./button.css"

const Button = ({classmodificator, text, ...props}) => {
  return (
    <button type="button" className={`btn ${classmodificator}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
