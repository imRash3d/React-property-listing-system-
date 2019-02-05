import axios from "axios";
import config from "../config.json";
export async function addListingTypes(data) {
  return await axios.post(config.api_url + "listing_types.json", data);
}

export async function addCities(data) {
  return await axios.post(config.api_url + "cities.json", data);
}

export async function getListingTypes() {
  const res = await axios.get(config.api_url + "listing_types.json");
  const { data } = res;
  return formatData(data);
}

export async function getCities() {
  const res = await axios.get(config.api_url + "cities.json");
  const { data } = res;
  return formatData(data);
}

export async function getProperty(id) {
  const res = await axios.get(config.api_url + `listings/${id}.json`);
  const { data } = res;
  return data;
}

export async function getListings() {
  const res = await axios.get(config.api_url + "listings.json");
  const { data } = res;
  return formatListingData(data);
}

function formatListingData(data) {
  let list = [];
  for (let c in data) {
    let obj = data[c];
    obj["id"] = c;
    list.push(obj);
  }
  return list;
}
function formatData(data) {
  let list = [];
  for (let c in data) {
    //  console.log(data[c]);
    const obj = {
      id: c,
      name: data[c].name
    };
    list.push(obj);
  }
  return list;
}

export async function saveProperty(data) {
  return await axios.post(config.api_url + "listings.json", data);
}

export async function EditProperty(id, data) {
  return await axios.put(config.api_url + `listings/${id}.json`, data);
}

export async function saveBooking(data) {
  return await axios.post(config.api_url + "booking.json", data);
}

export async function getBookings() {
  const res = await axios.get(config.api_url + "booking.json");
  const { data } = res;
  return formatListingData(data);
}
export async function getBooking(id) {
  const res = await axios.get(config.api_url + `booking/${id}.json`);
  const { data } = res;
  return data;
}
