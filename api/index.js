const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successfull'.cyan.bold))
  .catch((error) => console.log(error));

app.listen(8800, () => {
  console.log('Backend server is running'.green.bold);
});
