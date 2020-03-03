import * as types from "./posts.types"
import { populateState } from "../localStorage"

export const updatePosts = payload => {
    return {
      type: types.UPDATE_POSTS,
      payload
    }
  }

export const getPosts = () => {
  return {
    type: types.GET_POSTS,
    payload: populateState()
  }
}
