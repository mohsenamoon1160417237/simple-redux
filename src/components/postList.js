import {connect} from "react-redux";
import {useEffect, useState} from "react";

import {fetchPosts, selectPost} from "../actions";
import PostDetail from "./postDetail";



const PostList = ({posts, fetchPosts}) => {

  const [postId, setPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = posts.map(({id, title, body}, index) => {
    return (
      <div className="post" key={id}>
        <h5>{index + 1}: {title}</h5>
        <p>{body}</p>
        <button onClick={() => setPostId(id)}>Select</button>
      </div>
    );
  });

  return (
    <div className="posts-list">
      <h4>Posts</h4>
      {postId === null ? null: <PostDetail postId={postId}/>}
      <div>{renderPosts}</div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}


export default connect(mapStateToProps, {fetchPosts})(PostList);
