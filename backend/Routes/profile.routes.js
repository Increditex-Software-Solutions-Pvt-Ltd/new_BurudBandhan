const express = require('express');
const profileController = require('../Controllers/profile.controller');
const auth = require('../Middlewares/auth');

const profileRouter = express.Router();



// add profile
profileRouter.post("/create", auth, profileController.addProfile);

// get all profiles here
profileRouter.get("/", auth, profileController.getAllProfiles);

// get profiles by filter
profileRouter.get("/search", auth, profileController.getProfilesByFilter);

// get single marriage profile by user id
profileRouter.get("/my-profile", auth, profileController.getSingleProfileByUserId);

// get single marriage profile by profile id
profileRouter.get("/:profileId", auth, profileController.getSingleProfileByProfileId);

// update profile
profileRouter.patch("/:id", auth, profileController.updateProfile);

// delete profile
profileRouter.delete("/:id", auth, profileController.deleteProfile);

module.exports = profileRouter;