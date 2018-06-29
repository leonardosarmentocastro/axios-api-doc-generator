const { getRequestCustomHeaders } = require('../helpers');

const requestInterceptor = {
  async onSuccess() {
    const requestDetails = getRequestCustomHeaders(config);
    const apiCall = {
      requestDetails,
      responseDetails: null,
    };

    // TODO: add to json file in tmp

    // TODO: add to json file in tmp

    return config;
  }
};

module.exports = {
  requestInterceptor,
};
