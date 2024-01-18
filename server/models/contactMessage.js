const mongoose = require('mongoose')

const contactMessageSchema  = new mongoose.Schema({
    name :
    {
        type: String , required : true,
    },
    email:{
        type: String , required: true,
    }
    , feedback:{
        type:String , required : true ,
    }, 
    createdAt:{
        type: Date , default: Date.now(),
    }
})

const Contact = mongoose.model('contactMessage' , contactMessageSchema);

module.exports = Contact;