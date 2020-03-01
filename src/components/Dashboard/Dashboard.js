import React from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import PostsPage from "./PostsPage/PostsPage";
import chunk from "lodash.chunk";
import "./dashboard.css";

const Dashboard = () => {
  const posts = useSelector(store => store);
  const postsPerPage = chunk(posts, 8);
  return (
    <>
      <div className="dashboard">
        <Route
          path=":page?"
          render={props => <PostsPage posts={postsPerPage} {...props} />}
        />
      </div>
      <div>
        {postsPerPage.map((page, index) => {
          return (
            <Link to={`?page=${index + 1}`} key={index}>
              {index + 1}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Dashboard);
