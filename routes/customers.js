const {Customer, validate} = require('../models/customer');
const {Address} = require('../models/address');
const {Detail} = require('../models/detail');
const {ContactInfo} = require('../models/contactInfo');
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    const detail = await Detail.findById(req.body.detailId);
    if (!detail) return res.status(400).send('Invalid genre.');

    const contactInfo = await ContactInfo.findById(req.body.contactInfoId);
    if (!contactInfo) return res.status(400).send('Invalid genre.');

    const address = await Address.findById(req.body.addressId);
    if (!address) return res.status(400).send('Invalid genre.');
  
    const customer = new Customer({ 
    
      detail: {
        _id: detail._id,
        idNumber: detail.idNumber,
        firstName: detail.firstName,
        surname: detail.surname
      },
      contactInfo:{ 
        _id: contactInfo._id,
        email: contactInfo.email,
        phone: contactInfo.phone 
    },
    address:{
        _id: address._id,
        street: address.street,
        surburb: address.surburb,
        city: address.city,
        province: address.province
    }
     
  });
    
    await customer.save();
    
    res.send(customer);
});
module.exports = router;   