const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  schedule_name: { type: String, required: true, maxLength: 100 },
  date: { type: Date, required: true, maxLength: 100 },
  laps: { type: Number, required: true, maxLength: 100 },
  expected_income: { type: Number, required: true, maxLength: 100 },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus" }, 
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" }, 
  helper: { type: mongoose.Schema.Types.ObjectId, ref: "Helper" }, 
  route: { type: mongoose.Schema.Types.ObjectId, ref: "Route" }, 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, 
});

// Export model
module.exports = mongoose.model("Schedule", ScheduleSchema);
