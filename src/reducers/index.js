import {combineReducers} from "redux";

import PostListReducer from "./postList";
import SelectPostReducer from "./selectPost";


export default combineReducers({
  posts: PostListReducer,
  selectedPost: SelectPostReducer
});
