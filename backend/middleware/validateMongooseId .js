const mongoose = require("mongoose");

const validateMongooseId  = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Bad Request");
  }
  next();
};

module.exports = validateMongooseId ;
