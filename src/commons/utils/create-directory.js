const fs = require('fs');
const util = require('util');

const mkdir = util.promisify(fs.mkdir);

const createDirectory = async (folderPath) => {
  try {
    await mkdir(folderPath);
  } catch (err) {
    const doesFileAlreadyExists = Boolean(err.code === 'EEXIST');
    if (doesFileAlreadyExists) {
      return null; // Folder already exists, no need to create it.
    }

    return err;
  }
};

module.exports = createDirectory;
