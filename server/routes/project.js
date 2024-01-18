// server/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { createProject, getProjects } = require('../controllers/projectsController');

// Get all projects
router.get('/project/get', getProjects);

// Create a new project
router.post('/project/create', createProject);

module.exports = router;
