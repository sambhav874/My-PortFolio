import React from 'react';

const Portfolio = () => {
  const skills = [
    'C++',
    'Java',
    'Python',
    'Trading',
    'Algorithms',
    'CSS',
    'Coding',
    'Data Analysis',
    'Data Structures',
    'Ethical Hacking',
    'Front-End Development',
    'Git',
    'GitHub',
    'Linux',
    'Machine Learning',
    'Microsoft Azure',
    'MongoDB',
    'Node.js',
    'Operating Systems',
    'SQL',
  ];

  return (
    
    <div className="container items-center text-left mx-4 my-4 mt-10 p-4 bg-opacity-10 text-white bg-black">
      <div className="text-left mb-4 border-b-[1px] pb-4 border-white">
        <h1 className="text-4xl font-bold mb-2 animate__animated animate-fadeInDown ">Sambhav Jain</h1>
        <p className="text-xl mb-2 font-thin">110092</p>
        <p className="text-xl mb-2 font-thin">sambhavjain874@gmail.com</p>
        <p className="text-xl mb-2 font-thin">9873291449</p>
        <p className="text-xl animate__animated animate__fadeInDown font-thin">
          <a
            href="https://linkedin.com/in/sambhavjain19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/sambhavjain19
          </a>
        </p>
      </div>

      <div className="mt-8 animate__animated animate__fadeInLeft font-thin border-b-[1px] pb-4 border-white">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-justify mb-4">
          As an ambitious university student, I am pursuing Bachelor of Science in Computer Science (Honours) at Aryabhatta College, University of Delhi with a passion for coding and exploring new technologies. I am driven to continually expand my knowledge and skills. With experience working in several well-known libraries in both Python and Java, my interests lie in machine learning, data structures, and trading technologies. I am always eager to take on new challenges and grow in these areas. In my free time, I enjoy swimming and coding, and my GitHub profile showcases some of my work.
        </p>

        <p className="text-justify mb-4">
          Along with my proficiency in Python and Java, I am also familiar with CSS, Tailwind CSS, SQL, and C++. As an added advantage, I am also familiar with Git on a basic level, allowing me to effectively collaborate and manage code repositories. Additionally, I recently pursued Ethical Hacking from IIT Kharagpur on the SWAYAM portal that made me enhance my skill set. As a major sector of interest, I find it fascinating to work on trading technologies.
        </p>

        <p className="text-justify mb-4">
          I am an incredibly focused and goal-oriented individual who never gives up. I thrive on challenges and remain determined until I achieve my objectives. While I am passionate about learning and exploring new technologies, I also value the importance of taking time to enjoy my own peace and engage in quiet contemplation.
        </p>
      </div>

      <div className="mt-8 animate__animated animate__fadeInRight border-b-[1px] pb-4 border-white">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <p className="text-xl mb-2 ">University of Delhi</p>
        <p className="text-xl mb-2">Bachelor of Science - BS, Computer Science</p>
        <p className="text-xl mb-4">Nov 2022 – Present</p>
      </div>

      <div className="mt-8 animate__animated animate__fadeInLeft border-b-[1px] pb-4 border-white">
        <h2 className="text-2xl font-bold mb-4">Licenses & Certifications</h2>
        <p className="text-xl mb-2 font-thin">
          Data Analysis using Python - Maitreyi College
          <a href="https://drive.google.com/file/d/12K_ZZrkJvVolqShebClR0k9UY4I7AwA6/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2 font-thin">
            View Certificate
          </a>
        </p>
        <p className="text-xl mb-2 font-thin">
          Python - HackerRank
          <a href="https://drive.google.com/file/d/1-4iaLrkN1AfmuHNPeL2fSxgkV_0zhtMy/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2 font-thin">
            View Certificate
          </a>
        </p>
        <p className="text-xl mb-2 font-thin">
          Intermediate Machine Learning - Kaggle
          <a href="https://drive.google.com/file/d/1-91IdC0Jxlt8FdSw8RPGA85jn347yjPw/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2 font-thin">
            View Certificate
          </a>
        </p>
        <p className="text-xl mb-2 font-thin">
          Java Data Structures & Algorithms - Infosys Springboard
          <a href="https://drive.google.com/file/d/1mLCT0pBw4Aw0rcS4QLfvYvfuKh6XAbgx/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2 font-thin">
            View Certificate
          </a>
        </p>
      </div>

      <div className="mt-8 animate__animated animate__fadeInUp">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className=" grid grid-cols-4 mx-auto font-thin mb-4">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
