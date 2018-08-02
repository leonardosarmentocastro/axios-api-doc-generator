const { isEmpty } = require('lodash/lang');

const usersValidator = {
  get ERRORS() {
    return {
      NO_PASSWORD_PROVIDED: {
        code: 'NO_PASSWORD_PROVIDED',
        message: 'The property "user.password" can\' be empty.',
      },
      NO_SLACK_DISPLAY_NAME_PROVIDED: {
        code: 'NO_SLACK_DISPLAY_NAME_PROVIDED',
        message: 'The property "user.slack.displayName" can\' be empty.',
      },
      PASSWORD_IS_NOT_STRONG_ENOUGH: {
        code: 'PASSWORD_IS_NOT_STRONG_ENOUGH',
        message: 'The provided "password" is not strong enough.',
      },
      USER_IS_EMPTY: {
        code: 'USER_IS_EMPTY',
        message: 'The provided "user" payload can\'t be empty.',
      },
    };
  },
  get regex() {
    return {
      // Contain at least 1 upper case letter
      // Contain at least 1 lower case letter
      // Contain at least 1 number or special character
      // Contain at least 8 characters in length
      // maximum length should not be arbitrarily limited
      forValidatingPasswordStrength: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    };
  },

  validateForSignUp(user) {
    if (isEmpty(user)) {
      const error = this.ERRORS.USER_IS_EMPTY;
      return error;
    }

    const {
      slack,
      password,
    } = user;

    const hasSlackDisplayName = Boolean(slack.displayName);
    if (!hasSlackDisplayName) {
      const error = this.ERRORS.NO_SLACK_DISPLAY_NAME_PROVIDED;
      return error;
    }

    const hasPassword = Boolean(password);
    if (!hasPassword) {
      const error = this.ERRORS.NO_PASSWORD_PROVIDED;
      return error;
    }

    const isPasswordStrongEnough = this.regex.forValidatingPasswordStrength.test(password);
    if (!isPasswordStrongEnough) {
      const error = this.ERRORS.PASSWORD_IS_NOT_STRONG_ENOUGH;
      return error;
    }

    return null;
  },
};

module.exports = usersValidator;
