// client/src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Implement the logic for handling feedback
    // You can use state or a function to handle the feedback submission
    alert('Feedback submitted!'); // Replace this with your actual logic
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
      className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-md shadow-md text-white"
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
      <motion.form
        onSubmit={handleFeedbackSubmit}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="mb-8"
      >
        <label htmlFor="feedback" className="block text-sm font-medium mb-2">
          Feedback:
        </label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
          placeholder="Type your feedback here..."
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="mt-4 px-8 py-3 bg-yellow-500 text-gray-900 rounded-md focus:outline-none hover:bg-yellow-600 transform transition-transform"
        >
          Send
        </motion.button>
      </motion.form>

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
        <ul className="flex space-x-4">
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
