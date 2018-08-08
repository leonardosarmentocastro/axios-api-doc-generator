const { API_DOCS_TEMP_JSON_FOLDER_PATH } = require('../constants');
const { deleteDirectory } = require('../utils');

const deleteTempDirectoryForJsonFiles = async () => {
  const folderPath = API_DOCS_TEMP_JSON_FOLDER_PATH;
  const err = await deleteDirectory(folderPath);

  const wasOperationSuccessful = !(err);
  if (!wasOperationSuccessful) {
    const error = `[error] Couldn't delete folder ${folderPath}: ${err}`;
    throw error;
  }

  return null;
};

module.exports = deleteTempDirectoryForJsonFiles;
