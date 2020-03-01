import React from "react";
import classNames from "classnames";
import "./title.css";

const Title = ({ value, onChange, error }) => {
  return (
    <div className="title mt-24">
      <label htmlFor="title" className="title__label">
        Title
      </label>
      <input
        id="title"
        type="text"
        className={classNames("title__input", { "title__input_error": error })}
        placeholder="Enter title"
        name="title"
        value={value || ""}
        onChange={onChange}
      />
      {error && <div className="title__error">{error}</div>}
    </div>
  );
};

export default Title;
