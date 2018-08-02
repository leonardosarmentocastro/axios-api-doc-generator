const usersService = require('./service');

const usersController = {
  async signUp(req, res) {
    try {
      const user = req.body;
      const savedUser = await usersService.signUp(user);

      return res.status(200).json(savedUser);
    } catch(err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = usersController;
