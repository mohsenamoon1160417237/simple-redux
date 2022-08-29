

const SelectPostReducer = (post = null, action) => {
  switch (action.type) {
    case "SELECT_POST":
      return action.payload;
    default:
      return post;
  }
}

export default SelectPostReducer;
