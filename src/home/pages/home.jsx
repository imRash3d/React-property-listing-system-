import React, { Component } from "react";
import { getListing } from "../../services/homeServices";
import Filter from "../../modules/listFiltering";
import Pagination from "../../modules/paginations";
import Property from "../../components/property";
import { paginate } from "./../../utils/paginate";
import { getListings } from "../../services/propertyService";
import {
  priceSort,
  getOfferTypeFiltered,
  getlistTypeFiltered
} from "./../../services/filterService";
class Home extends Component {
  state = {
    listings: [],
    original: [],
    pageSise: 3,
    currentPage: 1
  };

  async componentDidMount() {
    this.setState({
      listings: await getListings(),
      original: await getListings()
    });
  }
  handlePageChange = page => {
    console.log(page);
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
    const { listings: allListing, pageSise, currentPage } = this.state;
    const count = allListing.length;
    const listings = paginate(allListing, currentPage, pageSise);
    // console.log(listings);
    return (
      <React.Fragment>
        <Filter
          onSortChange={this.priceSortChange}
          onSelectType={this.handleTypeChnage}
          onlistFiltered={this.handeLisFiltered}
        />
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
