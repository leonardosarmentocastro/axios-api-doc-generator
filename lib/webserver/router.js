const { helloWorldRouter } = require('../hello-world');

const router = {
  connect(app) {
    helloWorldRouter.connect(app);
  },
};

module.exports = router;
