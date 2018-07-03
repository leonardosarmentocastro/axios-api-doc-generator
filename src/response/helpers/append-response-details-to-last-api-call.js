const singletons = require('../../commons/singletons');

const appendResponseDetailsToLastApiCall = (responseDetails) => {
  singletons.apiCalls.forEach((apiCall, index, array) => {
    const isLastApiCall = (index === (array.length - 1));
    if (isLastApiCall) {
      apiCall.responseDetails = responseDetails;
    }
  });
};

module.exports = appendResponseDetailsToLastApiCall;
