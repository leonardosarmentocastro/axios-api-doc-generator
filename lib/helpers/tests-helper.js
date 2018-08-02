const axios = require('axios');

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
    const instance = axios.create({
      baseURL: `http://${ip}:${port}`,
    });

    // Intercept all API calls during tests so API documentation can be generated automatically.
    const {
      requestInterceptor,
      responseInterceptor,
    } = axiosApiDocGenerator;

    instance.interceptors.request.use(requestInterceptor.onSuccess);
    instance.interceptors.response.use(responseInterceptor.onSuccess, responseInterceptor.onError);

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
