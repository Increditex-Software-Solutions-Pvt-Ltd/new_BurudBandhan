const express = require('express');
const { storyController } = require('../Controllers/success_story.controller');
const auth = require('../Middlewares/auth');

const storyRouter = express.Router();

// get all stories
storyRouter.get("/", auth, storyController.getAllStories);

// get single success story by id
storyRouter.get('/:id', auth, storyController.getSingleStory);

// post story
storyRouter.post("/", auth, storyController.addStory);

// edit story
storyRouter.patch("/:id", auth, storyController.editStory);

// delete story
storyRouter.delete('/:id', auth, storyController.deleteStory);


module.exports = { storyRouter };