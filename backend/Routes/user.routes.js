const { userController } = require("../Controllers/user.controller");

const express = require('express');

const userRouter = express.Router();

// login route
userRouter.post('/login', userController.login);

// signup route
userRouter.post('/signup', userController.signup);


module.exports = {userRouter};