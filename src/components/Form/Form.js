import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dropzone from "./Dropzone/Dropzone";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Preview from "./Preview/Preview";
import Button from "../../components/UI/Button";
import Close from "../Icons/Close";
import useForm from "../../utils/useForm";
import validate from "../../utils/inputValidation";
import { updatePosts } from "../../redux/posts/posts.actions";
import "./form.css";

const Form = ({ setShowForm }) => {
  const [preview, setPreview] = useState(null);

  const submit = () => {
    dispatch(updatePosts({ values, preview }));
    setShowForm(false);
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );
  const dispatch = useDispatch();

  const hideForm = e => {
    if (e.target === e.currentTarget) {
      setShowForm(false);
    }
  };

  return (
    <div className="wrapper" onClick={hideForm}>
      <form className="form">
        <div className="form__close" onClick={() => setShowForm(false)}>
          <Close />
        </div>
        <div className="form__content-wrapper">
          <div className="form__header">Add new</div>
          {preview ? (
            <Preview preview={preview} setPreview={setPreview} />
          ) : (
            <Dropzone setPreview={setPreview} />
          )}
          <Title
            value={values.title}
            onChange={handleChange}
            error={errors.title}
          />
          <Description
            value={values.description}
            onChange={handleChange}
            error={errors.description}
          />
          <Button
            classmodificator="btn_save"
            onClick={handleSubmit}
            text="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
