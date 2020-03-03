import React from "react";
import PropTypes from 'prop-types';
import "./button.css"

const Button = ({text, ...props}) => {
  return (
    <button type="button" {...props}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string
}
