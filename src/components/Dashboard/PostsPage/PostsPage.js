import React from "react";
import Post from "./Post/Post";
import queryString from "query-string";
import "./postsPage.css";

const PostsPage = props => {
  const values = queryString.parse(props.location.search);
  const pageNumber = values.page;
  return (
    <ul className="posts">
      {props.posts[pageNumber - 1 || 0].map((post, index) => (
        <Post post={post} index={index} key={index} />
      ))}
    </ul>
  );
};

export default PostsPage;
