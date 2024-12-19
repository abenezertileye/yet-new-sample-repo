const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin_controller')

router.post("/create-schedule", controller.createSchedule);
router.post("/create-route", controller.createRoute);
router.post("/create-bus", controller.createBus);
router.get("/get-all-drivers", controller.getAllDriver);
router.get("/get-all-helpers", controller.getAllHelper);
router.get("/get-all-routes", controller.getAllRoute);
router.get("/get-all-busses", controller.getAllBuses);
router.get("/get-all-schedule", controller.getAllSchedules);




// Export the router
module.exports = router;
