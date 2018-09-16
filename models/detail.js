const Joi = require('joi');
const mongoose = require('mongoose');

const Detail = mongoose.model('Detail', new mongoose.Schema({
 idNumber: {
    type: String,
    required: true,
    minlength: 13,
    maxlength: 13
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  surname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  }
}));

function validateDetail(detail) {
    const schema = {
        idNumber: Joi.string().min(2).max(255).required(),
        firstName: Joi.string().min(2).max(255).required(),
        surname: Joi.string().min(2).max(255).required(),
     
    };
  
    return Joi.validate(detail, schema);
  }

exports.Detail = Detail; 
exports.validate = validateDetail;