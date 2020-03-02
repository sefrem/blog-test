import React from "react";
import classNames from "classnames";
import "./post.css";

const Post = ({post, index}) => {
    return (
        <li
          className={classNames("post", { 'post_featured': index === 4 })}
        >
          <img
            className={classNames("post__img", {
              'post__img_featured': index === 4
            })}
            src={post.image || "../../img/default_blog.png"}
          />
          <div
            className={classNames("post__title", {
              'post__title_featured': index === 4
            })}
          >
            {post.title}
          </div>
          <div
            className={classNames("post__text", {
              'post__text_featured': index === 4
            })}
          >
            {post.text}
          </div>
          {post.tag && <div className="post__tag">{post.tag}</div>}
        </li>
    )
}

export default Post