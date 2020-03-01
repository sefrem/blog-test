import React from "react"
import classNames from "classnames";

const PostsPage = ({posts}) => {
    return (
        <ul className="dashboard__content">
        {posts.map((post, index) => (
            <li
              className={classNames("post", { "post_featured": index === 4 })}
              key={index}
            >
              <img
                className={classNames("post__img", {
                  "post__img_featured": index === 4
                })}
                src={post.image || "../../img/default_blog.png"}
              />
              <div
                className={classNames("post__title", {
                  "post__title_featured": index === 4
                })}
              >
                {post.title}
              </div>
              <div
                className={classNames("post__text", {
                  "post__text_featured": index === 4
                })}
              >
                {post.text}
              </div>
              {post.tag && <div className="post__tag">{post.tag}</div>}
            </li>
          ))}
      </ul>
    )
}

export default PostsPage