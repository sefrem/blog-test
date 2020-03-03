import React from "react";
import PropTypes from 'prop-types';
import "./preview.css";

const Preview = ({ preview, setPreview }) => {
  return (
    <div className="preview">
      <img className="preview__image" src={preview} alt="preview" />
      <div className="preview__remove" onClick={() => setPreview(null)}>
      <img src="/src/assets/icons/trash.svg" alt="trash" />
      </div>
    </div>
  );
};

export default React.memo(Preview);

Preview.propTypes = {
  preview: PropTypes.string.isRequired,
  setPreview: PropTypes.func.isRequired
}
