const fs = require('fs');
const util = require('util');

const { WINDOW_API_DOCS_VARIABLE_NAME } = require('../constants');
const readFile = util.promisify(fs.readFile);

const replaceWindowVariableOnHtmlFile = async (htmlFilePath, contentToReplace) => {
  const encoding = 'utf8';
  const content = await readFile(htmlFilePath, encoding)
    .catch(err => ''); // File is not available or doesnt exists.

  const variableName = WINDOW_API_DOCS_VARIABLE_NAME;
  const htmlFileWithReplacedValues = content.split('\n')
    .map(line => {
      const isLineWhereVariableIsSet = line.includes(variableName);
      if (isLineWhereVariableIsSet) {
        const lineWithreplacedValues = `<script>${variableName} = ${contentToReplace}</script>`;
        return lineWithreplacedValues;
      }

      return line;
    })
    .join('\n');

  return htmlFileWithReplacedValues;
};

module.exports = replaceWindowVariableOnHtmlFile;
