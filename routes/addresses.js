const {Address, validate} = require('../models/address'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const address = await Address.find().sort('city');
  res.send(address);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let address = new Address({ 
      street: req.body.street,
      surburb: req.body.surburb,
      city: req.body.city,
      province: req.body.province
    });
    address = await address.save();
    
    res.send(address);
  });

  module.exports = router; 

