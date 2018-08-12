const express = require('express');

const {
  appendTestResultToLastApiCall,
  createFileForApiCalls,
  createTempDirectoryForJsonFiles,
  deleteTempDirectoryForJsonFiles,
  isLibBeingUsedAsAnNodeModule,
  rewriteEntryHtmlFile,
} = require('./commons/helpers');
const requestInterceptor = require('./request/request-interceptor');
const responseInterceptor = require('./response/response-interceptor');
const singletons = require('./commons/singletons');

const axiosApiDocGenerator = {
  get appendTestResultToLastApiCall() { return appendTestResultToLastApiCall; },
  get createFileForApiCalls() { return createFileForApiCalls },
  get createTempDirectoryForJsonFiles() { return createTempDirectoryForJsonFiles; },
  get deleteTempDirectoryForJsonFiles() { return deleteTempDirectoryForJsonFiles; },
  get handler() { return handler; },
  get rewriteEntryHtmlFile() { return rewriteEntryHtmlFile; },

  // PUBLIC
  get requestInterceptor() { return { ...requestInterceptor }; },
  get responseInterceptor() { return { ...responseInterceptor }; },
  get singletons() { return { ...singletons }; },

  async connectStaticFilesServirgMiddleware(app, headers) {
    const path = (() => {
      switch (true) {
        case isLibBeingUsedAsAnNodeModule():
          return `${process.cwd()}/node_modules/axios-api-doc-generator/dist/web`;
        case !isLibBeingUsedAsAnNodeModule():
          return `${process.cwd()}/dist/web`;
      }
    })();

    const middleware = express.static(path);
    app.use('/api/docs', middleware);
  },

  async createApiDocsForTests() {
    try {
      await this.createTempDirectoryForJsonFiles();

      const { apiCalls } = this.singletons;
      await this.createFileForApiCalls(apiCalls);
    } catch(err) {
      return Promise.reject(`[axios-api-doc-generator] Error while creating API docs for tests: ${err}`);
    }

    return Promise.resolve();
  },

  async jestGlobalSetup(globalConfig) {
    await this.deleteTempDirectoryForJsonFiles();
  },

  async jestGlobalTearDown(globalConfig) {
    await this.rewriteEntryHtmlFile();
  },

  // REFERENCE:
  // https://jestjs.io/docs/en/configuration#testrunner-string
  // https://jasmine.github.io/api/3.0/Reporter.html
  jestSetupTestFrameworkScriptFile() {
    jasmine.getEnv().addReporter({
      specDone: (result) => {
        const { description, fullName } = result;
        const testResult = { description, fullName };

        this.appendTestResultToLastApiCall(testResult);
      },
    });
  },
};

module.exports = axiosApiDocGenerator;
