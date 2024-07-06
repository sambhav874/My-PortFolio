// client/src/components/Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const defaultProjects = [
  {
    id: 1,
    title: "An Ecommerce Website",
    description: "This e-commerce website project, developed using Next.js, MongoDB, Tailwind CSS, OAuth authentication, React.js, GSAP, and AWS, showcases a modern and responsive online shopping platform. It features secure user registration and login with OAuth (Google), a dynamic product catalog, a persistent shopping cart, and a streamlined checkout process, though no payment gateway is integrated. The site includes an admin dashboard for managing products, orders, and users, and employs GSAP for interactive animations. Deployed on Vercel, the project ensures fast load times and a consistent user experience across devices.",
    link: "https://github.com/sambhav874/UrbanZeal",
  },
  {
    id: 2,
    title: "Java Data Structures and Algorithms",
    description: "Passionate about building scalable and high-performance software systems, I have demonstrated expertise in Java programming, data structures, and algorithm design. Experienced in solving complex problems efficiently, I have implemented essential data structures and algorithms in Java. Through the use of linked lists, stacks, queues, trees, graphs, and hash tables, I have developed robust solutions. My focus on performance optimization has involved leveraging memoization and efficient data structures. I have thoroughly tested and documented the solutions. Open to collaborations and discussions on applying data structures and algorithms to solve challenging problems.",
    link: "https://github.com/sambhav874/JavaDataStructuresAndAlgoS",
  },
  {
    id: 3,
    title: "Portfolio Using MERN",
    description: "This portfolio website project, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), showcases a developer's professional skills, projects, and achievements in a modern and interactive way. The site features a dynamic and responsive design, enabling users to easily navigate through different sections such as About Me, Projects, Skills, and Contact. MongoDB serves as the database to store project details and user messages, while Express.js and Node.js provide a robust backend to handle API requests and server-side operations. React.js ensures a smooth and engaging user interface, enhancing the overall user experience. The site is designed to be easily maintainable and scalable, reflecting the developer's proficiency in full-stack web development.",
    link: "https://sambhavj874.netlify.app/",
  },
  {
    id: 4,
    title: "Simple Stock Predicting Model",
    description: "The basic stock predicting web app, developed in Python, employs the Facebook forecasting model, fbprophet, and is showcased through the Streamlit framework. This user-friendly application allows users to input historical stock price data, customize forecasting parameters, and visualize predicted stock prices dynamically. Leveraging Streamlit's simplicity, the web app offers an intuitive interface with interactive graphs illustrating historical and forecasted stock prices. Users can explore various scenarios, gaining insights into trends and seasonal patterns predicted by the fbprophet model. The deployment of this educational tool is straightforward, making it accessible to a broad audience interested in time series forecasting and stock price prediction.",
    link: "https://github.com/sambhav874/SimpleStockPredictingModel",
  },
  {
    id: 5,
    title: "Java Electronic Trading Matching Engine",
    description: "At the heart of our trading platform lies a sophisticated Java-based stock matching engine, a culmination of numerous interactions and collaborative meetings. Orchestrating seamless trade execution, this engine interacts within the financial landscape using the renowned FIX protocol, ensuring transaction integrity and reliability. FIX (Financial Information eXchange) protocol, the industry-standard messaging framework, facilitates real-time communication among market participants. Operating in a multithreaded environment, this engine employs parallel processing for efficient trade execution. It concurrently processes multiple incoming orders, ensuring rapid and precise trade matching while maintaining trading process consistency. Notably, I contributed to this project, which was led by my cousin. Our collective efforts fine-tuned matching algorithms, aligning them with market standards. This collaborative endeavor underscores our dedication to offering traders a dependable, high-performance platform for accurate trade execution.",
    link: "https://github.com/sambhav874/ElectronicTrading",
  },
  {
    id: 6,
    title: "Flipkart Front End Clone",
    description: "The design and layout of the Flipkart clone should mirror the original platform's aesthetics, ensuring a seamless and intuitive shopping experience for users. Attention to detail in terms of product listings, navigation, and interactive elements is paramount. Implementing responsive design principles ensures a consistent and visually appealing display across various devices.",
    link: "https://github.com/sambhav874/Flipkart_CloneHP",
  },
  {
    id: 7,
    title: "Spotify Front End Clone",
    description: "Creating a front-end Spotify clone is an exciting project focused on replicating the engaging and user-friendly interface of the renowned music streaming platform. This endeavor involves leveraging front-end technologies to design and implement features that mimic the core functionalities of Spotify.",
    link: "https://github.com/sambhav874/Spotify-Clone",
  },
];

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://sambhavj.onrender.com/api/projects');
        setProjectsList(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error.response);
        setProjectsList(defaultProjects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();

    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setProjectsList(defaultProjects);
        setIsLoading(false);
      }
    }, 5000); // Fallback after 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="p-8 rounded shadow-md mb-12">
      <h2 className="text-6xl font-extrabold text-white mb-12">Projects</h2>
      <div>
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
