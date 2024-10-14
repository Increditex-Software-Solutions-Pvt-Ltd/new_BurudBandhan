const express = require('express');
const profileController = require('../Controllers/profile.controller');
const auth = require('../Middlewares/auth');

const profileRouter = express.Router();



// add profile
profileRouter.post("/create", auth, profileController.addProfile);

// get all profiles here
profileRouter.get("/", auth, profileController.getAllProfiles);

// get single profile
profileRouter.get("/:id", auth, profileController.getSingleProfile);

// update profile
profileRouter.patch("/:id", auth, profileController.updateProfile);

// delete profile
profileRouter.delete("/:id", auth, profileController.deleteProfile);

module.exports = profileRouter;