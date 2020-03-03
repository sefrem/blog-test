export default function validate (values) {
  let errors = {};
  if (!values.title) {
    errors.title = "Title should not be empty";
  }
  if (!values.description) {
    errors.description = "Please enter some text";
  }
  return errors;
};
