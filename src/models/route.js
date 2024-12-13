const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  route: { type: Array, required: true, maxLength: 100 },

});

// Export model
module.exports = mongoose.model("Route", RouteSchema);
