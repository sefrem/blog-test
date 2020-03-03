import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import "./post.css";

const Post = ({post, index}) => {
  const featuredCondition = index === 4 ? true : false;
    return (
        <li
          className={classNames("post", { 'post_featured': featuredCondition })}
        >
          <img
            className={classNames("post__img", {
              'post__img_featured': featuredCondition
            })}
            src={post.image || "/src/assets/img/default_blog.png"}
          />
          <div
            className={classNames("post__title", {
              'post__title_featured': featuredCondition
            })}
          >
            {post.title}
          </div>
          <div
            className={classNames("post__text", {
              'post__text_featured': featuredCondition
            })}
          >
            {post.text}
          </div>
          {post.tag && <div className="post__tag">{post.tag}</div>}
        </li>
    )
}

export default Post

Post.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}