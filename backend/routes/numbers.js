const express = require("express");
const {
  createNumber,
  getNumbers,
  getNumber,
  deleteNumber,
  updateNumber,
} = require("../controllers/numberController");
const isValidMongooseId = require("../middleware/isValidMongooseId");

const router = express.Router();

// GET all numbers
router.get("/", getNumbers);

// GET a single number
router.get("/:id", isValidMongooseId, getNumber);

// POST a new number
router.post("/", createNumber);

// DELETE a number
router.delete("/:id", isValidMongooseId, deleteNumber);

// UPDATE a number
router.patch("/:id", isValidMongooseId, updateNumber);

module.exports = router;
