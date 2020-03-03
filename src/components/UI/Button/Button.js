import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.css";

const Button = ({ text, trait, ...props }) => {
  return (
    <button
      type="button"
      className={classNames("btn", {
        btn_success: trait === "success",
        btn_primary: trait === "primary"
      })}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  trait: PropTypes.oneOf(["success", "primary"])
};
