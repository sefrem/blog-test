import { createStore } from "redux";
import rootReducer from "../redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { saveState } from "./localStorage";

const store = createStore(rootReducer, 
  composeWithDevTools());

store.subscribe(() => {
  saveState(store.getState().posts);
});


export default store;
