// src/index.js

const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api', referralRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
