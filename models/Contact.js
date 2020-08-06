const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
