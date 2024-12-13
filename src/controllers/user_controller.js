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
      // Find the schedule by ID
      const schedule = await Schedule.findById(id).populate("bus");
      if (!schedule) {
        return res.status(404).json({ success: false, message: "Schedule not found" });
      }
  
      // Get the bus from the schedule
      const bus = await Bus.findById(schedule.bus).populate("tickets");
      if (!bus) {
        return res.status(404).json({ success: false, message: "Bus not found in the schedule" });
      }
  
      // Find the first ticket with the status "not bought"
      const ticket = await Ticket.findOne({ _id: { $in: bus.tickets }, status: "not bought" });
      if (!ticket) {
        return res.status(404).json({ success: false, message: "No available tickets for this bus" });
      }
  
      // Update the ticket status to "bought"
      ticket.status = "bought";
      await ticket.save();
  
      return res.status(200).json({
        success: true,
        message: "Ticket successfully bought",
        ticket,
      });
    } catch (error) {
      console.error("Error buying ticket:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while buying the ticket",
      });
    }
  };
