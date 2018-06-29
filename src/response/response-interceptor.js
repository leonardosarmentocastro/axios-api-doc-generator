const { getResponseDetails } = require('./helpers');

const responseInterceptor = {
  onError(error) {
    const responseDetails = getResponseDetails(error.response);
    // apiDocGeneratorHelper.appendResponseDetailsToLastApiCall(responseDetails); // TODO: use REDIS instead of object

    return Promise.reject(error);
  },

  onSuccess(response) {
    const responseDetails = getResponseDetails(response);
    // apiDocGeneratorHelper.appendResponseDetailsToLastApiCall(responseDetails); // TODO: use REDIS instead of object

    return response;
  },
};

module.exports = responseInterceptor;
