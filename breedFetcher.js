const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = "https://api.thecatapi.com/v1/breeds/search";

  const catSearch = `${URL}?q=${breedName}`;

  request.get(catSearch, (error, response, body) => {
    if (error) {
      callback(error);
    }

    const dataArray = JSON.parse(body);

    if (dataArray[0]) {
      const description = dataArray[0].description;
      callback(null, description);
    } else {
      callback("Request Failed: This cat doesn't exist.");
    }
  });
};

module.exports = { fetchBreedDescription };
