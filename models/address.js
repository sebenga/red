const Joi = require('joi');
const mongoose = require('mongoose');

const Address = mongoose.model('Address', new mongoose.Schema({
    
     street:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
      },
      surburb:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
      },
      city:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
      },
      province:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
      } 

}));

function validateAddress(address) {
    const schema = {
      street: Joi.string().min(2).max(255).required(),
      surburb: Joi.string().min(2).max(255).required(),
      city: Joi.string().min(2).max(255).required(),
      province: Joi.string().min(2).max(255).required()
     
    };
  
    return Joi.validate(address, schema);
  }

exports.Address = Address; 
exports.validate = validateAddress;