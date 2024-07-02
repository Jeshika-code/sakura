// contactModel.js

const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  country: String,
  destination: String,
  message: String
});

module.exports = mongoose.model('Contact', ContactSchema, 'contactForm'); // 'contactForm' is the name of the collection (folder) within the 'sakura' database



