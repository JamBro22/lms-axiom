const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Review = require("../models/Review");

// @route  GET api/reviews
// @description  get all reviews for a course
// @access  Public
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();

    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/reviews
// @description  add a review to a course
// @access  Public
router.post(
  "/",
  [
    check("title", "Enter a title").not().isEmpty(),
    check("description", "Describe your experience").not().isEmpty(),
    check("stars").isLength({
      min: 1,
      max: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, stars } = req.body;

    try {
      const newReview = new Review({
        title,
        description,
        stars,
      });

      const review = await newReview.save();

      res.json(review);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
