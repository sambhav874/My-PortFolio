const { sendFeedbackReply } = require('../email.sender');
const Contact = require('../models/contactMessage');

const submitContactForm = async(req , res) => {
    try{
        const {name , email , feedback} = req.body;
        const contactSubmission = new Contact({name , email , feedback});
        
        await contactSubmission.save();
        await sendFeedbackReply(email, name);

        res.json({ message: 'Feedback submitted successfully!' });
    }catch(error){
        console.error('Error submitting feedback:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};

module.exports = {
    submitContactForm,
}