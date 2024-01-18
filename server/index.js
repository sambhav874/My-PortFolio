const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { mongo } = require('./config/database');
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 4007;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://sambhavjain874:Sambhav%40874@cluster0.xj5vw0s.mongodb.net/' , {useNewUrlParser: true , useUnifiedTopology : true})
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log( "MongoDB connection error : " ,err);
})

const connection = mongoose.connection;

connection.once('open' , ()=>{
    console.log("MongoDB connection established succesfully.");
})

const projectRoutes = require('./routes/project');
const contactRoutes = require('./routes/contact');
app.use('/project',projectRoutes);
app.use('/contact', contactRoutes);


app.listen(PORT , () => {
    
    console.log(`Server is running on http://localhost:${PORT}`);
    
});



