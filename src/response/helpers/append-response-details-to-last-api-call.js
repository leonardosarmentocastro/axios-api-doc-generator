const { apiCalls } = require('../../commons/singletons');

const appendResponseDetailsToLastApiCall = (responseDetails) => {
  apiCalls.forEach((apiCall, index, array) => {
    const isLastApiCall = (index === (array.length - 1));
    if (isLastApiCall) {
      apiCall.responseDetails = responseDetails;
    }
  });
};

module.exports = appendResponseDetailsToLastApiCall;
