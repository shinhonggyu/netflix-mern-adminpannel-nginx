const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successfull'.cyan.bold))
  .catch((error) => console.log(error));

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(8800, () => {
  console.log('Backend server is running'.green.bold);
});
