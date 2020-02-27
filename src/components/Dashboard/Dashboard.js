import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import "./dashboard.css";

const Dashboard = () => {
  const posts = useSelector(store => store)
  
  return (
    <div className="dashboard">
      <div className="dashboard__content">
        {posts.map((post, index) => (
          <div
            className={classNames("post", { post_wide: index === 4 })}
            key={index}
          >
            <img
              className={classNames("post__img", {
                post__img_wide: index === 4
              })}
              src={post.image}
            />
            <div
              className={classNames("post__title", {
                post__title_wide: index === 4
              })}
            >
              {post.title}
            </div>
            <div
              className={classNames("post__text", {
                post__text_wide: index === 4
              })}
            >
              {post.text}
            </div>
            {post.tag ? <div className="post__tag">{post.tag}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
