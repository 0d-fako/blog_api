const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api-docs/swagger.json');

const app = express();


app.use(cors());
app.use(express.json());


app.use('/authors', authorRoutes);
app.use('/posts', postRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req, res) => {
  res.send('🎉 Blog API is running. Visit <a href="/api-docs">/api-docs</a> for documentation.');
});


const PORT = process.env.PORT 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✅ Blog API running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
  });