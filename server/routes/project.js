// server/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { createProject, getProjects } = require('../controllers/projectsController');

// Get all projects
router.get('/', getProjects); // Changed the route to '/projects'

// Create a new project
router.post('/', createProject); // Changed the route to '/projects'

module.exports = router;
