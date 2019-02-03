import { getListing } from "./homeServices";
export function priceSort(sort) {
  const listing = getListing();
  let sorted = [];
  if (sort === "asc") {
    sorted = listing.sort((a, b) => a.price - b.price);
  } else {
    sorted = listing.sort((a, b) => b.price - a.price);
  }
  return sorted;
}

export function getOfferTypeFiltered(type) {
  const listings = getListing();
  let filtered = [];
  if (type === 3) {
    filtered = listings;
  } else {
    filtered = listings.filter(item => item.offer_type.id === type);
  }
  return filtered;
}

export function getlistTypeFiltered(type) {
  const listings = getListing();
  let filtered = [];
  if (type === String(0)) {
    filtered = listings;
  } else {
    filtered = listings.filter(item => item.listing_type.id === Number(type));
  }
  return filtered;
}
