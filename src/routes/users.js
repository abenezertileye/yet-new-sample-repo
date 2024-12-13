const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller')
const upload = require('../middleware/file_upload_config');

// GET all post
router.get("/get-all-busses", controller.getAllBuses);
router.post("/buy-ticket/:id", controller.buyTicket);

// Export the router
module.exports = router;
