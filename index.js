const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

const errorHandling = (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
};

fetchBreedDescription(breedName, errorHandling);
// fetchBreedDescription(breedName, (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// });
