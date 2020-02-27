import * as types from "./posts.types"

export const updatePosts = payload => {
    return {
      type: types.UPDATE_POSTS,
      payload
    }
  }