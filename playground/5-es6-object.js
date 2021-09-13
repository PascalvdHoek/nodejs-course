// Object property shorthand

// const name = 'Pascal';

// const userAge = 24;

// const user = { name: name, age: userAge, location: 'Leimuiden' };

const product = {
  name: 'Red Notebook',
  price: 34,
  stock: 342,
  salePrice: undefined,
};

const { price, stock, ...rest } = product;

console.log(price, stock, rest);

console.log(product);
