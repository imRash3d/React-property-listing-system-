import React from "react";
import { Link } from "react-router-dom";
const Sidebar = props => {
  return (
    <div
      className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
      id="navigation"
    >
      <div className="navi">
        <ul>
          <li className="active">
            <Link to="/admin/dashboard">
              <i className="fa fa-home" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">Dashboard</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/admin/places">
              <i className="fa fa-tasks" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">Places</span>
            </Link>
          </li> */}
          <li>
            <Link to="/admin/listings">
              <i className="fas fa-list-alt " aria-hidden="true" />
              <span className="hidden-xs hidden-sm">All Listing</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/booking">
              <i className="fas fa-address-book" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">Booking</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/add">
              <i className="fas fa-plus-square" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">Add Listing</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
