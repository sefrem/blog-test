import * as types from "./posts.types";

const initialState = {
  posts: []
}
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_POSTS:
      const newPost = {
        image: action.payload.preview,
        title: action.payload.values.title,
        text: action.payload.values.description,
      }
      const newState = [...state.posts];
      newState.push(newPost);
      return {
        ...state,
        posts: newState
      }
    default:
      return state;
  }
};

export default postsReducer;
