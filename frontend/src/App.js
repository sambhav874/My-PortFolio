import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from './components/config/particles-config';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const [init, setInit] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  if (init) {
    return (
      <Router>
        <ErrorBoundary>
          <div className="App">
            <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particlesConfig} />

            {/* Navigation Links */}
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                  <Link to="/">Home</Link>
                </li>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                  <Link to="/projects">Projects</Link>
                </li>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                  <Link to="/skills">Skills</Link>
                </li>
                <li style={{ display: 'inline', marginRight: '10px' }}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Navbar */}
            <Navbar isOpen={navbarOpen} toggleNavbar={toggleNavbar} />

            {/* Content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </Router>
    );
  }

  return <></>;
}

export default App;