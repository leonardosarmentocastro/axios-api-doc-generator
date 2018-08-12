const { createFile } = require('../utils');
const getApiDocsFiles = require('./get-api-docs-files');
const isLibBeingUsedAsAnNodeModule = require('./is-lib-being-used-as-an-node-module');
const replaceWindowVariableOnHtmlFile = require('./replace-window-variable-on-html-file');

const rewriteEntryHtmlFile = async () => {
  const htmlFilePath = (() => {
    switch (true) {
      case isLibBeingUsedAsAnNodeModule():
        return `${process.cwd()}/node_modules/axios-api-doc-generator/dist/web/index.html`;
      case !isLibBeingUsedAsAnNodeModule():
        return `${__dirname}/../../web-app/index.html`;
    }
  })();

  const apiDocsFiles = await getApiDocsFiles();
  const contentToReplace = JSON.stringify(apiDocsFiles);
  const htmlFileContent = await replaceWindowVariableOnHtmlFile(htmlFilePath, contentToReplace);

  await createFile(htmlFilePath, htmlFileContent);
};

module.exports = rewriteEntryHtmlFile;
