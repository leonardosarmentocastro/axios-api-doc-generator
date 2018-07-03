const WEBSERVER_CONSTANTS = require('../webserver/webserver-constants');

const helloWorldController = {
  getHelloWorld(req, res) {
    const { RESPONSE_ALLOWED_HEADERS } = WEBSERVER_CONSTANTS;
    res.set(RESPONSE_ALLOWED_HEADERS[0], 'example-value');

    return res.json({ message: 'Hello world' });
  },
};

module.exports = helloWorldController;
