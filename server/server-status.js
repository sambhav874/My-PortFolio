const projectRoutes = require('./routes/project');
const contactRoutes = require('./routes/contact');
const { sendFeedbackReply } = require('./email.sender'); // Import the email-sender logic

function setupServer(app) {
  app.use('/api/projects', projectRoutes);
  app.use('/contact', contactRoutes);
}

module.exports = { setupServer };