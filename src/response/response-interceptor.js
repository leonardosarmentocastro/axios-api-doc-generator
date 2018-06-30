const {
  appendResponseDetailsToLastApiCall,
  getResponseDetails
} = require('./helpers');

const responseInterceptor = {
  onError(error) {
    const responseDetails = getResponseDetails(error.response);
    appendResponseDetailsToLastApiCall(responseDetails);

    return Promise.reject(error);
  },

  onSuccess(response) {
    const responseDetails = getResponseDetails(response);
    appendResponseDetailsToLastApiCall(responseDetails);

    return response;
  },
};

module.exports = responseInterceptor;
