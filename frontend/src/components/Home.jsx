import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCode, FaSwimmingPool, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } },
  };

  const infoData = [
    { icon: <FaUniversity className="text-2xl mr-2" />, text: 'Pursuing B.Sc. in Computer Science (Honours) at Aryabhatta College, University of Delhi' },
    { icon: <FaCode className="text-2xl mr-2" />, text: 'Passionate about coding, exploring new technologies, and working with Python and Java' },
    { icon: <FaSwimmingPool className="text-2xl mr-2" />, text: 'Enjoys swimming in free time and contributing to various projects on GitHub' },
    { icon: <FaGithub className="text-2xl mr-2" />, text: 'Check out my GitHub profile to see some of my coding adventures' },
  ];

  return (
    <>
      <h2 className="text-4xl font-extrabold mb-4 text-white">
        Welcome to My Portfolio
      </h2>

      <motion.p variants={textVariants} className="mb-4 text-lg leading-6 text-white">
        As an ambitious university student, I am pursuing a Bachelor of Science in Computer Science (Honours) at Aryabhatta College, University of Delhi.
      </motion.p>

      {/* Additional Information with Icons */}
      <div className="space-y-4">
        {infoData.map((item, index) => (
          <motion.div
            key={index}
            variants={textVariants}
            className="flex items-center text-white"
          >
            {item.icon}
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Personal Traits */}
      <motion.p variants={textVariants} className="text-lg leading-6 mb-8 text-white">
        I am an incredibly focused and goal-oriented individual who never gives up. I thrive on challenges and remain determined until I achieve my objectives. While I am passionate about learning and exploring new technologies, I also value the importance of taking time to enjoy my own peace and engage in quiet contemplation.
      </motion.p>

      {/* Links to Other Pages */}
      <div className="flex justify-between">
        <Link to="/projects" className="text-yellow-300 hover:underline">Explore My Projects</Link>
        <Link to="/skills" className="text-yellow-300 hover:underline">Discover My Skills</Link>
      </div>
    </>
  );
};

export default Home;
