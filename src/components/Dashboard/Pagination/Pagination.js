import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./pagination.css";

const Pagination = ({ postsPerPage }) => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="pagination">
      {postsPerPage.map((posts, index) => (
        <Link
          className={classNames("pagination__link", {
            "pagination__link_active": index === activeLink
          })}
          to={`?page=${index + 1}`}
          key={index}
          data-id={index}
          onClick={e => setActiveLink(+e.target.dataset.id)}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
