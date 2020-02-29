import React from "react";
import Trash from "../../icons/Trash";
import "./preview.css";

const Preview = ({ preview, setPreview }) => {
  return (
    <div className="preview">
      <img className="preview__image" src={preview} alt="" />
      <div className="preview__remove" onClick={() => setPreview(null)}>
        <Trash />
      </div>
    </div>
  );
};

export default Preview;