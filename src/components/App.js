import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import "../styles/normalize.css";
import "./App.css";
import posts from "../assets/posts";

const App = () => {
  console.log(posts);
  return (
    <div className="app">
      <Header />
      <Hero />

      <div className="dashboard">
        <div className="dashboard__content">
          {posts.map((post, index) => (
            <div
              className={index === 4 ? "post post_wide" : "post"}
              key={index}
            >
              <img
                className={
                  index === 4 ? "post__img post__img_wide" : "post__img"
                }
                src={post.image}
              />
              <div
                className={
                  index === 4 ? "post__title post__title_wide" : "post__title"
                }
              >
                {post.title}
              </div>
              <div
                className={
                  index === 4 ? "post__text post__text_wide" : "post__text"
                }
              >
                {post.text}
              </div>
              {post.tag ? <div className="post__tag">{post.tag}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
