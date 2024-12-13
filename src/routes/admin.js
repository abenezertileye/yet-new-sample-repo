const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin_controller')

router.post("/create-schedule", controller.createSchedule);
router.patch("/get-all-drivers", controller.getDrivers);
router.patch("/get-all-helpers", controller.get);
router.patch("/get-all-routes", controller.updatePost);
router.patch("/get-all-busses", controller.updatePost);
router.patch("/get-all-schedule", controller.updatePost);




// Export the router
module.exports = router;
