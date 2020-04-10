import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsState } from "../../redux/posts/posts.utils"
import { getPostsLoader } from "../../redux/loader/loader.utils"
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
  const posts = useSelector(store => getPostsState(store));
  const loadingPosts = useSelector(store => getPostsLoader(store));

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
