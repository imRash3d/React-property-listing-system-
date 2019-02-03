import React from "react";
const Filter = ({ onSelectType, onSortChange, onlistFiltered }) => {
  return (
    <div className="site-section site-section-sm pb-0">
      <div className="container">
        {/* <div className="row">
          <form className="form-search col-md-12">
            <div className="row  align-items-end">
              <div className="col-md-3">
                <label htmlFor="list-types">Listing Types</label>
                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down" />
                  <select
                    name="list-types"
                    id="list-types"
                    className="form-control d-block rounded-0"
                  >
                    <option value="">Condo</option>
                    <option value="">Commercial Building</option>
                    <option value="">Land Property</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="offer-types">Offer Type</label>
                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down" />
                  <select
                    name="offer-types"
                    id="offer-types"
                    className="form-control d-block rounded-0"
                  >
                    <option value="">For Sale</option>
                    <option value="">For Rent</option>
                    <option value="">For Lease</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="select-city">Select City</label>
                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down" />
                  <select
                    name="select-city"
                    id="select-city"
                    className="form-control d-block rounded-0"
                  >
                    <option value="">New York</option>
                    <option value="">Brooklyn</option>
                    <option value="">London</option>
                    <option value="">Japan</option>
                    <option value="">Philippines</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <input
                  type="submit"
                  className="btn btn-success text-white btn-block rounded-0"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </div> */}

        <div className="row">
          <div className="col-md-12">
            <div className="view-options bg-white py-3 px-3 d-md-flex align-items-center">
              <div className="mr-auto">
                <a href="index.html" className="icon-view view-module active">
                  <span className="icon-view_module" />
                </a>
                <a href="view-list.html" className="icon-view view-list">
                  <span className="icon-view_list" />
                </a>
              </div>
              <div className="ml-auto d-flex align-items-center">
                <div>
                  <li
                    onClick={() => onSelectType(3)}
                    className="view-list px-3 border-right active"
                  >
                    All
                  </li>
                  <li
                    onClick={() => onSelectType(1)}
                    className="view-list px-3 border-right"
                  >
                    Rent
                  </li>
                  <li
                    onClick={() => onSelectType(2)}
                    className="view-list px-3"
                  >
                    Sale
                  </li>
                </div>
                <div className="select-wrap mr-4" style={{ width: "170px" }}>
                  <span className="icon icon-arrow_drop_down" />
                  <select
                    onChange={onlistFiltered}
                    className="form-control form-control-sm d-block rounded-0"
                  >
                    <option value="0">Listing Type</option>
                    <option value="1">Condo</option>
                    <option value="2">Commercial Building</option>
                    <option value="3">Land</option>
                  </select>
                </div>
                <div className="select-wrap" style={{ width: "150px" }}>
                  <span className="icon icon-arrow_drop_down" />
                  <select
                    onChange={onSortChange}
                    className="form-control form-control-sm d-block rounded-0"
                  >
                    <option value="">Sort by</option>
                    <option value="asc">Price Ascending</option>
                    <option value="desc">Price Descending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
