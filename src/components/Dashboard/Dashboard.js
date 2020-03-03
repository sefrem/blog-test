import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import PostsPage from "./PostsPage/PostsPage";
import { getPosts } from "../../redux/posts/posts.actions";
import { togglePostsLoader } from "../../redux/loader/loader.actions";
import chunk from "lodash.chunk";
import "./dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(togglePostsLoader());
  }, []);
  const posts = useSelector(store => store.posts);
  const loadingPosts = useSelector(store => store.loader.posts);

  const postsPerPage = chunk(posts, 8);
  
  return (
    <>
      {loadingPosts ? (
        <div>Loading</div>
      ) : (
        <div className="dashboard mb-124">
          <Route
            path=":page?"
            render={props => <PostsPage postsPerPage={postsPerPage} {...props} />}
          />
        </div>
      )}
    </>
  );
};

export default React.memo(Dashboard);
