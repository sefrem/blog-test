import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import PostsPage from "./PostsPage/PostsPage";
import Pagination from "../Dashboard/Pagination/Pagination";
import chunk from "lodash.chunk";
import "./dashboard.css";

const Dashboard = () => {
  const posts = useSelector(store => store.posts);
  const postsPerPage = chunk(posts, 8);
  return (
      <div className="dashboard mb-124">
        <Route
          path=":page?"
          render={props => <PostsPage posts={postsPerPage} {...props} />}
        />
        <Pagination postsPerPage={postsPerPage} />
      </div>
  );
};

export default React.memo(Dashboard);
