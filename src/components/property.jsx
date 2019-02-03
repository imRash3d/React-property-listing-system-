import React from "react";
import { Link } from "react-router-dom";
const Property = props => {
  const { property } = props;
  console.log(property);
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="property-entry h-100">
        <Link
          to={`/property/details/${property.id}`}
          className="property-thumbnail"
        >
          <div className="offer-type-wrap">
            {property.offer_type.name === "Rent" && (
              <span className="offer-type bg-danger">
                {property.offer_type.name}
              </span>
            )}
            {property.offer_type.name === "Sale" && (
              <span className="offer-type bg-success">
                {property.offer_type.name}
              </span>
            )}
          </div>
          <img
            src={property.image}
            alt=""
            className="img-fluid property_img-container"
          />
        </Link>
        <div className="p-4 property-body">
          <Link
            to={`/property/details/${property.id}/details`}
            className="property-favorite"
          >
            <span className="icon-heart-o" />
          </Link>

          <h2 className="property-title">
            <Link to={`/property/details/${property.id}/details`}>
              {property.name}
            </Link>
          </h2>
          <span className="property-location d-block mb-3">
            <span className="property-icon icon-room" /> {property.address}
          </span>
          <strong className="property-price text-primary mb-3 d-block text-success">
            ${property.price}
          </strong>
          <ul className="property-specs-wrap mb-3 mb-lg-0">
            <li>
              <span className="property-specs">Beds</span>
              <span className="property-specs-number">
                {property.beds} <sup>+</sup>
              </span>
            </li>
            <li>
              <span className="property-specs">Baths</span>
              <span className="property-specs-number"> {property.baths}</span>
            </li>
            <li>
              <span className="property-specs">SQ FT</span>
              <span className="property-specs-number">{property.area}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Property;
