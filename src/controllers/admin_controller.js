const Schedule = require('../models/schedule')
const Bus = require('../models/bus')
const Driver = require('../models/driver')
const Helper = require('../models/helper')
const Route = require('../models/route')

exports.createSchedule = async (req, res) => {
  const { schedule_name, driverId, helperId, routeId, busId, laps, expected_income } = req.body;
  const adminId = req.user.id; // Assuming middleware to extract admin's ID

  try {
    // Validate required fields
    if (!driverId || !helperId || !routeId || !busId || !laps || !expected_income) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create the schedule
    const newSchedule = await Schedule.create({
      schedule_name,
      date: new Date(),
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

//new route
exports.createRoute = async (req, res) => {
  const { route_name, route} = req.body;
  const adminId = req.user.id; // Assuming middleware to extract admin's ID

  try {
    // Validate required fields
    if (!route_name || !route) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create the schedule
    const newRoute = await Route.create({
      routeName: route_name,
      route,
      createdBy: adminId,
    });

    res.status(201).json({
      success: true,
      message: "Route created successfully",
      new_route: newRoute,
    });
  } catch (err) {
    console.error("Error creating route:", err.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the route",
      error: err.message,
    });
  }
};
//new bus
exports.createBus = async (req, res) => {
  const { bus_number, plate_number} = req.body;
  const adminId = req.user.id; // Assuming middleware to extract admin's ID

  try {
    // Validate required fields
    if (!bus_number || !plate_number) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create the schedule
    const newBus = await Bus.create({
      busNumber: bus_number,
      plateNumber: plate_number,
      state: "new",
      tickets: [],
      createdBy: adminId,
    });

    res.status(201).json({
      success: true,
      message: "Bus created successfully",
      new_route: newBus,
    });
  } catch (err) {
    console.error("Error creating bus:", err.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the bus",
      error: err.message,
    });
  }
};

exports.getAllBuses = async (req, res) => {
  try {
    // Retrieve all JobPost documents from the database
    const busses = await Bus.find();

    // Send the retrieved busses as the response
    res.status(200).json({
      success: true,
      data: busses,
      message: "All busses retrieved successfully",
    });
  } catch (error) {
    // Handle any errors that occur during retrieval
    console.error("Error retrieving busses:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve busses",
      error: error.message,
    });
  }
};

exports.getAllSchedules= async (req, res) => {
    try {
      // Retrieve all JobPost documents from the database
      const schedule = await Schedule.find();
  
      // Send the retrieved schedule as the response
      res.status(200).json({
        success: true,
        data: schedule,
        message: "All schedule retrieved successfully",
      });
    } catch (error) {
      // Handle any errors that occur during retrieval
      console.error("Error retrieving schedule:", error.message);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve schedule",
        error: error.message,
      });
    }
  };
exports.getAllDriver= async (req, res) => {
    try {
      // Retrieve all JobPost documents from the database
      const driver = await Driver.find();
  
      // Send the retrieved driver as the response
      res.status(200).json({
        success: true,
        data: driver,
        message: "All driver retrieved successfully",
      });
    } catch (error) {
      // Handle any errors that occur during retrieval
      console.error("Error retrieving driver:", error.message);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve driver",
        error: error.message,
      });
    }
  };
exports.getAllHelper= async (req, res) => {
    try {
      // Retrieve all JobPost documents from the database
      const helper = await Helper.find();
  
      // Send the retrieved helper as the response
      res.status(200).json({
        success: true,
        data: helper,
        message: "All helper retrieved successfully",
      });
    } catch (error) {
      // Handle any errors that occur during retrieval
      console.error("Error retrieving helper:", error.message);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve helper",
        error: error.message,
      });
    }
  };
exports.getAllRoute= async (req, res) => {
    try {
      // Retrieve all JobPost documents from the database
      const route = await Route.find();
  
      // Send the retrieved route as the response
      res.status(200).json({
        success: true,
        data: route,
        message: "All route retrieved successfully",
      });
    } catch (error) {
      // Handle any errors that occur during retrieval
      console.error("Error retrieving route:", error.message);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve route",
        error: error.message,
      });
    }
  };