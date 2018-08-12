const { Webserver } = require('./webserver');

(async () => {
  try {
    new Webserver().start();
  } catch (err) {
    console.error(err);
  }
})();