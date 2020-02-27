import { createStore, applyMiddleware } from "redux";
import postsReducer from "../redux/posts/posts.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import posts from "../assets/posts";
import { loadState, saveState } from "./localStorage";

saveState(posts);  //убрать, когда сделаю добавление поста по кнопке, там же и сделаю добавление в локалсторэдж
const persistedState = loadState();

const store = createStore(postsReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveState(store.getState);
});

export default store;
