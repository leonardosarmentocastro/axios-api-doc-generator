const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

const createJsonFile = async (fileName, content) => {
  try {
    await writeFile(fileName, content);
  } catch (err) {
    return err;
  }

  return null;
};

module.exports = createJsonFile;
