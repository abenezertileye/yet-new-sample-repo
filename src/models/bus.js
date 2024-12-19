const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const BusSchema = new Schema({
  busNumber: { type: String, required: true, maxLength: 100 },
  plateNumber: { type: String, required: true, maxLength: 100 },
  state: { type: String, required: true, maxLength: 100 },
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }], 
  
});

const Bus = mongoose.model('Bus', BusSchema)
// Export model
module.exports = Bus;