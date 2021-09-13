const MAP_BOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const request = require('request');

const getInfoByPlace = (address, callback) => {
  const url =
    MAP_BOX_BASE_URL +
    `/${encodeURIComponent(
      address
    )}.json?access_token=pk.eyJ1IjoicGFzY2FsdmRob2VrIiwiYSI6ImNrc3JhYXhiajBrcGkyd24xMnY4ZHFzb3kifQ._xzVTP-GmJMz7XHNVrKZ6A&limit=1`;

  request({ url, json: true }, ({ error, body }) => {
    if (error) {
      callback('Unable to connect to the Location services', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find any information for the given adress, please try another one', undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = getInfoByPlace;
