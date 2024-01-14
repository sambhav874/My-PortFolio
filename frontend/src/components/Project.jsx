// client/src/components/Projects.js
import React from 'react';

const Projects = () => {
  // Define an array of projects
  const projectsList = [
    {
      id: 1,
      title: 'Java Data Structures and Algorithms',
      description: `Passionate about building scalable and high-performance software systems, I have demonstrated expertise in Java programming, data structures, and algorithm design. Experienced in solving complex problems efficiently, I have implemented essential data structures and algorithms in Java. Through the use of linked lists, stacks, queues, trees, graphs, and hash tables, I have developed robust solutions. My focus on performance optimization has involved leveraging memoization and efficient data structures. I have thoroughly tested and documented the solutions. Open to collaborations and discussions on applying data structures and algorithms to solve challenging problems.`,
    },
    {
      id: 2,
      title: 'Java Electronic Trading Matching Engine',
      description: `At the heart of our trading platform lies a sophisticated Java-based stock matching engine, a culmination of numerous interactions and collaborative meetings. Orchestrating seamless trade execution, this engine interacts within the financial landscape using the renowned FIX protocol, ensuring transaction integrity and reliability. FIX (Financial Information eXchange) protocol, the industry-standard messaging framework, facilitates real-time communication among market participants. Operating in a multithreaded environment, this engine employs parallel processing for efficient trade execution. It concurrently processes multiple incoming orders, ensuring rapid and precise trade matching while maintaining trading process consistency. Notably, I contributed to this project, which was led by my cousin. Our collective efforts fine-tuned matching algorithms, aligning them with market standards. This collaborative endeavor underscores our dedication to offering traders a dependable, high-performance platform for accurate trade execution.`,
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-black p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div>
        {projectsList.map((project) => (
          <div key={project.id} className="mb-4">
            <h3 className=" text-3xl text-white font-bold ">{project.title}</h3>
            <p className="text-white font-thin">{project.description}</p>
            {/* Add more project details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
