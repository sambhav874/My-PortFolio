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
        className="relative w-40  h-40 m-0 rounded-full overflow-hidden lime" // Lime background
        style={{ opacity: '0.5' }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-md mt-2 text-white font-thin text-center">{skillName}</p>
    </div>
  );
};

const Skills2 = () => {
  const skillsList = [
    { name: 'C++', icon: <FaCode className="text-4xl m-2 " /> },
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
    <div className="  p-2 rounded shadow-md mt-10 text-center">
      <h2 className="text-3xl font-bold mb-3 text-white">Skills</h2>
      <div className="container grid grid-cols-3  gap-3">
        {skillsList.map((skill, index) => (
          <div key={index}>
            <SkillSphere icon={skill.icon} />
            <p className="text-md mt-2 text-white font-thin text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills2;
