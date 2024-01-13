import React from 'react';
import {
  FaCode,
  FaJava,
  FaPython,
  FaHackerNewsSquare,
  FaCss3Alt,
  FaCodeBranch,
  FaDatabase,
  FaCodepen,
  FaGit,
  FaGithub,
  FaLinux,
  FaBrain,
  FaMicrosoft,
  FaNodeJs,
  FaServer,
} from 'react-icons/fa';


const SkillSphere = ({ icon, skillName }) => {
  const sphereRef = React.useRef(null);

  const handleMouseEnter = () => {
    sphereRef.current.style.opacity = '1';
    sphereRef.current.style.border = '5px groove white'; // Lime border on hover
    sphereRef.current.style.animation = 'blink 5s infinite';
  };

  const handleMouseLeave = () => {
    sphereRef.current.style.opacity = '0.5';
    sphereRef.current.style.border = 'none'; // Remove border on mouse leave
    sphereRef.current.style.animation = 'none'; // Stop animation
  };

  return (
    <div
      className="flex items-center justify-center text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={sphereRef}
        className="relative w-40 h-40 m-4 rounded-full overflow-hidden lime" // Lime background
        style={{ opacity: '0.5' }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-3xl mt-2 text-white text-bold text-center">{skillName}</p>
    </div>
  );
};

const Skills2 = () => {
  const skillsList = [
    { name: 'C++', icon: <FaCode className="text-4xl m-2" /> },
    { name: 'Java', icon: <FaJava className="text-4xl m-2" /> },
    { name: 'Python', icon: <FaPython className="text-4xl m-2" /> },
    { name: 'Trading', icon: <FaHackerNewsSquare className="text-4xl m-2" /> },
    { name: 'Algorithms', icon: <FaCode className="text-4xl m-2" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl m-2" /> },
    { name: 'Coding', icon: <FaCode className="text-4xl m-2" /> },
    { name: 'Data Analysis', icon: <FaDatabase className="text-4xl m-2" /> },
    { name: 'Data Structures', icon: <FaCode className="text-4xl m-2" /> },
    { name: 'Ethical Hacking', icon: <FaCodepen className="text-4xl m-2" /> },
    { name: 'Front-End Development', icon: <FaCodeBranch className="text-4xl m-2" /> },
    { name: 'Git', icon: <FaGit className="text-4xl m-2" /> },
    { name: 'GitHub', icon: <FaGithub className="text-4xl m-2" /> },
    { name: 'Linux', icon: <FaLinux className="text-4xl m-2" /> },
    { name: 'Machine Learning', icon: <FaBrain className="text-4xl m-2" /> },
    { name: 'Microsoft Azure', icon: <FaMicrosoft className="text-4xl m-2" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl m-2" /> },
    { name: 'Operating Systems', icon: <FaServer className="text-4xl m-2" /> },
  ];

  return (
    <div className="  p-8 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
      <div className="container grid grid-cols-3 m-auto gap-3">
        {skillsList.map((skill, index) => (
          <div key={index}>
            <SkillSphere icon={skill.icon} />
            <p className="text-3xl mt-2 text-white text-bold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills2;