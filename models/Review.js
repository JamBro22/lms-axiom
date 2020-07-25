const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  //   course: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "courses",
  //   },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("review", ReviewSchema);
