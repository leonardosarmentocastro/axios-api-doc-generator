const getResponseCustomHeaders = require('./get-response-custom-headers');

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
    headers: responseCustomHeaders,
    status: {
      code: status,
      text: statusText,
    },
  };

  return responseDetails;
};

module.exports = getResponseDetails;
