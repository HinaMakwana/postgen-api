const express = require("express");

// Routes
const router = express.Router();

// Controllers
const ChatController = require("../../controllers/chat/ChatController");

// policies
// const { isGuestUser } = require('../../policies/isGuestUser');

// Routes for controllers
router.post("/create", [], ChatController.create);
router.post("/generate", [], ChatController.chat);

// Export routes
module.exports = router;
