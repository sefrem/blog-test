import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import "./pagination.css";

const Pagination = ({ pageNumber, postsPerPage }) => {
  
  return (
    <div className="pagination">
      {postsPerPage.map((posts, index) => (
        <Link
          className={classNames("pagination__link", {
            "pagination__link_active": index === pageNumber-1
          })}
          to={`?page=${index + 1}`}
          key={index}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  postsPerPage: PropTypes.array.isRequired
}