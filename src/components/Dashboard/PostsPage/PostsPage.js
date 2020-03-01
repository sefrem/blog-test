import React from "react";
import classNames from "classnames";
import "./postsPage.css";
import queryString from "query-string";

const PostsPage = props => {
  const { posts } = props;
  const values = queryString.parse(props.location.search);
  let pageNumber = values.page;
  return (
    <ul className="posts">
      {posts[pageNumber - 1 || 0].map((post, index) => (
        <li
          className={classNames("post", { 'post_featured': index === 4 })}
          key={index}
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
      ))}
    </ul>
  );
};

// return (
//     <ul className="posts">
//     {posts[0].map((post, index) => (
//         <li
//           className={classNames("post", { "post_featured": index === 4 })}
//           key={index}
//         >
//           <img
//             className={classNames("post__img", {
//               "post__img_featured": index === 4
//             })}
//             src={post.image || "../../img/default_blog.png"}
//           />
//           <div
//             className={classNames("post__title", {
//               "post__title_featured": index === 4
//             })}
//           >
//             {post.title}
//           </div>
//           <div
//             className={classNames("post__text", {
//               "post__text_featured": index === 4
//             })}
//           >
//             {post.text}
//           </div>
//           {post.tag && <div className="post__tag">{post.tag}</div>}
//         </li>
//       ))}
//   </ul>
// )

export default PostsPage;
