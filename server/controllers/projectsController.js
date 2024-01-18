
const Project = require('../models/Project');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Project Controller Error' });
  }
};

const createProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newProject = new Project({ title, description, link });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Project Controller Error' });
  }
};

module.exports = { getProjects, createProject };
