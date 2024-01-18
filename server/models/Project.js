const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: {},
  title: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  link: String,
});


const Project = mongoose.model('Project' , projectSchema)

module.exports = Project;