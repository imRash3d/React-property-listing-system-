import React from "react";
import _ from "lodash";
const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemCount / pageSize);

  const pages = _.range(1, pagesCount + 1);
  console.log(pages);
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="site-pagination">
          {/* <a  className="active">
            1
          </a> */}
          {pages.map(page => (
            <li
              className={page === currentPage ? "active" : ""}
              onClick={() => onPageChange(page)}
              key={page}
            >
              {page}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
