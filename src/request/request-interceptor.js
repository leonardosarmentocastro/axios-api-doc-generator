const { apiCalls } = require('../commons/singletons');
const { getRequestCustomHeaders } = require('./helpers');

const requestInterceptor = {
  async onSuccess() {
    const requestDetails = getRequestCustomHeaders(config);
    const apiCall = {
      requestDetails,
      responseDetails: null,
    };

    apiCalls.push(apiCall);

    return config;
  },
};

module.exports = {
  requestInterceptor,
};
