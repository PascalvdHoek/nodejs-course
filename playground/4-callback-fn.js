setTimeout(() => {
  console.log('Two seconds are up');
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter((name) => name.length <= 4);

console.log(shortNames);

const geocode = (adress, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longtitude: 0,
    };
    callback(data);
  }, 2000);
};

const data = geocode('Philadelphia', (data) => {
  console.log(data);
});

const add = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1 + num2);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
