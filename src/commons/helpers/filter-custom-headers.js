const filterCustomHeaders = (headersFromAPICall, headersToBeIgnored) => {
  const filteredHeaders = Object.keys(headersFromAPICall)
    .reduce((accumulator, actualValue) => {
      const previousHeaders = accumulator;
      const headerName = actualValue;

      const doesHeaderHasToBeIgnored = headersToBeIgnored.some(element => (headerName === element));
      if (doesHeaderHasToBeIgnored) {
        return previousHeaders;
      }

      const customRequestHeader = headersFromAPICall[headerName];
      const previousHeadersPlusCustomHeader = {
        ...previousHeaders,
        [headerName]: customRequestHeader,
      };
      return previousHeadersPlusCustomHeader;
    }, {});

  return filteredHeaders;
};

module.exports = filterCustomHeaders;