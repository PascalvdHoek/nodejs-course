console.log('Client side javascript is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input#search');
const contentBlock = document.getElementById('content');
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;

  if (location) {
    fetch('/api/weather?address=' + location).then((response) => response.json().then(({data, forecast, forecast_image}) => {
contentBlock.innerHTML = `
    <p>The weather in ${location} is ${forecast[0]}.</p>
    <img src="${forecast_image[0]}"> <br>
    <p> The current temperature is ${data.current.temperature} degrees. 
    It feels like ${data.current.feelslike} degrees.</p>
    <h2>Have a nice day</h2>` 
    }));
  } else {
    console.log('You should enter an valid location');
  }
  console.log('testing!');
});
