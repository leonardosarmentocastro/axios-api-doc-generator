const { createFile } = require('../utils');
const getApiDocsFiles = require('./get-api-docs-files');
const replaceWindowVariableOnHtmlFile = require('./replace-window-variable-on-html-file');

const rewriteEntryHtmlFile = async () => {
  const isLibBeingUsedAsAnNodeModule = !(process.cwd().includes('axios-api-doc-generator'));
  const htmlFilePath = (
    isLibBeingUsedAsAnNodeModule ?
      `${process.cwd()}/node_modules/axios-api-doc-generator/dist/web/index.html`
      :
      `${__dirname}/../../web-app/index.html`
  );

  const apiDocsFiles = await getApiDocsFiles();
  const contentToReplace = JSON.stringify(apiDocsFiles);
  const htmlFileContent = await replaceWindowVariableOnHtmlFile(htmlFilePath, contentToReplace);

  await createFile(htmlFilePath, htmlFileContent);
};

module.exports = rewriteEntryHtmlFile;
