// client/src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';


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
  // Define an array of projects
  const projectsList = [
    {
      id: 1,
      title: 'Java Data Structures and Algorithms',
      description: `Passionate about building scalable and high-performance software systems, I have demonstrated expertise in Java programming, data structures, and algorithm design. Experienced in solving complex problems efficiently, I have implemented essential data structures and algorithms in Java. Through the use of linked lists, stacks, queues, trees, graphs, and hash tables, I have developed robust solutions. My focus on performance optimization has involved leveraging memoization and efficient data structures. I have thoroughly tested and documented the solutions. Open to collaborations and discussions on applying data structures and algorithms to solve challenging problems.`,
      
      // Add a link if available
      link: 'https://github.com/sambhav874/JavaDataStructuresAndAlgoS',
    },{id:2,
    title:'Simple Stock Predicting Model',
    description:"The basic stock predicting web app, developed in Python, employs the Facebook forecasting model, fbprophet, and is showcased through the Streamlit framework. This user-friendly application allows users to input historical stock price data, customize forecasting parameters, and visualize predicted stock prices dynamically. Leveraging Streamlit's simplicity, the web app offers an intuitive interface with interactive graphs illustrating historical and forecasted stock prices. Users can explore various scenarios, gaining insights into trends and seasonal patterns predicted by the fbprophet model. The deployment of this educational tool is straightforward, making it accessible to a broad audience interested in time series forecasting and stock price prediction.", link:'https://github.com/sambhav874/SimpleStockPredictingModel'},
    {
      id: 3,
      title: 'Java Electronic Trading Matching Engine',
      description: `At the heart of our trading platform lies a sophisticated Java-based stock matching engine, a culmination of numerous interactions and collaborative meetings. Orchestrating seamless trade execution, this engine interacts within the financial landscape using the renowned FIX protocol, ensuring transaction integrity and reliability. FIX (Financial Information eXchange) protocol, the industry-standard messaging framework, facilitates real-time communication among market participants. Operating in a multithreaded environment, this engine employs parallel processing for efficient trade execution. It concurrently processes multiple incoming orders, ensuring rapid and precise trade matching while maintaining trading process consistency. Notably, I contributed to this project, which was led by my cousin. Our collective efforts fine-tuned matching algorithms, aligning them with market standards. This collaborative endeavor underscores our dedication to offering traders a dependable, high-performance platform for accurate trade execution.`,
      // Add an image URL if available
      
      // Add a link if available
      link: 'https://github.com/sambhav874/ElectronicTrading',
    },
    {
      id: 3,
      title: 'Flipkart Front End Clone',
      description: `The design and layout of the Flipkart clone should mirror the original platform's aesthetics, ensuring a seamless and intuitive shopping experience for users. Attention to detail in terms of product listings, navigation, and interactive elements is paramount. Implementing responsive design principles ensures a consistent and visually appealing display across various devices.`,
      // Add an image URL if available
      
      // Add a link if available
      link: 'https://github.com/sambhav874/Flipkart_CloneHP',
    },
    {
      id: 3,
      title: 'Spotify Front End Clone',
      description: `Creating a front-end Spotify clone is an exciting project focused on replicating the engaging and user-friendly interface of the renowned music streaming platform. This endeavor involves leveraging front-end technologies to design and implement features that mimic the core functionalities of Spotify.`,
      // Add an image URL if available
      
      // Add a link if available
      link: 'https://github.com/sambhav874/Spotify-Clone',
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-8 rounded shadow-md mb-12">
      <h2 className="text-6xl font-extrabold text-white mb-12">Projects</h2>
      <div>
        {projectsList.map((project) => (
          <ProjectCard project={project} /> 
        ))}
      </div>
    </div>
  );
};

export default Projects;
