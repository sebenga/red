const {ContactInfo, validate} = require('../models/contactInfo');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const contactInfo = new ContactInfo({ 
     email: req.body.email,
     phone: req.body.phone 
    });
    await contactInfo.save();
    
    res.send(contactInfo);
  });

  module.exports = router; 
