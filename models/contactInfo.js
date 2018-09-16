const Joi = require('joi');
const mongoose = require('mongoose');

const ContactInfo = mongoose.model('ContactInfo', new mongoose.Schema({
     email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
      },
      phone: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
      },    
}));

function validateContactInfo(contactInfo) {
    const schema = {
        email: Joi.string().min(2).max(255).required(),
        phone: Joi.string().min(2).max(255).required(),
     
    };
  
    return Joi.validate(contactInfo, schema);
  }


exports.ContactInfo = ContactInfo; 
exports.validate = validateContactInfo;

