export function priceSort(sort, items) {
  const listing = items;
  let sorted = [];
  if (sort === "asc") {
    sorted = listing.sort((a, b) => a.price - b.price);
  } else {
    sorted = listing.sort((a, b) => b.price - a.price);
  }
  return sorted;
}

export function getOfferTypeFiltered(type, items) {
  const listings = items;
  let filtered = [];
  if (type === 3) {
    filtered = listings;
  } else {
    filtered = listings.filter(item => item.offer_type.id === type);
  }
  return filtered;
}

export function getlistTypeFiltered(type, items) {
  const listings = items;
  let filtered = [];
  if (type === String(0)) {
    filtered = listings;
  } else {
    filtered = listings.filter(item => item.listing_type.id === String(type));
  }
  return filtered;
}
