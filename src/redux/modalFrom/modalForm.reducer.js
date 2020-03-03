import * as types from "./modalForm.types";

const modalForm = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL_FORM:
      return !state;
    default:
      return state;
  }
};

export default modalForm;
