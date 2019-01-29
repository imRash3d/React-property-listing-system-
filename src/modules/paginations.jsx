import React from "react";
const Pagination = () => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="site-pagination">
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <span>...</span>
          <a href="#">10</a>
        </div>
      </div>
    </div>
  );
};

export default Pagination;