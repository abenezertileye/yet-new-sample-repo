const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const BusSchema = new Schema({
  bus_number: { type: String, required: true, maxLength: 100 },
  plate_number: { type: String, required: true, maxLength: 100 },
  state: { type: String, required: true, maxLength: 100 },
});

const Bus = mongoose.model('Bus', BusSchema)
// Export model
module.exports = Bus;