// client/src/components/Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 // Import default projects

// A reusable component for a single project card
const ProjectCard = ({ project }) => (
  <div key={project.id} className="rounded-lg shadow-md p-4 m-2 hover:bg-slate-800 transition-colors duration-300">
    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
    {/* Add an optional image section */}
    
    <p className="text-white font-thin">{project.description}</p>
    {/* Add a link section */}
    {project.link && (
      <div className="mt-4 text-center">
        <Link to={project.link} className="text-blue-400 hover:underline">
          Lookup
        </Link>
      </div>
    )}
  </div>
);

// The main Projects component
const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://sambhavj.onrender.com/api/projects');
        setProjectsList(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error.response);
      }
    };

    fetchProjects();
  }, []);



  return (
    <div className="p-8 rounded shadow-md mb-12">
      <h2 className="text-6xl font-extrabold text-white mb-12">Projects</h2>
      <div>
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project._id} /> 
        ))}
      </div>
    </div>
  );
};

export default Projects;
