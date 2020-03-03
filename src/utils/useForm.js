import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    if (e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = e => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    setErrors(errors => ({ ...errors, [e.target.name]: "" }));
  };

  useEffect(() => {
    if (!Object.keys(errors).length && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};
export default useForm;
