const helloWorldController = require('./controller');

const helloWorldRouter = {
  connect(app) {
    app.route('/api/hello-world')
      .get(helloWorldController.getHelloWorld);
  },
};

module.exports = helloWorldRouter;
