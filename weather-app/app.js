const getWeatherByAddress = require('./utils/weatherCall');

const input = process.argv[2];
if (input) {
  getWeatherByAddress(input, (error, data) => {
    if (error) {
      return console.log(error);
    }

    console.log(data);
  });
} else {
  console.log('Please provide an address please, like node app.js "New York" ');
}
