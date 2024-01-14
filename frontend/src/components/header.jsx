import React, { useEffect, useRef, useState } from 'react';
import headerImg from './resources/header.png';
import './styles.css'; // Import the CSS file

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

  // useEffect to update text during animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setText(randomText());
    }, 3000); // Set the interval duration to match the typing animation duration
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="container max-w-full">
      <div className="blurred-bg"></div>
      <div className="content">
        <span className="blur" />
        <span className="blur" />
        <h4>CREATE YOUR SITE LIKE A PRO</h4>
        <h1>
          Hi, I'm <span>Sambhav</span>,
          <h2 className="typeWrite font-bold">{text}</h2>
        </h1>
        <p className="font-thin">
          Hi there, thanks for checking this website. Please provide me your valuable feedback.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="image md:overflow-hidden">
        <img src={headerImg} alt="img" />
      </div>
    </header>
  );
}

export default Header;
