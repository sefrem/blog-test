import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Document from "../../icons/Document";
import "./dropzone.css"

const Dropzone = () => {
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: acceptedFile => {
      setPreview(URL.createObjectURL(acceptedFile[0]));
    }
  });

  return (
    <div {...getRootProps()} className="dropzone">
      {preview ? (
        <img className="dropzone__preview" src={preview} alt="" />
      ) : (
        <div className="dropzone__description">
          <Document />
          <div className="dropzone__description-text">
            select an image file to upload or drag it here
          </div>
        </div>
      )}

      <input {...getInputProps()} />
    </div>
  );
};

export default Dropzone;
