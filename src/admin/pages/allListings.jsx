import React, { Component } from "react";
import { Link } from "react-router-dom";
import Filter from "./../../modules/listFiltering";
import Pagination from "./../../modules/paginations";
import { paginate } from "./../../utils/paginate";
import {
  priceSort,
  getOfferTypeFiltered,
  getlistTypeFiltered
} from "../../services/filterService";
import { getListings } from "../../services/propertyService";
class AllListing extends Component {
  state = {
    listings: [],
    pageSise: 3,
    currentPage: 1,
    original: []
  };
  async componentDidMount() {
    this.setState({
      listings: await getListings(),
      original: await getListings()
    });
  }
  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  priceSortChange = e => {
    const sort = e.target.value;
    const sorted = priceSort(sort, this.state.original);
    this.setState({ listings: sorted, currentPage: 1 });
  };
  handleTypeChnage = type => {
    const filtered = getOfferTypeFiltered(type, this.state.original);
    this.setState({ listings: filtered });
  };

  handeLisFiltered = e => {
    const type = e.target.value;
    console.log(type);
    const filtered = getlistTypeFiltered(type, this.state.original);
    this.setState({ listings: filtered });
  };
  render() {
    const { listings: allListings, pageSise, currentPage } = this.state;
    // const filtered =
    console.log(allListings);
    const count = allListings.length;
    const listings = paginate(allListings, currentPage, pageSise);

    return (
      <React.Fragment>
        <div className="filtering">
          <Filter
            onSortChange={this.priceSortChange}
            onSelectType={this.handleTypeChnage}
            onlistFiltered={this.handeLisFiltered}
          />
        </div>
        <div className="container">
          <div className="row" />
          <div className="row">
            <div className="col-md-12 admin-table">
              <h3>
                All Listing
                <Link className=" add-btn btn btn-primary" to="/admin/add">
                  <i className=" fas fa-plus" /> Add New
                </Link>
              </h3>
              <table className="  table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Area</th>
                    <th>Offer Type </th>
                    <th>Listing Type </th>
                    <th>Baths</th>
                    <th>Beds</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map(item => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} alt="" />
                      </td>
                      <td> {item.name} </td>
                      <td> {item.price} </td>
                      <td> {item.area} </td>
                      <td> {item.offer_type.name} </td>
                      <td> {item.listing_type.name} </td>
                      <td> {item.baths} </td>
                      <td> {item.beds} </td>
                      <td>
                        <Link to={`/admin/property/details/${item.id}`}>
                          <i className="fas mr-3 pointer fa-eye" />
                        </Link>
                        <Link to={`/admin/edit/${item.id}`}>
                          <i className="fas mr-3  pointer fa-pencil-alt" />
                        </Link>

                        <i className="fas mr-3  pointer fa-trash-alt" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Pagination
          itemCount={count}
          pageSize={pageSise}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default AllListing;
