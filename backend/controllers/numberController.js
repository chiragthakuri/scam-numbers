const Number = require('../models/numberModel');
const validateMongooseId = require('../middleware/validateMongooseId ');

// GET all numbers
const getNumbers = async (req, res) => {
  const numbers = await Number.find().sort({ createdAt: -1 });
  res.status(200).json(numbers);
};

// GET a single number
const getNumber = async (req, res) => {
  const { id } = req.params;
  const number = await Number.findById(id);

  if (!number) {
    return res.status(400).json({ error: 'No such number exists' });
  }
  res.status(200).json(number);
};

// POST a new number
const createNumber = async (req, res) => {
  const { phone_number, description, country_of_origin, displayFlag } =
    req.body;

  // let emptyFields = [];

  // if (!phone_number) {
  //   emptyFields.push('phone_number');
  // }

  // if (!description) {
  //   emptyFields.push('description');
  // }

  // if (!country_of_origin) {
  //   emptyFields.push('country_of_origin');
  // }

  // if (emptyFields.length > 0) {
  //   return res
  //     .status(400)
  //     .json({ error: 'Please Fill in all fields' }, emptyFields);
  // }

  //add doc to db
  try {
    const number = await Number.create({
      phone_number,
      description,
      country_of_origin,
      displayFlag,
    });
    res.status(200).json(number);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a number

const deleteNumber = async (req, res) => {
  const { id } = req.params;

  const number = await Number.findOneAndDelete({ _id: id });

  if (!number) {
    return res.status(400).json({ error: 'no such number exists' });
  }

  return res.status(200).json(number);
};

// UPDATE a number
const updateNumber = async (req, res) => {
  const { id } = req.params;

  const number = await Number.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!number) {
    return res.status(400).json({ error: 'no such number exists' });
  }

  return res.status(200).json(number);
};

module.exports = {
  createNumber,
  getNumbers,
  getNumber,
  deleteNumber,
  updateNumber,
};
