const express = require("express");
const {
  createNumber,
  getNumbers,
  getNumber,
  deleteNumber,
  updateNumber,
} = require("../controllers/numberController");
const validateMongooseId  = require("../middleware/validateMongooseId ");

const router = express.Router();

// GET all numbers
router.get("/", getNumbers);

// GET a single number
router.get("/:id", validateMongooseId , getNumber);

// POST a new number
router.post("/", createNumber);

// DELETE a number
router.delete("/:id", validateMongooseId , deleteNumber);

// UPDATE a number
router.patch("/:id", validateMongooseId , updateNumber);

module.exports = router;
