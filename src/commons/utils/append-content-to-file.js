const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const OPTIONS_TO_READ_FILE = { encoding: 'utf8' };
const OPTIONS_TO_WRITE_FILE = { spacesToFormatJson: 2 };

const appendContentToFile = async (fileName, content) => {
  const wasSuccessfulOperation = true;

  try {
    const file = {
      currentContent: null,
      newContent: null,
    };

    const data = await readFile(fileName, OPTIONS_TO_READ_FILE);
    file.currentContent = JSON.parse(data);
    file.newContent = JSON.stringify({
      ...file.currentContent,
      content,
    }, null, OPTIONS_TO_WRITE_FILE.spacesToFormatJson);

    await writeFile(fileName, file.newContent);
    return wasSuccessfulOperation;
  } catch(err) {
    console.error(err);
    return !wasSuccessfulOperation;
  }
};

module.exports = appendContentToFile;