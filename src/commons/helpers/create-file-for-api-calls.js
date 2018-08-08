const getFormattedJsonFileName = require('./get-formatted-json-file-name');
const { createFile } = require('../utils');

const createFileForApiCalls = async (apiCalls) => {
  const [ firstApiCall ] = apiCalls;
  const formattedJsonFileName = getFormattedJsonFileName(firstApiCall);

  const content = JSON.stringify(apiCalls, null, 2);
  const err = await createFile(formattedJsonFileName, content);
  const wasOperationSuccessful = !(err);
  if (!wasOperationSuccessful) {
    const error = `[error] Couldn't create ".json" file for API calls: ${err}`;
    throw error;
  }

  return null;
};

module.exports = createFileForApiCalls;
