import { combineReducers } from "redux";
import posts from "./posts/posts.reducer";
import loader from "./loader/loader.reducer";
import modalForm from "./modalFrom/modalForm.reducer";

const reducerApp = combineReducers({
  posts,
  loader,
  modalForm
});

export default reducerApp;
