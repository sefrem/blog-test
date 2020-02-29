import React from "react";
import { useDropzone } from "react-dropzone";
import Document from "../../icons/Document";
import "./dropzone.css";

const Dropzone = ({ setPreview }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: acceptedFile => {
      setPreview(URL.createObjectURL(acceptedFile[0]));
    }
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <div className="dropzone__description">
        <Document />
        <div className="dropzone__description-text">
          select an image file to upload or drag it here
        </div>
      </div>
      <input {...getInputProps()} />
    </div>
  );
};

export default Dropzone;
