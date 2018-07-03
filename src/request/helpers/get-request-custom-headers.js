const { filterCustomHeaders } = require('../../commons/helpers');

const getRequestCustomHeaders = (headersFromAPICall) => {
  const headersToBeIgnored = ['common', 'delete', 'get', 'head', 'post', 'put', 'patch'];
  const requestCustomHeaders =
    filterCustomHeaders(headersFromAPICall, headersToBeIgnored);

  return requestCustomHeaders;
};

module.exports = getRequestCustomHeaders;
