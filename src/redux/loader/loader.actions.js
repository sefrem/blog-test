import * as types from "./loader.types"

export const togglePostsLoader = () => {
    return {
      type: types.TOGGLE_POSTS_LOADER
    }
  }