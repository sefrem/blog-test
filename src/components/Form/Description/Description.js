import React from "react";
import classNames from "classnames";
import "./description.css";

const Description = ({ value, onChange, error }) => {
  return (
    <div className="description mt-24">
      <label htmlFor="description" className="description__label">
        Description
      </label>
      <textarea
        id="description"
        type="text"
        rows="4"
        className={classNames("description__input", {
          "description__input_error": error
        })}
        placeholder="Enter description"
        name="description"
        value={value || ""}
        onChange={onChange}
      />
      {error ? <div className="description__error">{error}</div> : null}
    </div>
  );
};

export default Description;
