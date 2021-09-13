const request = require('request');
const weatherStackApiKey = '6bee5362aa65b02a2567ad29f9f921f5';
const getWeatherByAddress = (place, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=${place}`;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to the Location services', undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = getWeatherByAddress;
