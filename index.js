const mongoose = require('mongoose');
const config = require('config');
const express = require('express');
const app = express();
const customers = require('./routes/customers');
const addresses = require('./routes/addresses');
const contactInfos = require('./routes/contactInfos');
const details = require('./routes/details');
const winston = require('winston');

const db = config.get('db');
mongoose.connect(db)
  .then(() => winston.info(`Connected to ${db}...`));

app.use(express.json());
app.use('/api/customers', customers);
app.use('/api/addresses', addresses);
app.use('/api/contactInfos', contactInfos);
app.use('/api/details', details);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));