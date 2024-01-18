// client/src/components/Contact.js
import React,{useState} from 'react';
import { motion } from 'framer-motion';
import contactApi from '../api/contactApi'


const Contact = () => {
  
  const [user, setUser] = useState({ name: '', email: '', feedback: '' });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use the frontend API to submit feedback
      const response = await contactApi.submitFeedback(user);

      // Display success message
      alert(response.message);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Display error message
      alert(`Error submitting feedback. Please try again.   ${error}`);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const generateRandomDots = () => {
    const dotCount = Math.floor(Math.random() * 10) + 5; // Random number of dots between 5 and 15
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5, // Random size between 5 and 15
      });
    }
    return dots;
  };

  const dots = generateRandomDots();

  const objectVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 0.5,
      x: (index) => dots[index].x,
      y: (index) => dots[index].y,
      transition: { duration: 2, ease: 'linear', loop: Infinity },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative bg-gradient-to-r bg-slate-800 p-8 rounded-lg shadow-md text-white m-6 bg-opacity-50"
    >
      {/* Animated Dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial="hidden"
          animate="visible"
          variants={objectVariants}
          custom={dot.id}
          className="absolute w-[5px] h-[5px] bg-yellow-500 rounded-full"
        ></motion.div>
      ))}

      <h2 className="text-4xl font-extrabold mb-8">Get in Touch</h2>
      <p className="mb-8 text-lg leading-6">
        Have a question or want to collaborate? Feel free to reach out!
      </p>

      {/* Feedback Form */}
      <form
        onSubmit={handleFeedbackSubmit}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="mb-8 " 
        method='POST'
      >
        <label htmlFor="name" className="block text-xl font-thin mb-2 text-left">
    Name:
  </label>
  <input
    type="text"
    id="name"
    name="name"  // Make sure the name attribute is set
    className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
    placeholder="Your Name"
    onChange={handleInputs}
  />

  <label htmlFor="email" className="block text-xl font-thin mt-4 mb-2 text-left">
    Email:
  </label>
  <input
    type="email"
    id="email"
    name="email"  // Make sure the name attribute is set
    className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
    placeholder="Your Email"
    onChange={handleInputs}
  />

  <label htmlFor="feedback" className="block text-xl font-thin mt-4 mb-2 text-left">
    Query:
  </label>
  <textarea
    id="feedback"
    name="feedback"  // Make sure the name attribute is set
    rows="4"
    className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
    placeholder="Type your feedback here..."
    onChange={handleInputs}
  ></textarea>

<button
  type="submit"
  whileHover={{ scale: 1.05 }}
  onClick={(event) => handleFeedbackSubmit(event)}  // Pass the event object
  className="mt-4 px-8 py-3 bg-yellow-500 text-gray-900 rounded-md focus:outline-none hover:bg-yellow-600 transform transition-transform"
>
  Send
</button>

      </form>

      {/* Email Link */}
      <div className="mb-8">
        <p className="text-sm font-medium mb-2">Email me at:</p>
        <a href="mailto:sambhavjain874@gmail.com" className="text-yellow-300 text-lg font-semibold">
          sambhavjain874@gmail.com
        </a>
      </div>

      {/* Social Media Links */}
      <div>
        <p className="text-sm font-medium mb-2">Connect with me:</p>
        <ul className="flex space-x-6 justify-center ">
          <li>
            <a href="https://www.linkedin.com/in/sambhavjain19/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 text-lg font-semibold hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/sambhav874" target="_blank" rel="noopener noreferrer" className="text-yellow-300 text-lg font-semibold hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/smbhvv_/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 text-lg font-semibold hover:underline">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Contact;
