const {nextISSTimesForMyLocation, printPassTimes} = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(printPassTimes)
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
