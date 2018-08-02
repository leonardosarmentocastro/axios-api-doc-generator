const getRequestCustomHeaders = require('./get-request-custom-headers');

const getRequestDetails = (config) => {
  const {
    data: body,
    headers,
    method,
    url,
  } = config;

  const requestCustomHeaders = getRequestCustomHeaders(config.headers);
  const requestDetails = {
    body,
    headers: requestCustomHeaders,
    method,
    path: url,
  };

  return requestDetails;
};

module.exports = getRequestDetails;
