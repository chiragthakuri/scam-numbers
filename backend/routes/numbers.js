const express = require('express')

const router = express.Router()

// GET all numbers
router.get('/', (req, res) => {
  res.json({mssg: 'GET all numbers'})
})

// GET a single number
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single number'})
})

// POST a new number
router.post('/', (req, res) => {
  res.json({mssg: 'POST a new number'})
})

// DELETE a number
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a number'})
})

// UPDATE a number
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a number'})
})

module.exports = router