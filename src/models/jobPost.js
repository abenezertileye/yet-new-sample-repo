const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobPost = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  description: { type: String, maxLength: 100 },
  forms: [
    {
      name: { type: String, required: true }, // Field name
      type: { type: String, required: true }, // Data type (e.g., text, number, etc.)
      required: { type: Boolean, required: true }, // Whether the field is required
    },
  ],  
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }], // Correctly reference Application
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true }, // Reference to Admin
},
{ timestamps: true } // This adds createdAt and updatedAt automatically

);

// Export model
module.exports = mongoose.model("JobPost", JobPost);
