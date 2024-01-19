const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
const { setupServer } = require('./server-status'); // Separate server setup

const app = express();
const PORT = 'https://sambhavj.onrender.com;'

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error : ", err);
  });

setupServer(app); // Pass the app to the setupServer function

app.listen(PORT, () => {
  console.log(`Server is running on https://sambhavj.onrender.com`);
});
