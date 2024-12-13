const path = require("path");
const fs = require("fs"); // F
const Schedule = require('../models/schedule');


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


exports.buyTicket = async (req, res) => {
  const { id } = req.params;

  try {
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({ success: false, message: "schedule post not found" });
    }

    
  } catch (error) {
    
  }
};
