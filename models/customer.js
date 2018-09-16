const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const {detailSchema} = require('./detail');
const {contactInfoSchema} = require('./contactInfo');
const {addressSchema} = require('./address');

const Customer = mongoose.model('Csustomer', new mongoose.Schema({

detail:{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'detail',  
    required: true
  },
contactInfo:{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'contactInfo',  
    required: true
  },
address:{ 
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'address',  
    required: true
  }
}))

  function validateCustomer(customer) {
    const schema = {
      detailId: Joi.objectId().required(),
      contactInfoId: Joi.objectId().required(),
      addressId: Joi.objectId().required(),
    };
  
    return Joi.validate(customer, schema);
  }
  
  exports.Customer = Customer; 
  exports.validate = validateCustomer;