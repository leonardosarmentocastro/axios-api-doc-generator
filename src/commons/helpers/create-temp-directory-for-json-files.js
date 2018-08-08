const { API_DOCS_TEMP_JSON_FOLDER_PATH } = require('../constants');
const { createDirectory } = require('../utils');

const createTempDirectoryForJsonFiles = async () => {
  const folderPath = API_DOCS_TEMP_JSON_FOLDER_PATH;
  const err = await createDirectory(folderPath);

  const wasOperationSuccessful = !(err);
  if (!wasOperationSuccessful) {
    const error = `[error] Couldn't create folder ${folderPath}: ${err}`;
    throw error;
  }

  return null;
};

module.exports = createTempDirectoryForJsonFiles;
