const singletons = require('../singletons');

const appendTestResultToLastApiCall = (testResult) => {
  singletons.apiCalls.forEach((apiCall, index, array) => {
    const isLastApiCall = (index === (array.length - 1));
    if (isLastApiCall) {
      apiCall.testResult = testResult;
    }
  });
};

module.exports = appendTestResultToLastApiCall;
