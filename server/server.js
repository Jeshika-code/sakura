// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const cors=require('cors')
const app = express();
app.use(cors())
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sakura', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.use(bodyParser.json());

// Routes
app.use('/api', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
