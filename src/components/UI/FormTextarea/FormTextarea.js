import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./formTextarea.css";

const FormTextarea = ({ value, onChange, error }) => {
  return (
    <textarea
      id="description"
      type="text"
      rows="4"
      className={classNames("formTextarea", {
        formTextarea_error: error
      })}
      placeholder="Enter description"
      name="description"
      value={value || ""}
      onChange={onChange}
    />
  );
};

export default FormTextarea;

FormTextarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
