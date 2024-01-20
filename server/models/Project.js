const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, default: '' }, 
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
