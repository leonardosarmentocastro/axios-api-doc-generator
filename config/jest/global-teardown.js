const { getApiDocsFiles, createJsonFile } = require('../../src/commons/utils');

// TODO:
// 1. Export this function to "axios-api-doc-generator.js", so people can use it.
// 2. export the "fileName" variable below to a "commons/constant".
module.exports = async (globalConfig) => {
  const apiDocsFiles = await getApiDocsFiles();

  const content = JSON.stringify(apiDocsFiles, null, 2);
  const fileName = `${__dirname}/../../src/web-app/api-docs.json`;
  await createJsonFile(fileName, content);
};
