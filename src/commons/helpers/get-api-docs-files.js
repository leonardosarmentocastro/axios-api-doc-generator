const fs = require('fs');
const util = require('util');

const { API_DOCS_TEMP_JSON_FOLDER_PATH } = require('../constants');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

const getApiDocsFiles = async () => {
  const folderPath = API_DOCS_TEMP_JSON_FOLDER_PATH;
  const encoding = 'utf8';
  const fileNames = await readdir(folderPath, encoding);

  const readAllApiDocsFiles = fileNames
    .map(async fileName => {
      const filePath = `${folderPath}/${fileName}`;
      const fileTextContent = await readFile(filePath, encoding);

      return JSON.parse(fileTextContent);
    });

  const apiDocsFiles = await Promise.all(readAllApiDocsFiles);
  return apiDocsFiles;
}

module.exports = getApiDocsFiles;
