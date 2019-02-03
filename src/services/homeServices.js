export function getListing() {
  return [
    {
      construction_year: 2008,
      id: "233s37hdfdfs",
      name: "625 S. Berendo St",
      price: 2265500,
      address: "625 S. Berendo St Unit 607 Los Angeles, CA 90005",
      beds: 2,
      baths: 2,
      area: 7000,
      offer_type: { id: 1, name: "Rent" },
      listing_type: { id: 1, name: "Condo" },
      city: { id: 1, name: "New York" },
      image:
        "http://aquawealth.com.au/wp-content/uploads/2012/07/1333201135retirement.jpg",
      description: ` Nisi voluptatum error ipsum repudiandae, autem deleniti,
            velit dolorem enim quaerat rerum incidunt sed, qui ducimus!
            Tempora architecto non, eligendi vitae dolorem laudantium
            dolore blanditiis assumenda in eos hic unde.`,
      per_sqr_price: 500
    },
    {
      construction_year: 2010,
      id: "233sddfdfs",
      name: "871 Crenshaw Blvd",
      price: 2264400,
      address: "1 New York Ave, Warners Bay, NSW 2282",
      beds: 2,
      baths: 2,
      area: 9000,
      offer_type: { id: 2, name: "Sale" },
      listing_type: { id: 1, name: "Condo" },
      city: { id: 1, name: "New York" },
      image: "https://cdn.topicuk.co.uk/wp-content/uploads/2018/06/528746.jpg",
      description: ` Nisi voluptatum error ipsum repudiandae, autem deleniti,
          velit dolorem enim quaerat rerum incidunt sed, qui ducimus!
          Tempora architecto non, eligendi vitae dolorem laudantium
          dolore blanditiis assumenda in eos hic unde.`,
      per_sqr_price: 500
    },
    {
      construction_year: 2010,
      id: "233ss27hdfdfs",
      name: "871 Crenshaw Blvd",
      price: 223400,
      address: "1 New York Ave, Warners Bay, NSW 2282",
      beds: 2,
      baths: 2,
      area: 9000,
      offer_type: { id: 1, name: "Rent" },
      listing_type: { id: 1, name: "Condo" },
      city: { id: 1, name: "New York" },
      image: "https://cdn.topicuk.co.uk/wp-content/uploads/2018/06/528746.jpg",
      description: ` Nisi voluptatum error ipsum repudiandae, autem deleniti,
            velit dolorem enim quaerat rerum incidunt sed, qui ducimus!
            Tempora architecto non, eligendi vitae dolorem laudantium
            dolore blanditiis assumenda in eos hic unde.`,
      per_sqr_price: 500
    },
    {
      construction_year: 2010,
      id: "233sdddfs",
      name: "871 Crenshaw Blvd",
      price: 226553400,
      address: "1 New York Ave, Warners Bay, NSW 2282",
      beds: 2,
      baths: 2,
      area: 9000,
      offer_type: { id: 2, name: "Sale" },
      listing_type: { id: 1, name: "Condo" },
      city: { id: 1, name: "New York" },
      image: "https://cdn.topicuk.co.uk/wp-content/uploads/2018/06/528746.jpg",
      description: ` Nisi voluptatum error ipsum repudiandae, autem deleniti,
            velit dolorem enim quaerat rerum incidunt sed, qui ducimus!
            Tempora architecto non, eligendi vitae dolorem laudantium
            dolore blanditiis assumenda in eos hic unde.`,
      per_sqr_price: 500
    },
    {
      construction_year: 2010,
      id: "233sdfsf32sdfdfs",
      name: "871 Crenshaw Blvd",
      price: 223500,
      address: "1 New York Ave, Warners Bay, NSW 2282",
      beds: 2,
      baths: 2,
      area: 9000,
      offer_type: { id: 1, name: "Rent" },
      listing_type: { id: 2, name: "Commercial Building" },
      city: { id: 1, name: "New York" },
      image: "https://cdn.topicuk.co.uk/wp-content/uploads/2018/06/528746.jpg",
      description: ` Nisi voluptatum error ipsum repudiandae, autem deleniti,
            velit dolorem enim quaerat rerum incidunt sed, qui ducimus!
            Tempora architecto non, eligendi vitae dolorem laudantium
            dolore blanditiis assumenda in eos hic unde.`,
      per_sqr_price: 500
    },
    {
      construction_year: 2010,
      id: "233sds7hdfdfs",
      name: "871 Crenshaw Blvd",
      price: 22633500,
      address: "1 New York Ave, Warners Bay, NSW 2282",
      beds: 2,
      baths: 2,
      area: 9000,
      offer_type: { id: 1, name: "Rent" },
      listing_type: { id: 2, name: "Commercial Building" },
      city: { id: 1, name: "New York" },
      image: "https://cdn.topicuk.co.uk/wp-content/uploads/2018/06/528746.jpg",
      description: ` Nisi voluptatum error ipsum repudiandae, autem deleniti,
            velit dolorem enim quaerat rerum incidunt sed, qui ducimus!
            Tempora architecto non, eligendi vitae dolorem laudantium
            dolore blanditiis assumenda in eos hic unde.`,
      per_sqr_price: 500
    },
    {
      construction_year: 2010,
      id: "23safdfs",
      name: "871 Crenshaw Blvd",
      price: 2235500,
      address: "1 New York Ave, Warners Bay, NSW 2282",
      beds: 2,
      baths: 2,
      area: 9000,
      offer_type: { id: 1, name: "Rent" },
      listing_type: { id: 2, name: "Commercial Building" },
      city: { id: 1, name: "New York" },
      image: "https://cdn.topicuk.co.uk/wp-content/uploads/2018/06/528746.jpg",
      description: ` Nisi voluptatum error ipsum repudiandae, autem deleniti,
            velit dolorem enim quaerat rerum incidunt sed, qui ducimus!
            Tempora architecto non, eligendi vitae dolorem laudantium
            dolore blanditiis assumenda in eos hic unde.`,
      per_sqr_price: 500
    }
  ];
}

export function getPropery(id) {
  const listings = getListing();
  return listings.find(item => item.id === id);
}
