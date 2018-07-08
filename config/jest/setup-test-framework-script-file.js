// REFERENCE:
// https://jestjs.io/docs/en/configuration#testrunner-string
// https://jasmine.github.io/api/3.0/Reporter.html
const axiosApiDocGenerator = require('../../src/axios-api-doc-generator');

jasmine.getEnv().addReporter({
  specDone: (result) => axiosApiDocGenerator.appendResultToLastApiCall(result),
});
