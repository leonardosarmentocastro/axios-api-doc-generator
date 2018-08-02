const { API_DOCS_TEMP_JSON_FOLDER_PATH } = require('./commons/constants');
const { appendTestResultToLastApiCall, getFormattedJsonFileName } = require('./commons/helpers');
const { createDirectory, createJsonFile, deleteDirectory, getApiDocsFiles } = require('./commons/utils');
const requestInterceptor = require('./request/request-interceptor');
const responseInterceptor = require('./response/response-interceptor');
const singletons = require('./commons/singletons');

const axiosApiDocGenerator = {
  get appendTestResultToLastApiCall() { return appendTestResultToLastApiCall; },
  get createDirectory() { return createDirectory; },
  get createJsonFile() { return createJsonFile; },
  get deleteDirectory() { return deleteDirectory; },
  get getApiDocsFiles() { return getApiDocsFiles; },
  get getFormattedJsonFileName() { return getFormattedJsonFileName; },
  get requestInterceptor() { return { ...requestInterceptor }; },
  get responseInterceptor() { return { ...responseInterceptor }; },
  get singletons() { return { ...singletons }; },

  appendResultToLastApiCall(result) {
    const { description, fullName } = result;
    const testResult = { description, fullName };

    this.appendTestResultToLastApiCall(testResult);
  },
  async createApiDocsFileForWebApp() {
    const apiDocsFiles = await this.getApiDocsFiles();

    const content = JSON.stringify(apiDocsFiles, null, 2);
    const fileName = `${__dirname}/web-app/api-docs.json`;
    await createJsonFile(fileName, content);
  },
  async createApiDocsForTests() {
    try {
      await this.createTempDirectoryForJsonFiles();
      await this.createJsonFileForApiCalls();
    } catch(err) {
      return Promise.reject(`[axios-api-doc-generator] Error while creating API docs for tests: ${err}`);
    }

    return Promise.resolve();
  },
  async createJsonFileForApiCalls() {
    const { apiCalls } = this.singletons;
    const content = JSON.stringify(apiCalls, null, 2);

    const [ firstApiCall ] = apiCalls;
    const formattedJsonFileName = this.getFormattedJsonFileName(firstApiCall);

    const err = await this.createJsonFile(formattedJsonFileName, content);
    const wasOperationSuccessful = !(err);
    if (!wasOperationSuccessful) {
      const error = `[error] Couldn't create ".json" file for API calls: ${err}`;
      throw error;
    }

    return null;
  },
  async createTempDirectoryForJsonFiles() {
    const folderPath = API_DOCS_TEMP_JSON_FOLDER_PATH;
    const err = await this.createDirectory(folderPath);

    const wasOperationSuccessful = !(err);
    if (!wasOperationSuccessful) {
      const error = `[error] Couldn't create folder ${folderPath}: ${err}`;
      throw error;
    }

    return null;
  },
  async deleteTempDirectoryForJsonFiles() {
    const folderPath = API_DOCS_TEMP_JSON_FOLDER_PATH;
    const err = await this.deleteDirectory(folderPath);

    const wasOperationSuccessful = !(err);
    if (!wasOperationSuccessful) {
      const error = `[error] Couldn't delete folder ${folderPath}: ${err}`;
      throw error;
    }

    return null;
  },
  async jestGlobalSetup(globalConfig) {
    await this.deleteTempDirectoryForJsonFiles();
  },
  async jestGlobalTearDown(globalConfig) {
    await this.createApiDocsFileForWebApp();
  }
};

module.exports = axiosApiDocGenerator;
