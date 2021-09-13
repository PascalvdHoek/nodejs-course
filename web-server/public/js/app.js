console.log('Client side javascript is loaded');

fetch('/api/weather?address=boston').then((response) => response.json().then(console.log));

const weatherForm = document.querySelector('form');
const search = document.querySelector('input#search');
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;

  if (location) {
    fetch('/api/weather?address=' + location).then((response) => response.json().then(console.log));
  } else {
    console.log('You should enter an valid location');
  }
  console.log('testing!');
});
