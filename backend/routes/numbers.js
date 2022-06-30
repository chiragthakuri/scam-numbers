const express = require('express')
const Number = require('../models/numberModel')

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
router.post('/', async (req, res) => {
  const{phone_number,description,country_of_origin, displayFlag} = req.body

  try {
    const number = await Number.create({phone_number,description,country_of_origin, displayFlag})
    res.status(200).json(number)
  } catch (error) {
    res.status(400).json({error: error.message})
  }

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