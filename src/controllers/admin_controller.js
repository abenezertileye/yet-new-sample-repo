const { name } = require('ejs');
const Schedule = require('../models/schedule')

exports.createSchedule = async (req, res) => {
  const { schedule_name, driverId, helperId, routeId, busId, date, laps, expected_income } = req.body;
  const adminId = req.user.id; // Assuming middleware to extract admin's ID

  try {
    // Validate required fields
    if (!driverId || !helperId || !routeId || !busId || !date || !laps || !expected_income) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create the schedule
    const newSchedule = await Schedule.create({
      schedule_name,
      date,
      laps,
      expected_income,
      bus: busId,
      driver: driverId,
      helper: helperId,
      route: routeId,
      createdBy: adminId,
    });

    res.status(201).json({
      success: true,
      message: "Schedule created successfully",
      schedule: newSchedule,
    });
  } catch (err) {
    console.error("Error creating schedule:", err.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the schedule",
      error: err.message,
    });
  }
};

