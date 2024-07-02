// // contactRoutes.js

// const express = require('express');
// const Contact = require('../models/contact');

// const router = express.Router();

// router.post('/contact', async (req, res) => {
//   try {
//     const contact = new Contact(req.body);
//     await contact.save();
//     res.status(201).json({ message: 'Contact saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;



// routes/contactRoutes.js

// contactRoutes.js


const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

// POST route to save contact form data
router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


