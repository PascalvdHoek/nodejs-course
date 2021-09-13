const fs = require('fs');
const FILE_NAME = '1-json.json'

const dataBuffer = fs.readFileSync(FILE_NAME)

let dataObj = JSON.parse(dataBuffer);

dataObj.name = 'Pascal'
dataObj.planet= 'Not Earth'
dataObj.age = 24

fs.writeFileSync(FILE_NAME, JSON.stringify(dataObj))


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);


// const bookParsed = JSON.parse(bookJson)


// fs.writeFileSync('1-json.json', bookJson);

// const data = fs.readFileSync('1-json.json')

// console.log(JSON.parse(data))