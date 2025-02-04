const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller')
const authController = require('../controllers/auth/user_auth_controller')

// GET all post
router.get("/get-all-schedule", controller.getAllSchedule);
router.post("/buy-ticket/:id", controller.buyTicket);
router.get("/get-user-info/:id", controller.getUserInfo);
//signup
router.post('/signup', authController.signup)
//login
router.post('/login', authController.login)

// Export the router
module.exports = router;
