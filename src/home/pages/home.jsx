import React, { Component } from "react";
import property_img from "../../assets/images/img_3.jpg";
import Filter from "../../modules/listFiltering";
import Slider from "./homePage/slider";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Pagination from "../../modules/paginations";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="site-wrap">
        <Navbar />
        <Slider />
        <Filter />
        <div className="site-section site-section-sm bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="property-entry h-100">
                  <a
                    href="property-details.html"
                    className="property-thumbnail"
                  >
                    <div className="offer-type-wrap">
                      <span className="offer-type bg-danger">Sale</span>
                      <span className="offer-type bg-success">Rent</span>
                    </div>
                    <img src={property_img} className="img-fluid" />
                  </a>
                  <div className="p-4 property-body">
                    <a href="#" className="property-favorite">
                      <span className="icon-heart-o" />
                    </a>
                    <h2 className="property-title">
                      <a href="property-details.html">625 S. Berendo St</a>
                    </h2>
                    <span className="property-location d-block mb-3">
                      <span className="property-icon icon-room" /> 625 S.
                      Berendo St Unit 607 Los Angeles, CA 90005
                    </span>
                    <strong className="property-price text-primary mb-3 d-block text-success">
                      $2,265,500
                    </strong>
                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span className="property-specs">Beds</span>
                        <span className="property-specs-number">
                          2 <sup>+</sup>
                        </span>
                      </li>
                      <li>
                        <span className="property-specs">Baths</span>
                        <span className="property-specs-number">2</span>
                      </li>
                      <li>
                        <span className="property-specs">SQ FT</span>
                        <span className="property-specs-number">7,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="property-entry h-100">
                  <a
                    href="property-details.html"
                    className="property-thumbnail"
                  >
                    <div className="offer-type-wrap">
                      <span className="offer-type bg-danger">Sale</span>
                      <span className="offer-type bg-success">Rent</span>
                    </div>
                    <img src={property_img} className="img-fluid" />
                  </a>
                  <div className="p-4 property-body">
                    <a href="#" className="property-favorite active">
                      <span className="icon-heart-o" />
                    </a>
                    <h2 className="property-title">
                      <a href="property-details.html">871 Crenshaw Blvd</a>
                    </h2>
                    <span className="property-location d-block mb-3">
                      <span className="property-icon icon-room" /> 1 New York
                      Ave, Warners Bay, NSW 2282
                    </span>
                    <strong className="property-price text-primary mb-3 d-block text-success">
                      $2,265,500
                    </strong>
                    <ul className="property-specs-wrap mb-3 mb-lg-0">
                      <li>
                        <span className="property-specs">Beds</span>
                        <span className="property-specs-number">
                          2 <sup>+</sup>
                        </span>
                      </li>
                      <li>
                        <span className="property-specs">Baths</span>
                        <span className="property-specs-number">2</span>
                      </li>
                      <li>
                        <span className="property-specs">SQ FT</span>
                        <span className="property-specs-number">1,620</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
