const http = require('http');
const weatherStackApiKey = '6bee5362aa65b02a2567ad29f9f921f5';
const place = 'Leimuiden';
const url = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=${place}`;

const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
