import React, { Component } from "react";
import { getListing } from "../../services/homeServices";
import Filter from "../../modules/listFiltering";
import Pagination from "../../modules/paginations";
import Property from "../../components/property";
import { paginate } from "./../../utils/paginate";
class Home extends Component {
  state = {
    listings: getListing(),
    pageSise: 2,
    currentPage: 1
  };
  handlePageChange = page => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };
  render() {
    const { listings: allListing, pageSise, currentPage } = this.state;
    const count = allListing.length;
    const listings = paginate(allListing, currentPage, pageSise);
    // console.log(listings);
    return (
      <React.Fragment>
        <Filter />
        <div className="site-section site-section-sm bg-light">
          <div className="container">
            <div className="row mb-5">
              {listings.map(item => (
                <Property key={item.id} property={item} />
              ))}
            </div>
            <Pagination
              itemCount={count}
              pageSize={pageSise}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
