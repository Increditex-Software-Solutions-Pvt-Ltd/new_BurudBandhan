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

// update user profile
userRouter.patch('/editprofile', auth, userController.editProfile);


// change password
userRouter.patch("/change-password", auth, userController.changePassword);

module.exports = {userRouter};