const Contact = require('../models/contactMessage');

const submitContactForm = async(req , res) => {
    try{
        const {name , email , feedback} = req.body;
        const contactSubmission = new Contact({name , email , feedback});
        
        await contactSubmission.save();

        res.json({message : 'Feedback submitted successfully .'});
    }catch(error){
            console.log(err);
            res.status(500).json({message:'Internal Contact Controller Error.'});
    }
};

module.exports = {
    submitContactForm,
}