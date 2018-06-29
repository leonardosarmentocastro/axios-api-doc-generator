const { getResponseCustomHeaders } = require('../helpers');

const getResponseDetails = (response) => {
  const {
    data: body,
    headers,
    status,
    statusText,
  } = response;

  const responseCustomHeaders = getResponseCustomHeaders(headers);
  const responseDetails = {
    body,
    responseCustomHeaders,
    status,
    statusText,
  };

  return responseDetails;
};

module.exports = getResponseDetails;
