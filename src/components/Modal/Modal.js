import React, { useState } from "react";
import Dropzone from "./Dropzone/Dropzone"
import Title from "./Title/Title"
import Description from "./Description/Description"
import "./modal.css"

const Modal = props => {
    
  const [error, setError] = useState(false);

  return (
    <div className="modal">
      <div className="modal__header">Add new</div>
      <Dropzone />
      <Title />
        <Description />
      <button type="submit" className="save" 
    //   onClick={onSave}
      >
        Save
      </button>
    </div>
  );
};

export default Modal;
