const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const WEBSERVER_CONSTANTS = require('./webserver-constants');

const configureWebserver = {
  bodyParser(app) {
    app.use(bodyParser.json({ limit: '1mb' }));
    app.use(bodyParser.urlencoded({ extended: false }));
  },

  // Since frontend applications may be able to read the "Authorization" token and send
  // it on every request made by signed in users, we must manually allow the "front-end" origin
  // to do so, otherwise, the browser will prevent it from doing http requests that contains the
  // "Authorization" token.
  corsWithAuthorizationHeaderEnabled(app) {
    const middleware = (req, callback) => {
      const errors = null;
      const options = {
        origin: req.header('Origin'),
        credentials: true,
        exposedHeaders: [
          'Authorization',
          ...WEBSERVER_CONSTANTS.RESPONSE_ALLOWED_HEADERS
        ],
      };

      return callback(errors, options);
    };

    app.use(cors(middleware));
  },

  logErrorsOnConsole(app) {
    app.use(errorhandler());
  },

  logRequestsOnConsole(app) {
    const logFormat = 'dev';
    app.use(morgan(logFormat));
  },

  prettifyJsonOutput(app) {
    app.set('json spaces', 2);
  },
};

module.exports = configureWebserver;
