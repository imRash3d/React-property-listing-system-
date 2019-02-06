import React, { Component } from "react";
import { getProperty } from "../../services/propertyService";
class PropertyDetails extends Component {
  state = {
    property: {}
  };
  async componentDidMount() {
    const property_id = this.props.match.params.id;
    if (property_id) {
      const property = await getProperty(property_id);
      this.setState({
        property
      });
    }
  }

  render() {
    const { property } = this.state;
    console.log(property);
    return (
      <React.Fragment>
        <div className="site-section site-section-sm">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div>
                  <div className="slide-one-item home-slider ">
                    <div>
                      <img
                        src={property.image}
                        alt=""
                        style={{ width: "100%" }}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white property-body border-bottom border-left border-right">
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <strong className="text-success h1 mb-3">
                        ${property.price}
                      </strong>
                    </div>
                    <div className="col-md-6">
                      <ul className="property-specs-wrap mb-3 mb-lg-0  float-lg-right">
                        <li>
                          <span className="property-specs">Beds</span>
                          <span className="property-specs-number">
                            {property.beds} <sup>+</sup>
                          </span>
                        </li>
                        <li>
                          <span className="property-specs">Baths</span>
                          <span className="property-specs-number">
                            {property.baths}
                          </span>
                        </li>
                        <li>
                          <span className="property-specs">SQ FT</span>
                          <span className="property-specs-number">
                            {property.area}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                      <span className="d-inline-block text-black mb-0 caption-text">
                        Home Type
                      </span>
                      {property.listing_type && (
                        <strong className="d-block">
                          {property.listing_type.name}
                        </strong>
                      )}
                    </div>
                    <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                      <span className="d-inline-block text-black mb-0 caption-text">
                        Year Built
                      </span>
                      <strong className="d-block">
                        {property.construction_year}
                      </strong>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center border-bottom border-top py-3">
                      <span className="d-inline-block text-black mb-0 caption-text">
                        Price/Sqft
                      </span>
                      <strong className="d-block">
                        ${property.per_sqr_price}
                      </strong>
                    </div>
                  </div>
                  <h2 className="h4 text-black">More Info</h2>
                  <p>{property.description}</p>

                  <div className="row no-gutters mt-5">
                    <div className="col-12">
                      <h2 className="h4 text-black mb-3">Gallery</h2>
                    </div>
                    {/* <div className="col-sm-6 col-md-4 col-lg-3">
                      <a href={property.image} className="image-popup gal-item">
                        <img
                          src={property.image}
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div> */}
                    {/* <div className="col-sm-6 col-md-4 col-lg-3">
                      <a href={property.image} className="image-popup gal-item">
                        <img
                          src={property.image}
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white widget border rounded">
                  <h3 className="h4 text-black widget-title mb-3">
                    Contact Info
                  </h3>
                  <p>{property.contact_info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PropertyDetails;
