const usersValidator = require('./validator');

const usersService = {
  get usersValidator() { return { ...usersValidator }; },

  signUp(user) {
    const error = this.usersValidator.validateForSignUp(user);
    const hasErrors = Boolean(error);
    if (hasErrors) {
      return Promise.reject(error);
    }

    const savedUser = {
      id: '1',
      createdAt: new Date().toISOString(),
      ...user,
    };
    return savedUser;
  }
};

module.exports = usersService;
