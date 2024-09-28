const express = require('express');
const auth = require('../Middlewares/auth');
const adminAuth = require('../Middlewares/adminAuth');
const memberController = require('../Controllers/member.controller');

const memberRouter = express.Router();

// add new member
memberRouter.post("/", auth, adminAuth('admin'), memberController.addMember);

// get all members
memberRouter.get("/", auth, memberController.getAllMembers);

// update member details
memberRouter.patch("/:id", auth, adminAuth("admin"), memberController.updateMember);

// delete member
memberRouter.delete("/:id", auth, adminAuth('admin'), memberController.deleteMember);

module.exports = memberRouter;