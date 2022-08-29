import jsonPlaceholder from "../Apis/jsonPlaceholder";


export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
}


export const selectPost = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/posts/${id}`);
  dispatch({
    type: "SELECT_POST",
    payload: response.data
  });
}
