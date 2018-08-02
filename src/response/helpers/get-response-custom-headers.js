const { filterCustomHeaders } = require('../../commons/helpers');

const getResponseCustomHeaders = (headersFromAPICall) => {
  const expressHeaders = ['x-powered-by', 'content-length', 'etag', 'date', 'connection'];
  const headersToBeIgnored = ['content-type', ...expressHeaders];
  const responseCustomHeaders =
    filterCustomHeaders(headersFromAPICall, headersToBeIgnored);

  return responseCustomHeaders;
};

module.exports = getResponseCustomHeaders;
