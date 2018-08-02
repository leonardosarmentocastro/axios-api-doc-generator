const { helloWorldRouter } = require('../hello-world');
const { usersRouter } = require('../users');

const router = {
  connect(app) {
    helloWorldRouter.connect(app);
    usersRouter.connect(app);
  },
};

module.exports = router;
