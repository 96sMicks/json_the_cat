const request = require('request');

const commandlineInput = process.argv.slice(2);
const catId = commandlineInput[0];

const URL = "https://api.thecatapi.com/v1/breeds/search";

const catSearch = `${URL}?q=${catId}`;

const response = request.get(catSearch, (error, response, body) => {
  
  if (error) {
    console.log(error);
    return;
  }

  const dataArray = JSON.parse(body);
  
  if (dataArray.length > 0) {
    const objectify = dataArray[0];
    console.log(objectify.description);
  } else {
    console.log("Request Failed: This cat doesn't exist");
  }
  
});