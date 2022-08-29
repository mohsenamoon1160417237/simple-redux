import {useEffect} from "react";
import {connect} from "react-redux";

import {selectPost} from "../actions";


const PostDetail = ({selectedPost, postId, selectPost}) => {
  useEffect(() => {
    selectPost(postId);
  }, [postId]);

  const renderPost = (selectedPost) => {
    const {title, body} = selectedPost;
    return (
      <>
        <h4>{title}</h4>
        <p>{body}</p>
      </>
    );
  }

  return (
    <div className="selected-post">
      <h3>Selected post</h3>
      {selectedPost === null ? null : renderPost(selectedPost)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedPost: state.selectedPost
  };
}

export default connect(mapStateToProps, {selectPost})(PostDetail);
