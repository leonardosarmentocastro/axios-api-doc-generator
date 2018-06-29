const getRequestCustomHeaders = require('./get-request-custom-headers');

const getRequestDetails = (config) => {
  const {
    headers,
    method,
    url,
  } = config;

  const requestCustomHeaders = getRequestCustomHeaders(config.headers);
  const requestDetails = {
    requestCustomHeaders,
    method,
    url,
  };

  return requestDetails;
};

module.exports = getRequestDetails;