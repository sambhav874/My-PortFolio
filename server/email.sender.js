const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.forwardemail.net',
  port: 587,
  secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
})

const sendFeedbackReply = async (email , name , query) => {
    const mailOptions = {
        from:process.env.EMAIL_USER,
        to: email ,
        subject: 'Thank you for your query!',
    text: `Dear ${name},\n\nThank you for reaching out with your query. We have received your message and will get back to you as soon as possible.\n\nQuery details:\n${query}\n\nBest regards,\nThe Team`
    };

    try{
        await transporter.sendMail(mailOptions);
        console.log(`Reply email sent to ${email}`);
  } catch (error) {
    console.error('Error sending reply email:', error);
  
    }
}

module.exports= {sendFeedbackReply};
