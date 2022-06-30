const express = require('express')
const {
  createNumber, 
  getNumbers,
  getNumber,
  deleteNumber,
  updateNumber
} = require('../controllers/numberController')


const router = express.Router()

// GET all numbers
router.get('/', getNumbers)

// GET a single number
router.get('/:id', getNumber)

// POST a new number
router.post('/', createNumber)

// DELETE a number
router.delete('/:id',deleteNumber)

// UPDATE a number
router.patch('/:id', updateNumber)

module.exports = router