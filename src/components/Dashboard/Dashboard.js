import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Link} from "react-router-dom";
import classNames from "classnames";
import PostsPage from "./PostsPage"
import chunk from "lodash.chunk"
import "./dashboard.css";

const Dashboard = () => {
  const [page, setPage ] = useState(1)
  const posts = useSelector(store => store);
  const postsPerPage = chunk(posts, 8)
  console.log('postsPerPgae', postsPerPage)

  return (
    <>
    <div className="dashboard">
      <PostsPage posts={posts}/> 
    </div>
    <div> 
      <Link to={`/page?${page-1}`} onClick={() => setPage(prev => prev - 1)}>Prev</Link>
      <Link to={`/page?${page+1}`} onClick={() => setPage(prev => prev + 1)}>Next</Link>
    </div>
    </>
  );
};

export default React.memo(Dashboard);
