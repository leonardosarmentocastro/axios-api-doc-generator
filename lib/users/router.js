const usersController = require('./controller');

const usersRouter = {
  connect(app) {
    app.route('/users/sign-up')
      .get(usersController.signUp);
  },
};

module.exports = usersRouter;
