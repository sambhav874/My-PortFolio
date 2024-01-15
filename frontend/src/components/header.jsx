import React, { useEffect, useState } from 'react';
import headerImg from './resources/header.png';
import './styles.css'; // Import the CSS file
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

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
    
    <header className="container max-w-full h-screen flex overflow-hidden">
      
      <div className="content flex-1 p-6 text-center relative font-thin z-10">
        <h4>HERE'S A QUICK INTRO</h4>
        <h1 className="relative">
          Hi, I'm <span>Sambhav</span>,
          <h2 className="typeWrite text-4xl font-bold">{text}</h2>
        </h1>
        <p className="font-thin">
          Hi there, thanks for checking this website. Please provide me your valuable feedback.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="image flex-1 md:flex hidden">
        <img className=" object-cover" src={headerImg} alt="img" />
      </div>
    </header>
  );
}

export default Header;
