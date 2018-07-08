const usersController = {
  signUp(req, res) {
    const user = req.body;
    const hasProvidedPassword = Boolean(user.password);
    if (!hasProvidedPassword) {
      const error = {
        code: 'NO_PASSWORD_PROVIDED',
        message: 'The property "user.password" can\' be empty.',
      };

      return res.status(500).json(error);
    }

    const userCreatedOnDatabase = { id: 1, ...user };
    return res.status(200).json(userCreatedOnDatabase);
  },
};

module.exports = usersController;
