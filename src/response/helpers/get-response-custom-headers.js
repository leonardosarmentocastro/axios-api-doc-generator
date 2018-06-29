const { filterCustomHeaders } = require('../../commons/helpers');

const getResponseCustomHeaders = (headersFromAPICall) => {
  const headersToBeIgnored = ['content-type'];
  const responseCustomHeaders =
    filterCustomHeaders(headersFromAPICall, headersToBeIgnored);

  return responseCustomHeaders;
};

module.exports = getResponseCustomHeaders;
