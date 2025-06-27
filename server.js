const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Blog API running on http://localhost:${PORT}`)
    );
  })
  .catch(err => console.error('DB connection error:', err.message));