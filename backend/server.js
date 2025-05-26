const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // modern way to parse JSON


app.use(cors());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('DB error:', err));


// Use routes
app.use('/api/posts', postRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});