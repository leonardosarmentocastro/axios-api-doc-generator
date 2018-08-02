const axiosApiDocGenerator = require('../../src/axios-api-doc-generator');

module.exports = (globalConfig) => axiosApiDocGenerator.jestGlobalTearDown(globalConfig);
