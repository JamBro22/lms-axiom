const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Contact = require("../models/Contact");

// @route  POST api/contact
// @description  allow users to send message
// @access  Public
router.post(
  "/",
  [
    check("email", "add an email").isEmail,
    check("message", "add a message").not().isEmpty,
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, message } = req.body;

      const newContact = new Contact({
        email,
        message,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
