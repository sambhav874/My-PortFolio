const nodemailer = require('nodemailer');
const {feedback}  = require('./controllers/contactController'); 

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.net',
  port: 465,
  secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
})

const sendFeedbackReply = async (email , name , feedback) => {
    const mailOptions = {
        from:process.env.EMAIL_USER,
        to: email ,
        subject: 'Thank you for your query!',
    text: `Dear ${name},\n\nThank you for reaching out with your query. We have received your message and will get back to you as soon as possible.\n\nQuery details:\n${feedback}\n\nBest regards,\nSambhav Jain`
    };

    try{
        await transporter.sendMail(mailOptions);
        console.log(`Reply email sent to ${email}`);
  } catch (error) {
    console.error('Error sending reply email:', error);
  
    }
}

module.exports= {sendFeedbackReply};
