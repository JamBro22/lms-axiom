const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Course = require("../models/Course");

// @route  GET /api/courses
// @description  get all courses
// @access  Public
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().sort({
      date: -1,
    });
    res.json(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  GET /api/courses/created
// @description  get user's created courses
// @access  Private
router.get("/created", auth, async (req, res) => {
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

// @route  POST /api/courses
// @description  create a new course
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("image", "Please add an image").not().isEmpty(),
      check("title", "Please add a title").not().isEmpty(),
      check("description", "Please add a description").not().isEmpty(),
      check("content", "Add some content").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { image, title, description, students, content } = req.body;

      const newCourse = new Course({
        image,
        title,
        description,
        students,
        content,
        user: req.user.id,
      });

      const course = await newCourse.save();

      res.json(course);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  PUT /api/course/:id
// @description  update a course
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { image, title, description, students, content } = req.body;

  const courseFields = {};
  if (image) courseFields.image = image;
  if (title) courseFields.title = title;
  if (description) courseFields.description = description;
  if (students) courseFields.students = students;
  if (content) courseFields.content = content;

  try {
    let course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ msg: "Course not found" });

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

// @route  DELETE  /api/courses/:id
// @description  delete a course
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ msg: "Course not found" });

    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Course.findByIdAndRemove(req.params.id);

    res.json({ msg: "Course deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
