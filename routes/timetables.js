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
  } catch (error) {
    console.error(error.message);
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
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT api/timetables/:id
// @description  update activities in database
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { time, day, activity } = req.body;

  const timetableFields = {};
  if (time) timetableFields.time = time;
  if (day) timetableFields.day = day;
  if (activity) timetableFields.activity = activity;

  try {
    let timetable = await Timetable.findById(req.params.id);

    if (!timetable) return res.status(404).json({ msg: "Entry not found" });

    if (timetable.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    timetable = await Timetable.findByIdAndUpdate(
      req.params.id,
      {
        $set: timetableFields,
      },
      {
        new: true,
      }
    );

    res.json(timetable);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/timetables/:id
// @description  delete activity from database
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let timetable = await Timetable.findById(req.params.id);

    if (!timetable) return res.status(404).json({ msg: "Entry not found" });

    if (timetable.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Timetable.findByIdAndRemove(req.params.id);

    res.json({ msg: "Entry deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
