import * as types from "./posts.types";
import initialPosts from "../../assets/posts";

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_POSTS:
      return { state };
    default:
      return state;
  }
};

export default postsReducer;
