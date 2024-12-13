const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin_controller')

router.post("/create-schedule", controller.createSchedule);
router.patch("/get-all-drivers", controller.getAllDriver);
router.patch("/get-all-helpers", controller.getAllHelper);
router.patch("/get-all-routes", controller.getAllRoute);
router.patch("/get-all-busses", controller.getAllBuses);
router.patch("/get-all-schedule", controller.getAllSchedules);




// Export the router
module.exports = router;
