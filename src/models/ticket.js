const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Correctly reference Application
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus" }, // Correctly reference Application
  payment: { type: Number, required: true, maxLength: 100 }, // Fixed typo in "payment"
  status: { 
    type: String, 
    enum: ["not bought", "bought"], 
    default: "not bought", // Default to "not bought"
    required: true 
  },
});

// Export model
module.exports = mongoose.model("Ticket", TicketSchema);
