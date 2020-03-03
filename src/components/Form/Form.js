import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Dropzone from "./Dropzone/Dropzone";
import FormInput from "./FormInput/FormInput";
import FormTextarea from "./FormTextarea/FormTextarea";
import FormField from "../UI/FormField/FormField";
import Preview from "./Preview/Preview";
import Button from "../UI/Button/Button";
import useForm from "../../utils/useForm";
import validate from "../../utils/inputValidation";
import { updatePosts } from "../../redux/posts/posts.actions";
import { toggleModalForm } from "../../redux/modalFrom/modalFrom.actions";
import "./form.css";

const Form = () => {
  const [preview, setPreview] = useState(null);

  const submit = () => {
    dispatch(updatePosts({ values, preview }));
    dispatch(toggleModalForm());
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );
  const dispatch = useDispatch();

  const hideForm = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModalForm());
    }
  };

  return (
    <div className="wrapper" onClick={hideForm}>
      <form className="form">
        <div
          className="form__close"
          onClick={() => dispatch(toggleModalForm())}
        >
          <img src="/src/assets/icons/close.svg" alt="close" />
        </div>
        <div className="form__content-wrapper">
          <div className="form__header">Add new</div>
          {preview ? (
            <Preview preview={preview} setPreview={setPreview} />
          ) : (
            <Dropzone setPreview={setPreview} />
          )}
          <FormField
            error={errors.title}
            id="title"
            name="Title"
            children={
              <FormInput
                value={values.title}
                onChange={handleChange}
                error={errors.title}
              />
            }
          />
          <FormField
            error={errors.description}
            id="description"
            name="Description"
            children={
              <FormTextarea
                value={values.description}
                onChange={handleChange}
                error={errors.description}
              />
            }
          />
          <Button className="btn btn_save" onClick={handleSubmit} text="Save" />
        </div>
      </form>
    </div>
  );
};

export default Form;
