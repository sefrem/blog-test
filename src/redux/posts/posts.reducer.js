import * as types from "./posts.types";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_POSTS:
      const newPost = {
        image: action.payload.preview,
        title: action.payload.values.title,
        text: action.payload.values.description
      };
      const newState = [...state];
      newState.push(newPost);
      return newState
    case types.GET_POSTS:
      return [...state, ...action.payload.slice()];
    default:
      return state;
  }
};

export default postsReducer;
