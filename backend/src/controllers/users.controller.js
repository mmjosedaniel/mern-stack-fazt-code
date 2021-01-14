const userController = {};

userController.getUsers = (req,res) => res.send('Notes Users');

userController.createUser = (req,res) => res.send('Notes Users');

userController.deleteUser = (req,res) => res.send('Notes Users');

module.exports = userController;