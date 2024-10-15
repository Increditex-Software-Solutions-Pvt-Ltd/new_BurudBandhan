const express = require('express');
const auth = require('../Middlewares/auth');
const aboutusController = require('../Controllers/aboutus.controller');

const aboutusRouter = express.Router();


// add content
aboutusRouter.post('/add', auth, aboutusController.addContent);

// get content
aboutusRouter.get('/', auth, aboutusController.getContent);

// update content
aboutusRouter.patch('/update', auth, aboutusController.updateContent);

// delete content
aboutusRouter.delete('/delete', auth, aboutusController.deleteContent);


