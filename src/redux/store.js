import { createStore } from "redux";
import postsReducer from "../redux/posts/posts.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { populateState, saveState } from "./localStorage";

const store = createStore(postsReducer, {posts: populateState()}, composeWithDevTools());

store.subscribe(() => {
  console.log('saving the state to localstorage')
  saveState(store.getState().posts);
});

export default store;
