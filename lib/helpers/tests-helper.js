const axiosApiDocGenerator = require('../../src/axios-api-doc-generator');
const {
  Webserver,
  WEBSERVER_CONSTANTS
} = require('../webserver');

const webserver = new Webserver();
const testsHelper = {
  // Returns an "axios" instance which baseURL points to our API endpoint.
  API: (() => {
    const { ip, port } = WEBSERVER_CONSTANTS;
    const instance = axiosApiDocGenerator.createAxiosInstance({ baseURL: `http://${ip}:${port}` });

    return instance;
  })(),
  closeWebserver() {
    return webserver.close();
  },
  startWebserver() {
    return webserver.start();
  },
};

module.exports = testsHelper;
