const usersController = require('./controller');

const usersRouter = {
  connect(app) {
    app.route('/api/users/sign-up')
      .post(usersController.signUp);
  },
};

module.exports = usersRouter;
