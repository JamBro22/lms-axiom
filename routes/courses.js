const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Course = require("../models/Course");

// @route  POST api/courses
// @description  create a new course
// @access Private
router.put(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "A description is required").not().isEmpty(),
      check("coursework", "Add courses").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      description,
      creator,
      aboutAuthor,
      numOfStudents,
      reviews,
      coursework,
    } = req.body;

    try {
      const newCourse = new Course({
        title,
        description,
        creator,
        aboutAuthor,
        numOfStudents,
        reviews,
        coursework,
      });

      const course = await newCourse.save();

      res.json(course);
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  GET api/courses
// @description  get created courses
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const courses = await Course.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  PUT api/courses/:id
// @description  updated an existing course
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { title, description, aboutAuthor, coursework } = req.body;

  const courseFields = {};
  if (title) contactFields.title = title;
  if (description) contactFields.description = description;
  if (aboutAuthor) contactFields.aboutAuthor = aboutAuthor;
  if (coursework) contactFields.coursework = coursework;

  try {
    let course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ msg: "Course not found" });

    // make sure user owns course
    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: courseFields,
      },
      {
        new: true,
      }
    );

    res.json(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/classes/:id
// @description  delete an existing course
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ msg: "Course not found" });

    // make sure user owns course
    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Course.findByIdAndRemove(req.params.id);

    res.json({ msg: "Course removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
