const {Detail, validate} = require('../models/detail');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const detail = new Detail({ 
    idNumber: req.body.idNumber,
    firstName: req.body.firstName,
    surname: req.body.surname 
    });
    await detail.save();
    
    res.send(detail);
  });

  module.exports = router;