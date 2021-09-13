const getWeatherByAddress = require('./utils/weatherCall');
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (reg, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Pascal van den Hoek',
  });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Title', name: 'Pascal' });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Not really static help page anymore',
    helpMessage: `this is an help message`,
    name: 'Pascal',
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    res.send('<h1> search is not provided </h1>');
  } else {
    res.send({ products: [] });
  }
});

app.get('/weather', (req, res) => {
  console.log(req.query);
  if (req.query.address) {
    getWeatherByAddress(req.query.address, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        res.render('weather-detail', {
          title: 'Weather Detail',
          location: data.location.name,
          forecast: data.current.weather_descriptions,
          forecast_image: data.current.weather_icons,
          name: 'Pascal',
        });
      }
    });
  } else {
    res.render('weather', { title: 'Weather', name: 'Pascal' });
  }
});

app.get('/api/weather', (req, res) => {
  console.log(req.query);
  if (req.query.address) {
    getWeatherByAddress(req.query.address, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        res.send({
          title: 'Weather Detail',
          location: data.location.name,
          forecast: data.current.weather_descriptions,
          forecast_image: data.current.weather_icons,
          name: 'Pascal',
        });
      }
    });
  } else {
    res.send({ title: 'Weather', name: 'Pascal' });
  }
});

app.get('/weather', (req, res) => {
  res.render('weather', {
    title: 'Weather',
    location: 'Leimuiden',
    forecast: 'Sunny',
    name: 'Pascal',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Help article not found',
    name: 'Pascal',
  });
});

app.get('*', (req, res) => {
  res.render('404', { title: '404', errorMessage: 'Current page not found.', name: 'Pascal' });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
