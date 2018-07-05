const { API_DOCS_TEMP_JSON_FOLDER_PATH } = require('../constants');
const getFormattedPathForJsonFile = require('./get-formatted-path-for-json-file');

const getFormattedJsonFileName = (firstApiCall) => {
  const {
    requestDetails: { method, path },
  } = firstApiCall;

  const formattedPathForJsonFile = getFormattedPathForJsonFile(path);
  const formattedJsonFileName = `${API_DOCS_TEMP_JSON_FOLDER_PATH}/[${method}]${formattedPathForJsonFile}.json`;

  return formattedJsonFileName;
};

module.exports = getFormattedJsonFileName;
