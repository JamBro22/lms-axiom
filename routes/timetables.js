const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Timetable = require("../models/Timetable");

// @route  GET api/timetables
// @description  get activities from database
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const timetables = await Timetable.find({ user: req.user.id });
    res.json(timetables);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/timetables
// @description  add activities to database
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("time", "Time is required").not().isEmpty(),
      check("day", "Day is required").not().isEmpty(),
      check("activity", "Enter an activity").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { time, day, activity } = req.body;

    try {
      const newTimetable = new Timetable({
        time,
        day,
        activity,
        user: req.user.id,
      });

      const timetable = await newTimetable.save();

      res.json(timetable);
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/timetables/:id
// @description  update activities in database
// @access  Private
router.put("/:id", (req, res) => {
  res.send("update activities");
});

// @route  DELETE api/timetables/:id
// @description  delete activity from database
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("delete activities");
});

module.exports = router;
