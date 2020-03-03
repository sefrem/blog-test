import React from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from 'prop-types';
import "./dropzone.css";

const normalizeFileWithPreview = (file, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    callback(fileReader.result);
  };
  fileReader.readAsDataURL(file);
};

const Dropzone = ({ setPreview }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: acceptedFile => {
      normalizeFileWithPreview(acceptedFile[0], setPreview);
    }
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <div className="dropzone__description">
      <img src="/src/assets/icons/document.svg" alt="drop" />
        <div className="dropzone__description-text">
          select an image file to upload or drag it here
        </div>
      </div>
      <input {...getInputProps()} />
    </div>
  );
};

export default Dropzone;

Dropzone.propTypes = {
  setPreview: PropTypes.func.isRequired
}
