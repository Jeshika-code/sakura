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
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds (adjust as needed)
    socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
  });

app.use(bodyParser.json());

// Routes
app.use('/api', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
