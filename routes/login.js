// File: routes/login.js
const express = require("express");
const router = express.Router();

// Import controller
const adminController = require("../controllers/admin");

// Define endpoint
router.post("/", adminController.login); // Login process

// Export router
module.exports = router;