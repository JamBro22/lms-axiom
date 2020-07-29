const mongoose = require("mongoose");

const TimetableSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  time: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  reminder: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("timetable", TimetableSchema);
