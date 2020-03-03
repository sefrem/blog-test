import React, { useEffect } from "react";
import Post from "./Post/Post";
import Pagination from "./Pagination/Pagination";
import queryString from "query-string";
import PropTypes from 'prop-types';
import "./postsPage.css";

const PostsPage = ({ postsPerPage, ...props }) => {
  useEffect(() => {
    const element = document.getElementById("anchor");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const values = queryString.parse(props.location.search);
  const pageNumber = Number(values.page);
  
  return (
    <>
      <ul className="postsPage">
        {postsPerPage[pageNumber - 1 || 0].map((post, index) => (
          <Post post={post} index={index} key={index} />
        ))}
      </ul>
      <Pagination postsPerPage={postsPerPage} pageNumber={pageNumber} />
    </>
  );
};

export default PostsPage;

PostsPage.propTypes = {
  postsPerPage: PropTypes.array.isRequired
}