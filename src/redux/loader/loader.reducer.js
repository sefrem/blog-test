import * as types from "./loader.types";

const initialState = {
  posts: true
};
const loader = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_POSTS_LOADER:
      return {
        ...state,
        posts: !state.posts
      };
    default:
      return state;
  }
};

export default loader
