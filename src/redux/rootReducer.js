import { combineReducers } from 'redux'
import posts from "./posts/posts.reducer"

const reducerApp = combineReducers({
  posts
  })
  
  export default reducerApp