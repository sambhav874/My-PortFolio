import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCode, FaSwimmingPool, FaGithub } from 'react-icons/fa';
import Helmet from 'react-helmet';


function MyComponent() {
  return (
    <div>

      
<Helmet>

        
<link

          
rel="preconnect"
 
href="https://fonts.googleapis.com"
        />

        
<link

          
rel="preconnect"
 
href="https://fonts.gstatic.com"
 
crossorigin
        />

        
<link

          
href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"

          
rel="stylesheet"
        />

      
</Helmet>
      {/* Rest of your component's content */}
    </div>
  );
}

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } },
  };

  const infoData = [
    { icon: <FaUniversity className="text-4xl mb-2" />, text: 'Pursuing B.Sc. in Computer Science (Honours) at Aryabhatta College, University of Delhi' },
    { icon: <FaCode className="text-4xl mb-2" />, text: 'Passionate about coding, exploring new technologies, and working with Python and Java' },
    { icon: <FaSwimmingPool className="text-4xl mb-2" />, text: 'Enjoys swimming in free time and contributing to various projects on GitHub' },
    { icon: <FaGithub className="text-4xl mb-2" />, text: 'Check out my GitHub profile to see some of my coding adventures' },
  ];

  return (
    <>
      <h2  className="text-4xl  mb-8 text-white font-thin">
        About Me
      </h2>

      {/* Cards for the First 3 Objects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-16 mx-4">
  {infoData.slice(0, 3).map((item, index) => (
    <motion.div
      key={index}
      
      className="flex flex-col my-6 space-y-2 mx-8 md:space-y-0 md:space-x-8 md:flex-row md:my-0 bg-white rounded-xl text-black hover:bg-black font-thin duration-1000 hover:scale-105 hover:bg-animate-pulse shadow-black shadow-2xl"
    >
      <div className="py-6 mx-1 my-1 rounded-t-xl bg-black">
        <div className="flex justify-center">
          <div className="flex flex-col space-y-2 items-center uppercase">
            {React.cloneElement(item.icon, { className: 'text-6xl text-white mb-2' })}
          </div>
        </div>
        <div className="border-t border-slate-700 mx-2 my-4"></div>
        <div className="p-2 mx-3 mb-3 rounded-b-xl">
          <div className="text-center font-bold text-2xl ">
            <div  className="text-center font-thin text-white leading-8 tracking-wider">
              {item.text}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>


      {/* Remaining Information */}
      

      {/* Personal Traits */}
      <motion.p  className="text-lg leading-6 my-20 mx-8 font-thin text-white">
        I am an incredibly focused and goal-oriented individual who never gives up. I thrive on challenges and remain determined until I achieve my objectives. While I am passionate about learning and exploring new technologies, I also value the importance of taking time to enjoy my own peace and engage in quiet contemplation.
      </motion.p>
    </>
  );
};

export default Home;
