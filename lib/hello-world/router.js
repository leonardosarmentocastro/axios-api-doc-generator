const helloWorldController = require('./controller');

const helloWorldRouter = {
  connect(app) {
    app.route('/hello-world')
      .get(helloWorldController.getHelloWorld);
  },
};

module.exports = helloWorldRouter;
