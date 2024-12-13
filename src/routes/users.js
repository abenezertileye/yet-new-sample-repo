const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller')
const authController = require('../controllers/auth/user_auth_controller')

// GET all post
router.get("/get-all-busses", controller.getAllSchedules);
router.post("/buy-ticket/:id", controller.buyTicket);
//signup
router.post('/signup', authController.signup)
//login
router.post('/login', authController.login)

// Export the router
module.exports = router;
