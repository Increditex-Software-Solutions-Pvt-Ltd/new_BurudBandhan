const express = require('express');
const { successVideoController } = require('../Controllers/success_video.controller');
const { auth } = require('../Middlewares/auth');

const successVideoRouter = express.Router();


// get all success videos
successVideoRouter.get("/", auth, successVideoController.getAllSuccessVideos);

// get single success video by id
successVideoRouter.get('/:id', auth, successVideoController.getSingleSuccessVideo);

// add success video
successVideoRouter.post("/", auth, successVideoController.addSuccessVideo);

// update success video
successVideoRouter.patch("/:id", auth, successVideoController.updateSuccessVideo);

// delete success video
successVideoRouter.delete("/:id", auth, successVideoController.deleteSuccessVideo);

module.exports = { successVideoRouter };