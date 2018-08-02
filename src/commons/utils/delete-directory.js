const fs = require('fs-extra');

const deleteDirectory = async (folderPath) => {
  try {
    await fs.remove(folderPath);
  } catch (err) {
    return err;
  }
};

module.exports = deleteDirectory;
