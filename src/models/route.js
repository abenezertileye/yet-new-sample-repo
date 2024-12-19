const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  routeName: { type: String, required: true, maxLength: 100 },
  route: { type: Array, required: true, maxLength: 100 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, 

});

// Export model
module.exports = mongoose.model("Route", RouteSchema);
