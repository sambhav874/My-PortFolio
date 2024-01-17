import React, { useEffect, useState } from 'react';
import headerImg from './resources/header.png';
import './styles.css'; // Import the CSS file
import 'tailwindcss/tailwind.css'; // Import 
import Resume from './resources/Resume-Sambhav-Jain.pdf'

function randomText() {
  const options = ['Web Developer', 'Data Analyst'];
  return options[Math.floor(Math.random() * options.length)];
}

function Header() {
  const [text, setText] = useState('');

  useEffect(() => {
    // Set initial text
    setText(randomText());
  }, []);

  // useEffect to update text during the animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setText(randomText());
    }, 3000); // Set the interval duration to match the typing animation duration
    return () => clearInterval(interval);
  }, []);


  return (
    <header className="container max-w-full h-screen flex overflow-hidden relative text-center">
      <div className="content flex-1 p-6 text-center relative font-thin z-10">
        <h4>HERE'S A QUICK INTRO</h4>
        <h1 className="relative">Hi, I'm <span>Sambhav</span>,</h1>
        <h2 className="typeWrite  text-5xl md:text-3xl font-bold text-white mb-4">{text}</h2>
        <p className="font-thin relative">
          Hi there, thanks for checking this website. Please provide me your valuable feedback.
        </p>
        <a className="btn font-thin" href={Resume} download="Resume-Sambhav-Jain.pdf">
          Download Resume
        </a>
      </div>
      <div className="image w-min flex-1 md:flex hidden">
        <img className="object-cover" src={headerImg} alt="img" />
      </div>
    </header>
  );
}

export default Header;
