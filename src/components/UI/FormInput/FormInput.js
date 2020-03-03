import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./formInput.css";

const FormInput = ({ value, onChange, error }) => {
  return (
    <input
      id="title"
      type="text"
      className={classNames("formInput", { formInput_error: error })}
      placeholder="Enter title"
      name="title"
      value={value || ""}
      onChange={onChange}
    />
  );
};

export default FormInput;

FormInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
