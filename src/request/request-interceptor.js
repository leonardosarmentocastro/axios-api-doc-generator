const { apiCalls } = require('../commons/singletons');
const { getRequestDetails } = require('./helpers');

const requestInterceptor = {
  onSuccess(config) {
    const requestDetails = getRequestDetails(config);
    const apiCall = {
      requestDetails,
      responseDetails: null,
    };

    apiCalls.push(apiCall);

    return config;
  },
};

module.exports = requestInterceptor;
