const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { mongo } = require('./config/database');
const { setupServer } = require('./server-status'); // Separate server setup

const app = express();
const PORT = process.env.PORT || 4007;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sambhavjain874:Sambhav%40874@cluster0.xj5vw0s.mongodb.net/', {
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
  console.log(`Server is running on http://localhost:${PORT}`);
});
