const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  link: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;