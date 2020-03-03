import React from "react";
import PropTypes from 'prop-types'; 
import "./formField.css";

const FormField = props => {
  const { children, error, id, labelText } = props;
  return (
    <div className="formField mt-24">
      <label htmlFor={id} className="formField__label">
        {labelText}
      </label>
      {children}
      {error && <div className="formField__error">{error}</div>}
    </div>
  );
};

export default FormField;

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
}