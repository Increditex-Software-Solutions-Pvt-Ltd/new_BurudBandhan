const { userController } = require("../Controllers/user.controller");
const auth = require('../Middlewares/auth');
const express = require('express');

const userRouter = express.Router();

// login route
userRouter.post('/login', userController.login);

// signup route
userRouter.post('/signup', userController.signup);

// get user profile
userRouter.get('/profile', auth, userController.getProfile);



module.exports = {userRouter};