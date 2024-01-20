// server/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { createProject, getProjects } = require('../controllers/projectsController');

// Get all projects
router.get('/projects', getProjects); // Changed the route to '/projects'

// Create a new project
router.post('/projects', createProject); // Changed the route to '/projects'

module.exports = router;
